<?php

require_once __DIR__ . '/../../Models/Pagehome/PageModel.php';

Class PageController {

    private $page;

    public function __construct($conexion)
    {
        $this->page = new PageModel($conexion);
    }

    public function Table ()
    {
        $listpage =  $this->page->getSelect('*');
        echo json_encode($listpage);
    }
                    
    public function Deploy (){
        echo "API REST Desplegada Éxitosamente";
    }


    public function Insert ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        $array_data = [
            'i_rif_empresa'  => 'j-23php', 
            'i_nombre_empresa'  => 'empresa_PHP_POO', 
            'i_tip_empresa'  => 'MIXTA', 
            'i_email_empresa'  => 'i_email_empresapre', 
            'i_email_second_empresa'  => 'i_emailempresapre', 
            'i_parroquia_empresa'  => '1339', 
            'i_direccion_empresa'  => 'i_direccion_pre', 
            'i_tlf_empresa'  => '256', 
            'i_tlf_second_empresa'  => '652', 
            'i_area_empresa'  => '2', 
            'i_activ_economic_empresa'  => '4', 
            'i_cedula_rep_legal'  => 'V027340602', 
            'i_tip_reg_mercantil'  => '2', 
            'i_cedula_propietario'  => 'V027340602', 
            'i_cargo_propietario'  => 'cargopreguntas', 
            'i_parroquia_propietario'  => '1342', 
            'i_direccion_propietario'  => 'direpropietario', 
            'i_tlf_propietario'  => '147', 
            'i_tlf_second_propietario'  => '741', 
            'i_email_propietario'  => 'email_preguntas', 
            'i_email_second_propietario'  => 'emailseieuserpreg', 
            'i_estatus_usuario'  => '1', 
            'i_contrasena_usuario'  => 'pass12345', 
            'i_verificado_usuario'  => '1', 
            'i_primera_pregunta'  => 'MI COLOR FAVORITO', 
            'i_primera_respuesta'  => 'VERDE', 
            'i_segunda_pregunta'  => 'BEBIDA FAVORITA', 
            'i_segunda_respuesta'  => 'ALCOHOL', 
            'i_tercera_pregunta'  => 'COMIDA FAVORITA', 
            'i_tercera_respuesta'  => 'ENROLLADOS', 
            'i_cuarta_pregunta'  => 'MASCOTA FAVORITA', 
            'i_cuarta_respuesta'  => 'MICHU', 
            
        ];


        $InsertPrueba = $this->page->PdoPostgreFunction('"sacs".insert_empresa_usuario_p_fi', $array_data, $out);

        // if($InsertPrueba){
        //     echo 'el procedimiento se ejecuta correctamente';
            
        // }else{
        //     echo 'error para ejecutar el procedimiento';
           
        // }

        echo json_encode($out);
     
    }
   


    
}