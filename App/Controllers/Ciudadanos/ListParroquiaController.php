<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Ciudadano/ListParroquiaModel.php';

Class ListParroquiaController {

    private $Parroquias;

    public function __construct($conexion)
    {
        $this->Parroquias = new ListParroquiaModel($conexion);
    }

    public function Table (){
        $listParroquias =  $this->Parroquias->getSelect('*');
        echo json_encode($listParroquias);
    }
}