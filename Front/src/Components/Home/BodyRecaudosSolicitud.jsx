import React from 'react'
import './viewhome.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

// material icon
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Alert, Box, Typography } from '@mui/material';

import Sidebar from '../../Routers/Sidebar.jsx';



function BodyRecaudosSolicitud({user}) {
    
    // letra inicial del usuario logeado
    const InicialUser = user.usuario.substr(0 ,1)

  return (
    <>

        <Sidebar
            inicialusario={InicialUser}
            usuario={user.usuario}
        />


        <Box component='div'>
            <Typography variant="h6" color="error" sx={{textAlign:'center'}}>Recaudos para Realizar su solicitud</Typography>
            <Box >
                <Alert severity="info" sx={{display:'flex',alignItems:'center',justifyContent:'center', width:'100%',mb:'0.5rem'}}>
                    <strong>Por favor leer los recaudos correspondiente a la solicitud que vaya a realizar.</strong>
                </Alert>
            </Box>
        </Box>
        <table>
            <thead>
                <tr className='encabezado_tit_solicitud_form'>
                    <th className='th_columns_table'>NOMBRE DE SOLICITUD </th>
                    <th className='th_columns_table'>RECAUDO DE SOLICITUD</th>
                    
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>SOLICITUD DE PERMISO SANITARIO DE LABORATORIOS FABRICANTES O ACONDICIONADORES EN EMPAQUES PRIMARIOS Y/O SECUNDARIOS DE PRODUCTOS FARMACÉUTICOS, HOMEOPÁTICOS, REPELENTES DE INSECTOS DE USO TÓPICO O COSMÉTICOS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/1_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO SANITARIO PARA LA INSTALACIÓN Y FUNCIONAMIENTO DE EMPRESAS ALMACENADORAS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/2_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO SANITARIO PARA LA INSTALACIÓN DE EMPRESAS IMPORTADORAS Y/O DISTRIBUIDORAS DE PRODUCTOS COSMETICOS Y SUS MATERIAS PRIMAS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/3_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO SANITARIO PARA LA INSTALACION DE EMPRESAS IMPORTADORAS Y/O DISTRIBUIDORAS DE PRODUCTOS REPELENTES DE INSECTOS DE USO TOPICO Y SUS MATERIAS PRIMAS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/4_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO SANITARIO PARA LA INSTALACIÓN Y FUNCIONAMIENTO DE CASAS DE REPRESENTACIÓN DE PRODUCTOS FARMACÉUTICOS Y MATERIAS PRIMAS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/5_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO DE FUNCIONAMIENTO DE ALMACENES PRINCIPALES Y AUXILIARES DE CASAS DE REPRESENTACION, IMPORTADORAS Y/O DISTRIBUIDORAS DE PRODUCTOS COSMETICOS, IMPORTADORAS Y/O DISTRIBUIDORAS DE REPELENTES DE INSECTOS DE USO TÓPICO Y LABORATORIOS FABRICANTES DE PRODUCTOS FARMACEUTICOS O PRODUCTOS COSMÉTICOS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/13_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO DE FUNCIONAMIENTO PARA CASAS DE REPRESENTACIÓN, IMPORTADORA Y/O DISTRIBUIDORA DE COSMÉTICOS E IMPORTADORAS Y/O DISTRIBUIDORAS DE REPELENTES DE INSECTOS DE USO TÓPICO</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/15_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO DE FUNCIONAMIENTO PARA SUCURSALES DE ALMACENADORAS DE PRODUCTOS FARMACEUTICOS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/16_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>SOLICITUD DE PERMISO SANITARIO PARA LA INSTALACIÓN DE CASAS DE REPRESENTACIÓN DE PRODUCTOS FARMACÉUTICOS Y MATERIAS PRIMAS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/17_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr>
                {/* <tr>
                    <td>SOLICITUD DE PERMISO SANITARIO PARA LA INSTALACIÓN Y FUNCIONAMIENTO DE DROGUERIAS, FARMACIAS Y EXPENDIDOS</td>
                    <td>
                        <center>
                            <a href="http://10.29.5.22/Sistema_Empresa/solicitud_recaudos/1_FORM_RECAUDOS.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="success" endIcon={<PictureAsPdfIcon />}>
                                    Recaudo
                                </Button>
                            </a>
                        </center>
                    </td>
                    
                </tr> */}
            </tbody>
            
        </table>
    </>
  )
}

export default BodyRecaudosSolicitud