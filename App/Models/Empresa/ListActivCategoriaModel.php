<?php

class ListActivCategoriaModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".actividad_categoria_view',$connection);
    }
}