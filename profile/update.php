<?php require_once 'php/update.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<title>Update</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style1.css">
</head>
<body>
	<div class="container">
		<form action="php/update.php" 
		      method="post">
            
		   <h4 class="display-4 text-center">Update</h4><hr><br>
		   <?php if (isset($_GET['error'])) { ?>
		   <div class="alert alert-danger" role="alert">
			  <?php echo $_GET['error']; ?>
		    </div>
		   <?php } ?>
		   <div class="form-group">
		     
		     <input type="text" 
		           class="form-control" 
		           id="fname" 
		           name="fname" 
		           value="<?=$row['EmpFname'] ?>" >
		   </div>

		   <div class="form-group">
		     
		     <input type="text" 
		           class="form-control" 
		           id="lname" 
		           name="lname" 
		           value="<?=$row['EmpLname'] ?>" >
		   </div>

		   <div class="form-group">
		     
		     <input type="text" 
		           class="form-control" 
		           id="loc" 
		           name="loc" 
		           value="<?=$row['EmpLoc'] ?>" >
		   </div>
		   
		   <input type="text" 
		          name="EmpId"
		          value="<?=$row['EmpId']?>"
		          hidden >

		   <button type="submit" 
		           class="btn btn-primary"
		           name="update">Update</button>
		    <a href="read.php" class="link-primary">View</a>
	    </form>
	</div>
</body>
</html>