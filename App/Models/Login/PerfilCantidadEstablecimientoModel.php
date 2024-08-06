<?php

class PerfilCantidadEstablecimientoModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".cantidad_establecimiento_empresas',$connection);
    }
}