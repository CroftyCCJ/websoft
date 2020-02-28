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

<input type="text" name="originalType" placeholder="original type"><br><br>
<input type="number" name="LiSa" placeholder="LiSa" >
<input type="text" name="type" placeholder="type">
<input type="submit" value="Submit" >

</form>


 <?php


if(isset($_GET["LiSa"])){
    $original = $_GET["originalType"];
    $updating = $_GET["LiSa"];
    $type = $_GET["type"];
    echo "You're updating: " .$updating . " and " . $type . "<br>";


    $connection = new mysqli("localhost","root", "", "websoft");
    if($connection->connect_error){
        die("connection invalid: " . $connection->connect_error);
    }

    echo"Connected <br>";

    $createQuery ="UPDATE tech 
    SET LiSa = " . $updating . ",type = '" . $type ."'
    WHERE type ='" . $original . "'";
    $connection->query($createQuery);
    if($connection->query($createQuery) === TRUE){
        echo "";
    }   else {
        echo "Error:".$sql."<br>".$conn->error;
    } 




}


?>





<footer>
<?php
 include "view/footer.php";
 ?>
</footer>