<?php

class AlmacenModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('ALMACEN_VIEW',$connection);
    }
}