<?php 

if (isset($_GET['EmpId'])) {
	require_once "dbh.inc.php";

	function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
	}

	$EmpId = validate($_GET['EmpId']);

	$sql = " SELECT * FROM employee WHERE EmpId = $EmpId ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
    	$row = mysqli_fetch_assoc($result);
    }else {
    	header("Location: read.php");
    }


}else if(isset($_POST['update'])){
    require_once "../dbh.inc.php";
    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
	}

	$fname = validate($_POST['fname']);
        $lname = validate($_POST['lname']);
	$loc = validate($_POST['loc']);
	$EmpId = validate($_POST['EmpId']);

	if (empty($fname)) {
		header("Location: ../update.php?id=$EmpId&error=Name is required");
	}else if (empty($lname)) {
		header("Location: ../update.php?id=$EmpId&error=Email is required");
	}
        else if (empty($loc)) {
		header("Location: ../update.php?id=$EmpId&error=Email is required");
	}
        else {

       $sql = "UPDATE employee
               SET EmpFname='$fname', EmpLname='$lname', EmpLoc='$loc'
               WHERE EmpId=$EmpId ";
       $result = mysqli_query($conn, $sql);
       if ($result) {
       	  header("Location: ../read.php?success=successfully updated");
       }else {
          header("Location: ../update.php?EmpId=$EmpId&error=unknown error occurred&$user_data");
       }
	}
}else {
	header("Location: read.php");
}