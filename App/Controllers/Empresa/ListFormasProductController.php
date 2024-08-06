<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListFormasProductModel.php';

Class ListFormasProductController {

    private $FormasProductos;

    public function __construct($conexion)
    {
        $this->FormasProductos = new ListFormasProductModel($conexion);
    }

    public function Table (){
        $listFormasProductos =  $this->FormasProductos->getSelect('*');
        echo json_encode($listFormasProductos);
    }
}