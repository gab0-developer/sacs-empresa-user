<?php

class ListSolicitudesAprobadasModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".solicitud_empresas_aprobadas_view',$connection);
        
    }
}