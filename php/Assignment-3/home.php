<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
    <button type="button" class="btn btn-outline-secondary">Table</button>
    <table class="table table-primary">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">address</th>
                <th scope="col">email</th>
                <th scope="col">Situation</th>
            </tr>
        </thead>
        <tbody>
            <?php
            session_start();
            if (!$_SESSION["email"] && !$_SESSION["password"]) {
                header('location:login.php');
            }

            include("conn.php");

            $sql = "Select * from  `student` ";
            $result =  mysqli_query($conn, $sql);
            $convertResult = array($result);
            $jsonData = eval($convertResult);
            console.log($jsonData);
            
            if ($result) {
                while ($row = mysqli_fetch_assoc($result)) {
                    $id = $row['id'];
                    $name =  $row['name'];
                    $adderss =  $row['address'];
                    $email = $row['email'];
                    // $row['passowrd'] = $passowrd;
                    echo '
        <tr>
        <th scope="row">' . $id . ' </th>
        <td>' . $name . ' </td>
        <td>' . $adderss . '</td>
        <td>' . $email . '</td>
        <td>
        <a  href="delete.php?deleteid=' . $id . ' " class="btn btn-danger" role="button">Delete</a>
        <a  href="update.php?updatedid=' . $id . ' " class="btn btn-primary" role="button">Update</a>

        </td>
       </tr>
       ';
                }
            }
            ?>
        </tbody>
    </table>
    <a type="button" href="logout.php" class="btn btn-outline-warning">Logout</a>

</body>

</html>