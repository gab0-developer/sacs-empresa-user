<?php

class PaisesModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".paises_view',$connection);
        
    }
}