

<!DOCTYPE html>
<html>
<head>
  <title>Registration system PHP and MySQL</title>
  <link rel="stylesheet" type="text/css" href="style1.css">
</head>
<body>
  <div style="float left;" class="header">
  	<h2>Login</h2>
  </div>
	 
  <form action="login.inc.php" method ="post">
  	<div class="input-group">
  		
  		<input type="text" name="uid" placeholder="Username/Email...">
  	</div>

  	<div class="input-group">
  		<input type="password" name="pwd" placeholder="Password...">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="submit">Login</button>
  	</div>
  	<p>
  		Not yet a member? <a href="signup.php">Sign up</a>
  	</p>
	  <?php
  if (isset($_GET["error"])) {
	if ($_GET["error"] == "emptyinput") {
		echo " Fill in all fields!";
	}
	elseif($_GET["error"] =="wrongLogin"){
		echo "Incorrect login info!";
	}
}
?> 
  </form>


</body>
</html>