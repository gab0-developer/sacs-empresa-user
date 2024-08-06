<?php

class ListPerfilEmpresaUserModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".perfil_usuario_empresa_view',$connection);
    }
}