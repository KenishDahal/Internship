<?php

include('./src/Databse.php');
include('./src/ProductController.php');
include('./src/ErrorHandler.php');
include('./src/ProductGateway.php');

spl_autoload_register(function ($class) {
    require __DIR__ . "/src/$class.php";
});

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

header("Content-type: application/json; charset=UTF-8");

$parts = explode("/", $_SERVER["REQUEST_URI"]);


$id = $parts[2] ?? null;

$database = new Database("localhost", "api", "root", "root");

$gateway = new ProductGateway($database);

$controller = new ProductController($gateway);

$controller->processRequest($_SERVER["REQUEST_METHOD"], $id);
