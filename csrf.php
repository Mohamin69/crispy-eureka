<?php
header('Content-Type: application/json');
ini_set('session.use_strict_mode', 1);
session_set_cookie_params(['httponly'=>true,'samesite'=>'Strict']);
session_start();
if(!isset($_SESSION['csrf_token'])){
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
echo json_encode(['csrf'=>$_SESSION['csrf_token']]);
