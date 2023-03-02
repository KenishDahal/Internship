<?php

include("api.php");


$requestMethod = $_SERVER["REQUEST_METHOD"];

var_dump($requestMethod);

$obj = new ApiCaller($requestMethod);

$obj->headerMethod();
