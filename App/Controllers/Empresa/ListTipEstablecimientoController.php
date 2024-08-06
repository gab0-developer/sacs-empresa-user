<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/ListTipEstablecimientoModel.php';

Class ListTipEstablecimientoController {

    private $TipEstablecimiento;

    public function __construct($conexion)
    {
        $this->TipEstablecimiento = new ListTipEstablecimientoModel($conexion);
    }

    public function Table (){
        $listTipEstablecimiento =  $this->TipEstablecimiento->getSelect('*');
        echo json_encode($listTipEstablecimiento);
    }
}