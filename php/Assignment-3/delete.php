<?php


if (isset($_GET['deleteid'])) {

    $id = $_GET['deleteid'];

    include("conn.php");

    $sql = "DELETE FROM student WHERE id= '$id' ";

    $result =  mysqli_query($conn, $sql);

    if ($result) {
        // echo "Record deleted successfully";
        header('location:home.php');
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}
