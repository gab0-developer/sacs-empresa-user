<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Estadisticas/SolicitudEmpresaMensualModel.php';

Class SolicitudEmpresaMensualController {

    private $soliMensual;

    public function __construct($conexion)
    {
        $this->soliMensual = new SolicitudEmpresaMensualModel($conexion);
    }

    public function Table (){
        $listsoliMensual =  $this->soliMensual->getSelect('*');
        echo json_encode($listsoliMensual);
    }
}