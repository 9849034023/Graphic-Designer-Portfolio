<?php
$title=$_POST['title'];
$con =msqli_connect('localhost','root','','addproduct');
//mysqli_connect('hostname','dbysername','dbpassword','dbname');
//sql queries insert/select/update/delete
if(!$con){
    echo "couldnot connect to db ". mysqli_connect_error();

}
else{
    echo "connected to db";
}
?>