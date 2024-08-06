<?php

class ListPerfilPropietarioEmpresaModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".perfil_propietario_empresa_view',$connection);
    }
}