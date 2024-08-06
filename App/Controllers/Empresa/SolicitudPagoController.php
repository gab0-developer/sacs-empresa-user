<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/SolicitudPagoModel.php';

Class SolicitudPagoController {

    private $SolicitudPago;

    public function __construct($conexion)
    {
        $this->SolicitudPago = new SolicitudPagoModel($conexion);
    }

    public function Table (){
        $listSolicitudPago =  $this->SolicitudPago->getSelect('*');
        echo json_encode($listSolicitudPago);
    }

    public function InsertCredencialesPagoSolicitud ()
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
            'i_nro_solicitud' => $body['nrosolicitud'],
            'i_tipo_banco' => $body['tipoBanco'],
            'i_monto_solicitud' => $body['monto_bs'],
            'i_referencia_bancaria' => $body['referenciaBancaria'],
            'i_fecha_pago_solicitud_realizada' => $body['fechaPagoRealizado']

        ];
        
        $InsertTipSolicitud = $this->SolicitudPago->PdoPostgreFunction('"sacs".register_pago_solicitud', $array_data, $out);

        // if($InsertPrueba){
        //     echo 'el procedimiento se ejecuta correctamente';
            
        // }else{
        //     // var_dump($InsertPrueba);
        //     echo 'error para ejecutar el procedimiento';
           
        // }

        echo json_encode($out);

    }
   

}










