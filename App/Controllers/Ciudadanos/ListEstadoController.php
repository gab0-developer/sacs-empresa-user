<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Ciudadano/ListEstadoModel.php';

Class ListEstadoController {

    private $Estados;

    public function __construct($conexion)
    {
        $this->Estados = new ListEstadoModel($conexion);
    }

    public function Table (){
        $listEstados =  $this->Estados->getSelect('*');
        echo json_encode($listEstados);
    }
}