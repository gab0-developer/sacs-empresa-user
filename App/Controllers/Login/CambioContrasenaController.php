<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Login/CambioContrasenaModel.php';

Class CambioContrasenaController {

    private $CambioContrasena;

    public function __construct($conexion)
    {
        $this->CambioContrasena = new CambioContrasenaModel($conexion);
    }

    public function Table (){
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data,true);

        $dataCambioContrasena=  $this->CambioContrasena->getSelectID('*','email',$body['emailuser']);
        echo json_encode($dataCambioContrasena);
    }
    public function buscpaciretirado (){
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data,true);

        $dataCambioContrasena=  $this->CambioContrasena->getSelect('*','CEDULA',$body['ci']);
        echo json_encode($dataCambioContrasena);
    }
    public function UpdateContrasenaUsuario ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;
        
        $array_data = [
            
            // 'i_tipo_solicitud' => $body['tiposolicitud'] ,
            'u_email_usuario' => $body['emailuser'],
            'u_contrasena_nueva' => hash('sha256',$body['contrasenauser'])

        ];
        
        $UpdateContrasenauser = $this->CambioContrasena->PdoPostgreFunction('"sacs".cambio_contrasena_usuario', $array_data, $out);

        echo json_encode($out);

    }
    public function UpdatePreguntaSeguridad ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;
        
        $array_data = [
            
            // 'i_tipo_solicitud' => $body['tiposolicitud'] ,
            'u_correo_usuario' => $body['emailuser'],
            'u_contrasena_usuario' => hash('sha256',$body['contrasenauser']),
            'u_primera_pregunta' => $body['pregunta1'],
            'u_primera_respuesta' => $body['respuesta1'],
            'u_segunda_pregunta' => $body['pregunta2'],
            'u_segunda_respuesta' => $body['respuesta2'],
            'u_tercera_pregunta' => $body['pregunta3'],
            'u_tercera_respuesta' => $body['respuesta3'],
            'u_cuarta_pregunta' => $body['pregunta4'],
            'u_cuarta_respuesta' => $body['respuesta4']

        ];
        
        
        $UpdatePreguntaSeguridad = $this->CambioContrasena->PdoPostgreFunction('"sacs".update_preguntas_usuario', $array_data, $out);

        echo json_encode($out);

    }
}