<?php
header('Content-Type: application/json');
// Improved file-based registration with CSRF and safer writes (still not for production)

// start session with safer cookie params
ini_set('session.use_strict_mode', 1);
session_set_cookie_params(['httponly'=>true,'samesite'=>'Strict']);
session_start();

// simple request logging for debugging signup issues
$logFile = __DIR__ . '/register.log';
function _rlog($msg){
    global $logFile;
    $line = '['.date('Y-m-d H:i:s').'] ' . $msg . PHP_EOL;
    @file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX);
}
_rlog("Request from " . ($_SERVER['REMOTE_ADDR'] ?? 'n/a') . " UA=" . ($_SERVER['HTTP_USER_AGENT'] ?? 'n/a'));
_rlog('RawBody=' . substr(file_get_contents('php://input'), 0, 2000));

$body = json_decode(file_get_contents('php://input'), true);
// CSRF check
$provided = '';
if(isset($_SERVER['HTTP_X_CSRF_TOKEN'])) $provided = $_SERVER['HTTP_X_CSRF_TOKEN'];
if(!$provided || !isset($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $provided)){
    _rlog('CSRF check failed; provided=' . ($provided?:'<none>') . ' session=' . ($_SESSION['csrf_token'] ?? '<none>'));
    echo json_encode(['success'=>false,'message'=>'Invalid CSRF token']);
    exit;
}

if(!$body || !isset($body['email']) || !isset($body['password'])){
    echo json_encode(['success'=>false,'message'=>'Missing email or password']);
    exit;
}
$email = trim(strtolower($body['email']));
$pass = $body['password'];
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo json_encode(['success'=>false,'message'=>'Invalid email']);
    exit;
}
if(strlen($pass) < 6){
    echo json_encode(['success'=>false,'message'=>'Password must be 6+ characters']);
    exit;
}

$storeFile = __DIR__ . '/users.json';
$users = [];
if(file_exists($storeFile)){
    $data = file_get_contents($storeFile);
    $users = json_decode($data, true) ?? [];
}
if(isset($users[$email])){
    _rlog('Registration failed: email already registered ' . $email);
    echo json_encode(['success'=>false,'message'=>'Email already registered']);
    exit;
}

// store hashed password and write with exclusive lock
$users[$email] = ['password'=>password_hash($pass, PASSWORD_DEFAULT), 'created'=>time(), 'failed_attempts'=>0];
$tmp = sys_get_temp_dir() . '/users.json.' . bin2hex(random_bytes(6));
file_put_contents($tmp, json_encode($users, JSON_PRETTY_PRINT));
if(!rename($tmp, $storeFile)){
    // fallback atomic write
    file_put_contents($storeFile, json_encode($users, JSON_PRETTY_PRINT), LOCK_EX);
}

// regenerate session and set user
session_regenerate_id(true);
$_SESSION['user'] = $email;
_rlog('Registered: ' . $email);
echo json_encode(['success'=>true,'email'=>$email]);
