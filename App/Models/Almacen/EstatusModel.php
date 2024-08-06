<?php

class EstatusModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('ESTATUS_ALMACENES',$connection);
    }
}


