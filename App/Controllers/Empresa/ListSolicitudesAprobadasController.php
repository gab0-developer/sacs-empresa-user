<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListSolicitudesAprobadasModel.php';

Class ListSolicitudesAprobadasController {

    private $ListSolicitudesAprobadas;

    public function __construct($conexion)
    {
        $this->ListSolicitudesAprobadas = new ListSolicitudesAprobadasModel($conexion);
    }

    public function Table (){
        $listListSolicitudesAprobadas =  $this->ListSolicitudesAprobadas->getSelect('*');
        echo json_encode($listListSolicitudesAprobadas);
    }
}