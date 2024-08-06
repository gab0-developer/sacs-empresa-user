<?php

class ListPresentacionProductImportModel extends Orm {
    public function __construct($connection)
    {
        parent::__construct('"sacs".presentacion_product_import_view',$connection);
        
    }
}