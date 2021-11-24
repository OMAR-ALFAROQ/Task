
<?php
require_once 'dbh.inc.php';
require_once 'errors.php';

if (isset($_POST["add"])) {

    $Fname=$_POST["fname"];
    $Lname=$_POST["lname"];
    $Loc=$_POST["address"];

    AddUser($conn, $Fname, $Lname, $Loc);
}
else{
    header("location:./index.php");
}

