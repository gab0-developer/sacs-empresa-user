<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Login/ListPerfilPropietarioEmpresaModel.php';

Class ListPerfilPropietarioEmpresaController {

    private $PerilpropietarioEmpresausuario;

    public function __construct($conexion)
    {
        $this->PerilpropietarioEmpresausuario = new ListPerfilPropietarioEmpresaModel($conexion);
    }

    public function Table (){
        $dataPerilpropietarioEmpresausuario =  $this->PerilpropietarioEmpresausuario->getSelect('*');
        echo json_encode($dataPerilpropietarioEmpresausuario);
    }
    
    
}