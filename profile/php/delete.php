<?php  

if(isset($_GET['EmpId'])){
   require_once "../dbh.inc.php";
    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
	}

	$EmpId = validate($_GET['EmpId']);

	$sql = "DELETE FROM employee
	        WHERE EmpId=$EmpId";
   $result = mysqli_query($conn, $sql);
   if ($result) {
   	  header("Location: ../read.php?success=successfully deleted");
   }else {
      header("Location: ../read.php?error=unknown error occurred&$user_data");
   }

}else {
	header("Location: ../read.php");
}