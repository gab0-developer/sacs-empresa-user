<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/TipoAlmacenModel.php';
require_once __DIR__ . '/../../Models/Empresa/SolicitudRenovacionModel.php';

Class SolicitudRenovacionController {

    private $SolicitudRenovacion;

    public function __construct($conexion)
    {
        $this->SolicitudRenovacion = new SolicitudRenovacionModel($conexion);
    }
    public function search (){
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data,true);

        $dataSolicitudRenovacion =  $this->SolicitudRenovacion->getSelectID('*','nro_permiso',$body['nro_permiso']);
        echo json_encode($dataSolicitudRenovacion);
    }
    public function InsertRenovacionSolicitud ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;
        
        $array_data = [
            
            // 'i_tipo_solicitud' => $body['tiposolicitud'] ,
            // 'i_rif_empresa' => 'J-100',
            // 'i_nro_solicitud' => 'DDMCAR20241000000100',
            // 'i_tipo_banco' => '1',
            // 'i_monto_solicitud' => '20.334',
            // 'i_referencia_bancaria' => '12530120487965472026',
            // 'i_fecha_pago_solicitud_realizada' => '2024-05-28'
            
            'i_rif_empresa' => $body['rif_empresa'],
            'i_nro_permiso' => $body['nro_permiso']

        ];
        
        $InsertTipSolicitud = $this->SolicitudRenovacion->PdoPostgreFunction('"sacs".register_renovacion_solicitud', $array_data, $out);

        // if($InsertPrueba){
        //     echo 'el procedimiento se ejecuta correctamente';
            
        // }else{
        //     // var_dump($InsertPrueba);
        //     echo 'error para ejecutar el procedimiento';
           
        // }

        echo json_encode($out);

    }
    
}