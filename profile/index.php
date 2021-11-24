<?php 
  include 'header.php';
  require_once 'dbh.inc.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>Create</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style1.css">
</head>
<body>
	<div class="container">
	<h4 class="display-4 text-center"> PHP CRUD</h4><hr><br>
		<form action="php/create.php" 
		      method="post">
            
		   <h4 class="display-4 text-center">Create</h4><hr><br>
		   <?php if (isset($_GET['error'])) { ?>
		   <div class="alert alert-danger" role="alert">
			  <?php echo $_GET['error']; ?>
		    </div>
		   <?php } ?>
		   <div class="form-group">

		     <input type="text" class="form-control" id="fname" name="fname" 
		           value="<?php if(isset($_GET['fname']))
		                           echo($_GET['fname']); ?>" 
		           placeholder="First name">
		   </div>

		   <div class="form-group">
		     
		     <input type="text" 
		           class="form-control" 
		           id="lname" 
		           name="lname" 
		           value="<?php if(isset($_GET['lname']))
		                           echo($_GET['lname']); ?>"
		           placeholder="Last name">
		   </div>
		   <div class="form-group">
		     
		     <input type="text" 
		           class="form-control" 
		           id="loc" 
		           name="loc" 
		           value="<?php if(isset($_GET['loc']))
		                           echo($_GET['loc']); ?>"
		           placeholder="Location:">
		   </div>
		   <button type="submit" 
		          class="btn btn-primary"
		          name="create">Create</button>
		    <a href="read.php" class="link-primary">View</a>
	    </form>
	</div>
</body>
</html>