<?php
session_start();
session_destroy();
$url = 'index.php';
header('Location: ' . $url);

?>