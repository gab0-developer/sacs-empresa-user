<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListTipoEmpresaModel.php';

Class ListTipoEmpresaController {

    private $TipEmpresa;

    public function __construct($conexion)
    {
        $this->TipEmpresa = new ListTipoEmpresaModel($conexion);
    }

    public function Table (){
        $listTipEmpresa =  $this->TipEmpresa->getSelect('*');
        echo json_encode($listTipEmpresa);
    }
}