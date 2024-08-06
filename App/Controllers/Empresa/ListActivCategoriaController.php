<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListActivCategoriaModel.php';

Class ListActivCategoriaController {

    private $ActivCategoria;

    public function __construct($conexion)
    {
        $this->ActivCategoria = new ListActivCategoriaModel($conexion);
    }

    public function Table (){
        $listActivCategoria =  $this->ActivCategoria->getSelect('*');
        echo json_encode($listActivCategoria);
    }
}