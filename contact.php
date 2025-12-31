<?php
session_start();
header('Content-Type: application/json; charset=utf-8');

// Basic CSRF check (expects X-CSRF-Token header)
$headers = [];
if(function_exists('getallheaders')) $headers = getallheaders();
$token = null;
if(isset($headers['X-CSRF-Token'])) $token = $headers['X-CSRF-Token'];
if(!$token && isset($_SERVER['HTTP_X_CSRF_TOKEN'])) $token = $_SERVER['HTTP_X_CSRF_TOKEN'];

if(empty($_SESSION['csrf_token']) || !$token || !hash_equals($_SESSION['csrf_token'], $token)){
    http_response_code(400);
    echo json_encode(['success'=>false, 'message'=>'Invalid CSRF token']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if(!is_array($data)){
    http_response_code(400);
    echo json_encode(['success'=>false, 'message'=>'Invalid request']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');

if($name === '' || $email === '' || $message === ''){
    http_response_code(400);
    echo json_encode(['success'=>false, 'message'=>'Name, email and message are required']);
    exit;
}
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    http_response_code(400);
    echo json_encode(['success'=>false, 'message'=>'Invalid email address']);
    exit;
}

$entry = [
    'name'=>$name,
    'email'=>$email,
    'phone'=>$phone,
    'message'=>$message,
    'ip'=> $_SERVER['REMOTE_ADDR'] ?? null,
    'ua'=> $_SERVER['HTTP_USER_AGENT'] ?? null,
    'ts'=> time()
];

$storeFile = __DIR__ . DIRECTORY_SEPARATOR . 'messages.json';
$all = [];
if(file_exists($storeFile)){
    $raw = @file_get_contents($storeFile);
    $decoded = @json_decode($raw, true);
    if(is_array($decoded)) $all = $decoded;
}
$all[] = $entry;

// atomic write
$tmp = $storeFile . '.tmp';
if(false === @file_put_contents($tmp, json_encode($all, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE))){
    http_response_code(500);
    echo json_encode(['success'=>false, 'message'=>'Unable to save message']);
    exit;
}
rename($tmp, $storeFile);

// Attempt to send email notification (best-effort)
$to = 'hamza@example.com';
$subject = 'New contact from ' . $name;
$body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n";
$headers_mail = "From: noreply@localhost\r\nContent-Type: text/plain; charset=utf-8\r\n";
@mail($to, $subject, $body, $headers_mail);

echo json_encode(['success'=>true, 'message'=>'Message received. We will contact you soon.']);
exit;

?>