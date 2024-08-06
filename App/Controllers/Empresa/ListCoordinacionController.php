<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListCoordinacionModel.php';

Class ListCoordinacionController {

    private $ListCoordinacion;

    public function __construct($conexion)
    {
        $this->ListCoordinacion = new ListCoordinacionModel($conexion);
    }

    public function Table (){
        $listListCoordinacion =  $this->ListCoordinacion->getSelect('*');
        echo json_encode($listListCoordinacion);
    }
}