<?php
$servername='localhost';
$username='root';
$password='root';
$dbname = 'api';

$conn=mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
   die('Could not Connect My Sql:' .mysqli_connect_error());
}
echo "connected ";
