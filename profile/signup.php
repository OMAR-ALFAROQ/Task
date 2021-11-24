
<!DOCTYPE html>
<html>
<head>
  <title>Registration system PHP and MySQL</title>
  <link rel="stylesheet" type="text/css" href="style1.css">
</head>
<body>
  <div class="header">
  	<h2>Register</h2>
  </div>
	<div>
  <form action="signup.inc.php" method="post">
  	
  	<div class="input-group">
	  <input type="text" name="name" placeholder="Full name">
  	</div>

  	<div class="input-group">
  	  <input type="email" name="email" placeholder="Email">
  	</div>

	<div class="input-group">
	  <input type="text" name="uid" placeholder="User name">
	</div>

  	<div class="input-group">
  	  <input type="password" name="pwd" placeholder="Password">
  	</div>

  	<div class="input-group">
  	  <input type="password" name="pwdrepeat" placeholder="Confirm password">
  	</div>

  	<div class="input-group">
  	  <button class ="btn" type="submit" name="submit">Register</button>
  	</div>

  	<p>
  		Already a member? <a href="login.php">Sign in</a>
  	</p>
 <div id="errorMSG">
  <?php
  if (isset($_GET["error"])) {
	  if ($_GET["error"]== "emptyinput") {
		  echo " Fill in all fields!";
	  }
	  elseif($_GET["error"]=="invaliduid"){
		  echo "Choose a proper username!";
	  }
	  elseif($_GET["error"]=="invalidemail"){
		echo "Choose a proper email!";
	}
	elseif($_GET["error"]=="passwordnotmatch"){
		echo "Password dose not match!";
	}
	elseif($_GET["error"]=="stmtfailed"){
		echo "Something went wrong please try again!";
	}
	elseif($_GET["error"]=="usernametaken"){
		echo "User name already taken!";
	}
	if($_GET["error"]=="none"){
		echo "you have signed up!";
	}
  }
  ?>
  </div>
  </form>
  
  </div>
</body>
</html>