<?php

class PerfilCantidadSolicitudModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".cantidad_solicitud_empresas',$connection);
    }
}