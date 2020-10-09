<?php
    $server = "localhost";
    $db = "mybook";
    $dbUser = "root";
    $dbPasse = "";
    /* connection  la bd     */
    class  Connect extends PDO
    {
        public function __construct() {
            global $server, $db, $dbUser, $dbPasse;
            parent::__construct("mysql:host=$server;dbname=$db", $dbUser , $dbPasse, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")) ;
            $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }
    }
 ?>