<?php

require_once __DIR__ . '/../../Models/Empresa/EmpresaModel.php';

Class EmpresaController {

    private $Empresa;

    public function __construct($conexion)
    {
        $this->Empresa = new EmpresaModel($conexion);
    }

    public function Table ()
    {
        $listEmpresa =  $this->Empresa->getSelect('*');
        echo json_encode($listEmpresa);
    }


    public function Insert ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        // $array_data = [
        //     ':i_tipo_almacen' => $body['tipoalmacen'],
        //     ':i_estatus' => $body['estatusalmacen']
            
        // ];
        $array_data = [
            'i_rif_empresa'  => $body['rifEmpresa'], 
            'i_nombre_empresa'  =>  $body['nombreEmpresa'], 
            'i_tip_empresa'  =>  $body['selectTipEmpresa'], 
            'i_email_empresa'  =>  $body['emailFirstEmpresa'], 
            'i_email_second_empresa'  =>  $body['emailsecondempresa'], 
            'i_parroquia_empresa'  => $body['selectParroquia'], 
            'i_direccion_empresa'  => $body['direccionEmpresa'], 
            'i_tlf_empresa'  => $body['tlfFirstEmpresa'], 
            'i_tlf_second_empresa'  => $body['tlfSecondEmpresa'], 
            'i_area_empresa'  => $body['selectAreaEmpresa'], 
            'i_activ_economic_empresa'  => $body['SelectAreaActivEmpresa'], 
            'i_cedula_rep_legal'  => $body['representanteLegal'],

            'i_cedula_regente' => $body['regente'],
            'i_profesion_regente' => $body['profesionregente'],
            'i_nro_matricula_regente' => $body['matricularegente'],
            'i_parroquia_regente' => $body['selectParroquiaRegente'],
            'i_direccion_regente' => $body['direccionregente'],
            'i_tlf_regente' => $body['tlfFirstregente'],
            'i_tlf_second_regente' => $body['tlfsecondregente'],
            'i_email_regente' => $body['emailfirstregente'],
            'i_email_second_regente' => $body['emailsecondregente'],
            
            
            'i_tip_reg_mercantil'  => $body['SelectRegMercantilEmpresa'], 
            'i_cedula_propietario'  => $body['propietario'], 
            'i_cargo_propietario'  => $body['cargoPropietario'], 
            'i_parroquia_propietario'  => $body['selectParroquiaPropietario'], 
            'i_direccion_propietario'  => $body['direccionEmpresaPropietario'], 
            'i_tlf_propietario'  => $body['tlfFirstEmpresaPropietario'], 
            'i_tlf_second_propietario'  => $body['tlfSecondEmpresaPropietario'], 
            'i_email_propietario'  => $body['emailFirstEmpresaPropietario'], 
            'i_email_second_propietario'  => $body['emailsecondempresaPropietario'], 
            'i_estatus_usuario'  => '1', 
            'i_contrasena_usuario'  => $body['contrasena'], 
            'i_verificado_usuario'  => '1', 
            'i_primera_pregunta'  => $body['firstPregunta'], 
            'i_primera_respuesta'  => $body['firstRespuesta'], 
            'i_segunda_pregunta'  => $body['secondPregunta'], 
            'i_segunda_respuesta'  => $body['secondRespuesta'], 
            'i_tercera_pregunta'  => $body['terceraPregunta'], 
            'i_tercera_respuesta'  => $body['terceraRespuesta'], 
            'i_cuarta_pregunta'  => $body['cuartaPregunta'], 
            'i_cuarta_respuesta'  => $body['cuartaRespuesta']
            
        ];
        // $array_data = [
        //     'i_rif_empresa'  => 'j-23php', 
        //     'i_nombre_empresa'  => 'empresa_PHP_POO', 
        //     'i_tip_empresa'  => 'MIXTA', 
        //     'i_email_empresa'  => 'i_email_empresapre', 
        //     'i_email_second_empresa'  => 'i_emailempresapre', 
        //     'i_parroquia_empresa'  => '1339', 
        //     'i_direccion_empresa'  => 'i_direccion_pre', 
        //     'i_tlf_empresa'  => '256', 
        //     'i_tlf_second_empresa'  => '652', 
        //     'i_area_empresa'  => '2', 
        //     'i_activ_economic_empresa'  => '4', 
        //     'i_cedula_rep_legal'  => 'V027340602', 
        //     'i_tip_reg_mercantil'  => '2', 
        //     'i_cedula_propietario'  => 'V027340602', 
        //     'i_cargo_propietario'  => 'cargopreguntas', 
        //     'i_parroquia_propietario'  => '1342', 
        //     'i_direccion_propietario'  => 'direpropietario', 
        //     'i_tlf_propietario'  => '147', 
        //     'i_tlf_second_propietario'  => '741', 
        //     'i_email_propietario'  => 'email_preguntas', 
        //     'i_email_second_propietario'  => 'emailseieuserpreg', 
        //     'i_estatus_usuario'  => '1', 
        //     'i_contrasena_usuario'  => 'pass12345', 
        //     'i_verificado_usuario'  => '1', 
        //     'i_primera_pregunta'  => 'MI COLOR FAVORITO', 
        //     'i_primera_respuesta'  => 'VERDE', 
        //     'i_segunda_pregunta'  => 'BEBIDA FAVORITA', 
        //     'i_segunda_respuesta'  => 'ALCOHOL', 
        //     'i_tercera_pregunta'  => 'COMIDA FAVORITA', 
        //     'i_tercera_respuesta'  => 'ENROLLADOS', 
        //     'i_cuarta_pregunta'  => 'MASCOTA FAVORITA', 
        //     'i_cuarta_respuesta'  => 'MICHU', 
            
        // ];


        $InsertPrueba = $this->Empresa->PdoPostgreFunction('"sacs".insert_empresa_usuario_reg_fi', $array_data, $out);

        // if($InsertPrueba){
        //     echo 'el procedimiento se ejecuta correctamente';
            
        // }else{
        //     echo 'error para ejecutar el procedimiento';
           
        // }

        echo json_encode($out);
     
    }

    // esta es la que uso
    public function RegistrarEmpresa ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        // $array_data = [
        //     ':i_tipo_almacen' => $body['tipoalmacen'],
        //     ':i_estatus' => $body['estatusalmacen']
            
        // ];
        $array_data = [
            // 'i_rif_empresa'  => $body['rifEmpresa'], 
            'i_rif_empresa'  => $body['rifEmpresa'], 
            'i_nombre_empresa' => $body['nombreempresa'] ,
            'i_tip_empresa' => $body['tipempresa'] ,
            'i_tlf_empresa' => $body['tlfempresa']  ,
            'i_tlf_second_empresa' => $body['tlfsecondempresa'] ,
            'i_email_empresa' => $body['emailempresa'] ,
            'i_email_segundario_empresa' =>  $body['emailsecondempresa'],
            'i_parroquia_empresa' =>  $body['parroquiaempresa'],
            // ----------------
            'i_urbanizacion_empresa' => $body['urbanizacionempresa'] ,
            'i_avenida_empresa' => $body['avenidadempresa'] ,
            'i_edificio_empresa' => $body['edificioempresa'] ,
            'i_piso_local_empresa' => $body['pisolocalempresa'] ,
            'i_referencia_empresa' => $body['referenciaempresa'] ,
            'i_codigo_postal_empresa' => $body['codigopostalempresa'],

            'i_tip_reg_mercantil' => $body['tipregmercantil'] ,
            'i_reg_mercantil' => $body['regmercantil'] ,
            'i_circunscripcion_mercantil' => $body['circunscripcionmercantil'] ,
            'i_tomo_mercantil' => $body['tomomercantil'] ,
            'i_numero_mercantil' => $body['numeromercantil'] ,
            'i_fecha_protocolizacion_mercantil' => $body['fechaprotocolizacionmercantil'] ,

            'i_document_patente' => $body['documentpatente'] ,
            'i_numero_patente' => $body['numeropatente'] ,
            'i_actividad_patente' => $body['actividadpatente'] ,
            'i_fecha_vencimiento_patente' => $body['fechavencimientopatente'] ,
            'i_fecha_otorgacion_patente' => $body['fechaotorgacionpatente'] ,
            'i_estado_patente' => $body['estadopatente'] ,
            'i_municipio_patente' => $body['municpiopatente'] ,

            'i_cedula_primer_propietario' => $body['cedulaprimerpropietairo'] ,
            'i_cargo_primer_propietario' => $body['cargoprimerpropietario'] ,
            'i_parroquia_primer_propietario' =>  $body['parroquiaprimerpropietario'],
            'i_tlf_primer_propietario' => $body['tlfprimerpropietario'] ,
            'i_tlf_second_primer_propietario' =>$body['tlfdosprimerpropietario']  ,
            'i_email_primer_propietario' => $body['emailprimerpropietario'] ,
            'i_email_second_primer_propietario' =>  $body['emaildosprimerpropietario'],
            'i_cedula_segundo_propietario' => $body['cedulasecondpropietario'] ,
            'i_cargo_segundo_propietario' => $body['cargosecondpropietario']  ,
            'i_parroquia_segundo_propietario' => $body['parroquiasecondpropietario']  ,
            'i_tlf_segundo_propietario' => $body['tlfsecondpropietario']  ,
            'i_tlf_second_segundo_propietario' => $body['tlfdossecondpropietario']  ,
            'i_email_segundo_propietario' => $body['emailsecondropietario']  ,
            'i_email_second_segundo_propietario' => $body['emaildossecondropietario']  ,

            'i_cedula_poder' => $body['cedulapoder']  ,
            'i_estatus_poder' => $body['estatuspoder']  ,
            'i_numero_poder' => $body['numeropoder']  ,
            'i_tomo_poder' => $body['tomopoder']  ,


            'i_cedula_regente' => $body['cedularegente'],
            'i_cedula_rep_legal' => $body['cedulareplegal'] ,
            'i_contrasena_usuario' => hash('sha256',$body['contrasena']) ,
            'i_primera_pregunta' => $body['firstpregunta'] ,
            'i_primera_respuesta' => $body['firstrespuesta'] ,
            'i_segunda_pregunta' =>  $body['secondpregunta'],
            'i_segunda_respuesta' =>  $body['secondrespuesta'],
            'i_tercera_pregunta' =>  $body['tercerapregunta'],
            'i_tercera_respuesta' => $body['tercerarespuesta'] ,
            'i_cuarta_pregunta' => $body['cuartapregunta'] ,
            'i_cuarta_respuesta' => $body['cuartarespuesta'] 
        ];
        

        $InsertPrueba = $this->Empresa->PdoPostgreFunction('"sacs".registrar_empresas', $array_data, $out);

        // if($InsertPrueba){
        //     echo 'el procedimiento se ejecuta correctamente';
            
        // }else{
        //     echo 'error para ejecutar el procedimiento';
           
        // }

        echo json_encode($out);
     
    }
   


    
}