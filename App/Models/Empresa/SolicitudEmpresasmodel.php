<?php

class SolicitudEmpresasmodel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".solicitud_empresas_view',$connection);
    }
}