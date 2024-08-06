<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: content-type");
 header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");//recibir informacion mediante estos metodos



 echo 'hello world';
$Post_Data = file_get_contents('php://input');
        // $array = explode("&", $Post_Data);
        // $array_fix = str_replace("solicitud=", "", $array[0]);
$body = json_decode($Post_Data, true);

if(count($body) > 0){
    echo json_encode($body);
    
}else{
    echo json_encode('no hay datos en body');

}