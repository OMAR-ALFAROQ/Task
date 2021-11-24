<?php  

require_once "dbh.inc.php";

$sql = "SELECT * FROM employee ORDER BY EmpId DESC";
$result = mysqli_query($conn, $sql);