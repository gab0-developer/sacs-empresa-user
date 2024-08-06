<?php

class LoginSessionModel extends Orm {
    public function __construct($connection)
    {
        // parent::__construct('"CACS".USUARIOS',$connection);
        parent::__construct('"sacs".usuario_loging_view',$connection);
    }
}