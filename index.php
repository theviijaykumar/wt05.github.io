<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="inline">
  <ul>
		<li><a href="index.php">Home</a></li>
		<li><a href="contact.html">Contact</a></li>
		<li><a href="registration.php">Registrations</a></li>
	</ul></div>
    <p><h1 class="header">REGISTER HERE</h1></p>
     
    <div class="text">
    <form name="myform" method="POST" action="index.php" onsubmit="return validateForm()">
      Name<BR><input id="n" type="text" name="name"><BR>
      <span id="nam1"></span><BR>
      Password<BR><input id="p" type="password" name="password"><BR>
      <span id="pword"></span><BR>
      Confirm Password<BR><input id="cp" type="password" name="cpassword"><BR>
      <span id="cpword"></span><BR>
      Email<BR><input id="e" type="text" name="email"><BR>
      <span id="mail"></span><BR>
      Mobile Number<BR><input id="mono" type="text" name="mobile"><BR>
      <span id="mn"></span><BR>
      <button id="mybtn" name="Register">Register</button>
      <BR>
        <script src="script.js"></script>
    </form>
    
  </div>
 
  </body>
</html>

<?php

mysql_connect("localhost","root","") or die (mysql_error());
mysql_select_db("registration") or die (mysql_error());

if(isset($_POST['Register']))
{
       $name = $_POST['name'];
      $emailid = $_POST['email'];
     $mon = $_POST['mobile'];
       if($name==''){
             echo"<script>alert('Please enter the Name')</script>";
            exit();
         }
       if($mon==''){
             echo"<script>alert('Please enter the Mobile No.')</script>";
            exit();
         }
       if($emailid==''){
             echo"<script>alert('Please enter the Email ID')</script>";
            exit();
         }
     else{
    $query="insert into registration (name,email,mobileno) values('$name','$emailid','$mon')";
     if(mysql_query($query))
     {
       echo"<script>alert('You have Registered successfully!!!')</script>" ;
     }
      }

}


?>


























