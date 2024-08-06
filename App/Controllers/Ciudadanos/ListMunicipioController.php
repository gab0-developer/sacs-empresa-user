<?php

// require_once __DIR__ . '/../Models/Inv_Medicamento/ListMedicamentoModel.php';
require_once __DIR__ . '/../../Models/Ciudadano/ListMunicipioModel.php';

Class ListMunicipioController {

    private $Municipios;

    public function __construct($conexion)
    {
        $this->Municipios = new ListMunicipioModel($conexion);
    }

    public function Table (){
        $listMunicipios =  $this->Municipios->getSelect('*');
        echo json_encode($listMunicipios);
    }
}