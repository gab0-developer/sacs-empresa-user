<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Login/LoginSessionModel.php';

Class LoginSessionController {

    private $LoginSessionModel;

    public function __construct($conexion)
    {
        $this->LoginSessionModel = new LoginSessionModel($conexion);
    }

    
    public function Table (){
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data,true);

        $pass_hash= hash('sha256',$body['password']);
        
        // $dataLogin =  $this->LoginSessionModel->getSelectIDParam('*','correo_principal','contrasena', 'empresa@gmail.com',123);
        $dataLogin =  $this->LoginSessionModel->getSelectIDParam('*','correo_principal','contrasena', $body['user'],$pass_hash);
        echo json_encode($dataLogin);
    }
    
}