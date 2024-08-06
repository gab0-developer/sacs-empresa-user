<?php

class SolicitudRenovacionModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".solicitudes_renovar_view',$connection); //aca hago uso de tabla
    }
}