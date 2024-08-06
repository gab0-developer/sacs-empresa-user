<?php

// include('../../assets/database/pg_conex.php');

// function Permiso(){
//     $Post_Data = file_get_contents('php://input');
//     $array = explode("&", $Post_Data);
//     $array_fix = str_replace("permiso=", "", $array[0]);
//     return $array_fix;
// }

// $permiso = Permiso();

header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: content-type");
 header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");//recibir informacion mediante estos metodos

include('pg_conex.php');

$Post_Data = file_get_contents('php://input');
$body = json_decode($Post_Data, true);
$permiso = $body['permiso'];


$sql = "SELECT sacs.nombre_permiso_pdf('$permiso')";

$nombre_p = pg_query($conn, $sql);

$nombre_p_r=pg_fetch_object($nombre_p);

$nombre_p_r_v = get_object_vars($nombre_p_r);

switch($nombre_p_r_v['nombre_permiso_pdf']){
    case 1:
        include("planillas/planilla_permiso_4.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case '1a':
        include("planillas/planilla_permiso_1.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case 2:
        include("planillas/planilla_permiso_2.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case 3:
        include("planillas/planilla_permiso_2.php"); 
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case 4:
        include("planillas/planilla_permiso_22.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case 5:
        include("planillas/planilla_permiso_22.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case 6:
        include("planillas/planilla_permiso_2.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case '7a':
        include("planillas/planilla_permiso_11.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case '7b':
        include("planillas/planilla_permiso_12.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case '7c':
        include("planillas/planilla_permiso_11.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case 8:
        include("planillas/planilla_permiso_10.php");
        pg_free_result($nombre_p);
        pg_close($conn);
    break;
    case 9:
        include("planillas/planilla_permiso_5.php");
    break;
    default:
        
    break;
}

?>