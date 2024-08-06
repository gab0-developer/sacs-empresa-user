<?php

class PracticaModel extends Orm
{
    public function __construct($connection)
    {
        parent::__construct('PRACTICA', $connection);
    }
}
