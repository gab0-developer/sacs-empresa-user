<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Empresa/SolicitudEmpresasmodel.php';

Class SolicitudEmpresaController {

    private $SolicEmpresa;

    public function __construct($conexion)
    {
        $this->SolicEmpresa = new SolicitudEmpresasmodel($conexion);
    }

    public function Table (){
        $listSolicEmpresa =  $this->SolicEmpresa->getSelect('*');
        echo json_encode($listSolicEmpresa);
    }
    // public function Table (){
    //     $Post_Data = file_get_contents('php://input');
    //     $body = json_decode($Post_Data,true);

    //     $listSolicEmpresa =  $this->SolicEmpresa->getSelectID('*','rif_empresa',$body['rifempresa']);
    //     echo json_encode($listSolicEmpresa);
    // }


    public function InsertTipSolicitud ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;
        
        $array_data = [
            
            // 'i_tipo_solicitud' => $body['tiposolicitud'] ,
            'i_rif_empresa' => $body['rifempresa'],
            'i_tipo_solicitud' => $body['tiposolicitud'],
            'i_nombre_solicitud' => $body['nombresolicitud'],
            'i_area_empresa' => $body['areaempresa'],
            'i_activ_economic_empresa' => $body['activempresa']

        ];
        
        $InsertTipSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_solicitud_empresa', $array_data, $out);

        // if($InsertPrueba){
        //     echo 'el procedimiento se ejecuta correctamente';
            
        // }else{
        //     // var_dump($InsertPrueba);
        //     echo 'error para ejecutar el procedimiento';
           
        // }

        echo json_encode($out);

    }
    public function InsertCategoriaSolicitud ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;
        
        $array_data = [
            
            // 'i_tipo_solicitud' => $body['tiposolicitud'] ,
            'i_rif_empresa' => $body['rifempresa'],
            'i_categoria_empresa' => $body['categoria']

        ];
        
        $InsertCategoriaSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_detalle_solicitud_categoria', $array_data, $out);

        echo json_encode($out);

    }
    // public function InsertOperacionesSolicitud()
    // {
    //     $Post_Data = file_get_contents('php://input');
    //     $body = json_decode($Post_Data, true);

    //     $out = 0;

    //     $array_data=[
    //         'i_rif_empresa' => $body['rifempresa'],
    //         'i_categoria_empresa' => $body['pkcategoria'],
    //         'i_operaciones_empresa' => $body['pk_operaciones']
    //     ];
    //     // var_dump($array_data);
    //     $InsertOperacionSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_detalle_solicitud_operaciones', $array_data, $out);

    //     echo json_encode($out);
    
    // }
    public function InsertOperacionesSolicitud()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        if (is_array($body) && count($body) > 0) {
            foreach($body as $bodyvalue){
                $array_data=[
                    'i_rif_empresa' => $bodyvalue['rifempresa'],
                    'i_categoria_empresa' => $bodyvalue['pkcategoria'],
                    'i_operaciones_empresa' => $bodyvalue['pk_operaciones']
                ];
                // var_dump($array_data);
                $InsertOperacionSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_detalle_solicitud_operaciones', $array_data, $out);
            }
        }else{
            echo "No se encontraron datos para procesar.";
        }

        echo json_encode($out);
    
    }
    
    public function InsertProductosSolicitud()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;
        // $body = [
                    
        //         [
        //             'rifempresa' => 'J-890',
        //             'pk_tip_producto' => 1,
                    
        //         ],
        //         [
        //             'rifempresa' => 'J-890',
        //             'pk_tip_producto' => 2,

        //         ],
        //         [
        //             'rifempresa' => 'J-890',
        //             'pk_tip_producto' => 3,

        //         ],
        //         [
        //             'rifempresa' => 'J-890',
        //             'pk_tip_producto' => 5,

        //         ]
        // ];

        if (is_array($body) && count($body) > 0) {
            foreach($body as $bodyvalue){
                $array_data=[
                    'i_rif_empresa' => $bodyvalue['rifempresa'],
                    'i_tip_producto_empresa' => $bodyvalue['pk_tip_producto']
                ];
                // var_dump($array_data);
                $InsertOperacionSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_detalle_solicitud_productos', $array_data, $out);
            }
        }else{
            echo "No se encontraron datos para procesar.";
        }

        echo json_encode($out);
    
    }
    
    public function InsertPrimerEstablecimientoSolicitud ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;
        
        $array_data = [
            
            // 'i_tipo_solicitud' => $body['tiposolicitud'] ,
            'i_rif_empresa' => $body['rifempresa'] ,
            'i_tip_establecimiento' => $body['tipestablecimiento'] ,
            'i_dominio_establecimiento' => $body['dominio'] ,
            'i_parroquia_establecimiento' => $body['parroquia'] ,
            'i_tlf_establecimiento' => $body['tlf'] ,
            'i_tlf_dos_establecimiento' => $body['tfldos'] ,
            'i_email_establecimiento' => $body['email'] ,
            'i_email_dos_establecimiento' => $body['emaildos'] ,
            'i_observ_establecimiento' => $body['observacion'] ,
            'i_estatus_establecimiento' => $body['estatus'] ,
            'i_zona_establecimiento' => $body['zonaestablecimiento'] ,
            'i_ruta_establecimiento' => $body['rutaestablecimiento'] ,
            'i_espacio_establecimiento' => $body['espacioestablecimiento'] ,
            'i_nivel_establecimiento' => $body['nivelestablecimiento'] ,
            'i_codigo_postal_establecimiento' => $body['codigoestablecimiento'] ,
            'i_metros_cuadrados_establecimiento' => $body['metroscuadradosestablecimiento'] ,
            'i_referencia_establecimiento' => $body['referenciaestablecimiento'] ,

        ];
        
        $InsertCategoriaSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_detalle_solicitud_establecimiento', $array_data, $out);

        echo json_encode($out);

    }

    public function InsertFormasProductSolicitud()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        if (is_array($body) && count($body) > 0) {
            foreach($body as $bodyvalue){
                $array_data=[
                    'i_rif_empresa' => $bodyvalue['rifempresa'],
                    'i_forma_producto_empresa' => $bodyvalue['pk_forma_product']
                ];
                // var_dump($array_data);
                $InsertFormaProductSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_detalle_solicitud_forma', $array_data, $out);
            }
        }else{
            echo "No se encontraron datos para procesar.";
        }

        echo json_encode($out);
    
    }
    public function InsertProductImportSolicitud()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        if (is_array($body) && count($body) > 0) {
            foreach($body as $bodyvalue){
                $array_data=[
                    'i_rif_empresa' => $bodyvalue['rifempresa'],
                    'i_nombre_producto' => $bodyvalue['NombreProductoimportado'],
                    'i_registro_sanitario' => $bodyvalue['registroSanitarioProductImport'],
                    'i_laboratorio_fabircante' => $bodyvalue['LaboratorioFabricanteproductimport'],
                    'i_pais_procedencia' => $bodyvalue['PaisProcedenteProductImport'],
                    'i_propietario' => $bodyvalue['datacedulapropietario'],
                    'i_farmaceutico_patrocinandte' => $bodyvalue['FarmaceuticoProductImport'],
                    'i_presentacion_producto' => $bodyvalue['PresentacionProductImport']

                ];
                // var_dump($array_data);
                $InsertProductImportSolicitud = $this->SolicEmpresa->PdoPostgreFunction('"sacs".register_product_import', $array_data, $out);
            }
        }else{
            echo "No se encontraron datos para procesar.";
        }

        echo json_encode($out);
    
    }
    
    //     $Post_Data = file_get_contents('php://input');
    //     $body = json_decode($Post_Data, true);

    //     $out = 0;
        
    //     $array_data = [

    //         'tipo_solicitud' => $body['tiposolicitud'], 
    //         'nombre_sol' => $body['nombreSolicitud'], 
    //         'act_economica' => $body['pk_activ_economic'], 
    //         'categoria' => $body['selectCategoria'], 
    //         'empresa' => $body['pk_empresa'], 
    //         'regente' => $body['pk_regente'], 
    //         'i_catastro' => $body['pk_catastro'], 
    //         'i_area' => $body['pk_area'], 
    //         'forma' => $body['forma'], 
    //         'operacion' => $body['operacion'], 
    //         'tipo_producto' => $body['tipo_producto'], 
    //         'establecimiento' => $body['establecimiento'], 
    //         'observacion_soli' => $body['observsolicitud'], 

            
    //     ];
        


    //     $InsertPrueba = $this->SolicEmpresa->PdoPostgreFunction('"sacs".registrar_solicitud_V2', $array_data, $out);

    //     // if($InsertPrueba){
    //     //     echo 'el procedimiento se ejecuta correctamente';
            
    //     // }else{
    //     //     echo 'error para ejecutar el procedimiento';
           
    //     // }

    //     echo json_encode($out);

    // }

}