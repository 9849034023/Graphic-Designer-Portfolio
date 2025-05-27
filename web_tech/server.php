<?php

$specify = $_POST['specify'];
print_r($specify);

$Title =$_POST['Title']; 
echo"<br>The job title is $Title. <br>";

$company =$_POST['company'];
echo"The company is $company. <br>";

$jobtype =$_POST['jobtype'];
echo"The job type is $jobtype.<br>";

$location =$_POST['location'];
echo"The location is $location. <br>";

$Jobdescription =$_POST['Jobdescription'];
echo"The jobdescription is $Jobdescription. <br>";

$select=$_POST['mytype'];
echo"The select type is $select.<br>";

?>