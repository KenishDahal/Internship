<?php
include("query.php");

class ApiCaller
{
    private $requestMethod;
    private $id;

    public function __construct($requestMethod,$id)
    {
        $this->requestMethod = $requestMethod;
        $this->id = $id;
    }

    function requestMethod()
    {
        header('Content-Type: application/json');

        switch ($this->requestMethod) {
            case 'GET':
                // echo json_encode($fruits); 
                echo json_encode($this->getAllUsers());
                // echo "get";
                break;
            case 'POST':
                echo "POST";
                // json_encode();
                $show =  $this->postAllUsers();
                echo json_encode($show);
                break;
            case 'DELETE':
                echo "delete";
                $this->postAllUsers($this->id);
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
    function postAllUsers()
    {
        $find = new QuerySelctor();
        return  $find->postData();
    }
    function deleteUser($id)
    {
        $find = new QuerySelctor();
        return  $find->deleteData($id);
    }
}
