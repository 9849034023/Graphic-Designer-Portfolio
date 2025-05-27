Raju Sambahamphe
<?php

$first =$_POST['first'];
$last =$_POST['second'];
$email = $_POST['email'];
$username = $_POST['user'];
$password =$_POST['password'];
$confirm =$_POST['cpassword'];

echo "$first<br>  $last <br>";
echo "$email <br>";
echo "$username <br>";
echo "$password <br>";
echo "$confirm";


$con = mysqli_connect('localhost', 'root', '', 'database');


if(!$con)

{
    echo "could not connect to db: " . mysqli_connect_error();
    die;
}

else{
    echo "connection to db";
}

$ins ="INSERT into raju1(first_name,last_name,email,username,password,confirm_password) VALUES ('$first','$last','$email','$username','$password','$confirm')";



$run_query = mysqli_query($con,$ins);

if(!$run_query)
{
    echo "data insertion failed";

}
else{
    echo "data inserted";
}

?>