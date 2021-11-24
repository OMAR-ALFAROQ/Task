<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style1.css">
    <title>Document</title>
</head>
<body>
    <div>
<ul class="topnav">
  <li><a class="active" href="index.php">Home</a></li>
  <li><a href="#news">News</a></li>
  <?php
  if (isset($_SESSION["useruid"])) {
      echo "<li class='right'><a href=''>$_SESSION[useruid]</a></li>";
      echo "<li class='right'><a href='logout.php'>logout</a></li>";

	
  }
  else{
      echo "<li class='right'><a href='signup.php'>signup</a></li>";
      echo "<li class='right'><a href='login.php'>login</a></li>";
  }
  ?>
</ul>
</div>   
</body>
</html>