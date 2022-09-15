<?php

/**
 * une function pour connecter à la base de données
 * @return db
 */

function getdb() {
    $db_host = 'localhost';
    $db_port = '3306';
    $db_user = 'rany';
    $db_pass = 'r1r2r3r4';
    $db_name = 'calculator';
   
    try {
    $db = new PDO("mysql:host=$db_host;dbport=$db_port;dbname=$db_name", $db_user, $db_pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOEXCEPTION $e)
    {
    $e ->getMessage();
    }
    return $db;
}

?>