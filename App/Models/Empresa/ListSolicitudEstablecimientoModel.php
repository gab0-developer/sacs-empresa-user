<?php

class ListSolicitudEstablecimientoModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".nombre_solicitud_con_establecimiento_view',$connection);
        
    }
}