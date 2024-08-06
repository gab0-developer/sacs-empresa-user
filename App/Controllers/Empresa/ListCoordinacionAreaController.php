<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListCoordinacionAreaModel.php';

Class ListCoordinacionAreaController {

    private $ListCoorArea;

    public function __construct($conexion)
    {
        $this->ListCoorArea = new ListCoordinacionAreaModel($conexion);
    }

    public function Table (){
        $listListCoorArea =  $this->ListCoorArea->getSelect('*');
        echo json_encode($listListCoorArea);
    }
}