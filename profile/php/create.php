<?php 

if (isset($_POST['create'])) {
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

	$user_data = 'fname='.$fname. '&lname='.$lname. '&loc='.$loc;

	if (empty($fname)) {
		header("Location: ../index.php?error=Name is required&$user_data");
	}
	else if (empty($lname)) {
		header("Location: ../index.php?error=Email is required&$user_data");
	}
	else if (empty($loc)) {
		header("Location: ../index.php?error=Email is required&$user_data");
	}
	else {

       $sql = "INSERT INTO employee (EmpFname, EmpLname, EmpLoc) 
               VALUES('$fname', '$lname', '$loc')";
       $result = mysqli_query($conn, $sql);
       if ($result) {
       	  header("Location: ../read.php?success=successfully created");
       }else {
          header("Location: ../index.php?error=unknown error occurred&$user_data");
       }
	}

}