<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListSolicitudesEmpresaModel.php';

Class ListSolicitudesEmpresaController {

    private $ListSolicitudesEmpresa;

    public function __construct($conexion)
    {
        $this->ListSolicitudesEmpresa = new ListSolicitudesEmpresaModel($conexion);
    }

    public function Table (){
        $listListSolicitudesEmpresa =  $this->ListSolicitudesEmpresa->getSelect('*');
        echo json_encode($listListSolicitudesEmpresa);
    }
}