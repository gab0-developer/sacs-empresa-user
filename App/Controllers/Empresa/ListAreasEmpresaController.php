<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListAreasEmpresaModel.php';

Class ListAreasEmpresaController {

    private $ListAreaEmpresa;

    public function __construct($conexion)
    {
        $this->ListAreaEmpresa = new ListAreasEmpresaModel($conexion);
    }

    public function Table (){
        $listListAreaEmpresa =  $this->ListAreaEmpresa->getSelect('*');
        echo json_encode($listListAreaEmpresa);
    }
}