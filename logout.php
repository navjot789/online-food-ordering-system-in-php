<?php
session_start(); //start session
session_destroy(); // distroy all the current sessions
$url = 'login.php';
header('Location: ' . $url); // redireted to login page

?>