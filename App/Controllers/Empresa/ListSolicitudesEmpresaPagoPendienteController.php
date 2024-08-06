<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListSolicitudesEmpresaPagoPendienteModel.php';

Class ListSolicitudesEmpresaPagoPendienteController {

    private $ListSolicitudesEmpresa;

    public function __construct($conexion)
    {
        $this->ListSolicitudesEmpresa = new ListSolicitudesEmpresaPagoPendienteModel($conexion);
    }

    public function Table (){
        $listListSolicitudesEmpresa =  $this->ListSolicitudesEmpresa->getSelect('*');
        echo json_encode($listListSolicitudesEmpresa);
    }
}