<?php

class ListCoordinacionAreaModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".areas_coordinacion_view',$connection);
        // parent::__construct('"sacs".coordinacion_area_view',$connection);
        
    }
}