<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListSolicitudEstablecimientoModel.php';

Class ListSolicitudEstablecimientoController {

    private $ListSolicitudEstablecimiento;

    public function __construct($conexion)
    {
        $this->ListSolicitudEstablecimiento = new ListSolicitudEstablecimientoModel($conexion);
    }

    public function Table (){
        $listListSolicitudEstablecimiento =  $this->ListSolicitudEstablecimiento->getSelect('*');
        echo json_encode($listListSolicitudEstablecimiento);
    }
}