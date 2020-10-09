<?php
    require_once __DIR__  . "/config.php";
    class API {
        function Select() {
            $con = new connect;
            $formation = array(); 
            $data = $con->prepare("SELECT * FROM formations ORDER BY id");
            $data->execute(); 

            while($item = $data->fetch(PDO::FETCH_ASSOC)) {
                array_push( $formation , array(
                    'id' =>$item['id'],
                     'dateBegin' => $item['dateBegin'],
                     'dateEnd' => $item['dateEnd'],
                     'title' => $item['title']
                ));
            }
            return json_encode($formation);  
        }
    }


    $API = new API;
   //  header('Content-Type: application/json');
    echo $API->Select();
?>
