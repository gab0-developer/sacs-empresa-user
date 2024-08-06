<?php

class ListActivProductosModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".actividad_tipo_producto_view',$connection);
        
    }
}