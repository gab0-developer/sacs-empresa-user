<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Almacen/PisosModel.php';

Class PisosController {

    private $Pisos;

    public function __construct($conexion)
    {
        $this->Pisos = new PisosModel($conexion);
    }

    public function Table (){
        $listpisos =  $this->Pisos->getSelect('*');
        echo json_encode($listpisos);
    }
}