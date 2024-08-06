<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListActivAreaModel.php';

Class ListActivAreaController {

    private $ActivAreaEmpresa;

    public function __construct($conexion)
    {
        $this->ActivAreaEmpresa = new ListActivAreaModel($conexion);
    }

    public function Table (){
        $listActivAreaEmpresa =  $this->ActivAreaEmpresa->getSelect('*');
        echo json_encode($listActivAreaEmpresa);
    }
}