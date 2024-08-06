<?php

class ListOperacionesActivModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".actividad_operaciones_view',$connection);
        
    }
}