<?php

class listMunicipioModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".municipios_view',$connection);
    }
}