<?php

$sql1 = "SELECT * FROM sacs.fecha_solicitud_pdf('$solicitud')";
$fecha = pg_query($conn, $sql1);

$sql2 = "SELECT * FROM sacs.tipo_laboratorio('$solicitud')";
$laboratorio = pg_query($conn, $sql2);

$sql3 = "SELECT * FROM sacs.productos_pdf('$solicitud')";
$productos = pg_query($conn, $sql3);

$sql4 = "SELECT * FROM sacs.regente_pdf('$solicitud')";
$regente = pg_query($conn, $sql4);

$sql5 = "SELECT * FROM sacs.datos_empresa_pdf('$solicitud')";
$datos_e = pg_query($conn, $sql5);

$sql6 = "SELECT * FROM sacs.registro_mercantil_pdf('$solicitud')";
$registro_m = pg_query($conn, $sql6);

$sql7 = "SELECT * FROM sacs.datos_propietario_pdf('$solicitud')";
$propietario = pg_query($conn, $sql7);

$sql8 = "SELECT * FROM sacs.patente_pdf('$solicitud')";
$patente = pg_query($conn, $sql8);

$sql9 = "SELECT * FROM sacs.poder_pdf('$solicitud')";
$poder = pg_query($conn, $sql9);

$sql10 = "SELECT * FROM sacs.tipo_em_tenecia_pdf('$solicitud')";
$tipo_em_tenecia = pg_query($conn, $sql10);

$sql11 = "SELECT * FROM sacs.establecimiento_pdf('$solicitud')";
$establecimiento = pg_query($conn, $sql11);

$sql12 = "SELECT * FROM sacs.productos_import_pdf('$solicitud')";
$productos_import = pg_query($conn, $sql12);

$sql13 = "SELECT * FROM sacs.ubicacion_oficina_pdf('$solicitud')";
$oficina = pg_query($conn, $sql13);

require('planillas/pdf/fpdf.php');
header("content-type: text/html; charset=iso-8859-1");

//Pie de pagina
class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    $this->Image('planillas/img/membrete.png', 10, 3, 195, 16);
    $this->Ln(10);
    $this->SetFont('Arial', '', 8);
    $this->Cell(105,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,1,'C',0);
    $this->Cell(69.5,4, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,1,'C',0);
    $this->Ln(3);
  }
    
// Pie de página
function Footer()
{
     $this->SetY(-25);
     $this->Image('planillas/img/juntos_por_cada_latido-removebg-preview.png', 145, 265, 50);
     $this->SetFont('Arial','',6);
     $this->Ln(7);
     $this->Cell(0,4,utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C');
     $this->Cell(0,4,utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C');
     $this->Cell(0,4,utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C');
  }
}

$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->SetTitle('Planilla4');
$pdf->AddPage('Portrait');
$pdf->SetFont('Arial', 'B', 10);
$pdf->MultiCell(0, 4, utf8_decode('SOLICITUD DE PERMISO SANITARIO PARA LA INSTALACION DE EMPRESAS IMPORTADORAS Y/O
DISTRIBUIDORAS DE PRODUCTOS REPELENTES DE INSECTOS DE USO TOPICO Y SUS
MATERIAS PRIMAS'), 0, 'C', 0);
$pdf->Ln(5);

$pdf->SetFont('Arial', '', 8);
$pdf->Cell(112);
$pdf->Cell(35,4, utf8_decode('FECHA DE SOLICITUD'), 1, 0, 'C', 0);
$pdf->Cell(38,4, utf8_decode('N° DE SOLICITUD'), 1, 1, 'C', 0);
$pdf->SetFont('Arial', 'I', 8);
$pdf->Cell(20);
$pdf->Cell(92,8,utf8_decode('LEER EL INSTRUCTIVO ANTES DE LLENAR EL FORMULARIO'),0,0,'L',0);
$pdf->SetFont('Arial', '', 8);
$pdf->Cell(11.6,4, utf8_decode('DIA'),1,0,'C',0);
$pdf->Cell(11.7,4, utf8_decode('MES'),1,0,'C',0);
$pdf->Cell(11.7,4, utf8_decode('AÑO'),1,0,'C',0);
$pdf->Cell(38,4, utf8_decode(''), 'R, T, L', 1, 'C', 0);
$pdf->Cell(112);
while($row1 = pg_fetch_assoc($fecha)){
$pdf->Cell(11.6,5, utf8_decode($row1['dia']),1,0,'C',0);
$pdf->Cell(11.7,5, utf8_decode($row1['mes']),1,0,'C',0);
$pdf->Cell(11.7,5, utf8_decode($row1['ano']),1,0,'C',0);
}
$pdf->Cell(38,5, utf8_decode($solicitud), 'R, B, L', 1, 'C', 0);
$pdf->Ln(3);

while($row2 = pg_fetch_assoc($laboratorio)){
while($row3 = pg_fetch_assoc($productos)){
$pdf->SetY(64);
$pdf->SetFont('Arial','',7);
$pdf->Cell(120,5, utf8_decode('TIPO DE ESTABLECIMIENTO'), 'R, T, L', 0,'L',0);
$pdf->Cell(65,5, utf8_decode('IMPORTACION Y/O DISTRIBUCION DE'), 'R, T, L', 1,'L',0);
$pdf->Cell(2, 5,utf8_decode(''),'L' ,0,'C',0);
if($row2['tipo_laboratorio'] == 'IMPORTADORA Y DISTRIBUIDORA DE PRODUCTOS REPELENTES DE INSECTOS DE USO TOPICO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->SetFont('Arial','',6.6);
$pdf->Cell(114,6, utf8_decode('IMPORTADORA Y DISTRIBUIDORA DE PRODUCTOS REPELENTES DE INSECTOS DE USO TOPICO'), 0,0,'L',0);
$pdf->SetFont('Arial','',7);
$pdf->Cell(2, 5,utf8_decode(''),'L' ,0,'C',0);
$pdf->Cell(2);
if($row3['tipo_producto'] == 'PRODUCTOS TERMINADOS'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(18.32,6, utf8_decode('PRODUCTOS TERMINADOS'), 0,0,'L',0);
$pdf->Cell(38.68);
$pdf->Cell(2, 5,utf8_decode(''),'L' ,1,'C',0);
$pdf->Cell(2, 5,utf8_decode(''),'L' ,0,'C',0);
if($row2['tipo_laboratorio'] == 'IMPORTADORA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('IMPORTADORA'), 0,0,'L',0);
$pdf->Cell(9);
if($row2['tipo_laboratorio'] == 'DISTRIBUIDORA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('DISTRIBUIDORA'), 0,0,'L',0);
$pdf->Cell(71);
$pdf->Cell(2, 5,utf8_decode(''),'L' ,0,'C',0);
$pdf->Cell(2);
if($row3['tipo_producto'] == 'PRODUCTOS MATERIAS PRIMAS'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);  
}
$pdf->Cell(18.32,6, utf8_decode('MATERIAS PRIMAS'), 0,0,'L',0);
$pdf->Cell(38.68);
$pdf->Cell(2, 5,utf8_decode(''),'L' ,1,'C',0);
$pdf->Cell(185, 0,utf8_decode(''),1 ,1,'C',0);
}
}
$pdf->Ln(3);


$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('A.- DATOS DEL (LA) FARMACÉUTICO(A) SOLICITANTE AUTORIZADO(A)'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);

while($row4 = pg_fetch_assoc($regente)){
$pdf->Cell(62,5, utf8_decode('APELLIDOS'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5, utf8_decode('NOMBRES'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5, utf8_decode('N° DE CEDULA DE IDENTIDAD'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5, utf8_decode($row4['primer_apellido'].' '.$row4['segundo_apellido']), 'L, R',0,'C',0);
$pdf->Cell(62,5, utf8_decode($row4['primer_nombre'].' '.$row4['segundo_nombre']), 'L, R',0,'C',0);
$pdf->Cell(2);
if($row4['nacionalidad'] == 'V'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);  
}
$pdf->Cell(4,5, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row4['nacionalidad'] == 'E'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,5, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(36, 5, utf8_decode($row4['cedula']), 'R', 1, 'L', 0);
$pdf->Cell(55,5, utf8_decode('N° DE PLANILLA DEL M.P.P.S.'), 'R, T, L' ,0,'L',0);
$pdf->Cell(130,5, utf8_decode('PROFESIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(55,5, utf8_decode($row4['licencia']), 'R, L' ,0,'C',0);
$pdf->Cell(130,5, utf8_decode($row4['profesion']), 'R, L', 1,'C',0);
$pdf->Cell(50,5, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(50,5, utf8_decode('N° DE TELÉFONO MOVIL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(85,5, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L', 1,'L',0);
$pdf->Cell(50,5, utf8_decode($row4['telefono']), 'R, B, L' ,0,'C',0);
$pdf->Cell(50,5, utf8_decode($row4['celular']), 'R, B, L' ,0,'C',0);
$pdf->Cell(85,5, utf8_decode($row4['correo']), 'R, B, L', 1,'C',0);
}
$pdf->Ln(2.5);

$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('B.- DATOS DE LA IMPORTADORA/DISTRIBUIDORA'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);

while($row5 = pg_fetch_assoc($datos_e)){
$pdf->Cell(185,5, utf8_decode('NOMBRE O RAZÓN SOCIAL'), 'R, T, L' ,1,'L',0);
$pdf->Cell(185,5, utf8_decode($row5['nombre_empresa']), 'R, B, L' ,1,'C',0);
$pdf->Cell(185,5, utf8_decode('OBJETO SOCIAL'), 'R, T, L' ,1,'L',0);
$pdf->Cell(185,5, utf8_decode($row5['tipo_registro']), 'R, B, L' ,1,'C',0);
$pdf->Cell(92.5,5, utf8_decode('SUPERFICIE INTERNA (M²)'), 'R, T, L' ,0,'L',0);
$pdf->Cell(92.5,5, utf8_decode('N° DE RIF'), 'R, T, L' ,1,'L',0);
$pdf->Cell(92.5,5, utf8_decode($row5['metros']), 'R, B, L' ,0,'C',0);
$pdf->Cell(92.5,5, utf8_decode($row5['rif']), 'R, B, L' ,1,'C',0);
}

while($row6 = pg_fetch_assoc($registro_m)){
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,5, utf8_decode('DATOS DEL REGISTRO MERCANTIL'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(92.5,5, utf8_decode('REGISTRO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(92.5,5, utf8_decode('CIRCUNSCRIPCIÓN'), 'R, T, L' ,1,'L',0);
$pdf->Cell(92.5,5, utf8_decode($row6['registro']), 'R, B, L' ,0,'C',0);
$pdf->Cell(92.5,5, utf8_decode($row6['circunscripcion']), 'R, B, L' ,1,'C',0);
$pdf->Cell(62,5, utf8_decode('TOMO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5, utf8_decode('NÚMERO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5, utf8_decode('PROTOCOLIZACIÓN'), 1, 1,'C',0);
$pdf->Cell(62,7, utf8_decode($row6['tomo']), 'L, B, R',0,'C',0);
$pdf->Cell(62,7, utf8_decode($row6['numero']), 'L, B, R',0,'C',0);
$pdf->Cell(20.5,7,utf8_decode('DIA  '.$row6['dia']), 1, 0,'L',0);
$pdf->Cell(20.5,7,utf8_decode('MES  '.$row6['mes']),1, 0,'L',0);
$pdf->Cell(20,7, utf8_decode('AÑO  '.$row6['ano']), 1, 1, 'L', 0);
}

$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,5, utf8_decode('MODIFICACIONES REALIZADAS AL REGISTRO MERCANTIL'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(30.83,7, utf8_decode('REGISTRO'), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode('CIRCUNSCRIPCIÓN'), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode('TOMO'), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode('NÚMERO'), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode('PROTOCOLIZACIÓN'), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode('MODIFICACIÓN'), 1 , 1, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 1, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 1, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 1, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1, 0,'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(10.27,7, utf8_decode(''), 1 , 0, 'C',0);
$pdf->Cell(30.83,7, utf8_decode(''), 1 , 1, 'C',0);

$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,5, utf8_decode('PROPIETARIO(S)'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,7, utf8_decode('APELLIDOS'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,7, utf8_decode('NOMBRES'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,7, utf8_decode('N° DE CEDULA DE IDENTIDAD'), 'R, T, L', 1,'L',0);
while($row7 = pg_fetch_assoc($propietario)){
$rows = pg_num_rows($propietario);
if($rows == 1){
$pdf->Cell(62,7, utf8_decode($row7['nombres']), 1 , 0,'C',0);
$pdf->Cell(62,7, utf8_decode($row7['apellidos']), 1, 0,'C',0);
$pdf->Cell(2);
if($row7['nacionalidad'] == 'V'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row7['nacionalidad'] == 'E'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0); 
}
$pdf->Cell(4,7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode($row7['cedula']), 'R', 1, 'L', 0);
$pdf->Cell(62,7, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(62,7, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4, 5,utf8_decode(''),1,0,'C',0);
$pdf->Cell(4, 7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4, 5,utf8_decode(''),1,0,'C',0);
$pdf->Cell(4, 7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode(''), 'R', 1, 'C', 0);
}else if($rows == 2){
$pdf->Cell(62,7, utf8_decode($row7['nombres']), 1 , 0,'C',0);
$pdf->Cell(62,7, utf8_decode($row7['apellidos']), 1, 0,'C',0);
$pdf->Cell(2);
if($row7['nacionalidad'] == 'V'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row7['nacionalidad'] == 'E'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0); 
}
$pdf->Cell(4,7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode($row7['cedula']), 'R', 1, 'L', 0);
}else{
$pdf->Cell(62,7, utf8_decode($row7['nombres']), 1 , 0,'C',0);
$pdf->Cell(62,7, utf8_decode($row7['apellidos']), 1, 0,'C',0);
$pdf->Cell(2);
if($row7['nacionalidad'] == 'V'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row7['nacionalidad'] == 'E'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0); 
}
$pdf->Cell(4,7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode($row7['cedula']), 'R', 1, 'L', 0);
}
}
$pdf->Cell(62,7, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(62,7, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4, 5,utf8_decode(''),1,0,'C',0);
$pdf->Cell(4, 7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4, 5,utf8_decode(''),1,0,'C',0);
$pdf->Cell(4, 7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode(''), 'R', 1, 'C', 0);
$pdf->Cell(185, 0, utf8_decode(''), 'B', 1, 'C', 0);

$pdf->AddPage('Portrait');
$pdf->SetFont('Arial', '', 7);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DATOS DE LA PATENTE DE INDUSTRIA Y COMERCIO'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
while($row8 = pg_fetch_assoc($patente)){
$pdf->Cell(56.25,6, utf8_decode('DOCUMENTO PRESENTADO'), 'R, T, L' ,0,'C',0);
$pdf->Cell(36.25,6, utf8_decode('NÚMERO'), 'R, T, L' ,0,'C',0);
$pdf->Cell(46.25,6, utf8_decode('ACTIVIDAD'), 'R, T, L', 0,'C',0);
$pdf->Cell(46.25,6, utf8_decode('FECHA DE VENCIMIENTO'), 'R, T, L', 1,'C',0);
$pdf->Cell(2, 6,utf8_decode(''),'L' ,0,'C',0);
if($row8['documento'] == 'PATENTE'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('PATENTE'), 0,0,'L',0);
$pdf->Cell(2);
if($row8['documento'] == 'SOLICITUD'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('SOLICITUD'), 0,0,'L',0);
$pdf->Cell(14.23,6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(36.25,6, utf8_decode($row8['numero']), 'R, T, L' ,0,'C',0);
$pdf->Cell(46.25,6, utf8_decode($row8['actividad']), 'R, T, L', 0,'C',0);
$pdf->Cell(15.41,6, utf8_decode($row8['dia']), 'R, T, L', 0,'C',0);
$pdf->Cell(15.41,6, utf8_decode($row8['mes']), 'R, T, L', 0,'C',0);
$pdf->Cell(15.41,6, utf8_decode($row8['ano']), 'R, T, L', 1,'C',0);
$pdf->Cell(92.5,6, utf8_decode('ESTADO OTORGANTE'), 'R, T, L' ,0,'L',0);
$pdf->Cell(92.5,6, utf8_decode('MUNICIPIO OTORGANTE'), 'R, T, L' ,1,'L',0);
$pdf->Cell(92.5,6, utf8_decode($row8['estado']), 'R, B, L' ,0,'C',0);
$pdf->Cell(92.5,6, utf8_decode($row8['municipio']), 'R, B, L' ,1,'C',0);
}

while ($row9 = pg_fetch_assoc($tipo_em_tenecia)){
$pdf->Cell(61.66,6, utf8_decode('TIPO DE EMPRESA'), 'R, T, L' ,0,'C',0);
$pdf->Cell(61.66,6, utf8_decode('TENENCIA DEL LOCAL'), 'R, T, L' ,0,'C',0);
$pdf->Cell(61.66,6, utf8_decode('PROCEDENCIA DE LOS PRODUCTOS'), 'R, T, L' ,1,'C',0);
$pdf->SetFont('Arial', '', 6.5);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row9['tipo_empresa'] == 'PÚBLICA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(10,6, utf8_decode('PÚBLICA'), 0,0,'L',0);
$pdf->Cell(2.5);
if($row9['tipo_empresa'] == 'PRIVADA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(10,6, utf8_decode('PRIVADA'), 0,0,'L',0);
$pdf->Cell(2.5);
if($row9['tipo_empresa'] == 'COOPERATIVA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(10,6, utf8_decode('COOPERATIVA'), 0,0,'L',0);
$pdf->Cell(9.6, 6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(2);
if($row9['tip_dominio'] == 'PROPIO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(10,6, utf8_decode('PROPIO'), 0,0,'L',0);
$pdf->Cell(2);
if($row9['tip_dominio'] == 'ALQUILADO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('ARRENDADO'), 0,0,'L',0);
$pdf->Cell(2);
if($row9['tip_dominio'] == 'COMODATO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('COMODATO'), 0,0,'L',0);
$pdf->Cell(3.66, 6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(16,6, utf8_decode('NACIONALES'), 0,0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(12,6, utf8_decode('IMPORTADOS'), 0,0,'L',0);
$pdf->Cell(21.7, 6, utf8_decode(''), 'R' , 1,'L',0);
}

$pdf->SetFont('Arial', '', 7);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DATOS DEL PODER OTORGADO POR EL PROPIETARIO DEL PRODUCTO A LA IMPORTADORA-DISTRIBUIDORA'), 1, 1,'C', 1);
while($row10 = pg_fetch_assoc($poder)){
$pdf->Cell(71.25,5, utf8_decode('NOMBRE DE LA EMPRESA QUE OTORGA EL PODER'), 'R, T, L' ,0,'L',0);
$pdf->Cell(26.25,5, utf8_decode('PAÍS'), 'R, T, L' ,0,'L',0);
$pdf->Cell(26.25,5, utf8_decode('CIUDAD'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61.25,5, utf8_decode('VALIDACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(71.25,5, utf8_decode($row10['laboratorio']), 1 , 0,'L',0);
$pdf->Cell(26.25,5, utf8_decode($row10['pais']), 1 , 0,'L',0);
$pdf->Cell(26.25,5, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(15,5, utf8_decode('CONSULAR'), 0,0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(15,5, utf8_decode('APOSTILLA'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(14.25, 5, utf8_decode(''), 'R', 1, 'C', 0);

$pdf->Cell(71.25,5, utf8_decode(''), 1 , 0,'L',0);
$pdf->Cell(26.25,5, utf8_decode(''), 1 , 0,'L',0);
$pdf->Cell(26.25,5, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(15,5, utf8_decode('CONSULAR'), 0,0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(15,5, utf8_decode('APOSTILLA'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(14.25, 5, utf8_decode(''), 'R', 1, 'C', 0);

$pdf->Cell(71.25,5, utf8_decode(''), 1 , 0,'L',0);
$pdf->Cell(26.25,5, utf8_decode(''), 1 , 0,'L',0);
$pdf->Cell(26.25,5, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(15,5, utf8_decode('CONSULAR'), 0,0,'L',0);
$pdf->Cell(2);
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
$pdf->Cell(15,5, utf8_decode('APOSTILLA'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(14.25, 5, utf8_decode(''), 'R', 1, 'C', 0);

$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DATOS DEL PODER OTORGADO AL FARMACÉUTICO REGENTE'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->SetFont('Arial', '', 6);
$pdf->Cell(43,5, utf8_decode('NOMBRE DEL REPRESENTANTE LEGAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(47,5, utf8_decode('C.I. DEL REPRESENTANTE LEGAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(26,5, utf8_decode('NÚMERO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(26,5, utf8_decode('TOMO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(43,5, utf8_decode('FECHA DE INSCRIPCIÓN EN NOTARÍA'), 'R, L', 1,'L',0);
$pdf->Cell(43,5, utf8_decode($row10['primer_nombre']." ".$row10['primer_apellido']), 'R, T, L' ,0,'L',0);
$pdf->Cell(2);
if($row10['nacionalidad'] == 'V'){
$pdf->Cell(4, 4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4, 4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4, 5, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row10['nacionalidad'] == 'E'){
$pdf->Cell(4, 4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4, 4,utf8_decode(''),1,0,'C',0);  
}
$pdf->Cell(4, 5, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(27,5, utf8_decode($row10['cedula']), 0 ,0,'L',0);
$pdf->Cell(26,5, utf8_decode($row10['numero']), 'R, T, L' ,0,'L',0);
$pdf->Cell(26,5, utf8_decode($row10['tomo']), 'R, T, L' ,0,'L',0);
$pdf->Cell(14.33,5, utf8_decode(''), 'R, T, L', 0,'L',0);
$pdf->Cell(14.33,5, utf8_decode(''), 'R, T, L', 0,'L',0);
$pdf->Cell(14.33,5, utf8_decode(''), 'R, T, L', 1,'L',0);
}

while($row13 = pg_fetch_assoc($oficina)){
$pdf->SetFont('Arial', '', 7);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA OFICINA ADMINISTRATIVA'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['estado']), 'R, B, L' ,0,'C',0);
$pdf->Cell(62,5.6, utf8_decode($row13['municipio']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(61,5.6, utf8_decode($row13['parroquia']), 'R, B, L', 1,'C',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DE OFICINA ADMINISTRATIVA'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('AVENIDA /CARRERA/CALLE/ESQUINA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('EDIFICIO/GALPÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['urbanizacion']), 'R, B, L' ,0,'C',0);
$pdf->Cell(62,5.6, utf8_decode($row13['avenida']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(61,5.6, utf8_decode($row13['edificio']), 'R, B, L', 1,'C',0);
$pdf->Cell(62,5.6, utf8_decode('PISO/PLANTA/LOCAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PUNTO DE REFERENCIA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CÓDIGO POSTAL'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['piso']), 'R, B, L' ,0,'C',0);
$pdf->Cell(62,5.6, utf8_decode($row13['referencia']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(61,5.6, utf8_decode($row13['postal']), 'R, B, L', 1,'C',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE FAX'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'), 'R, T, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(46.25,6, utf8_decode($row13['telefono']), 'R, B, L' ,0,'C',0);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.8);
$pdf->Cell(46.25,6, utf8_decode($row13['correo']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L', 1,'L',0);
}

while($row11 = pg_fetch_assoc($establecimiento)){
if($row11['establecimiento'] == 'ALMACEN'){
$pdf->SetFont('Arial', '', 7);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('UBICACIÓN GEOGRÁFICA DEL (DE LOS) ALMACEN(ES)'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row11['estado']), 'R, B, L' ,0,'C',0);
$pdf->Cell(62,5.6, utf8_decode($row11['municipio']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(61,5.6, utf8_decode($row11['parroquia']), 'R, B, L', 1,'C',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DEL (DE LOS) ALMACEN(ES)'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('AVENIDA /CARRERA/CALLE/ESQUINA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('EDIFICIO/GALPÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row11['urbanizacion']), 'R, B, L' ,0,'C',0);
$pdf->Cell(62,5.6, utf8_decode($row11['avenida']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(61,5.6, utf8_decode($row11['edificio']), 'R, B, L', 1,'C',0);
$pdf->Cell(62,5.6, utf8_decode('PISO/PLANTA/LOCAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PUNTO DE REFERENCIA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CÓDIGO POSTAL'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row11['piso']), 'R, B, L' ,0,'C',0);
$pdf->Cell(62,5.6, utf8_decode($row11['referencia']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(61,5.6, utf8_decode($row11['postal']), 'R, B, L', 1,'C',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE FAX'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'), 'R, T, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(46.25,6, utf8_decode($row11['telefono']), 'R, B, L' ,0,'C',0);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.8);
$pdf->Cell(46.25,6, utf8_decode($row11['correo']), 'R, B, L' ,0,'C',0);  
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L', 1,'L',0);
}else{
$pdf->SetFont('Arial', '', 7);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('UBICACIÓN GEOGRÁFICA DEL (DE LOS) ALMACEN(ES)'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DEL (DE LOS) ALMACEN(ES)'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('AVENIDA /CARRERA/CALLE/ESQUINA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('EDIFICIO/GALPÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PISO/PLANTA/LOCAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PUNTO DE REFERENCIA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CÓDIGO POSTAL'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE FAX'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'), 'R, T, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.8);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);  
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L', 1,'L',0);  
}
}
$pdf->Ln(3.5);

$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('C.- ANEXAR LISTA DE PRODUCTOS A IMPORTAR Y/O DISTRIBUIR'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);

$pdf->AddPage('Portrait');
$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('D.- OBSERVACIONES DEL(LA) REGENTE O FARMACÉUTICO(A) SOLICITANTE'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);

$pdf->MultiCell(185, 40, utf8_decode(''), 1, 'L', 0);
$pdf->Ln(6);

$pdf->SetFont('Arial', 'B', 10);
$pdf->MultiCell(0, 4, utf8_decode('DECLARACION JURADA'), 0, 'C', 0);
$pdf->SetFont('Arial', '', 8.5);
$pdf->Ln(6);

$pdf->MultiCell(185, 4.5, utf8_decode('Yo, ______________________________________________________ portador de la Cédula de identidad N° _______________, actuando en mi carácter de Solicitante, ante el Servicio Autonómo de Contraloría Sanitaria, declaro bajo juramento que reconozco, acepto y cumplo con todas las normas sanitarias que competen al tipo de permiso que estoy solicitando al SERVICIO AUTÓNOMO DE CONTRALORÍA SANITARIA (SACS), así mismo doy fe de que el contenido total de la información suministrada, así como los documentos respectivos, son absolutamente ciertos y veraces. A la vez manifiesto que poseo todos los requisitos necesarios para solicitar este permiso y prestaré toda colaboración y facilitaré los recaudos que requiera el SACS al momento de realizar la inspección pertinente'),0,'J',0);
$pdf->Ln(2);
$pdf->Cell(146, 5, utf8_decode(''), 0, 0, 'C', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(19.5, 5, utf8_decode('Pulgar Izquierdo'), 1, 0, 'C', 0);
$pdf->Cell(19.5, 5, utf8_decode('Pulgar Derecho'), 1, 1, 'C', 0);
$pdf->Cell(146, 5, utf8_decode(''), 0, 0, 'C', 0);
$pdf->Cell(19.5, 15, utf8_decode(''), 1, 0, 'C', 0);
$pdf->Cell(19.5, 15, utf8_decode(''), 1, 1, 'C', 0);
$pdf->Cell(50);
$pdf->Cell(22.5, 5, utf8_decode('________________________________________'), 0, 1, 'C', 0);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->Cell(50);
$pdf->Cell(22.5, 5, utf8_decode('FIRMA DEL (LA) FARMACEUTICO(A) SOLICITANTE'), 0, 1, 'C', 0);
$pdf->Ln(4);
$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('E.- PARA USO INTERNO EXCLUSIVAMENTE (NO ESCRIBIR)'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);
$pdf->Cell(62.5, 6, utf8_decode('NÚMERO DE PERMISO SANITARIO'), 1, 0,'L',1);
$pdf->Cell(122.5, 6, utf8_decode('FUNCIONARIO(A) RESPONSABLE:'), 'R, T, L', 1,'L',0);
$pdf->Cell(62.5, 6, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(122.5, 6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->Cell(185, 6, utf8_decode('OBSERVACIONES DEL (LA) FUNCIONARIO(A):'), 'R, T, L', 1,'L',0);
$pdf->MultiCell(185, 40, utf8_decode(''), 1, 'L', 0);
$pdf->Cell(5);
$pdf->Cell(180, 3, utf8_decode('F.04-DMC-IFV-OPP-AGOSTO 2022'), 0, 1, 'L', 0);
$pdf->Ln(6);

$pdf->AddPage('Portrait');
$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('C.- LISTA DE PRODUCTOS O MATERIAS PRIMAS A IMPORTAR Y/O DISTRIBUIR'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 5.3);
$pdf->Ln(2.5);

$pdf->SetFillColor(220,220,220);
$pdf->Cell(27.85,6, utf8_decode('NOMBRE DEL PRODUCTO'), 1, 0,'C', 1);
$pdf->Cell(27.85,6, utf8_decode('PRESENTACIÓN'), 1, 0,'C', 1);
$pdf->Cell(27.85,6, utf8_decode('REGISTRO SANITARIO'), 1, 0,'C', 1);
$pdf->Cell(27.85,6, utf8_decode('LABORATORIO FABRICANTE'), 1, 0,'C', 1);
$pdf->Cell(27.85,6, utf8_decode('PAÍS DE PROCEDENCIA'), 1, 0,'C', 1);
$pdf->Cell(27.85,6, utf8_decode('PROPIETARIO'), 1, 0,'C', 1);
$pdf->SetFont('Arial', '', 4.5);
$pdf->Cell(27.85,6, utf8_decode('FARMACEUTICO PATROCINANTE'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->SetFont('Arial', '', 5.3);
while($row12 = pg_fetch_assoc($productos_import)){
$pdf->Cell(27.85,6, utf8_decode($row12['nombre']), 1, 0,'C', 0);
$pdf->Cell(27.85,6, utf8_decode($row12['presentacion']), 1, 0,'C', 0);
$pdf->Cell(27.85,6, utf8_decode($row12['registro']), 1, 0,'C', 0);
$pdf->Cell(27.85,6, utf8_decode($row12['laboratorio']), 1, 0,'C', 0);
$pdf->Cell(27.85,6, utf8_decode($row12['pais']), 1, 0,'C', 0);
$pdf->Cell(27.85,6, utf8_decode($row12['propietario']), 1, 0,'C', 0);
$pdf->Cell(27.85,6, utf8_decode($row12['patrocinante']), 1, 1,'C', 0);
}

//agregar el recaudo despues





$pdf->Output('I', 'Solicitud Sanitaria.pdf');

pg_free_result($fecha);
pg_free_result($laboratorio);
pg_free_result($productos);
pg_free_result($regente);
pg_free_result($datos_e);
pg_free_result($registro_m);
pg_free_result($propietario);
pg_free_result($patente);
pg_free_result($poder);
pg_free_result($tipo_em_tenecia);
pg_free_result($establecimiento);
pg_free_result($productos_import);
pg_free_result($oficina);

?>