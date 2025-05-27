<?php

$item =$_POST['item'];
$price =$_POST['price'];


echo "$item<br>  $price <br>";


$con = mysqli_connect('localhost', 'root', '', 'demo');


if(!$con)

{
    echo "couldnot connect to db".mysqli_connect_error();
    die;
}

else{
    echo "connection to db";
}

$ins ="INSERT into shop(item,price) VALUES ('$item','$price')";



$run_query = mysqli_query($con,$ins);

if(!$run_query)
{
    echo "data insertion failed";

}
else{
    echo "data inserted";
}

?>