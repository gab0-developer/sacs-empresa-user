<?php

class ListActivAreaModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".actividad_area_coor_view',$connection);
        // parent::__construct('"sacs".actividad_area_view',$connection);
        
    }
}