<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListNombreSolicitudModel.php';

Class ListNombreSolicitudController {

    private $NombreSolicitud;

    public function __construct($conexion)
    {
        $this->NombreSolicitud = new ListNombreSolicitudModel($conexion);
    }

    public function Table (){
        $listNombreSolicitud =  $this->NombreSolicitud->getSelect('*');
        echo json_encode($listNombreSolicitud);
    }
}