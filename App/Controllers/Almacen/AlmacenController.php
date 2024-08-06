<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Almacen/AlmacenModel.php';

Class AlmacenController {

    private $almacen;

    public function __construct($conexion)
    {
        $this->almacen = new AlmacenModel($conexion);
    }

    public function Table ()
    {
        $listalmacen =  $this->almacen->getSelect('*');
        echo json_encode($listalmacen);
    }
    public function Insert ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        $array_data = [
            ':i_tipo_almacen' => $body['tipoalmacen'],
            ':i_piso_almacen' => $body['pisoalmacen'],
            ':i_pasillo_almacen' => $body['pasilloalmacen'],
            ':i_observacion' => $body['observacion'],
            ':i_estatus' => $body['estatusalmacen']
            
        ];

        $InsertAlmacen = $this->almacen->PdoProcedure('insert_almacen(:i_tipo_almacen,
        :i_piso_almacen,
        :i_pasillo_almacen,
        :i_observacion,
        :i_estatus,
        :retorno)', $array_data, $out);

        echo json_encode($out);
     
    }
    public function Update ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        $array_data = [
            ':u_pk_almacen' => $body['pkalmacen'],
            ':u_tipo_almacen' => $body['almacen'],
            ':u_piso_almacen' => $body['piso'],
            ':u_pasillo_almacen' => $body['pasillo'],
            ':u_observacion' => $body['observacion'],
            ':u_estatus' => $body['estatus']
            
        ];

        $InsertAlmacen = $this->almacen->PdoProcedure('update_almacen(:u_pk_almacen,
        :u_tipo_almacen,
        :u_piso_almacen,
        :u_pasillo_almacen,
        :u_observacion,
        :u_estatus,
        :retorno)', $array_data, $out);

        echo json_encode($out);
     
    }
    public function Delete ()
    {
        $Post_Data = file_get_contents('php://input');
        $body = json_decode($Post_Data, true);

        $out = 0;

        $array_data = [
            ':e_pk_almacen' => $body['pkalmacen']
        ];

        $InsertAlmacen = $this->almacen->PdoProcedure('delete_almacen(:e_pk_almacen,
        :retorno)', $array_data, $out);

        echo json_encode($out);
     
    }
}