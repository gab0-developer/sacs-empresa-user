<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListSolicitudMontoPagoModel.php';

Class ListSolicitudMontoPagoController {

    private $ListSolicitudPagoMonto;

    public function __construct($conexion)
    {
        $this->ListSolicitudPagoMonto = new ListSolicitudMontoPagoModel($conexion);
    }

    public function Table (){
        $listListSolicitudPagoMonto =  $this->ListSolicitudPagoMonto->getSelect('*');
        echo json_encode($listListSolicitudPagoMonto);
    }
}