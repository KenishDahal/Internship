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

        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $id = $row['id'];
                $movie =  $row['movie'];
                $rating =  $row['rating'];

                echo $id . "<br>";
                echo $movie . "<br>";
                echo $rating . "<br>";
            }
        }
    }
}
