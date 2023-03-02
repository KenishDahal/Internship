<?php

$email = $password  = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  include("conn.php");

  $email = test_input($_POST["email"]);
  $password = test_input($_POST["password"]);

  $sql = "Select * from  `student` WHERE 
  email='$email' and password='$password' ";

  $result =  mysqli_query($conn, $sql);

  if ($result) {
    $num = mysqli_num_rows($result);
    if ($num > 0) {
      // echo "Login successfulL";
      session_start();
      // Set session variables
      $_SESSION["email"] = $email;
      $_SESSION["password"] = $password;
      header('location:home.php');
    } else {
      echo "  
      <label class='d-flex justify-content-center bg-danger bg-gradient text-dark' for='exampleInputPassword1'>Not valid</label> 
      ";
    }
    // mysqli_close($conn);
  }
}
function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>

  <form method="post" class="mx-auto w-50" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <div class="d-flex justify-content-center h2">Login Forms</div>

    <div class="form-group pb-3">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group pb-3">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>

    <input type="submit" class="btn btn-success" name="submit" value="submit">
  </form>


</body>

</html>