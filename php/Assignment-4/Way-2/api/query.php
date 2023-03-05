<?php

class QuerySelctor
{
    function findAll()
    {
        include("connection.php");
        // $id = $_POST["id"];
        // $password = $_POST["movie"];
        $sql = "Select * from  `api` ";
        $result =  mysqli_query($conn, $sql);
        $data = array();

        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $id = $row['id'];
                $movie =  $row['movie'];
                $rating =  $row['rating'];
                // echo $id . "<br>";
                // echo $movie . "<br>";
                // echo $rating . "<br>";
                array_push($data, $row);
            }
        }

        return $data;
    }
    function postData()
    {
        include("connection.php");

        $movie = $_GET["movie"];
        $rating = $_GET["rating"];

        // var_dump(($_POST));

        $sql = "INSERT INTO  api (movie,rating)
        VALUES ('$movie','$rating')";

        $result =  mysqli_query($conn, $sql);

        if ($result) {
           return $result;
        } else {
            echo "Error: <br>" . mysqli_error($conn);
        }
    }
    function deleteData($id)
    {
        include("connection.php");
        // $id = $_POST["id"];
        // $password = $_POST["movie"];
        $sql = "SELECT * from  api  WHERE id= :id";
        $result =  mysqli_query($conn, $sql);
        $data = array();

        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $id = $row['id'];
                $movie =  $row['movie'];
                $rating =  $row['rating'];

                array_push($data, $row);
            }
        }

        return $data;
    }
}
