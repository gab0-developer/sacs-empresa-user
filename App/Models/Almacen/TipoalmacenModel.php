<?php

class TipoalmacenModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('TIPOS_ALMACENES_VIEW',$connection);
    }
}


