<?php

$sql = "SELECT * FROM sacs.permiso_regente_pdf('$permiso')";

$regente = pg_query($conn, $sql);

$sql2 = "SELECT * FROM sacs.permiso_info_lab_pdf('$permiso')";

$datos_permiso = pg_query($conn, $sql2);

$sql3 = "SELECT * FROM sacs.permiso_qr_pdf('$permiso')";

$qr_data = pg_query($conn, $sql3);

header("content-type: text/html; charset=iso-8859-1");
require('planillas/pdf/fpdf.php');
require('planillas/phpqrcode/phpqrcode.php');

while($row = pg_fetch_assoc($qr_data)){
	$contenido = "Permiso: ".$row['permiso']." , RIF: ".$row['rif']." , Caducidad: ".$row['caducidad'];
	}
	$archivo_qr = "qr_".$permiso.".png";
	QRcode::png($contenido, $archivo_qr);

$pdf = new FPDF('P', 'mm', 'A4');
$pdf->AddPage();
$pdf->SetMargins(10, 10, 10);
$pdf->Image('planillas/img/logo.png', 5, -25, 180);
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
$pdf->Cell(90, 8, utf8_decode('REGENTE DE LABORATORIO DE PRODUCTOS FARMACÉUTICOS'),0,1,'L',0);
$pdf->Cell(60, 1, $row['nombre_empresa'],0,1,'L',0);
$pdf->Cell(28, 5, "Rif. ".$row['rif'],0,1,'L',0);
$pdf->Cell(24, 3, $row['municipio']."-".$row['estado'],0,1,'L',0);
}

$pdf->SetFont('Arial', '', 10);
$pdf->Ln(3);

while($row2 = pg_fetch_assoc($datos_permiso)){
$pdf->MultiCell(190, 4, utf8_decode("Vista y leída la Comunicación recibida el día ".$row2['fecha_solicitud'].", Acta de Inspección de fecha ".$row2['fecha_acta']." y demás documentos, este Servicio Autónomo de Contraloría Sanitaria AUTORIZA, de acuerdo con lo contemplado en los artículos 29 y 30 del Reglamento de la Ley de Ejercicio de Farmacia y el Manual de Buenas Prácticas de Fabricación para la Industria Farmacéutica, Resolución No. 82 de fecha 26/10/1990, Publicada en Gaceta Oficial No. 34.584 del día 31/10/1990 y el Manual de Buenas Prácticas de Manufactura de la Organización Mundial de la Salud, Documentos WHO, Serie Informes Técnicos No. 823, Anexo I, Publicado en Gaceta Oficial No. 38.009 de fecha 26/08/2004, la INSTALACION y FUNCIONAMIENTO del LABORATORIO DE PRODUCTOS FARMACÉUTICOS denominado ".$row2['nombre_empresa'].", cuya Oficina Administrativa y Almacén están ubicados (Dirección: ubicada en el ".$row2['direccion']."), Ciudad ".$row2['municipio'].", Estado ".$row2['estado'].", para la Manufactura de ".$row2['productos'].", asimismo el No. ".$row2['permiso']." del Registro del Laboratorio se utiliza en el Etiquetado del Producto."), '', 'J', 0);
$pdf->Ln(3);
}
	
$pdf->MultiCell(190, 4, utf8_decode('Se le advierte que debe ajustarse al cumplimiento de lo establecido en los Artículos 9, 10, 15, 16, 54 y 58 del Reglamento vigente de la Ley del Ejercicio de la Farmacia y Articulo 58 de la Ley de Medicamentos.'), '' ,'L', 0);
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

$pdf->Image("qr_".$permiso.".png", 160, 200, 35);
$pdf->Image('planillas/img/juntos_por_cada_latido-removebg-preview.png', 150, 250, 50);

$pdf->Output('I' , 'INSTALACION Y FUNCIONAMIENTO DE LABORATORIO FARMACEUTICOS.pdf');

pg_free_result($regente);
pg_free_result($datos_permiso);
pg_free_result($qr_data);


?>