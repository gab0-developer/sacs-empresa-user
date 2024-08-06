<?php

class ListActivEconomicModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".activ_economic_empresas_view',$connection);
        
    }
}