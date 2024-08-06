<?php
header("content-type: text/html; charset=iso-8859-1");
$dia=date('d');
$mes=date('m');
$ano=date('Y');



require('pdf/fpdf.php');
$fpdf = new FPDF('P', 'cm', 'Legal',true);
$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1,0.5, 20,);


$fpdf->SetFont('Arial','',10);
//Color de las letras
$fpdf->SetTextColor(0, 0, 0);
//cell(ancho, alto, lo que quieres moestrar, bordes, salto de linea, ubicacion DE LA LETRAS DENTRO DEL CUADRO(l, C, R), color negro dentro del cuadro);
$fpdf->cell(10.6,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,0,'C',0);
$fpdf->cell(-15,5, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,0,'C',0);

$fpdf->SetFont('Arial','B',10);
$fpdf->cell(28,6.5, utf8_decode('SOLICITUD DE PERMISO SANITARIO DE LABORATORIOS FABRICANTES O'),0,0,'C',0);
$fpdf->cell(-28,7.5, utf8_decode('ACONDICIONADORES EN EMPAQUES PRIMARIOS Y/O SECUNDARIOS DE PRODUCTOS'),0,0,'C',0);
$fpdf->cell(28.3,8.5, utf8_decode('FARMACÉUTICOS, HOMEOPÁTICOS, REPELENTES DE INSECTOS DE USO TÓPICO O'),0,0,'C',0);
$fpdf->cell(-29,9.5, utf8_decode('COSMÉTICOS'),0,0,'C',0);

$fpdf->SetFont('Arial','I',9);
$fpdf->cell(20,13, utf8_decode('LEER EL INSTRUCTIVO ANTES DE LLENAR EL FORMULARIO'),0,0,'C',0);


$fpdf->SetFont('Arial','B',7);
$fpdf->SetXY(11,6.7);
$fpdf->cell(5,0.50, utf8_decode('FECHA DE SOLICITUD'),1,0,'C',0);
$fpdf->cell(5,0.50, utf8_decode('N° DE SOLICITUD'),1,1,'C',0);
$fpdf->SetXY(16,7.2);
$fpdf->cell(5,1.3, utf8_decode('$solicitud'),1,0,'C',0);

$fpdf->SetXY(11,7.2);
$fpdf->cell(1.5,0.50, utf8_decode('DIA'),1,1,'C',0);

$fpdf->SetXY(11,7.7);
$fpdf->cell(1.5,0.8, utf8_decode($dia),1,0,'C',0);

$fpdf->SetXY(12.5,7.2);
$fpdf->cell(1.5,0.50, utf8_decode('MES'),1,0,'C',0);
$fpdf->SetXY(11.7,7.7);
$fpdf->cell(3,0.8, utf8_decode($mes),0,0,'C',0);

$fpdf->SetXY(14,7.2);
$fpdf->cell(2,0.50, utf8_decode('AÑO'),1,0,'C',0);
$fpdf->SetXY(14,7.7);
$fpdf->cell(2,0.8, utf8_decode($ano),1,0,'C',0);

$fpdf->SetXY(2,8.3);
$fpdf->cell(2,0.8, utf8_decode('TIPOS DE LABORATORIO'),0,0,'C',0);
$fpdf->SetXY(1,8.5);
$fpdf->cell(20,3, utf8_decode(''),1,0,'C',0);


$fpdf->SetXY(1.5,9.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(3.1,9);
$fpdf->cell(2,0.8, utf8_decode('ESPECIALIDADES FARMACÉUTICAS'),0,0,'C',0);

$fpdf->SetXY(1.5,9.8);
$fpdf->cell(0.3,0.3, utf8_decode('$1'),1,0,'C',0);
$fpdf->SetXY(2.5,9.6);
$fpdf->cell(2,0.8, utf8_decode('FÓRMULAS MAGISTRALES'),0,0,'C',0);

$fpdf->SetXY(1.5,10.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(2.2,10.3);
$fpdf->cell(2,0.8, utf8_decode('GASES MEDICINALES'),0,0,'C',0);
//
$fpdf->SetXY(6.5,9.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(7.5,9);
$fpdf->cell(2,0.8, utf8_decode('PRODUCTOS NATURALES'),0,0,'C',0);

$fpdf->SetXY(6.5,9.8);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(6.9,9.6);
$fpdf->cell(2,0.8, utf8_decode('RADIOFARMACO'),0,0,'C',0);

$fpdf->SetXY(6.5,10.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(8.4,10.3);
$fpdf->cell(2,0.8, utf8_decode('REPELENTES DE INSECTOS USO TOPICO'),0,0,'C',0);

//
$fpdf->SetXY(12,9.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(13,9);
$fpdf->cell(2,0.8, utf8_decode('PRODUCTOS COSMÉTICOS'),0,0,'C',0);

$fpdf->SetXY(12,9.8);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(12.4,9.6);
$fpdf->cell(2,0.8, utf8_decode('HOMEOPÁTICO'),0,0,'C',0);
//
$fpdf->SetXY(16,9.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(17,9);
$fpdf->cell(2,0.8, utf8_decode('PRODUCTOS COSMÉTICOS'),0,0,'C',0);

$fpdf->SetXY(16,9.8);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(16.3,9.6);
$fpdf->cell(2,0.8, utf8_decode('HOMEOPÁTICO'),0,0,'C',0);


$fpdf->SetFont('Arial','B',8);
$fpdf->SetXY(5.1,11.4);
$fpdf->cell(2,0.8, utf8_decode('A- DATOS DEL (LA) REGENTE/DIRECTOR(A) TÉCNICO(A) AUTORIZADO(A)'),0,0,'C',0);

$fpdf->SetXY(1,11.8);
$fpdf->cell(2,0.8, utf8_decode('Apellidos'),0,0,'C',0);
$fpdf->SetXY(1,12);
$fpdf->cell(7,1, utf8_decode('$apellido'),1,0,'C',0);

$fpdf->SetXY(8,11.8);
$fpdf->cell(2,0.8, utf8_decode('Nombres'),0,0,'C',0);
$fpdf->SetXY(8,12);
$fpdf->cell(7,1, utf8_decode('$nombre'),1,0,'C',0);

$fpdf->SetXY(16.2,11.8);
$fpdf->cell(2,0.8, utf8_decode('N° DE CEDULA DE IDENTIDAD'),0,0,'C',0);
$fpdf->SetXY(15,12);
$fpdf->cell(6,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15,12.2);
$fpdf->cell(6,1, utf8_decode('V111111'),0,0,'C',0);

$fpdf->SetXY(15.2,12.5);
$fpdf->cell(0.3,0.3, utf8_decode('$1'),1,0,'C',0);
$fpdf->SetXY(14.8,12.3);
$fpdf->cell(2,0.8, utf8_decode('V'),0,0,'C',0);
$fpdf->SetXY(16.2,12.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15.8,12.3);
$fpdf->cell(2,0.8, utf8_decode('E'),0,0,'C',0);

$fpdf->SetFont('Arial','B',7);
$fpdf->SetXY(2,12.8);
$fpdf->cell(2,0.8, utf8_decode('N° DE MATRICULA DEL MPPS'),0,0,'C',0);
$fpdf->SetXY(1,13);
$fpdf->cell(7,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(1,13.1);
$fpdf->cell(7,1, utf8_decode('$mpps'),0,0,'C',0);

$fpdf->SetXY(8,12.8);
$fpdf->cell(2,0.8, utf8_decode('PROFESIÓN'),0,0,'C',0);
$fpdf->SetXY(8,13);
$fpdf->cell(13,1, utf8_decode('$profesion'),1,0,'C',0);

$fpdf->SetXY(1.3,13.8);
$fpdf->cell(2,0.8, utf8_decode('N° DE TELÉFONO'),0,0,'C',0);
$fpdf->SetXY(1,14);
$fpdf->cell(7,1, utf8_decode('$nro_telefono'),1,0,'C',0);

$fpdf->SetXY(1.3,13.8);
$fpdf->cell(17,0.8, utf8_decode('N° DE TELEFONO MÓVIL'),0,0,'C',0);
$fpdf->SetXY(8,14);
$fpdf->cell(7,1, utf8_decode('$nro_telefono_dos'),1,0,'C',0);

$fpdf->SetXY(7.5,13.8);
$fpdf->cell(20,0.8, utf8_decode('DIRECCIÓN CORREO ELECTRÓNICO'),0,0,'C',0);
$fpdf->SetXY(15,14);
$fpdf->cell(6,1, utf8_decode('$direccion'),1,0,'C',0);

$fpdf->SetFont('Arial','B',8);
$fpdf->SetXY(5.8,15);
$fpdf->cell(2,0.8, utf8_decode('B- DATOS DEL LABORATORIO FABRICATE O DE LA EMPRESA ACONDICIONADORA'),0,0,'C',0);

$fpdf->SetFont('Arial','B',7);
$fpdf->SetXY(1,15.6);
$fpdf->cell(20,1, utf8_decode('NOMBRE O RAZÓN SOCIAL'),1,0,'L',0);
$fpdf->SetXY(5,15.6);
$fpdf->cell(20,1, utf8_decode('$nombre_razon_social'),0,1,'L',0);


$fpdf->cell(20,1, utf8_decode('OBJETO SOCIAL'),1,1,'L',0);
$fpdf->SetXY(5,16.6);
$fpdf->cell(20,1, utf8_decode('$objeto_social'),0,1,'L',0);

$fpdf->cell(10,1, utf8_decode('N° DE RIF'),1,0,'L',0);
$fpdf->SetXY(5,17.6);
$fpdf->cell(20,1, utf8_decode('$rif'),0,1,'L',0);
$fpdf->SetXY(11,17.6);
$fpdf->cell(10,1, utf8_decode('N° DE NIT'),1,1,'L',0);
$fpdf->SetXY(14,17.6);
$fpdf->cell(20,1, utf8_decode('$nit'),0,1,'L',0);

$fpdf->SetFont('Arial','B',6);
$fpdf->SetFillColor(220,220,220);
$fpdf->cell(20,0.5, utf8_decode('DATOS DEL REGISTRO MERCANTIL'),1,1,'C',1);
$fpdf->SetFont('Arial','B',7);
$fpdf->cell(10,1, utf8_decode('REGISTRO'),1,0,'L',0);
$fpdf->cell(10,1, utf8_decode('CIRCUNSCRIPCIÓN'),1,1,'L',0);
$fpdf->cell(7,1, utf8_decode('TOMO'),1,0,'L',0);
$fpdf->cell(7,1, utf8_decode('NÚMERO'),1,0,'L',0);

$fpdf->SetXY(15,20.1);
$fpdf->cell(6,0.3, utf8_decode('PROTOCOLIZACION'),1,1,'C',0);
$fpdf->SetXY(15,20.1);
$fpdf->cell(6,1, utf8_decode(''),1,0,'C',0);

$fpdf->SetFont('Arial','B',7);
$fpdf->SetXY(15,20.2);
$fpdf->cell(1.5,0.7, utf8_decode('DIA'),0,0,'C',0);

$fpdf->SetXY(15,20.3);
$fpdf->cell(1.5,1, utf8_decode($dia),0,0,'C',0);

$fpdf->SetXY(17,20.3);
$fpdf->cell(1.5,0.50, utf8_decode('MES'),0,0,'C',0);
$fpdf->SetXY(16.3,20.4);
$fpdf->cell(3,0.8, utf8_decode($mes),0,0,'C',0);

$fpdf->SetXY(19,20.3);
$fpdf->cell(2,0.50, utf8_decode('AÑO'),0,0,'C',0);
$fpdf->SetXY(19,20.4);
$fpdf->cell(2,0.8, utf8_decode($ano),0,1,'C',0);

$fpdf->SetFont('Arial','B',6);
$fpdf->SetXY(1,21.1);
$fpdf->SetFillColor(220,220,220);
$fpdf->cell(20,0.5, utf8_decode('MODIFICACIONES REALIZADAS AL REGISTRO MERCANTIL'),1,1,'C',1);
$fpdf->cell(4,0.6, utf8_decode('REGISTRO'),1,1,'L',0);
$fpdf->cell(4,0.6, utf8_decode('$registro'),1,1,'L',0);
$fpdf->cell(4,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->cell(4,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->cell(4,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->cell(4,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(5,21.6);
$fpdf->cell(3.3,0.6, utf8_decode('CIRCUNSCRIPCIÓN'),1,1,'L',0);
$fpdf->SetXY(5,22.2);
$fpdf->cell(3.3,0.6, utf8_decode('$circunscripcion'),1,1,'L',0);
$fpdf->SetXY(5,22.8);
$fpdf->cell(3.3,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(5,23.4);
$fpdf->cell(3.3,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(5,24);
$fpdf->cell(3.3,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(5,24.6);
$fpdf->cell(3.3,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(8.3,21.6);
$fpdf->cell(2,0.6, utf8_decode('TOMO'),1,1,'L',0);
$fpdf->SetXY(8.3,22.2);
$fpdf->cell(2,0.6, utf8_decode('$tomo'),1,1,'L',0);
$fpdf->SetXY(8.3,22.8);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(8.3,23.4);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(8.3,24);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(8.3,24.6);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);

$fpdf->SetXY(10.3,21.6);
$fpdf->cell(2,0.6, utf8_decode('NÚMERO'),1,1,'L',0);
$fpdf->SetXY(10.3,22.2);
$fpdf->cell(2,0.6, utf8_decode('$numero'),1,1,'L',0);
$fpdf->SetXY(10.3,22.8);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(10.3,23.4);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(10.3,24);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(10.3,24.6);
$fpdf->cell(2,0.6, utf8_decode(''),1,1,'L',0);

$fpdf->SetXY(12.3,21.6);
$fpdf->cell(4,0.3, utf8_decode('PROTOCOLIZACION'),1,1,'C',0);
$fpdf->SetXY(12.3,21.6);
$fpdf->cell(4,0.6, utf8_decode(''),1,0,'C',0);

$fpdf->SetFont('Arial','B',7);
$fpdf->SetXY(12.3,21.7);
$fpdf->cell(1.5,0.7, utf8_decode('DIA'),0,0,'C',0);

$fpdf->SetXY(13.5,21.8);
$fpdf->cell(1.5,0.50, utf8_decode('MES'),0,0,'C',0);

$fpdf->SetXY(14.5,21.8);
$fpdf->cell(2,0.50, utf8_decode('AÑO'),0,0,'C',0);
$fpdf->SetXY(12.8,22.2);
$fpdf->cell(1.5,0.6, utf8_decode($dia),0,0,'L',0);
$fpdf->cell(1.2,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->cell(1.3,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->SetXY(14,22.2);
$fpdf->cell(1.5,0.6, utf8_decode($mes),0,0,'L',0);
$fpdf->cell(1.2,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->cell(1.3,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->SetXY(15,22.2);
$fpdf->cell(1.5,0.6, utf8_decode($ano),0,0,'L',0);
$fpdf->cell(1.2,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->cell(1.3,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->SetXY(12.3,24);
$fpdf->cell(1.5,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->cell(1.2,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->cell(1.3,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->SetXY(12.3,24.6);
$fpdf->cell(1.5,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->cell(1.2,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->cell(1.3,0.6, utf8_decode(''),0,0,'L',0);
$fpdf->SetXY(16.3,21.6);
$fpdf->cell(4.7,0.6, utf8_decode('MODIFICACIÍON'),1,1,'L',0);
$fpdf->SetXY(16.3,22.2);
$fpdf->cell(4.7,0.6, utf8_decode('$modificacion'),1,0,'L',0);
$fpdf->SetXY(16.3,22.8);
$fpdf->cell(4.7,0.6, utf8_decode(''),1,0,'L',0);
$fpdf->SetXY(16.3,23.4);
$fpdf->cell(4.7,0.6, utf8_decode(''),1,0,'L',0);
$fpdf->SetXY(16.3,24);
$fpdf->cell(4.7,0.6, utf8_decode(''),1,0,'L',0);
$fpdf->SetXY(16.3,24.6);
$fpdf->cell(4.7,0.6, utf8_decode(''),1,1,'L',0);

$fpdf->SetFillColor(220,220,220);
$fpdf->cell(20,0.5, utf8_decode('PROPIETARIOS'),1,1,'C',1);
$fpdf->cell(7,0.8, utf8_decode('Apellidos'),1,0,'L',0);
$fpdf->cell(7,0.8, utf8_decode('NOMBRES'),1,0,'L',0);

$fpdf->SetXY(16.2,25.7);
$fpdf->cell(2,0.8, utf8_decode('N° DE CEDULA DE IDENTIDAD'),0,0,'C',0);
$fpdf->SetXY(15,25.7);
$fpdf->cell(6,0.8, utf8_decode(''),1,1,'C',0);
$fpdf->cell(7,0.8, utf8_decode('$apellido'),1,1,'C',0);
$fpdf->cell(7,0.8, utf8_decode(''),1,1,'C',0);
$fpdf->cell(7,0.8, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15,26.5);
$fpdf->cell(6,0.8, utf8_decode(''),1,1,'C',0);
$fpdf->SetXY(8,27.3);
$fpdf->cell(7,0.8, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(8,28.1);
$fpdf->cell(7,0.8, utf8_decode(''),1,1,'C',0);
$fpdf->SetXY(15,27.3);
$fpdf->cell(6,0.8, utf8_decode('$cedila'),1,1,'C',0);
$fpdf->SetXY(8,26.5);
$fpdf->cell(7,0.8, utf8_decode('$nombre'),1,1,'C',0);
$fpdf->SetXY(15,28.1);
$fpdf->cell(6,0.8, utf8_decode(''),1,1,'C',0);

$fpdf->SetXY(14.8,26.4);
$fpdf->cell(2,0.8, utf8_decode('V'),0,0,'C',0);
$fpdf->SetXY(15.2,26.6);
$fpdf->cell(0.3,0.3, utf8_decode('$1'),1,0,'C',0);
$fpdf->SetXY(15.5,26.4);
$fpdf->cell(2,0.8, utf8_decode('E'),0,0,'C',0);
$fpdf->SetXY(16,26.6);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(14.8,27.3);
$fpdf->cell(2,0.8, utf8_decode('V'),0,0,'C',0);
$fpdf->SetXY(15.2,27.5);
$fpdf->cell(0.3,0.3, utf8_decode('$1'),1,0,'C',0);
$fpdf->SetXY(15.5,27.3);
$fpdf->cell(2,0.8, utf8_decode('E'),0,0,'C',0);
$fpdf->SetXY(16,27.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(14.8,28.2);
$fpdf->cell(2,0.8, utf8_decode('V'),0,0,'C',0);
$fpdf->SetXY(15.2,28.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15.5,28.2);
$fpdf->cell(2,0.8, utf8_decode('E'),0,0,'C',0);
$fpdf->SetXY(16,28.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,0,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);



$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1, 0.5, 20,);
$fpdf->SetFillColor(220,220,220);
$fpdf->SetXY(1.2,2.5);
$fpdf->cell(20,0.5, utf8_decode('DATOS DE LA PATENTE'),1,1,'C',1);
$fpdf->SetFont('Arial','B',8);
$fpdf->SetXY(1.2,3);
$fpdf->cell(4.3,0.3, utf8_decode('DOCUMENTO PRESENTADO'),1,0,'L',0);
$fpdf->cell(4,0.3, utf8_decode('NÚMERO'),1,0,'C',0);
$fpdf->cell(6,0.3, utf8_decode('ACTIVIDAD'),1,0,'C',0);
$fpdf->cell(5.7,0.3, utf8_decode('FECHA DE VENCIMIENTO'),1,1,'C',0);


$fpdf->SetFont('Arial','',7);
$fpdf->SetXY(1.2,3.3);
$fpdf->cell(4.3,1.2, utf8_decode(''),1,0,'L',0);
$fpdf->SetXY(1.5,3.5);
$fpdf->cell(0.3,0.3, utf8_decode('$1'),1,0,'C',0);
$fpdf->SetXY(2.3,3.5);
$fpdf->cell(0.3,0.3, utf8_decode('PATENTE'),0,0,'C',0);
$fpdf->SetXY(1.5,4);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(2.4,4);
$fpdf->cell(0.3,0.3, utf8_decode('SOLICITUD'),0,0,'C',0);

$fpdf->SetXY(5.5,3.3);
$fpdf->cell(4,1.2, utf8_decode('$numero'),1,0,'C',0);
$fpdf->cell(6,1.2, utf8_decode('$actividad'),1,0,'C',0);
$fpdf->cell(5.7,1.2, utf8_decode('fecha'),1,1,'C',0);
$fpdf->SetXY(-21.8,4.2);
$fpdf->cell(5.7,1.2, utf8_decode('ESTADO OTORGANTE'),0,0,'C',0);
$fpdf->SetXY(-20.4,4.5);
$fpdf->cell(10,1.2, utf8_decode('$estado'),1,0,'C',0);
$fpdf->SetXY(-11.6,4.2);
$fpdf->cell(5.7,1.2, utf8_decode('MUNICIPIO OTORGANTE'),0,0,'C',0);
$fpdf->SetXY(-10.4,4.5);
$fpdf->cell(10,1.2, utf8_decode('$municipio'),1,1,'C',0);
$fpdf->SetXY(-20.4,5.4);
$fpdf->cell(10,1.2, utf8_decode('TIPO EMPRESA'),0,0,'L',0);
$fpdf->SetXY(-20.4,5.7);
$fpdf->cell(10,1.2, utf8_decode(''),1,1,'C',0);

$fpdf->SetXY(1.5,6.3);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(2.3,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('PÚBLICA'),0,0,'C',0);

$fpdf->SetXY(3.2,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('$1'),1,0,'C',0);
$fpdf->SetXY(4,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('PRIVADA'),0,0,'C',0);

$fpdf->SetXY(5,6.3);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(6.3,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('COOPERATIVA'),0,0,'C',0);

$fpdf->SetXY(11.2,5.3);
$fpdf->cell(10,1.2, utf8_decode('TENENCIA DEL LOCAL'),0,0,'L',0);
$fpdf->SetXY(11.2,5.7);
$fpdf->cell(10,1.2, utf8_decode(''),1,1,'C',0);

$fpdf->SetXY(11.5,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('$1'),1,0,'C',0);
$fpdf->SetXY(12.3,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('PROPIO'),0,0,'C',0);

$fpdf->SetXY(13.5,6.3);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(14.6,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('ARRENDADO'),0,0,'C',0);

$fpdf->SetXY(16,6.3);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(17,6.3);
$fpdf->cell(0.3,0.3, utf8_decode('COMODATO'),0,0,'C',0);

$fpdf->SetXY(1.2,6.8);
$fpdf->SetFillColor(220,220,220);
$fpdf->cell(20,0.5, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA OFICINA ADMINISTRATIVA'),1,1,'C',1);
$fpdf->SetFont('Arial','',7);
$fpdf->SetXY(1.2,7.2);
$fpdf->cell(10,0.8, utf8_decode('ESTADO'),0,0,'L',0);
$fpdf->SetXY(7.2,7.2);
$fpdf->cell(10,0.8, utf8_decode('MUNICIPIO'),0,0,'L',0);
$fpdf->SetXY(13.2,7.2);
$fpdf->cell(10,0.8, utf8_decode('CIUDAD/POBLACIÓN'),0,0,'L',0);

$fpdf->SetXY(1.2,7.3);
$fpdf->cell(6,1, utf8_decode('$estado'),1,0,'C',0);
$fpdf->SetXY(7.2,7.3);
$fpdf->cell(6,1, utf8_decode('$municipio'),1,0,'C',0);
$fpdf->SetXY(13.2,7.3);
$fpdf->cell(8,1, utf8_decode('$ciudad'),1,0,'C',0);

$fpdf->SetFillColor(220,220,220);
$fpdf->SetXY(1.2,8.3);
$fpdf->cell(20,0.5, utf8_decode('DIRECCIÓN DE LA OFICINA ADMINISTRATIVA'),1,1,'C',1);
$fpdf->SetXY(1.2,8.7);
$fpdf->cell(10,0.8, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRAL'),0,0,'L',0);
$fpdf->SetXY(8,8.7);
$fpdf->cell(10,0.8, utf8_decode('AVENIDA/CARRERA/CALLE/ESQUINA'),0,0,'L',0);
$fpdf->SetXY(15,8.7);
$fpdf->cell(10,0.8, utf8_decode('EDIFICIO/QUINTA/CASA/GALPÓN'),0,0,'L',0);
$fpdf->SetXY(1.2,8.8);
$fpdf->cell(6.8,1, utf8_decode('$urbanizacion'),1,0,'C',0);
$fpdf->SetXY(8,8.8);
$fpdf->cell(7,1, utf8_decode('$avenida'),1,0,'C',0);
$fpdf->SetXY(15,8.8);
$fpdf->cell(6.2,1, utf8_decode('$edificio'),1,0,'C',0);

$fpdf->SetXY(1.2,9.6);
$fpdf->cell(10,0.8, utf8_decode('PISO/PLANTA/LOCAL'),0,0,'L',0);
$fpdf->SetXY(6.2,9.6);
$fpdf->cell(10,0.8, utf8_decode('PUNTO DE REFERENCIA'),0,0,'L',0);
$fpdf->SetXY(16.2,9.6);
$fpdf->cell(10,0.8, utf8_decode('CÓDIGO POSTAL'),0,0,'L',0);
$fpdf->SetXY(1.2,9.8);
$fpdf->cell(5,1, utf8_decode('$piso'),1,0,'C',0);
$fpdf->SetXY(6.2,9.8);
$fpdf->cell(10,1, utf8_decode('$planta'),1,0,'C',0);
$fpdf->SetXY(16.2,9.8);
$fpdf->cell(5,1, utf8_decode('$codigo'),1,0,'C',0);

$fpdf->SetXY(1.2,10.6);
$fpdf->cell(10,0.8, utf8_decode('N° DE TELÉFONO'),0,0,'L',0);
$fpdf->SetXY(6.2,10.6);
$fpdf->cell(10,0.8, utf8_decode('N° DE FAX'),0,0,'L',0);
$fpdf->SetXY(9.5,10.6);
$fpdf->cell(10,0.8, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'),0,0,'L',0);
$fpdf->SetXY(15,10.6);
$fpdf->cell(10,0.8, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'),0,0,'L',0);
$fpdf->SetXY(1.2,10.8);
$fpdf->cell(5,1, utf8_decode('$telefono'),1,0,'C',0);
$fpdf->SetXY(6.2,10.8);
$fpdf->cell(3.3,1, utf8_decode('$fax'),1,0,'C',0);
$fpdf->SetXY(9.5,10.8);
$fpdf->cell(5.5,1, utf8_decode('$correo'),1,0,'C',0);
$fpdf->SetXY(15,10.8);
$fpdf->cell(6.2,1, utf8_decode('$pagina'),1,0,'C',0);

$fpdf->SetXY(1.2,11.8);
$fpdf->SetFillColor(220,220,220);
$fpdf->cell(20,0.5, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA PLANTA DE PRODUCCIÓN'),1,1,'C',1);

$fpdf->SetXY(1.2,12.2);
$fpdf->cell(10,0.8, utf8_decode('ESTADO'),0,0,'L',0);
$fpdf->SetXY(7.2,12.2);
$fpdf->cell(10,0.8, utf8_decode('MUNICIPIO'),0,0,'L',0);
$fpdf->SetXY(13.2,12.2);
$fpdf->cell(10,0.8, utf8_decode('CIUDAD/POBLACIÓN'),0,0,'L',0);

$fpdf->SetXY(1.2,12.3);
$fpdf->cell(6,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(7.2,12.3);
$fpdf->cell(6,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(13.2,12.3);
$fpdf->cell(8,1, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1.2,13.3);
$fpdf->SetFillColor(220,220,220);
$fpdf->cell(20,0.5, utf8_decode('DIRECCIÓN DE LA PLANTA DE PRODUCCIÓN'),1,1,'C',1);

$fpdf->SetXY(1.2,13.6);
$fpdf->cell(10,0.8, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRAL'),0,0,'L',0);
$fpdf->SetXY(8,13.6);
$fpdf->cell(10,0.8, utf8_decode('AVENIDA/CARRERA/CALLE/ESQUINA'),0,0,'L',0);
$fpdf->SetXY(15,13.6);
$fpdf->cell(10,0.8, utf8_decode('EDIFICIO/QUINTA/CASA/GALPÓN'),0,0,'L',0);
$fpdf->SetXY(1.2,13.8);
$fpdf->cell(6.8,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(8,13.8);
$fpdf->cell(7,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15,13.8);
$fpdf->cell(6.2,1, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1.2,14.6);
$fpdf->cell(10,0.8, utf8_decode('PISO/PLANTA/LOCAL'),0,0,'L',0);
$fpdf->SetXY(6.2,14.6);
$fpdf->cell(10,0.8, utf8_decode('PUNTO DE REFERENCIA'),0,0,'L',0);
$fpdf->SetXY(16.2,14.6);
$fpdf->cell(10,0.8, utf8_decode('CÓDIGO POSTAL'),0,0,'L',0);
$fpdf->SetXY(1.2,14.8);
$fpdf->cell(5,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(6.2,14.8);
$fpdf->cell(10,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(16.2,14.8);
$fpdf->cell(5,1, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1.2,15.6);
$fpdf->cell(10,0.8, utf8_decode('N° DE TELÉFONO'),0,0,'L',0);
$fpdf->SetXY(6.2,15.6);
$fpdf->cell(10,0.8, utf8_decode('N° DE FAX'),0,0,'L',0);
$fpdf->SetXY(9.5,15.6);
$fpdf->cell(10,0.8, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'),0,0,'L',0);
$fpdf->SetXY(15,15.6);
$fpdf->cell(10,0.8, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'),0,0,'L',0);
$fpdf->SetXY(1.2,15.8);
$fpdf->cell(5,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(6.2,15.8);
$fpdf->cell(3.3,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(9.5,15.8);
$fpdf->cell(5.5,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15,15.8);
$fpdf->cell(6.2,1, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1.2,16.8);
$fpdf->SetFillColor(220,220,220);
$fpdf->cell(20,0.5, utf8_decode('UBICACIÓN GEOGRÁFICA DEL (DE LOS) ALMACENES'),1,1,'C',1);

$fpdf->SetXY(1.2,17.2);
$fpdf->cell(10,0.8, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRAL'),0,0,'L',0);
$fpdf->SetXY(8,17.2);
$fpdf->cell(10,0.8, utf8_decode('AVENIDA/CARRERA/CALLE/ESQUINA'),0,0,'L',0);
$fpdf->SetXY(15,17.2);
$fpdf->cell(10,0.8, utf8_decode('EDIFICIO/QUINTA/CASA/GALPÓN'),0,0,'L',0);
$fpdf->SetXY(1.2,17.3);
$fpdf->cell(6.8,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(8,17.3);
$fpdf->cell(7,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15,17.3);
$fpdf->cell(6.2,1, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1.2,18.2);
$fpdf->cell(10,0.8, utf8_decode('PISO/PLANTA/LOCAL'),0,0,'L',0);
$fpdf->SetXY(6.2,18.2);
$fpdf->cell(10,0.8, utf8_decode('PUNTO DE REFERENCIA'),0,0,'L',0);
$fpdf->SetXY(16.2,18.2);
$fpdf->cell(10,0.8, utf8_decode('CÓDIGO POSTAL'),0,0,'L',0);
$fpdf->SetXY(1.2,18.3);
$fpdf->cell(5,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(6.2,18.3);
$fpdf->cell(10,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(16.2,18.3);
$fpdf->cell(5,1, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1.2,19.2);
$fpdf->cell(10,0.8, utf8_decode('N° DE TELÉFONO'),0,0,'L',0);
$fpdf->SetXY(6.2,19.2);
$fpdf->cell(10,0.8, utf8_decode('N° DE FAX'),0,0,'L',0);
$fpdf->SetXY(9.5,19.2);
$fpdf->cell(10,0.8, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO'),0,0,'L',0);
$fpdf->SetXY(15,19.2);
$fpdf->cell(10,0.8, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB'),0,0,'L',0);
$fpdf->SetXY(1.2,19.3);
$fpdf->cell(5,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(6.2,19.3);
$fpdf->cell(3.3,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(9.5,19.3);
$fpdf->cell(5.5,1, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(15,19.3);
$fpdf->cell(6.2,1, utf8_decode(''),1,0,'C',0);


$fpdf->SetXY(3.1,20.2);
$fpdf->cell(2,0.8, utf8_decode('OPERACIONES DE MANUFACTURA A REALIZAR'),0,0,'C',0);
$fpdf->SetXY(1.2,20.3);
$fpdf->cell(10,2.5, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(2.8,21);
$fpdf->cell(0.3,0.3, utf8_decode('FABRICACIÓN'),0,0,'C',0);
$fpdf->SetXY(1.5,21);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(5.3,21);
$fpdf->cell(0.3,0.3, utf8_decode('PREPARACIÓN'),0,0,'C',0);
$fpdf->SetXY(4.1,21);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(8.8,21);
$fpdf->cell(0.3,0.3, utf8_decode('ACONDICIONAMIENTO PRIMARIO'),0,0,'C',0);
$fpdf->SetXY(6.5,21);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(4,21.6);
$fpdf->cell(0.3,0.3, utf8_decode('ACONDICIONAMIENTO SECUNDARIO'),0,0,'C',0);
$fpdf->SetXY(1.5,21.6);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(8.5,21.6);
$fpdf->cell(0.3,0.3, utf8_decode('CONTROL DE CALIDAD'),0,0,'C',0);
$fpdf->SetXY(6.8,21.6);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(3.2,22.3);
$fpdf->cell(0.3,0.3, utf8_decode('ALMACENAMIENTO'),0,0,'C',0);
$fpdf->SetXY(1.5,22.3);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(12.5,20.2);
$fpdf->cell(2,0.8, utf8_decode('OTRAS ACTIVIDADES A REALIZAR'),0,0,'C',0);
$fpdf->SetXY(11.2,20.3);
$fpdf->cell(10,2.5, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(13,21);
$fpdf->cell(0.3,0.3, utf8_decode('DISTRIBUCIÓN'),0,0,'C',0);
$fpdf->SetXY(11.8,21);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(16,21);
$fpdf->cell(0.3,0.3, utf8_decode('IMPORTACIÓN'),0,0,'C',0);
$fpdf->SetXY(14.8,21);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(13.1,21.6);
$fpdf->cell(0.3,0.3, utf8_decode('EXPORTACIÓN'),0,0,'C',0);
$fpdf->SetXY(11.8,21.6);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(17.1,21.6);
$fpdf->cell(0.3,0.3, utf8_decode('INVESTIGACIÓN Y DESARROLLO'),0,0,'C',0);
$fpdf->SetXY(14.8,21.6);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(2,22.6);
$fpdf->cell(2,0.8, utf8_decode('PRODUCTOS A ELABORAR'),0,0,'C',0);
$fpdf->SetXY(1.2,22.8);
$fpdf->cell(6,2, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(2.5,23.2);
$fpdf->cell(0.3,0.3, utf8_decode('ESTÉRILES'),0,0,'C',0);
$fpdf->SetXY(1.5,23.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(5,23.2);
$fpdf->cell(0.3,0.3, utf8_decode('NO ESTÉRILES'),0,0,'C',0);
$fpdf->SetXY(3.8,23.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(9,22.6);
$fpdf->cell(2,0.8, utf8_decode('PRODUCTOS ALTAMENTE SENSIBILIZANTES'),0,0,'C',0);
$fpdf->SetXY(7.2,22.8);
$fpdf->cell(14,2, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(10,23.2);
$fpdf->cell(0.3,0.3, utf8_decode('CEFALOSPORINAS Y SUS DERIVADOS'),0,0,'C',0);
$fpdf->SetXY(7.5,23.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(13.8,23.2);
$fpdf->cell(0.3,0.3, utf8_decode('HORMONAS'),0,0,'C',0);
$fpdf->SetXY(12.8,23.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(17,23.2);
$fpdf->cell(0.3,0.3, utf8_decode('SUSTANCIAS CITOTOXICAS'),0,0,'C',0);
$fpdf->SetXY(15,23.2);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(15,23.7);
$fpdf->cell(0.3,0.3, utf8_decode('PENICILINA Y SUS DERIVADOS'),0,0,'C',0);
$fpdf->SetXY(12.8,23.7);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(9.6,23.7);
$fpdf->cell(0.3,0.3, utf8_decode('PENICILINA Y SUS DERIVADOS'),0,0,'C',0);
$fpdf->SetXY(7.5,23.7);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(6.1,24.6);
$fpdf->cell(2,0.8, utf8_decode('FORMAS FARMACÉUTICAS O COSMÉTICAS DE LOS PRODUCTOS A ELABORAR O ACONDICIONAR'),0,0,'C',0);
$fpdf->SetXY(1.2,24.8);
$fpdf->cell(20,1.8, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(2.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode('LÍQUIDA'),0,0,'C',0);
$fpdf->SetXY(1.8,25.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(5.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode('SÓLIDA'),0,0,'C',0);
$fpdf->SetXY(4.8,25.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(8.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode('SEMISÓLIDA'),0,0,'C',0);
$fpdf->SetXY(7.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(11.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode('GASEOSA'),0,0,'C',0);
$fpdf->SetXY(10.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(14.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode('PARCHES'),0,0,'C',0);
$fpdf->SetXY(13.5,25.5);
$fpdf->cell(0.3,0.3, utf8_decode(''),1,0,'C',0);
$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);

$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1, 0.5, 20,);
$fpdf->SetFont('Arial','',9);
$fpdf->cell(10.6,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,1,'C',0);
$fpdf->SetXY(0.8,1);
$fpdf->cell(7,5, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,0,'C',0);

$fpdf->SetFont('Arial','B',8);
$fpdf->SetXY(4.2,4);
$fpdf->cell(2,0.8, utf8_decode('C- OBSERVACIONES DEL (LA) FARMACÉUTICO(A) REGENTE'),0,1,'C',0);
$fpdf->cell(20,5, utf8_decode(''),1,1,'C',0);
$fpdf->SetXY(10,10);
$fpdf->cell(2,0.8, utf8_decode('DECLARACIÓN JURADA'),0,1,'C',0);


$fpdf->SetFont('Arial','',9);
$fpdf->SetXY(9,11);
$fpdf->cell(2,0.8, utf8_decode('Yo, _________________________________________ portador de la Cédula de Identidad N° ____________, actuando en mi'),0,1,'C',0);
$fpdf->SetXY(8.2,11.5);
$fpdf->cell(2,0.8, utf8_decode('actuando en mi carácter de Solicitante, ante el Servicio Autonómo de Contraloría Sanitaria, declaro bajo juramento'),0,1,'C',0);
$fpdf->SetXY(3.2,12);
$fpdf->cell(2,0.8, utf8_decode('corresponsablemente con la Empresa que:'),0,1,'C',0);
$fpdf->SetXY(5.5,12.5);
$fpdf->cell(2,0.8, utf8_decode('1. El contenido total de la información es absolutamente cierto y veraz.'),0,1,'C',0);
$fpdf->SetXY(8.5,13);
$fpdf->cell(2,0.8, utf8_decode('2. La Empresa a la que represento prestará todas las facilidades que solicite el Servicio Autonomo de Contraloría'),0,1,'C',0);
$fpdf->SetXY(4.6,13.5);
$fpdf->cell(2,0.8, utf8_decode('Sanitaria para poder realizar los controles posteriores.'),0,1,'C',0);
$fpdf->SetXY(15,18);
$fpdf->cell(2,0.8, utf8_decode('________________________________________'),0,1,'C',0);
$fpdf->SetXY(15,18.5);
$fpdf->cell(2,0.8, utf8_decode('FIRMA DEL (LA) REGENTE/DIRECTOR(A) TECNICO(A)'),0,1,'C',0);

$fpdf->SetFont('Arial','B',8);
$fpdf->SetXY(5,19.5);
$fpdf->cell(2,0.8, utf8_decode('D- PARA USO INTERNO EXCLUSIVAMENTE (NO ESCRIBIR)'),0,1,'C',0);
$fpdf->SetFont('Arial','',8);
$fpdf->SetXY(2,20.5);
$fpdf->cell(6,0.5, utf8_decode('NUMERO DE PERMISO SANITARIO'),1,0,'C',0);
$fpdf->cell(10,0.5, utf8_decode('FUNCINARIO RESPONSABLE'),1,0,'C',0);
$fpdf->SetXY(2,21);
$fpdf->cell(6,0.8, utf8_decode(''),1,0,'C',0);
$fpdf->cell(10,0.8, utf8_decode(''),1,0,'C',0);

$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);

$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1, 0.5, 20,);
$fpdf->SetFont('Arial','',9);
$fpdf->cell(10.6,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,1,'C',0);
$fpdf->SetXY(0.8,1);
$fpdf->cell(7,5, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,0,'C',0);

$fpdf->SetXY(5,4);
$fpdf->cell(2,0.8, utf8_decode('C- OBSERVACIONES DEL (LA) FARMACÉUTICO(A) REGENTE'),0,1,'C',0);
$fpdf->SetXY(1,4);
$fpdf->cell(20,5, utf8_decode(''),1,1,'C',0);
$fpdf->SetXY(-28,6.8);
$fpdf->cell(20,5, utf8_decode('F.01-DMC-IFV-OPP-AGOSTO 2022'),0,1,'C',0);


$fpdf->SetFont('Arial','B',9);
$fpdf->SetXY(1,7.8);
$fpdf->cell(20,5, utf8_decode('INSTRUCTIVO PARA EL LLENADO DEL FORMULARIO SOLICITUD DE PERMISO SANITARIO DE'),0,1,'C',0);
$fpdf->SetXY(1,8.2);
$fpdf->cell(20,5, utf8_decode('LABORATORIOS FABRICANTES O ACONDICIONADORES EN EMPAQUES PRIMARIOS Y /O'),0,1,'C',0);
$fpdf->SetXY(1,8.6);
$fpdf->cell(20,5, utf8_decode('SECUNDARIOS DE PRODUCTOS FARMACÉUTICOS, HOMEOPÁTICOS, REPELENTES DE'),0,1,'C',0);
$fpdf->SetXY(1,9);
$fpdf->cell(20,5, utf8_decode('INSECTOS DE USO TÓPICO O COSMÉTICOS'),0,1,'C',0);

$fpdf->SetFont('Arial','',9);
$fpdf->SetXY(1,10);
$fpdf->cell(20,5, utf8_decode('INDIQUE EN EL FORMULARIO LA INFORMACIÓN SIGUIENTE:'),0,1,'L',0);

$fpdf->SetXY(1,13);
$fpdf->cell(0.9,0.8, utf8_decode('01'),1,0,'C',0);
$fpdf->SetXY(1.9,13);
$fpdf->cell(18,0.8, utf8_decode('DÍA.- CORRESPONDE AL DÍA EN QUE SE REALIZA LA SOLICITUD DE PERMISO'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('02'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('MES.- CORRESPONDE AL MES EN QUE SE REALIZA LA SOLICITUD DE PERMISO.'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('03'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('AÑO.- CORRESPONDE AL AÑO EN QUE SE REALIZA LA SOLICITUD DE PERMISO.'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('04'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('NÚMERO DE SOLICITUD.- CORRESPONDE AL NÚMERO DE CONTROL INTERNO.'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('05'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('TIPOS DE LABORATORIO.- EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA CASILLA
CORRESPONDIENTE'),1,1,'L',0);
$fpdf->cell(18.9,0.8, utf8_decode('AL TIPO DE LABORATORIO QUE SE REGISTRARÁ.'),1,1,'C',0);

$fpdf->SetXY(1,17.7);
$fpdf->SetFont('Arial','B',9);
$fpdf->cell(19,0.8, utf8_decode('A.-DATOS DEL(LA) REGENTE/DIRECTOR(A) TECNICO(A) AUTORIZADO(A)'),0,1,'C',1);

$fpdf->SetFont('Arial','',9);
$fpdf->SetXY(1,18.5);
$fpdf->cell(0.9,0.8, utf8_decode('06'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('APELLIDOS COMPLETOS DEL (LA) REGENTE/DIRECTOR(A) TECNICO(A).'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('07'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('NOMBRES COMPLETOS DEL (LA) REGENTE/DIRECTOR(A) TECNICO(A).'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('08'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('Nº DE CÉDULA DE IDENTIDAD.- RESEÑAR SI ES VENEZOLANO(A) (V) O, EXTRANJERO(A)'),1,1,'L',0);
$fpdf->cell(18.9,0.8, utf8_decode('(E) Y A CONTINUACIÓN EL NÚMERO DE CÉDULA DE IDENTIDAD.'),1,1,'C',0);
$fpdf->cell(0.9,0.8, utf8_decode('09'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('No. DE MATRÍCULA DEL M.P.P.S.- CORRESPONDE AL NÚMERO BAJO EL CUAL QUEDÓ REGISTRADO EL TÍTULO'),1,1,'L',0);
$fpdf->cell(18.9,0.8, utf8_decode('DEL PROFESIONAL ANTE EL SERVICIO AUTÓNOMO DE CONTRALORIA SANITARIA.'),1,1,'C',0);
$fpdf->cell(0.9,0.8, utf8_decode('10'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('PROFESIÓN.- EL SOLICITANTE DEBE INDICAR SU PROFESIÓN.'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('11'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('Nº DE TELÉFONO DONDE LOCALIZARLO(A) (FAVOR INCLUIR EL CÓDIGO DE ÁREA).'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('12'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('Nº DE TELÉFONO MÓVIL DONDE LOCALIZARLO(A).'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('13'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO, DONDE SE LE PUEDA ENVIAR ALGUNA INFORMACIÓN DE SU INTERÉS.'),1,1,'L',0);
$fpdf->SetFont('Arial','B',9);
$fpdf->cell(19,0.8, utf8_decode('B.- DATOS DEL LABORATORIO FABRICANTE O DE LA EMPRESA ACONDICIONADORA'),0,1,'C',1);
$fpdf->SetFont('Arial','',9);
$fpdf->cell(0.9,0.8, utf8_decode('14'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('NOMBRE O RAZÓN SOCIAL.- SEGÚN REGISTRO MERCANTIL.'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('15'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('OBJETO SOCIAL.-DE ACUERDO AL REGISTRO MERCANTIL, EL CUAL DEBE AJUSTARSE A LA NORMATIVA LEGAL'),1,1,'L',0);
$fpdf->cell(18.9,0.8, utf8_decode('VIGENTE PARA UN LABORATORIO O EMPRESA ACONDICIONADORA EN EMPAQUES SECUNDARIOS.'),1,1,'C',0);
$fpdf->cell(0.9,0.8, utf8_decode('16'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('Nº DE RIF.- ES EL NÚMERO DE ACUERDO AL REGISTRO DE INFORMACIÓN FISCAL.'),1,1,'L',0);
$fpdf->cell(0.9,0.8, utf8_decode('17'),1,0,'C',0);
$fpdf->cell(18,0.8, utf8_decode('Nº DE NIT.- ES EL NÚMERO DE ACUERDO A LA IDENTIFICACIÓN TRIBUTARIA.'),1,1,'L',0);

$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);


$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1, 0.5, 20,);
$fpdf->SetFont('Arial','',8);
$fpdf->cell(10.6,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,1,'C',0);
$fpdf->SetXY(0.8,1);
$fpdf->cell(7,5, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,0,'C',0);

$fpdf->SetXY(1,3.8);
$fpdf->cell(19,0.5, utf8_decode('DATOS DEL REGISTRO MERCANTIL'),0,1,'C',1);

$fpdf->cell(0.9,0.6, utf8_decode('18'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('REGISTRO.- INDICAR EL NOMBRE DEL REGISTRO MERCANTIL.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('19'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('CIRCUNSCRIPCIÓN.- INDICAR LA CIRCUNSCRIPCIÓN DEL ESTADO EN EL CUAL SE REGISTRÓ.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('20'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('TOMO.- ES EL TOMO BAJO EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('21'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('NÚMERO.- ES EL NÚMERO BAJO EL CUAL QUEDÓ INSCRITO EN EL REGISTRÓ DE COMERCIO.'),1,1,'L',0);

$fpdf->cell(19,0.5, utf8_decode('DATOS DEL REGISTRO MERCANTIL'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('22'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('DÍA.- CORRESPONDE AL DÍA EN EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('23'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('MES.- CORRESPONDE AL MES EN EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('24'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('AÑO.- CORRESPONDE AL AÑO EN EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);

$fpdf->cell(19,0.5, utf8_decode('MODIFICACIONES REALIZADAS AL REGISTRO MERCANTIL'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('25'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('REGISTRO.-INDICAR EL NOMBRE DEL REGISTRO MERCANTIL.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('26'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('CIRCUNSCRIPCIÓN.- INDICAR LA CIRCUNSCRIPCIÓN DEL ESTADO EN EL CUAL SE REGISTRÓ.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('27'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('TOMO.- ES EL TOMO BAJO EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('28'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('NÚMERO.- ES EL NÚMERO BAJO EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);

$fpdf->cell(19,0.5, utf8_decode('PROTOCOLIZACIÓN'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('29'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('DÍA.- CORRESPONDE AL DÍA EN EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('30'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('MES.- CORRESPONDE AL MES EN EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('31'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('AÑO.- CORRESPONDE AL AÑO EN EL CUAL QUEDÓ INSCRITO EN EL REGISTRO DE COMERCIO.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('32'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('MODIFICACIÓN, INDICAR LA(S) CLAUSULA(S) QUE FUE O FUERON MODIFICADA(S) EN EL
REGISTRO MERCANTIL.'),1,1,'L',0);

$fpdf->cell(19,0.5, utf8_decode('PROPIETARIO(S)'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('33'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('APELLIDOS.- EL O LOS APELLIDOS DEL O LOS PROPIETARIOS QUE APARECEN EN EL REGISTRO
MERCANTIL.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('34'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('NOMBRES.- EL O LOS NOMBRES DEL O LOS PROPIETARIOS QUE APARECEN EN EL REGISTRO
MERCANTIL.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('35'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('No. DE CÉDULA DE IDENTIDAD.- RESEÑAR SI ES VENEZOLANO(A) (V) O, EXTRANJERO(A) (E) Y A
CONTINUACION '),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('EL NÚMERO DE CÉDULA DE IDENTIDAD DEL O LOS PROPIETARIOS QUE
APARECEN EN EL REGISTRO MERCANTIL.'),1,1,'C',0);

$fpdf->cell(19,0.5, utf8_decode('DATOS DE LA PATENTE DE INDUSTRIA Y COMERCIO(S)'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('36'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('DOCUMENTO PRESENTADO. - EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA CASILLA
CORRESPONDIENTE AL'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('DOCUMENTO PRESENTADO: FOTOCOPIA DE LA PATENTE O FOTOCOPIA
DE LA SOLICITUD DE LA PATENTE.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('37'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('NÚMERO.- CORRESPONDE AL NÚMERO DE LA EXPEDICIÓN DE LA PATENTE DE INDUSTRIA Y'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('COMERCIO O SOLICITUD DE LA MISMA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('38'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('ACTIVIDAD. - SEÑALADA EN LA PATENTE DE INDUSTRIA Y COMERCIO, LA CUAL DEBE ESTAR
RELACIONADA CON'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('EL OBJETO SOCIAL DE UN LABORATORIO O EMPRESA ACONDICIONADORA EN
EMPAQUES SECUNDARIOS DE '),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('PRODUCTOS FARMACÉUTICOS Y/O COSMÉTICOS. EN CASO DE
PRESENTAR LA FOTOCOPIA DE LA '),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('SOLICITUD DE LA PATENTE, ESTE NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('39'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('DÍA.- CORRESPONDE AL DÍA DE VENCIMIENTO DE LA PATENTE DE INDUSTRIA Y COMERCIO. EN
'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('CASO DE PRESENTAR LA SOLICITUD DE LA PATENTE, ESTE NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('40'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('MES.- CORRESPONDE AL MES DE VENCIMIENTO DE LA PATENTE DE INDUSTRIA Y COMERCIO. EN'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('CASO DE PRESENTAR LA SOLICITUD DE LA PATENTE, ESTE NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('41'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('AÑO.- CORRESPONDE AL AÑO DE VENCIMIENTO DE LA PATENTE DE INDUSTRIA Y COMERCIO. EN
'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('CASO DE PRESENTAR LA SOLICITUD DE LA PATENTE, ESTE NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('42'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('ESTADO OTORGANTE.- CORRESPONDE AL ESTADO DONDE SE OTORGA LA PATENTE. EN CASO
DE PRESENTAR '),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('LA SOLICITUD DE LA PATENTE, ESTE NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('43'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('MUNICIPIO OTORGANTE.- CORRESPONDE AL MUNICIPIO DONDE SE OTORGA LA PATENTE. EN
CASO'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('DE PRESENTAR LA SOLICITUD DE LA PATENTE, ESTE NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('44'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('TIPO DE EMPRESA.- EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA CASILLA CORRESPONDIENTE
'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('DE ACUERDO AL TIPO DE EMPRESA A REGISTRAR.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('45'),1,0,'C',0);
$fpdf->cell(18,0.6, utf8_decode('TENENCIA DEL LOCAL.- EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA CASILLA CORRESPONDIENTE'),1,1,'L',0);
$fpdf->cell(18.9,0.6, utf8_decode('DE ACUERDO CON LA TENENCIA DEL LOCAL.'),1,1,'C',0);

$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);

$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1, 0.5, 20,);
$fpdf->SetFont('Arial','',9);
$fpdf->cell(10.6,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,1,'C',0);
$fpdf->SetXY(0.8,1);
$fpdf->cell(7,5, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,0,'C',0);

$fpdf->SetXY(1,4);
$fpdf->cell(19.4,0.5, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA OFICINA ADMINISTRATIVA'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('46'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('ESTADO. - CORRESPONDE AL ESTADO EN EL QUE ESTÁ UBICADA LA OFICINA ADMINISTRATIVA DE
LA EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('47'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('MUNICIPIO.- CORRESPONDE AL MUNICIPIO EN EL QUE ESTÁ UBICADA LA OFICINA
ADMINISTRATIVA DE LA EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('48'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('CIUDAD/POBLACIÓN.- CORRESPONDE A LA CIUDAD/POBLACIÓN EN LA QUE ESTÁ UBICADA LA
OFICINA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);

$fpdf->cell(19.4,0.5, utf8_decode('DIRECCIÓN DE LA OFICINA ADMINISTRATIVA'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('49'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL.- CORRESPONDE A LA URBANIZACIÓN/SECTOR/ZONA
INDUSTRIAL EN LA '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('QUE ESTÁ UBICADA LA OFICINA ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('50'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('AVENIDA/CARRERA/CALLE/ESQUINA.- CORRESPONDE A LA AVENIDA/CARRERA/CALLE/ESQUINA
EN LA QUE ESTÁ '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('UBICADA LA OFICINA ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('51'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('EDIFICIO/QUINTA/CASA/GALPÓN. - CORRESPONDE AL EDIFICIO/QUINTA/CASA/GALPÓN EN LA QUE
ESTÁ UBICADA '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('LA OFICINA ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('52'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PISO/PLANTA/LOCAL.- CORRESPONDE AL PISO/PLANTA/LOCAL EN LA QUE ESTÁ UBICADA LA
OFICINA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('53'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PUNTO DE REFERENCIA.- CORRESPONDE AL PUNTO DE REFERENCIA, PARA UBICAR EN FORMA
RÁPIDA LA '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('OFICINA ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('54'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('CÓDIGO POSTAL. - CORRESPONDE AL NÚMERO DEL CÓDIGO POSTAL DEL ÁREA DONDE ESTÁ
UBICADA '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('LA OFICINA ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('55'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('Nº DE TELÉFONO.- CORRESPONDE AL NÚMERO DE TELÉFONO DE LA OFICINA ADMINISTRATIVA
DE LA EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('56'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('NÚMERO DE FAX.- CORRESPONDE AL NÚMERO DE FAX DE LA OFICINA ADMINISTRATIVA DE LA
EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('57'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO.- CORRESPONDE A LA DIRECCIÓN DE CORREO
ELECTRÓNICO DE LA '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('OFICINA ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('58'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB.- CORRESPONDE AL NOMBRE DE LA PÁGINA WEB
DE LA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('OFICINA ADMINISTRATIVA DE LA EMPRESA.'),1,1,'C',0);

$fpdf->cell(19.4,0.5, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA PLANTA DE PRODUCCIÓN.'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('59'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('ESTADO.- CORRESPONDE AL ESTADO EN EL QUE ESTÁ UBICADA LA PLANTA DE PRODUCIÓN.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('60'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('MUNICIPIO.- CORRESPONDE AL MUNICIPIO EN EL QUE ESTÁ UBICADA LA PLANTA DE
PRODUCIÓN.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('61'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('CIUDAD/POBLACIÓN.- CORRESPONDE A LA CIUDAD/POBLACIÓN EN LA QUE ESTÁ UBICADA LA
'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('PLANTA DE PRODUCIÓN.'),1,1,'C',0);

$fpdf->cell(19.4,0.5, utf8_decode('DIRECCIÓN DE LA PLANTA DE PRODUCCIÓN'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('62'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL.- CORRESPONDE A LA URBANIZACIÓN/SECTOR /'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ZONA INDUSTRIAL EN LA QUE ESTÁ UBICADA LA PLANTA DE PRODUCIÓN.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('63'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('AVENIDA/CARRERA/CALLE/ESQUINA.- CORRESPONDE A LA AVENIDA/CARRERA/CALLE/ESQUINA EN LA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('QUE ESTÁ UBICADA LA PLANTA DE PRODUCIÓN.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('64'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('EDIFICIO/GALPÓN, CORRESPONDE AL EDIFICIO/GALPÓN EN LA QUE ESTÁ UBICADA LA PLANTA
DE PRODUCIÓN'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('65'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PISO/PLANTA/LOCAL.- CORRESPONDE AL PISO/PLANTA/LOCAL EN LA QUE ESTÁ UBICADA LA
PLANTA DE PRODUCIÓN.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('66'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PUNTO DE REFERENCIA.- CORRESPONDE AL PUNTO DE REFERENCIA, PARA UBICAR EN FORMA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('RÁPIDA LA PLANTA DE PRODUCIÓN.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('67'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('CÓDIGO POSTAL.- CORRESPONDE AL NÚMERO DEL CÓDIGO POSTAL DEL ÁREA DONDE ESTA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('UBICADA LA PLANTA DE PRODUCIÓN.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('68'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('N.º DE TELÉFONO. - CORRESPONDE AL NÚMERO DE TELÉFONO DE LA PLANTA DE PRODUCIÓN'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('(FAVOR INCLUIR EL CÓDIGO DE ÁREA).'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('69'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('NÚMERO DE FAX.- CORRESPONDE AL NÚMERO DE FAX DE LA PLANTA DE PRODUCIÓN.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('70'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO.- CORRESPONDE A LA DIRECCIÓN DE CORREO
ELECTRÓNICO'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('71'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA Web.- CORRESPONDE AL NOMBRE DE LA PÁGINA WEB
DE LA EMPRESA'),1,1,'L',0);

$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);

$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1, 0.5, 20,);
$fpdf->SetFont('Arial','',9);
$fpdf->cell(10.6,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,1,'C',0);
$fpdf->SetXY(0.8,1);
$fpdf->cell(7,5, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,0,'C',0);

$fpdf->SetXY(1,4);
$fpdf->cell(19.4,0.5, utf8_decode('UBICACIÓN GEOGRÁFICA DE LA OFICINA ADMINISTRATIVA'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('72'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('ESTADO.- CORRESPONDE AL ESTADO EN EL QUE ESTÁ UBICADO LOS ALMACENES DE LA
EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('73'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('MUNICIPIO.- CORRESPONDE AL MUNICIPIO EN EL QUE ESTÁ UBICADO LOS ALMACENES DE LA
EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('74'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('CIUDAD/POBLACIÓN.-CORRESPONDE A LA CIUDAD/POBLACIÓN EN LA QUE ESTÁ UBICADO LOS'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ALMACENES DE LA EMPRESA.'),1,1,'C',0);


$fpdf->cell(19.4,0.5, utf8_decode('DIRECCIÓN DEL (DE LOS) ALMACÉN(ES)'),0,1,'C',1);
$fpdf->cell(0.9,0.6, utf8_decode('75'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('URBANIZACIÓN/SECTOR/ZONA INDUSTRIAL.- CORRESPONDE A LA URBANIZACIÓN/SECTOR/ZONA
INDUSTRIAL'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('EN EL QUE ESTÁ UBICADO LOS ALMACENES DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('76'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('AVENIDA/CARRERA/CALLE/ESQUINA.- CORRESPONDE A LA AVENIDA/CARRERA/CALLE/ESQUINA
EN LA QUE ESTÁ '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('UBICADO LOS ALMACENES DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('77'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('EDIFICIO/QUINTA/GALPÓN.- CORRESPONDE AL EDIFICIO/QUINTA/GALPÓN EN EL QUE ESTÁ
UBICADO'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('LOS ALMACENES DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('78'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PISO/PLANTA/LOCAL.- CORRESPONDE AL PISO/PLANTA/LOCAL EN EL QUE ESTÁ UBICADO LOS'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ALMACENES DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('79'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PUNTO DE REFERENCIA.- CORRESPONDE AL PUNTO DE REFERENCIA, PARA UBICAR EN FORMA
RÁPIDA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('LOS ALMACENES DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('80'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('CÓDIGO POSTAL.- CORRESPONDE AL CÓDIGO POSTAL DEL ÁREA DONDE ESTÁ UBICADO LOS'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ALMACENES DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('81'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('Nº DE TELÉFONO.- CORRESPONDE AL NÚMERO DE TELÉFONO DE LOS ALMACENES DE LA
EMPRESA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('(FAVOR INCLUIR EL CÓDIGO DE ÁREA).'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('82'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('NÚMERO DE FAX.- CORRESPONDE AL NÚMERO DE FAX DE LOS ALMACENES DE LA EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('83'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('DIRECCIÓN DE CORREO ELECTRÓNICO, CORRESPONDE A LA DIRECCIÓN DE CORREO'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ELECTRÓNICO DE LA EMPRESA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('84'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('DIRECCIÓN ELECTRÓNICA DE LA PÁGINA WEB.- CORRESPONDE AL NOMBRE DE LA PÁGINA WEB
DE LA EMPRESA.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('85'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('OPERACIONES DE MANUFACTURA A REALIZAR.- EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA
CASILLA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('CORRESPONDIENTES A LA(S) OPERACIÓN(ES) A REALIZAR EN LA EMPRESA QUE SE
REGISTRARÁ. EN EL CASO DE'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('FÓRMULAS OFICINALES Y MAGISTRALES TILDAR (SEÑALAR)
PREPARACIÓN.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('86'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('OTRAS ACTIVIDADES A REALIZAR.- EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA CASILLA
CORRESPONDIENTE'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('A LA(S) ACTIVIDAD(ES) A REALIZAR EN LA EMPRESA QUE SE REGISTRARÁ.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('87'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PRODUCTOS A ELABORAR.- EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA CASILLA
CORRESPONDIENTE '),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('A LOS PRODUCTOS A ELABORAR EN LA EMPRESA FABRICANTE QUE SE
REGISTRARÁ. EN CASO DE EMPRESAS'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('ACONDICONADORAS EN EMPAQUES SECUNDARIOS ESTE
NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('88'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('PRODUCTOS ALTAMENTE SENSIBILIZANTES.- EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA
CASILLA'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('CORRESPONDIENTE A LOS PRODUCTOS ALTAMENTE SENSIBILIZANTES A ELABORAR EN
LA EMPRESA FABRICANTE'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('DE PRODUCTOS FARMACÉUTICOS. EN CASO DE EMPRESAS
FABRICANTES DE COSMÉTICOS O FARMACÉUTICOS QUE'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('NO MANUFACTURARÁN ESTOS
PRODUCTOS, ESTE NUMERAL NO APLICA.'),1,1,'C',0);
$fpdf->cell(0.9,0.6, utf8_decode('89'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('FORMAS FARMACEUTICAS O COSMÉTICAS DE LOS PRODUCTOS A ELABORAR O ACONDICIONAR.'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('-EL SOLICITANTE DEBERÁ TILDAR (SEÑALAR) LA CASILLA CORRESPONDIENTE A LAS FORMAS'),1,1,'L',0);
$fpdf->cell(19.4,0.6, utf8_decode('FARMACEUTICAS O COSMÉTICAS A MANUFACTURAR.'),1,1,'C',0);

$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);


$fpdf->AddPage('');
$fpdf->Image('img/membrete.jpg', 1, 0.5, 20,);
$fpdf->SetFont('Arial','',9);
$fpdf->cell(10.6,4, utf8_decode('Dirección de Regulación y Control de Drogas, Medicamentos y Cosméticos'),0,1,'C',0);
$fpdf->SetXY(0.8,1);
$fpdf->cell(7,5, utf8_decode('Dirección de Inspecciones y Farmacovigilancia'),0,0,'C',0);

$fpdf->SetXY(1,4);
$fpdf->cell(19.4,0.5, utf8_decode('C. OBSERVACIONES DEL(LA) REGENTE/DIRECTOR (A)TECNICO(A)'),0,1,'C',1);
$fpdf->cell(19.4,2, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(1,4.4);
$fpdf->cell(19.4,1, utf8_decode('DEBE SER LLENADO EN CASO QUE EL (LA) REGENTE/DIRECTOR(A) TECNICO(A) TENGA QUE HACER
ALGUNAS'),0,1,'L',0);
$fpdf->SetXY(1,5);
$fpdf->cell(19.4,1, utf8_decode('OBSERVACIONES SIGNIFICATIVAS CON RELACIÓN AL TIPO DE SOLICITUD.'),0,1,'L',0);
$fpdf->SetXY(1,6.8);
$fpdf->cell(19.4,2, utf8_decode(''),1,1,'L',0);
$fpdf->SetXY(1,6.8);
$fpdf->cell(19.4,1, utf8_decode('DECLARACIÓN JURADA EL REGENTE/DIRECTOR TECNICO DEBE RELLENAR LA DECLARACIÓN JURADA
CON LOS DATOS '),0,1,'L',0);
$fpdf->SetXY(1,7.5);
$fpdf->cell(19.4,1, utf8_decode('SOLICITADOS Y DEBE FIRMAR LA SOLICITUD DE PERMISO SANITARIO.'),0,1,'L',0);

$fpdf->SetXY(1,8.9);
$fpdf->cell(19.4,0.5, utf8_decode('D. PARA USO INTERNO EXCLUSIVAMENTE.- DEBE SER LLENADO SOLAMENTE POR EL FUNCIONARIO(A'),0,1,'L',1);
$fpdf->cell(19.4,0.5, utf8_decode('DE INSPECCIONES Y FARMACOVIGILANCIA EN LA DIRECCIÓN DE REGULACION Y CONTROL DE DROGAS,'),0,1,'L',1);
$fpdf->cell(19.4,0.5, utf8_decode('MEDICAMENTOS Y COSMÉTICOS, NIVEL CENTRAL PARA EVALUAR LA SOLICITUD.'),0,1,'L',1);

$fpdf->cell(0.9,0.6, utf8_decode('90'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('NÚMERO DE PERMISO SANITARIO (NIVEL CENTRAL).'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('91'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('FUNCIONARIO(A) RESPONSABLE.'),1,1,'L',0);
$fpdf->cell(0.9,0.6, utf8_decode('92'),1,0,'C',0);
$fpdf->cell(18.5,0.6, utf8_decode('OBSERVACIONES DEL (LA) FUNCIONARIO(A).'),1,1,'L',0);
$fpdf->cell(18.5,0.6, utf8_decode('F.01-DMC-IFV-OPP-AGOSTO 2022'),0,1,'L',0);

$fpdf->SetXY(1,32);
$fpdf->cell(0,0.3, utf8_decode('Servicio Autónomo de Contraloria Sanitaria'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Edificio Sur, Centro Simón Bolívar, MPPS, Piso 3, El Silencio, Caracas-Venezuela'),0,1,'C',0);
$fpdf->cell(0,0.3, utf8_decode('Telf: (0212)408 05 01 al 05. http://www.sacs.gob.ve/'),0,1,'C',0);

$fpdf->SetXY(5,32);
$fpdf->Image('img/juntos_por_cada_latido-removebg-preview.png', 15, 30, 5,);

$fpdf->Output('I', 'Solicitud de Permiso Sanitario.pdf');
