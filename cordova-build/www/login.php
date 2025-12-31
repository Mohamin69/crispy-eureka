<?php
header('Content-Type: application/json');
// Improved login with CSRF, lockout and session hardening

ini_set('session.use_strict_mode', 1);
session_set_cookie_params(['httponly'=>true,'samesite'=>'Strict']);
session_start();

$body = json_decode(file_get_contents('php://input'), true);
// CSRF check
$provided = '';
if(isset($_SERVER['HTTP_X_CSRF_TOKEN'])) $provided = $_SERVER['HTTP_X_CSRF_TOKEN'];
if(!$provided || !isset($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $provided)){
    echo json_encode(['success'=>false,'message'=>'Invalid CSRF token']);
    exit;
}

if(!$body || !isset($body['email']) || !isset($body['password'])){
    echo json_encode(['success'=>false,'message'=>'Missing email or password']);
    exit;
}
$email = trim(strtolower($body['email']));
$pass = $body['password'];
$storeFile = __DIR__ . '/users.json';
$users = [];
if(file_exists($storeFile)){
    $data = file_get_contents($storeFile);
    $users = json_decode($data, true) ?? [];
}
if(!isset($users[$email])){
    echo json_encode(['success'=>false,'message'=>'User not found']);
    exit;
}

// check lockout
if(isset($users[$email]['locked_until']) && time() < intval($users[$email]['locked_until'])){
    $wait = intval($users[$email]['locked_until']) - time();
    echo json_encode(['success'=>false,'message'=>'Account locked. Try again in ' . $wait . ' seconds']);
    exit;
}

$hash = $users[$email]['password'];
if(!password_verify($pass, $hash)){
    // increase failed attempts
    $users[$email]['failed_attempts'] = ($users[$email]['failed_attempts'] ?? 0) + 1;
    if($users[$email]['failed_attempts'] >= 5){
        $users[$email]['locked_until'] = time() + 900; // 15 minutes
    }
    file_put_contents($storeFile, json_encode($users, JSON_PRETTY_PRINT), LOCK_EX);
    echo json_encode(['success'=>false,'message'=>'Incorrect password']);
    exit;
}

// successful login: reset counters
$users[$email]['failed_attempts'] = 0;
unset($users[$email]['locked_until']);
file_put_contents($storeFile, json_encode($users, JSON_PRETTY_PRINT), LOCK_EX);

session_regenerate_id(true);
$_SESSION['user'] = $email;
echo json_encode(['success'=>true,'email'=>$email]);
