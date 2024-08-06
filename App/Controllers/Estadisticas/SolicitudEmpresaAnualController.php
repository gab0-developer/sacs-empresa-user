<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Estadisticas/SolicitudEmpresaAnualModel.php';

Class SolicitudEmpresaAnualController {

    private $solicAnual;

    public function __construct($conexion)
    {
        $this->solicAnual = new SolicitudEmpresaAnualModel($conexion);
    }

    public function Table (){
        $listsolicAnual =  $this->solicAnual->getSelect('*');
        echo json_encode($listsolicAnual);
    }
}