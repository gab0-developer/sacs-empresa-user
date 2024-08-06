<?php

class PisosModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('PISOS_ALMACENES_VIEW',$connection);
    }
}


