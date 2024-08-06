<?php

class ListTipoSolicitudModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".tipo_solicitud',$connection);
        
    }
}