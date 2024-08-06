<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListBancosModel.php';

Class ListBancosController {

    private $ListBancos;

    public function __construct($conexion)
    {
        $this->ListBancos = new ListBancosModel($conexion);
    }

    public function Table (){
        $listListBancos =  $this->ListBancos->getSelect('*');
        echo json_encode($listListBancos);
    }
}