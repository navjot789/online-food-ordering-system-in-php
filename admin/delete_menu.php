<?php
include("../connection/connect.php");
error_reporting(0);
session_start();


// sending query
mysqli_query($db,"DELETE FROM dishes WHERE d_id = '".$_GET['menu_del']."'");
header("location:all_menu.php");  

?>
