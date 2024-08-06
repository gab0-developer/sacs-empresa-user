<?php

class ListSolicitudMontoPagoModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".solicitud_empresa_precio_view',$connection);
        
    }
}