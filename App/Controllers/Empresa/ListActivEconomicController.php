<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListActivEconomicModel.php';

Class ListActivEconomicController {

    private $ActivEconomicEmpresa;

    public function __construct($conexion)
    {
        $this->ActivEconomicEmpresa = new ListActivEconomicModel($conexion);
    }

    public function Table (){
        $listActivEconomicEmpresa =  $this->ActivEconomicEmpresa->getSelect('*');
        echo json_encode($listActivEconomicEmpresa);
    }
}