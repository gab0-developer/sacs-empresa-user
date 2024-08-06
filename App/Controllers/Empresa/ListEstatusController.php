<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListEstatusModel.php';

Class ListEstatusController {

    private $ListEstatus;

    public function __construct($conexion)
    {
        $this->ListEstatus = new ListEstatusModel($conexion);
    }

    public function Table (){
        $listListEstatus =  $this->ListEstatus->getSelect('*');
        echo json_encode($listListEstatus);
    }
}