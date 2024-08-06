<?php

class PasillosModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('PASILLOS_ALMACENES_VIEW',$connection);
    }
}


