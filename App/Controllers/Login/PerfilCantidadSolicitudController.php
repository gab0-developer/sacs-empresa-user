<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Login/PerfilCantidadSolicitudModel.php';

Class PerfilCantidadSolicitudController {

    private $CantidadSolicitud;

    public function __construct($conexion)
    {
        $this->CantidadSolicitud = new PerfilCantidadSolicitudModel($conexion);
    }

    public function Table (){
        $dataCantidadSolicitud =  $this->CantidadSolicitud->getSelect('*');
        echo json_encode($dataCantidadSolicitud);
    }
    
    
}