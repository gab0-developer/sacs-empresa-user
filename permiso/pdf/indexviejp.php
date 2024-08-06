<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: content-type");
 header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");//recibir informacion mediante estos metodos

include('./pg_conex.php');

$Post_Data = file_get_contents('php://input');
        // $array = explode("&", $Post_Data);
        // $array_fix = str_replace("solicitud=", "", $array[0]);
$body = json_decode($Post_Data, true);

// if(count($body) > 0){
//     echo json_encode($body['solicitud']);
//     echo json_encode('desde sistema empresarial');
    
// }else{
//     echo json_encode('no hay datos en body');

// }

// function Solicitud(){
//     $Post_Data = file_get_contents('php://input');
//     $array = explode("&", $Post_Data);
//     $array_fix = str_replace("solicitud=", "", $array[0]);
//     return $array_fix;
// }


// $solicitud = Solicitud();
$solicitud = $body['solicitud'];
// echo json_encode($solicitud);
$sql = "SELECT sacs.nombre_solicitud_es('$solicitud')";

$nombre_s = pg_query($conn, $sql);

$nombre_s_r=pg_fetch_object($nombre_s);

$nombre_s_r_v = get_object_vars($nombre_s_r);
// echo json_encode($nombre_s_r_v);
//echo $nombre_s_r_v['nombre_solicitud_es'];

switch($nombre_s_r_v['nombre_solicitud_es']){
    case 1:
        include("planillas/planilla9.php");
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 2:
        include("planillas/planilla2.php");
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 3:
        include("planillas/planilla3.php"); 
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 4:
        include("planillas/planilla4.php");
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 5:
        include("planillas/planilla5.php");
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 6:
        include("planillas/planilla6.php");
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 7:
        include("planillas/planilla7.php");
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 8:
        include("planillas/planilla8.php");
        pg_free_result($nombre_s);
        pg_close($conn);
    break;
    case 9:
        include("planillas/planilla9.php");
    break;
    default:
        
    break;
}

?>