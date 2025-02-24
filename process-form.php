<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';

try {
    
    $conn = new PDO("mysql:host=$servername;dbname=mypdobd", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->beginTransaction();
    $conn->exec("INSERT INTO form VALUES (4,'lucas','bla','email.com')");
    $conn->exec("INSERT INTO form VALUES(5,'john','doe','hello@world')");

    $conn->commit();
    echo 'new records inserted successfully';
}   catch (PDOException $e){
    $conn->rollback();
    echo $sql. "<br>". $e->getMessage();
}

$conn = null;

?>