<?php

class ListCoordinacionModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".coordinacion_view',$connection);
        
    }
}