<?php

class ListRegMercantilModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".tip_reg_mercantil',$connection);
        
    }
}