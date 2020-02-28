<head>
    <meta charset="utf-8">
    <title>Search</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="favicon.ico">
</head>

<header>
 <?php
 include "view/header.php";
 ?>
</header>
<form>

<input type="number" name="LiSa" >
<input type="text" name="type">
<input type="submit" value="Submit" >

</form>


 <?php


if(isset($_GET["LiSa"])){
    $inserting = $_GET["LiSa"];
    $type = $_GET["type"];
    echo "You're inserting: " .$inserting . " and " . $type . "<br>";


    $connection = new mysqli("localhost","root", "", "websoft");
    if($connection->connect_error){
        die("connection invalid: " . $connection->connect_error);
    }

    echo"Connected <br>";

    $createQuery ="INSERT INTO tech (LiSa, type) VALUES (" . $inserting . ",'" . $type . "')";
    $connection->query($createQuery);





}


?>





<footer>
<?php
 include "view/footer.php";
 ?>
</footer>