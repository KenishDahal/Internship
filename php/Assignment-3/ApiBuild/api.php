<?php
include("query.php");

class ApiCaller
{
    private $requestMethod;

    public function __construct($requestMethod)
    {
        $this->requestMethod = $requestMethod;
    }

    function headerMethod()
    {

        header('Content-Type: application/json');

        switch ($this->requestMethod) {
            case 'GET':
                // echo json_encode($fruits);
                $this->getAllUsers();
                // echo "get";
                break;
            case 'POST':
                echo "POST";
                break;
            case 'DELETE':
                echo "delete";
                break;
            case 'PUT':
                echo "put";
                break;
            default:
                echo json_encode(array('error' => 'Invalid request method'));
                break;
        }
    }

    function getAllUsers()
    {
        $find = new QuerySelctor();
        return  $find->findAll();
    }
}
