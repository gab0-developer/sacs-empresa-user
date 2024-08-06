<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Login/PerfilCantidadEstablecimientoModel.php';

Class PerfilCantidadEstablecimientoController {

    private $CantidadEstablecimiento;

    public function __construct($conexion)
    {
        $this->CantidadEstablecimiento = new PerfilCantidadEstablecimientoModel($conexion);
    }

    public function Table (){
        $dataCantidadEstablecimiento =  $this->CantidadEstablecimiento->getSelect('*');
        echo json_encode($dataCantidadEstablecimiento);
    }
    
    
}