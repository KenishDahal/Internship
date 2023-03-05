<?php

include("api.php");


$slash = explode("/" , $_SERVER['REQUEST_URI']);
$id = $slash[2];


$requestMethod = $_SERVER['REQUEST_METHOD'];

$obj = new ApiCaller($requestMethod, $id);

$obj->requestMethod();
