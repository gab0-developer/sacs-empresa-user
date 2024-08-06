<?php

class ListAreasEmpresaModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".actividad_con_area_view',$connection);
        
    }
}