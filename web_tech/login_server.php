Raju Sambahamphe
<?php


$username = $_POST['user'];
$password =$_POST['password'];


echo "$username <br>";
echo "$password <br>";



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