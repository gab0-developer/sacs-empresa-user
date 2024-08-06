<?php

class ListBancosModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".list_bancos_view',$connection);
        
    }
}