<?php
    require_once "database.php";     
// Ce fichier va se connecter à la base de données, récupérer les données et les envoyer en json 

header('Access-Control-Allow-Origin: *');
 $db = getdb();
try {
    $select_stmt = $db->prepare("SELECT * from lastResults;");
    $select_stmt->execute();
    $resultats = $select_stmt->fetchall(PDO::FETCH_ASSOC);
    echo json_encode($resultats);
} catch(Exception $e)  {
    echo json_encode(["error" => $e->getMessage()]);
}
?>