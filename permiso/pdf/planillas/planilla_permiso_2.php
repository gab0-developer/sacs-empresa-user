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
$pdf->Cell(50, 8, "REGENTE DE LA ALMACENADORA",0,1,'L',0);
$pdf->Cell(60, 1, $row['nombre_empresa'],0,1,'L',0);
$pdf->Cell(28, 5, "Rif. ".$row['rif'],0,1,'L',0);
$pdf->Cell(24, 3, $row['municipio']."-".$row['estado'],0,1,'L',0);
}

$pdf->SetFont('Arial', '', 10);
$pdf->Ln(3);

while($row2 = pg_fetch_assoc($datos_permiso)){
$pdf->MultiCell(190, 4, utf8_decode("Vista y leída la Comunicación recibida el día ".$row2['fecha_solicitud'].", Acta de Inspección de fecha ".$row2['fecha_acta']." y demás documentos, este Servicio Autónomo de Contraloría Sanitaria AUTORIZA, de acuerdo con lo Establecido en los Artículos 29 y 30 del Reglamento de la Ley de Ejercicio de la Farmacia y la Norma de Buenas Prácticas de Distribución, Gaceta Oficial No. 37.966 de fecha 23-06-2004, la INSTALACIÓN y FUNCIONAMIENTO de la ALMACENADORA denominada ".$row2['nombre_empresa'].", para la Recepción, Almacenamiento y Distribución de Medicamentos legalmente Registrados en el País, (Dirección: ubicada en el ".$row2['direccion']."), Ciudad ".$row2['municipio'].", Estado ".$row2['estado']." y está Registrada bajo el No. ".$row2['permiso'].", Se le participa, que deben ajustarse a lo establecido en el Capítulo III 'De la Promoción de los Medicamentos, Artículos 44, 45 y 46 de la Ley de Medicamentos publicada en la Gaceta Oficial No. 37.006 de fecha 03-08-2000.'"), '', 'J', 0);
$pdf->Ln(3);
}	

$pdf->MultiCell(190, 4, utf8_decode('Se le advierte, que deben ajustarse al cumplimiento de lo establecido en los Artículos 9, 15, 16, 54, 58 del Reglamento de la Ley de Ejercicio de la Farmacia, Artículo 58 de la Ley de Medicamentos y la Norma de Buenas Prácticas de Distribución de Medicamentos, publicada en Gaceta Oficial No. 37.966 de fecha 23-06-2004.'), '' ,'L', 0);
$pdf->Ln(3);

$pdf->MultiCell(190, 4, utf8_decode('El incumplimiento de lo aquí señalado, será sancionado con lo dispuesto en las Leyes y Reglamentos que rigen sobre la materia.'), '' ,'L', 0);
$pdf->Ln(55);

$pdf->Image('planillas/img/firmaMarliz.jpg', 80, 135, 50);

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

$pdf->Image("qr_".$permiso.".png", 160, 198, 35);
$pdf->Image('planillas/img/juntos_por_cada_latido-removebg-preview.png', 150, 250, 50);

$pdf->Output('I' , 'INSTALACION Y FUNCIONAMIENTO DE ALMACENADORA.pdf');

pg_free_result($regente);
pg_free_result($datos_permiso);
pg_free_result($qr_data);

?>


