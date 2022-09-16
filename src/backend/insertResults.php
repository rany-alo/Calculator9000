<?php
require_once "database.php";     
header('Access-Control-Allow-Origin: *');

 $db = getdb();
 $result = $_POST['resultat'];
try {
    $insert_stmt= $db->prepare("INSERT INTO lastResults (results) VALUES (:result);");
    $insert_stmt->bindParam(':result', $result);          
    $insert_stmt->execute();
} catch(Exception $e)  {
    echo $e->getMessage();
}
?>