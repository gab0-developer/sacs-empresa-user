<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Ciudadano/RegentesModel.php';

Class RegentesController {

    private $regente;

    public function __construct($conexion)
    {
        $this->regente = new RegentesModel($conexion);
    }

    public function Table (){
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data,true);

        $dataregente =  $this->regente->getSelectID('*','fk_ciudadano',$body['cedulanac']);
        echo json_encode($dataregente);
    }
    
    
}