<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListRegMercantilModel.php';

Class ListRegMercantilController {

    private $ListRegmercantil;

    public function __construct($conexion)
    {
        $this->ListRegmercantil = new ListRegMercantilModel($conexion);
    }

    public function Table (){
        $listListRegmercantil =  $this->ListRegmercantil->getSelect('*');
        echo json_encode($listListRegmercantil);
    }
}