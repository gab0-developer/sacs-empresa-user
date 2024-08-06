<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Almacen/TipoalmacenModel.php';

Class TipoalmacenController {

    private $tipalmacen;

    public function __construct($conexion)
    {
        $this->tipalmacen = new TipoalmacenModel($conexion);
    }

    public function Table (){
        $listtipalmacen =  $this->tipalmacen->getSelect('*');
        echo json_encode($listtipalmacen);
    }
}