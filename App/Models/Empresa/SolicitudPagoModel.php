<?php

class SolicitudPagoModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".pagos_solicitud',$connection); //aca hago uso de tabla
    }
}