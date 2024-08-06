<?php

class ListEstatusModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".tipo_estatus_view',$connection);
        
    }
}