session_start();
unset($_SESSION['user']);
if (session_id()) session_destroy();
echo json_encode(['success'=>true]);
<?php
header('Content-Type: application/json');
ini_set('session.use_strict_mode', 1);
session_set_cookie_params(['httponly'=>true,'samesite'=>'Strict']);
session_start();
// Clear session and cookie
$_SESSION = [];
if (ini_get('session.use_cookies')) {
	$params = session_get_cookie_params();
	setcookie(session_name(), '', time() - 42000,
		$params['path'], $params['domain'], isset($params['secure']) ? $params['secure'] : false, true);
}
session_destroy();
echo json_encode(['success'=>true]);
