<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbName = "meedayu";

    session_start();

    try{
        $dbCon = new PDO("mysql:host=".$host.";dbname=".$dbName, $username, $password);

        if($dbCon) {
           error_log("Connected to the $dbName database successfully!");
        }
    } catch (PDOException $e){
        $error = $e->getMessage();
		error_log("Connected to the database unsuccessfully: $error");
    }
?>
