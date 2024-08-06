<?php

class SolicitudEmpresaMensualModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".estadistica_solicitud_mensual',$connection);
    }
}