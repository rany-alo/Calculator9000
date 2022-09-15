<?php
    require_once "database.php";     

header('Access-Control-Allow-Origin: *');
 $db = getdb();
try {
    $insert_stmt= $this->db->prepare("INSERT INTO LastResults (id,results) VALUES ('',:result)");           
    $insert_stmt->execute(array(':result' => $result));
} catch(Exception $e)  {
    $e->getMessage();
}
?>