<?php

class CambioContrasenaModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".preguntas_usuario_view',$connection);
    }
}