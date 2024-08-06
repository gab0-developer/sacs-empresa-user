<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListActivProductosModel.php';

Class ListActivProductosController {

    private $ActivProductos;

    public function __construct($conexion)
    {
        $this->ActivProductos = new ListActivProductosModel($conexion);
    }

    public function Table (){
        $listActivProductos =  $this->ActivProductos->getSelect('*');
        echo json_encode($listActivProductos);
    }
}