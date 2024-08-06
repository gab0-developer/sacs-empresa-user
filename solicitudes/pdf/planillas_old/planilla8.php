<?php

$sql1 = "SELECT * FROM sacs.fecha_solicitud_pdf('$solicitud')";
$fecha = pg_query($conn, $sql1);

$sql2 = "SELECT * FROM sacs.tipo_laboratorio('$solicitud')";
$laboratorio = pg_query($conn, $sql2);

$sql3 = "SELECT * FROM sacs.regente_pdf('$solicitud')";
$regente = pg_query($conn, $sql3);

$sql4 = "SELECT * FROM sacs.datos_empresa_pdf('$solicitud')";
$datos_e = pg_query($conn, $sql4);

$sql5 = "SELECT * FROM sacs.registro_mercantil_pdf('$solicitud')";
$registro_m = pg_query($conn, $sql5);

$sql6 = "SELECT * FROM sacs.datos_propietario_pdf('$solicitud')";
$propietario = pg_query($conn, $sql6);

$sql7 = "SELECT * FROM sacs.patente_pdf('$solicitud')";
$patente = pg_query($conn, $sql7);

$sql8 = "SELECT * FROM sacs.tipo_em_tenecia_pdf('$solicitud')";
$tipo_em_tenecia = pg_query($conn, $sql8);

$sql9 = "SELECT * FROM sacs.establecimiento_pdf('$solicitud')";
$establecimiento = pg_query($conn, $sql9);

$sql10 = "SELECT * FROM sacs.operaciones_pdf('$solicitud')";
$operaciones = pg_query($conn, $sql10);

$sql11 = "SELECT * FROM sacs.productos_pdf('$solicitud')";
$productos = pg_query($conn, $sql11);

$sql12 = "SELECT * FROM sacs.forma_pdf('$solicitud')";
$formas = pg_query($conn, $sql12);

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
    $this->Image('planillas/img/membrete.jpg', 10, 3, 200, 16);
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
$pdf->SetTitle('Planilla8');
$pdf->AddPage('Portrait');
$pdf->SetFont('Arial', 'B', 10);
$pdf->MultiCell(0, 4, utf8_decode('SOLICITUD DE PERMISO DE FUNCIONAMIENTO PARA SUCURSALES DE ALMACENADORAS DE PRODUCTOS FARMACÉUTICOS'), 0, 'C', 0);
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
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(3);

while($row2 = pg_fetch_assoc($laboratorio)){
$pdf->Cell(185,5, utf8_decode('TIPO DE LABORATORIOS'), 'R, T, L' ,1,'L',0);
$pdf->Cell(5, 5, '', 'L', 0, 'C', 0);
if($row2['tipo_laboratorio'] == 'ESPECIALIDADES FARMACÉUTICAS'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);  
}
$pdf->Cell(42,5, utf8_decode('ESPECIALIDADES FARMACÉUTICAS'), 0,0,'L',0);
$pdf->Cell(5, 5);
if($row2['tipo_laboratorio'] == 'PRODUCTOS NATURALES'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(30,5, utf8_decode('PRODUCTOS NATURALES'), 0,0,'L',0);
$pdf->Cell(5, 5);
if($row2['tipo_laboratorio'] == 'PRODUCTOS COSMÉTICOS'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(32,5, utf8_decode('PRODUCTOS COSMÉTICOS'), 0,0,'L',0);
$pdf->Cell(5, 5);
if($row2['tipo_laboratorio'] == 'PRODUCTOS BIOLÓGICOS'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(35,5, utf8_decode('PRODUCTOS BIOLÓGICO'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(5, 5, '', 'R', 1, 'C', 0);
$pdf->Cell(5, 5, '', 'L', 0, 'C', 0);
if($row2['tipo_laboratorio'] == 'FÓRMULAS MAGISTRALES'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(42,5, utf8_decode('FÓRMULAS MAGISTRALES'), 0,0,'L',0);
$pdf->Cell(5, 5);
if($row2['tipo_laboratorio'] == 'RADIOFARMACO'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(30,5, utf8_decode('RADIOFARMACO'), 0,0,'L',0);
$pdf->Cell(5, 5);
if($row2['tipo_laboratorio'] == 'HOMEOPÁTICO'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(32,5, utf8_decode('HOMEOPÁTICO'), 0,0,'L',0);
$pdf->Cell(5, 5);
if($row2['tipo_laboratorio'] == 'FÓRMULAS OFICINALES'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(35,5, utf8_decode('FÓRMULAS OFICINALES'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(5, 5, '', 'R', 1, 'C', 0);
$pdf->Cell(5, 5, '', 'L', 0, 'C', 0);
if($row2['tipo_laboratorio'] == 'GASES MEDICINALES'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(42,5, utf8_decode('GASES MEDICINALES'), 0,0,'L',0);
$pdf->Cell(5, 5);
if($row2['tipo_laboratorio'] == 'REPELENTES DE INSECTO DE USO TOPICO'){
$pdf->Cell(4,4.5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4.5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(115,5, utf8_decode('REPELENTES DE INSECTO DE USO TOPICO'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(5, 5, '', 'R', 1, 'C', 0);
$pdf->Cell(185, 0, '', 'R, T, L', 1, 'C', 0);
}
$pdf->Ln(3);

$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('A.- DATOS DEL (LA) REGENTE/DIRECTOR(A) TÉCNICO(A) AUTORIZADO(A)'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);

while($row3 = pg_fetch_assoc($regente)){
$pdf->Cell(62,5, utf8_decode('APELLIDOS'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5, utf8_decode('NOMBRES'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5, utf8_decode('N° DE CEDULA DE IDENTIDAD'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5, utf8_decode($row3['primer_apellido'].' '.$row3['segundo_apellido']), 'L, R',0,'C',0);
$pdf->Cell(62,5, utf8_decode($row3['primer_nombre'].' '.$row3['segundo_nombre']), 'L, R',0,'C',0);
$pdf->Cell(2);
if($row3['nacionalidad'] == 'V'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);  
}
$pdf->Cell(4,5, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row3['nacionalidad'] == 'E'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,5, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 5);
$pdf->Cell(36, 5, utf8_decode($row3['cedula']), 'R', 1, 'L', 0);
$pdf->Cell(55,5, utf8_decode('N° DE PLANILLA DEL M.P.P.S.'), 'R, T, L' ,0,'L',0);
$pdf->Cell(130,5, utf8_decode('PROFESIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(55,5, utf8_decode($row3['licencia']), 'R, L' ,0,'C',0);
$pdf->Cell(130,5, utf8_decode($row3['profesion']), 'R, L', 1,'C',0);
$pdf->Cell(50,5, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(50,5, utf8_decode('N° DE TELÉFONO MOVIL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(85,5, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L', 1,'L',0);
$pdf->Cell(50,5, utf8_decode($row3['telefono']), 'R, B, L' ,0,'C',0);
$pdf->Cell(50,5, utf8_decode($row3['celular']), 'R, B, L' ,0,'C',0);
$pdf->Cell(85,5, utf8_decode($row3['correo']), 'R, B, L', 1,'C',0);
}
$pdf->Ln(2.5);

$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('B.- DATOS DEL ESTABLECIMIENTO FARMACEUTICO PRINCIPAL'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);

while($row4 = pg_fetch_assoc($datos_e)){
$pdf->Cell(185,5, utf8_decode('NOMBRE O RAZÓN SOCIAL Y N° DE PERMISO SANITARIO ANTE EL MPPS'), 'R, T, L' ,1,'L',0);
$pdf->Cell(185,5, utf8_decode($row4['nombre_empresa']), 'R, B, L' ,1,'L',0);
$pdf->Cell(92.5,5, utf8_decode('OBJETO SOCIAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(92.5,5, utf8_decode('N° DE RIF'), 'R, T, L' ,1,'L',0);
$pdf->Cell(92.5,5, utf8_decode($row4['tipo_registro']), 'R, B, L' ,0,'L',0);
$pdf->Cell(92.5,5, utf8_decode($row4['rif']), 'R, B, L' ,1,'L',0);
}

while($row5 = pg_fetch_assoc($registro_m)){
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,5, utf8_decode('DATOS DEL REGISTRO MERCANTIL'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(92.5,5, utf8_decode('REGISTRO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(92.5,5, utf8_decode('CIRCUNSCRIPCIÓN'), 'R, T, L' ,1,'L',0);
$pdf->Cell(92.5,5, utf8_decode($row5['registro']), 'R, B, L' ,0,'C',0);
$pdf->Cell(92.5,5, utf8_decode($row5['circunscripcion']), 'R, B, L' ,1,'C',0);
$pdf->Cell(62,5, utf8_decode('TOMO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5, utf8_decode('NÚMERO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5, utf8_decode('PROTOCOLIZACIÓN'), 1, 1,'C',0);
$pdf->Cell(62,7, utf8_decode($row5['tomo']), 'L, B, R',0,'C',0);
$pdf->Cell(62,7, utf8_decode($row5['numero']), 'L, B, R',0,'C',0);
$pdf->Cell(20.5,7,utf8_decode('DIA  '.$row5['dia']), 1, 0,'L',0);
$pdf->Cell(20.5,7,utf8_decode('MES  '.$row5['mes']),1, 0,'L',0);
$pdf->Cell(20,7, utf8_decode('AÑO  '.$row5['ano']), 1, 1, 'L', 0);
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
while($row6 = pg_fetch_assoc($propietario)){
$rows = pg_num_rows($propietario);
if($rows == 1){
$pdf->Cell(62,7, utf8_decode($row6['nombres']), 1 , 0,'C',0);
$pdf->Cell(62,7, utf8_decode($row6['apellidos']), 1, 0,'C',0);
$pdf->Cell(2);
if($row6['nacionalidad'] == 'V'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row6['nacionalidad'] == 'E'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0); 
}
$pdf->Cell(4,7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode($row6['cedula']), 'R', 1, 'L', 0);
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
$pdf->Cell(62,7, utf8_decode($row6['nombres']), 1 , 0,'C',0);
$pdf->Cell(62,7, utf8_decode($row6['apellidos']), 1, 0,'C',0);
$pdf->Cell(2);
if($row6['nacionalidad'] == 'V'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row6['nacionalidad'] == 'E'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0); 
}
$pdf->Cell(4,7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode($row6['cedula']), 'R', 1, 'L', 0);
}else{
$pdf->Cell(62,7, utf8_decode($row6['nombres']), 1 , 0,'C',0);
$pdf->Cell(62,7, utf8_decode($row6['apellidos']), 1, 0,'C',0);
$pdf->Cell(2);
if($row6['nacionalidad'] == 'V'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(4,7, utf8_decode('V'), 0,0,'L',0);
$pdf->Cell(2);
if($row6['nacionalidad'] == 'E'){
$pdf->Cell(4,5,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,5,utf8_decode(''),1,0,'C',0); 
}
$pdf->Cell(4,7, utf8_decode('E'), 0,0,'L',0);
$pdf->Cell(5, 7);
$pdf->Cell(36, 7, utf8_decode($row6['cedula']), 'R', 1, 'L', 0);
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
while($row7 = pg_fetch_assoc($patente)){
$pdf->Cell(56.25,6, utf8_decode('DOCUMENTO PRESENTADO'), 'R, T, L' ,0,'C',0);
$pdf->Cell(36.25,6, utf8_decode('NÚMERO'), 'R, T, L' ,0,'C',0);
$pdf->Cell(46.25,6, utf8_decode('ACTIVIDAD'), 'R, T, L', 0,'C',0);
$pdf->Cell(46.25,6, utf8_decode('FECHA DE VENCIMIENTO'), 'R, T, L', 1,'C',0);
$pdf->Cell(2, 6,utf8_decode(''),'L' ,0,'C',0);
if($row7['documento'] == 'PATENTE'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('PATENTE'), 0,0,'L',0);
$pdf->Cell(2);
if($row7['documento'] == 'SOLICITUD'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('SOLICITUD'), 0,0,'L',0);
$pdf->Cell(14.23,6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(36.25,6, utf8_decode($row7['numero']), 'R, T, L' ,0,'C',0);
$pdf->Cell(46.25,6, utf8_decode($row7['actividad']), 'R, T, L', 0,'C',0);
$pdf->Cell(15.41,6, utf8_decode($row7['dia']), 'R, T, L', 0,'C',0);
$pdf->Cell(15.41,6, utf8_decode($row7['mes']), 'R, T, L', 0,'C',0);
$pdf->Cell(15.41,6, utf8_decode($row7['ano']), 'R, T, L', 1,'C',0);
$pdf->Cell(92.5,6, utf8_decode('ESTADO OTORGANTE'), 'R, T, L' ,0,'L',0);
$pdf->Cell(92.5,6, utf8_decode('MUNICIPIO OTORGANTE'), 'R, T, L' ,1,'L',0);
$pdf->Cell(92.5,6, utf8_decode($row7['estado']), 'R, B, L' ,0,'C',0);
$pdf->Cell(92.5,6, utf8_decode($row7['municipio']), 'R, B, L' ,1,'C',0);
}

while($row8 = pg_fetch_assoc($tipo_em_tenecia)){
$pdf->Cell(92.5,6, utf8_decode('TIPO DE EMPRESA'), 'R, T, L' ,0,'C',0);
$pdf->Cell(92.5,6, utf8_decode('TENENCIA DEL LOCAL'), 'R, T, L' ,1,'C',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row8['tipo_empresa'] == 'PÚBLICA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('PÚBLICA'), 0,0,'L',0);
$pdf->Cell(2);
if($row8['tipo_empresa'] == 'PRIVADA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('PRIVADA'), 0,0,'L',0);
$pdf->Cell(2);
if($row8['tipo_empresa'] == 'COOPERATIVA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('COOPERATIVA'), 0,0,'L',0);
$pdf->Cell(26.53, 6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row8['tip_dominio'] == 'PROPIO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('PROPIO'), 0,0,'L',0);
$pdf->Cell(2);
if($row8['tip_dominio'] == 'ALQUILADO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('ARRENDADO'), 0,0,'L',0);
$pdf->Cell(6);
if($row8['tip_dominio'] == 'COMODATO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);  
}
$pdf->Cell(15,6, utf8_decode('COMODATO'), 0,0,'L',0);
$pdf->Cell(22.48, 6, utf8_decode(''), 'R' , 1,'L',0);
}

while ($row13 = pg_fetch_assoc($oficina)){
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA OFICINA ADMINISTRATIVA'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['estado']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['municipio']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row13['parroquia']), 'R, B, L', 1,'L',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DE LA OFICINA ADMINISTRATIVA'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('AVENIDA /CARRERA/CALLE/ESQUINA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('EDIFICIO/GALPÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['urbanizacion']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['avenida']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row13['edificio']), 'R, B, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PISO/PLANTA/LOCAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PUNTO DE REFERENCIA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CÓDIGO POSTAL'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['piso']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row13['referencia']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row13['postal']), 'R, B, L', 1,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE FAX'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'), 'R, T, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(46.25,6, utf8_decode($row13['telefono']), 'R, B, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.8);
$pdf->Cell(46.25,6, utf8_decode($row13['correo']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
}

$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA PLANTA DE PRODUCCIÓN'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
while($row9 = pg_fetch_assoc($establecimiento)){
if($row9['establecimiento'] == 'PLANTA DE PRODUCCION'){
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['estado']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['municipio']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row9['parroquia']), 'R, B, L', 1,'L',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DE LA PLANTA DE PRODUCCIÓN'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('AVENIDA /CARRERA/CALLE/ESQUINA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('EDIFICIO/GALPÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['urbanizacion']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['avenida']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row9['edificio']), 'R, B, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PISO/PLANTA/LOCAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PUNTO DE REFERENCIA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CÓDIGO POSTAL'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['piso']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['referencia']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row9['postal']), 'R, B, L', 1,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE FAX'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'), 'R, T, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(46.25,6, utf8_decode($row9['telefono']), 'R, B, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.8);
$pdf->Cell(46.25,6, utf8_decode($row9['correo']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
}else{
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DE LA PLANTA DE PRODUCCIÓN'), 1, 1,'C', 1);
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
$pdf->SetFont('Arial', '', 7);
}

$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA NUEVA SUCURSAL (ES)'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
if($row9['establecimiento'] == 'SUCURSAL'){
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['estado']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['municipio']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row9['parroquia']), 'R, B, L', 1,'L',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DE LA NUEVA SUCURSAL (ES)'), 1, 1,'C', 1);
$pdf->SetFillColor(225,225,225);
$pdf->Cell(62,5.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('AVENIDA /CARRERA/CALLE/ESQUINA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('EDIFICIO/GALPÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['urbanizacion']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['avenida']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row9['edificio']), 'R, B, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PISO/PLANTA/LOCAL'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('PUNTO DE REFERENCIA'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CÓDIGO POSTAL'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['piso']), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode($row9['referencia']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode($row9['postal']), 'R, B, L', 1,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE TELÉFONO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode('N° DE FAX'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'), 'R, T, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.6);
$pdf->Cell(46.25,6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'), 'R, T, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(46.25,6, utf8_decode($row9['telefono']), 'R, B, L' ,0,'L',0);
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->SetFont('Arial', '', 5.8);
$pdf->Cell(46.25,6, utf8_decode($row9['correo']), 'R, B, L' ,0,'L',0);  
$pdf->Cell(46.25,6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(185,0, utf8_decode(''), 1, 1, 'C', 0);
}else{
$pdf->Cell(62,5.6, utf8_decode('ESTADO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode('MUNICIPIO'), 'R, T, L' ,0,'L',0);
$pdf->Cell(61,5.6, utf8_decode('CIUDAD / POBLACIÓN'), 'R, T, L', 1,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);
$pdf->Cell(62,5.6, utf8_decode(''), 'R, B, L' ,0,'L',0);  
$pdf->Cell(61,5.6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->SetFillColor(220,220,220);
$pdf->Cell(185,6, utf8_decode('DIRECCIÓN DE LA NUEVA SUCURSAL (ES)'), 1, 1,'C', 1);
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
$pdf->SetFont('Arial', '', 7);
$pdf->Cell(185,0, utf8_decode(''), 1, 1, 'C', 0);
}
}
$pdf->Ln(5);

$pdf->AddPage('Portrait');
while ($row10 = pg_fetch_assoc($operaciones)){
//188.3 original
$pdf->SetY(31);
$pdf->Cell(102.5,6, utf8_decode('OPERACIONES DE MANUFACTURA A REALIZAR'), 'R, T, L' ,0,'L',0);
$pdf->Cell(82.5,6, utf8_decode('OTRAS ACTIVIDADES A REALIZAR'), 'R, T, L', 1,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row10['operaciones'] == 'FABRICACIÓN'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('FABRICACIÓN'), 0,0,'L',0);
$pdf->Cell(5);
if($row10['operaciones'] == 'PREPARACIÓN'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('PREPARACIÓN'), 0,0,'L',0);
$pdf->Cell(7);
if($row10['operaciones'] == 'ACONDICIONAMIENTO PRIMARIO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('ACONDICIONAMIENTO PRIMARIO'), 0,0,'L',0);
$pdf->Cell(28.5, 5, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row10['operaciones'] == 'DISTRIBUCIÓN'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('DISTRIBUCIÓN'), 0,0,'L',0);
$pdf->Cell(7);
if($row10['operaciones'] == 'IMPORTACIÓN'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('IMPORTACIÓN'), 0,0,'L',0);
$pdf->Cell(7);
if($row10['operaciones'] == 'EXPORTACIÓN'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('EXPORTACIÓN'), 0,0,'L',0);
$pdf->Cell(6.5,6, utf8_decode(''), 'R' , 1,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row10['operaciones'] == 'ACONDICIONAMIENTO SECUNDARIO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(41,6, utf8_decode('ACONDICIONAMIENTO SECUNDARIO'), 0,0,'L',0);
$pdf->Cell(5);
if($row10['operaciones'] == 'CONTROL DE CALIDAD'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('CONTROL DE CALIDAD'), 0,0,'L',0);
$pdf->Cell(28.5, 6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row10['operaciones'] == 'INVESTIGACIÓN Y DESARROLLO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(40,6, utf8_decode('INVESTIGACIÓN Y DESARROLLO'), 0,0,'L',0);
$pdf->Cell(33.5, 6, utf8_decode(''), 'R' , 1,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row10['operaciones'] == 'ALMACENAMIENTO'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(59.94,6, utf8_decode('ALMACENAMIENTO'), 0,0,'L',0);
$pdf->Cell(5);
$pdf->Cell(28.5, 6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(82.55, 6, utf8_decode(''), 'R' , 1,'L',0);
}

while($row11 = pg_fetch_assoc($productos)){
$pdf->SetY(55);
$pdf->Cell(57.5,6, utf8_decode('PRODUCTOS A ELABORAR'), 'R, T, L' ,0,'L',0);
$pdf->Cell(127.5,6, utf8_decode('PRODUCTOS ALTAMENTE SENSIBILIZANTE'), 'R, T, L', 1,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row11['tipo_producto'] == 'ESTÉRILES'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('ESTÉRILES'), 0,0,'L',0);
$pdf->Cell(5);
if($row11['tipo_producto'] == 'NO ESTÉRILES'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('NO ESTÉRILES'), 0,0,'L',0);
$pdf->Cell(9.5, 6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row11['tipo_producto'] == 'CEFALOSPORINAS Y SUS DERIVADOS'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(43,6, utf8_decode('CEFALOSPORINAS Y SUS DERIVADOS'), 0,0,'L',0);
$pdf->Cell(7);
if($row11['tipo_producto'] == 'HORMONAS'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(12,6, utf8_decode('HORMONAS'), 0,0,'L',0);
$pdf->Cell(7);
if($row11['tipo_producto'] == 'SUSTANCIAS CITOTOXICAS'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(35,6, utf8_decode('SUSTANCIAS CITOTOXICAS'), 0,0,'L',0);
$pdf->Cell(6.5, 6, utf8_decode(''), 'R' , 1,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
$pdf->Cell(43.03);
$pdf->Cell(9.5, 6, utf8_decode(''), 'R' , 0,'L',0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row11['tipo_producto'] == 'PRODUCTOS SUMAMENTE ACTIVOS'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(43,6, utf8_decode('PRODUCTOS SUMAMENTE ACTIVOS'), 0,0,'L',0);
$pdf->Cell(7);
if($row11['tipo_producto'] == 'PENICILINAS Y SUS DERIVADOS'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(50,6, utf8_decode('PENICILINAS Y SUS DERIVADOS'), 0,0,'L',0);
$pdf->Cell(14.5, 6, utf8_decode(''), 'R' , 1,'L',0);
}

while ($row12 = pg_fetch_assoc($formas)){
$pdf->SetY(73);
$pdf->Cell(185,6, utf8_decode('FORMAS FARMACÉUTICAS O COSMÉTICAS DE LOS PRODUCTOS A ELABORAR O ACONDICIONAR'), 'R, T, L', 1,'L', 0);
$pdf->Cell(5, 6,utf8_decode(''),'L' ,0,'C',0);
if($row12['forma'] == 'LIQUIDA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('LÍQUIDA'), 0,0,'L',0);
$pdf->Cell(5);
if($row12['forma'] == 'SOLIDA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('SÓLIDA'), 0,0,'L',0);
$pdf->Cell(3);
if($row12['forma'] == 'SEMISÓLIDA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(18,6, utf8_decode('SEMISÓLIDA'), 0,0,'L',0);
$pdf->Cell(3);
if($row12['forma'] == 'GASEOSA'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('GASEOSA'), 0,0,'L',0);
$pdf->Cell(5);
if($row12['forma'] == 'PARCHES'){
$pdf->Cell(4,4,utf8_decode('X'),1,0,'C',0);
}else{
$pdf->Cell(4,4,utf8_decode(''),1,0,'C',0);
}
$pdf->Cell(15,6, utf8_decode('PARCHES'), 0,0,'L',0);
$pdf->Cell(66, 6, utf8_decode(''), 'R' , 1,'L',0);
$pdf->Cell(185, 0, utf8_decode(''), 'B' , 1,'L',0);
}
$pdf->Ln(3.5);


$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(185, 4, utf8_decode('C.- OBSERVACIONES DEL (LA) FARMACÉUTICO(A) REGENTE'), 0, 'L', 0);
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
$pdf->Cell(22.5, 5, utf8_decode('FIRMA DEL(LA) REGENTE O DIRECTOR(A) TECNICO(A)'), 0, 1, 'C', 0);
$pdf->Ln(4);
$pdf->SetFont('Arial', 'B', 9);
$pdf->MultiCell(0, 4, utf8_decode('D.- PARA USO INTERNO EXCLUSIVAMENTE (NO ESCRIBIR)'), 0, 'L', 0);
$pdf->SetFont('Arial', '', 7);
$pdf->Ln(2.5);
$pdf->Cell(62.5, 6, utf8_decode('NÚMERO DE PERMISO SANITARIO'), 1, 0,'L',1);
$pdf->Cell(122.5, 6, utf8_decode('FUNCIONARIO(A) RESPONSABLE:'), 'R, T, L', 1,'L',0);
$pdf->Cell(62.5, 6, utf8_decode(''), 1, 0,'L',0);
$pdf->Cell(122.5, 6, utf8_decode(''), 'R, B, L', 1,'L',0);
$pdf->Cell(185, 6, utf8_decode('OBSERVACIONES DEL (LA) FUNCIONARIO(A):'), 'R, T, L', 1,'L',0);
$pdf->MultiCell(185, 30, utf8_decode(''), 1, 'L', 0);
$pdf->Cell(5);
$pdf->Cell(180, 3, utf8_decode('F.16-DMC-IFV-OPP-AGOSTO 2022'), 0, 1, 'L', 0);
$pdf->Ln(6);


//agregar recaudos

$pdf->Output('I', 'Solicitud Sanitaria.pdf');

pg_free_result($fecha);
pg_free_result($laboratorio);
pg_free_result($regente);
pg_free_result($datos_e);
pg_free_result($registro_m);
pg_free_result($propietario);
pg_free_result($patente);
pg_free_result($tipo_em_tenecia);
pg_free_result($establecimiento);
pg_free_result($operaciones);
pg_free_result($productos);
pg_free_result($formas);
pg_free_result($oficina);

?>