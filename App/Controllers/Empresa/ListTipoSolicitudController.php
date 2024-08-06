<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListTipoSolicitudModel.php';

Class ListTipoSolicitudController {

    private $TipSolicitud;

    public function __construct($conexion)
    {
        $this->TipSolicitud = new ListTipoSolicitudModel($conexion);
    }

    public function Table (){
        $listTipSolicitud =  $this->TipSolicitud->getSelect('*');
        echo json_encode($listTipSolicitud);
    }
}