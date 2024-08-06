<?php

class ListTipoDominioModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".tipo_dominio_view',$connection);
        
    }
}