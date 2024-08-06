<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Login/ListPerfilEmpresaUserModel.php';

Class ListPerfilEmpresaUserController {

    private $PerilEmpresausuario;

    public function __construct($conexion)
    {
        $this->PerilEmpresausuario = new ListPerfilEmpresaUserModel($conexion);
    }

    public function Table (){
        $dataPerilEmpresausuario =  $this->PerilEmpresausuario->getSelect('*');
        echo json_encode($dataPerilEmpresausuario);
    }
    
    
}