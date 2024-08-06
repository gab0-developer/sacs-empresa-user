<?php

class CiudadanoModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".ciudadanos_view',$connection);
        
    }
}