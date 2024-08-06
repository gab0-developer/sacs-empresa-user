<?php

$sql = "SELECT * FROM sacs.permiso_regente_pdf('$permiso')";

$regente = pg_query($conn, $sql);

$sql2 = "SELECT * FROM sacs.permiso_info_pdf('$permiso')";

$datos_permiso = pg_query($conn, $sql2);

$sql3 = "SELECT * FROM sacs.permiso_qr_pdf('$permiso')";

$qr_data = pg_query($conn, $sql3);

header("content-type: text/html; charset=iso-8859-1");
require('planillas/pdf/fpdf.php');
require('planillas/phpqrcode/phpqrcode.php');

while($row = pg_fetch_assoc($qr_data)){
	$contenido = "Permiso: ".$row['permiso']."\n\n
RIF: ".$row['rif']."\n\n
Caducidad: ".$row['caducidad'];
	}
	$archivo_qr = "qr_".$permiso.".png";
	QRcode::png($contenido, $archivo_qr);

$pdf = new FPDF('P', 'mm', 'A4');
$pdf->AddPage();
$pdf->SetMargins(10, 10, 10);
$pdf->Image('planillas/img/membrete.png', 5, 5, 200);
$pdf->SetFont('Arial', '', 10);


// Añadir un texto
$pdf->Cell(40, 30, 'No.________');
$pdf->Cell(75);
$pdf->Cell(40, 30, 'Caracas,');
$pdf->Ln(10);
$pdf->Cell(40, 20, 'Ciudadano (a):');

$pdf->SetFont('Arial', 'B', 8);
$pdf->Ln(10);
while($row = pg_fetch_assoc($regente)){
$pdf->Cell(47, 8, "Dr(a). ".$row['regente'].":",0,1,'L',0);
$pdf->Cell(45, 0, "Matricula del M.P.P.S. No. ".$row['licencia'],0,1,'L',0);
$pdf->Cell(92, 8, 'IMPORTADORA - DISTRIBUIDORA DE PRODUCTOS COSMETICOS',0,1,'L',0);
$pdf->Cell(60, 1, $row['nombre_empresa'],0,1,'L',0);
$pdf->Cell(28, 5, "Rif. ".$row['rif'],0,1,'L',0);
$pdf->Cell(24, 3, $row['municipio']."-".$row['estado'],0,1,'L',0);
}


$pdf->SetFont('Arial', '', 10);
$pdf->Ln(3);

while($row2 = pg_fetch_assoc($datos_permiso)){
$pdf->MultiCell(190, 5, utf8_decode("Vista y leída la Comunicación recibida el día ".$row2['fecha_solicitud'].", Acta de Inspección de fecha ".$row2['fecha_acta']." y demás documentos, este Servicio Autónomo de Contraloría Sanitaria AUTORIZA, de acuerdo con lo dispuesto en el Artículo 17, Capítulo III, del Decreto No. 1.477 de fecha 18-02-1987, sobre Productos Cosméticos, publicado en Gaceta Oficial No. 33.669 de fecha 27-02-87, el FUNCIONAMIENTO de la Empresa IMPORTADORA - DISTRIBUIDORA DE PRODUCTOS COSMÉTICOS denominada ".$row2['nombre_empresa'].", (Dirección: ubicada en el ".$row2['direccion']."), Ciudad ".$row2['municipio'].", Estado ".$row2['estado'].", para Importar, Registrar, Representar, Almacenar, Distribuir y Comercializar Productos Cosméticos, legalmente Registrados en el País y está Registrada bajo el No. ".$row2['permiso']), '', 'J', 0);
$pdf->Ln(3);
}

$pdf->SetFont('Arial', 'B', 10);

$pdf->MultiCell(190, 5, utf8_decode('°Se le prohíbe Comprar Productos Cosméticos a Establecimientos que no están legalmente Registrados en este Servicio Autónomo de Contraloría Sanitaria, asimismo no deben adquirir Productos Cosméticos de Procedencia Dudosa y que no estén Legalmente Registrados.'), '' ,'L', 0);
$pdf->Ln(3);

$pdf->SetFont('Arial', '', 10);

$pdf->MultiCell(190, 5, utf8_decode('Se le advierte que debe dar estricto cumplimiento a lo contemplado en el referido Decreto, en caso contrario este Servicio Autónomo de Contraloría Sanitaria aplicará las sanciones establecidas en el mismo y en la Ley Orgánica de Salud, publicada en la Gaceta Oficial No. 5.263, Extraordinaria el día 17-09.98.'), '' ,'L', 0);
$pdf->Ln(50);

$pdf->Image('planillas/img/firmaMarliz.jpg', 80, 140, 50);

$pdf->Cell(0,10,utf8_decode('Atentamente,'),0,1,'C');
$pdf->SetFont('Arial', 'B', 8);
$pdf->MultiCell(190, 4, utf8_decode('ABG. MARLÍZ DÍAZ FUENTES,
	Directora General del Servicio Autónomo de Contraloría Sanitaria
	Decreto Nº 4.650 de fecha 04/03/2022 publicado en la Gaceta Oficial Nº 42.330 del 04 de marzo de 2022'), '' ,'C', 0);
$pdf->Ln(1);
$pdf->SetFont('Arial', '', 8);

$pdf->Cell(45);
$pdf->MultiCell(100, 4, utf8_decode('DIRECTOR (E) DE REGULACION Y CONTROL DE
	DROGAS, MEDICAMENTOS Y COSMETICOS


	
	DR. JESUS HERRERA E

	'),1,'C',0);
$pdf->Ln(21);

$pdf->MultiCell(190, 4, utf8_decode('Servicio Autónomo de Contraloría Sanitaria 
	Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela
	Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),'','C',0);

$pdf->Image("qr_".$permiso.".png", 160, 205, 35);
$pdf->Image('planillas/img/juntos_por_cada_latido-removebg-preview.png', 150, 250, 50);

$pdf->Output('I' , 'Trámites de inspección-8 Traslado y funcionamiento de almacenadora');

pg_free_result($regente);
pg_free_result($datos_permiso);
pg_free_result($qr_data);

?>