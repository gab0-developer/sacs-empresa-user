<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Paises/PaisesModel.php';

Class PaisesController {

    private $Paises;

    public function __construct($conexion)
    {
        $this->Paises = new PaisesModel($conexion);
    }

    public function Table (){
        $listPaises =  $this->Paises->getSelect('*');
        echo json_encode($listPaises);
    }
}