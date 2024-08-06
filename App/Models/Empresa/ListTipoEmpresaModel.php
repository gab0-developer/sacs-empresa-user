<?php

class ListTipoEmpresaModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".tip_empresa_view',$connection);
        
    }
}