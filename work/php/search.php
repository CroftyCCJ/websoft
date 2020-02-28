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

<input type="text" name="searched" >
<input type="submit" value="Search" >

</form>

<table>
<?php

if(isset($_GET["searched"])){
    $searching = $_GET["searched"];
    echo "You searched for: " .$searching . "<br>";


    $connection = new mysqli("localhost","root", "", "websoft");
    if($connection->connect_error){
        die("connection invalid: " . $connection->connect_error);
    }

    echo"Connected <br>";

    $searchQuery ="SELECT * FROM tech WHERE type LIKE '%" . $searching . "%'";
    $result = $connection->query($searchQuery);

    while($row = $result->fetch_assoc()){
        echo "<tr>";
        echo "<td>" . $row["type"] .  "</td>";
        echo "<td>" . $row["LiSa"] .  "</td>";
        echo "<td>" . $row["label"] .  "</td>";
        echo "</tr>";
    }



}




?>
</table>


<footer>
<?php
 include "view/footer.php";
 ?>
</footer>