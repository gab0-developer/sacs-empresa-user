<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListOperacionesActivModel.php';

Class ListOperacionesActivController {

    private $ListOperaiconesActiv;

    public function __construct($conexion)
    {
        $this->ListOperaiconesActiv = new ListOperacionesActivModel($conexion);
    }

    public function Table (){
        $listListOperaiconesActiv =  $this->ListOperaiconesActiv->getSelect('*');
        echo json_encode($listListOperaiconesActiv);
    }
}