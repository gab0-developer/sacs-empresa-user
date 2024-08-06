<?php

class ListSolicitudesEmpresaPagoPendienteModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"sacs".solicitud_empresa_precio_view',$connection);
        parent::__construct('"sacs".solicitud_empresas_pago_pendiente_view',$connection);
        
    }
}