<?php

class ListFormasProductModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".area_formas_view',$connection);
    }
}