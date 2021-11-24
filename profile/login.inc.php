<?php
   require_once 'dbh.inc.php';
   include 'errors.php';


if (isset($_POST["submit"])) {

   $username = $_POST["uid"];
   $pwd = $_POST["pwd"];
    
   var_dump(loginUser($conn, $username, $pwd), $pwd, $username);

if (emptyInputLogin($username, $pwd) !== false) {
    header("location:./login.php?error=emptyinput");
    exit();
}
}
else {
    header("location:./login.php");
    exit();
}
