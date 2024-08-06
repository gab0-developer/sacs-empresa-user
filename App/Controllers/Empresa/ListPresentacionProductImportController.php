<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListPresentacionProductImportModel.php';

Class ListPresentacionProductImportController {

    private $ListPresentProductImport;

    public function __construct($conexion)
    {
        $this->ListPresentProductImport = new ListPresentacionProductImportModel($conexion);
    }

    public function Table (){
        $listListPresentProductImport =  $this->ListPresentProductImport->getSelect('*');
        echo json_encode($listListPresentProductImport);
    }
}