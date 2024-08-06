<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Almacen/EstatusModel.php';

Class EstatusController {

    private $Estatus;

    public function __construct($conexion)
    {
        $this->Estatus = new EstatusModel($conexion);
    }

    public function Table (){
        $listestatus =  $this->Estatus->getSelect('*');
        echo json_encode($listestatus);
    }
}