<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Almacen/PasillosModel.php';

Class PasillosController {

    private $Pasillos;

    public function __construct($conexion)
    {
        $this->Pasillos = new PasillosModel($conexion);
    }

    public function Table (){
        $listpasillos =  $this->Pasillos->getSelect('*');
        echo json_encode($listpasillos);
    }
}