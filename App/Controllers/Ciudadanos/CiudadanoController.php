<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Ciudadano/CiudadanoModel.php';

Class CiudadanoController {

    private $ciudadano;

    public function __construct($conexion)
    {
        $this->ciudadano = new CiudadanoModel($conexion);
    }

    public function Table (){
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data,true);

        $dataCiudadano =  $this->ciudadano->getSelectID('*','pk_ciudadano',$body['cedulanac']);
        echo json_encode($dataCiudadano);
    }
    public function buscpaciretirado (){
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data,true);

        $dataCiudadano =  $this->ciudadano->getSelect('*','CEDULA',$body['ci']);
        echo json_encode($dataCiudadano);
    }
}