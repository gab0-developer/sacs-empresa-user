<?php

include 'barcode_qr/barcode.php';

// Inidcamos la creacion de instacia para degenerar el codigo
$generator = new barcode_generator();
// tipo de simbolo "QR"
$symbology= 'qr';
// dato que mostrara el codigo QR una vez escaneado
$data = 'P123456789';

// Opciones para el QR > En este caso indicamos su tamaño
$options = array(
    'module_width' => 5,
    'module_height' => 5
);
// MOSTRAR CODIGO QR    
header('Content-Type: image/svg+xml');
$svg = $generator->render_svg($symbology, $data, $options);
echo $svg;