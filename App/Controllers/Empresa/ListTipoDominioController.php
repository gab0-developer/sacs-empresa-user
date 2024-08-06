<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListTipoDominioModel.php';

Class ListTipoDominioController {

    private $ListDominio;

    public function __construct($conexion)
    {
        $this->ListDominio = new ListTipoDominioModel($conexion);
    }

    public function Table (){
        $listListDominio =  $this->ListDominio->getSelect('*');
        echo json_encode($listListDominio);
    }
}