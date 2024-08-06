<?php

class ListNombreSolicitudModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".nombre_solicitud',$connection);
        
    }
}