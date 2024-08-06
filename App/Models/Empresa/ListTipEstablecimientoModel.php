<?php

class ListTipEstablecimientoModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".tipo_establecimiento_view',$connection);
        
    }
}