import React, { useEffect, useState } from 'react'
import { Box,TextField,Button,Typography, Grid } from "@mui/material";
import axios from "axios";

import {servidor_pdf_solicitud} from '../../Services/server.jsx';
import { TextareaAutosize } from '@mui/material';
// css jsx
const styleCampos ={
  width:'100%'
}

function BodyDetails({onClose,nrosolicitud,pk_estatus_solicitud,estatus_solicitud,rif_empresa, tipo_empresa, tipo_solicitud, nombre_solicitud, 
                      tip_area, activ_economica, nombre_categoria, nombre_apellido_propietario, nombre_apellido_regente,
                      nombre_apellido_representante, motivo_solicitud}) {

  const [diseabledGenerarPDF,setDiseabledGenerarPDF] = useState(true) // desabilitar btn generar pdf



  let colorEstatusSolicitud;

  if(pk_estatus_solicitud == 2){ //PAGO RECIBIDO
    colorEstatusSolicitud='warning'
  } 
  else if(pk_estatus_solicitud == 3 ){ //PAGO VALIDADO
    colorEstatusSolicitud='success'
  }
  else if(pk_estatus_solicitud == 4 ){// APROBADA PARA INSPECCION
    colorEstatusSolicitud='secondary'
  }
  else if(pk_estatus_solicitud == 5 ){//APROBADA 
    colorEstatusSolicitud='success'
    // setDiseabledGenerarPDF(false)
  }else{ // RECHAZADA
    // setDiseabledGenerarPDF(false)
    colorEstatusSolicitud='error' 
  }                     
  
  useEffect(() => {
    if (pk_estatus_solicitud == 1 || pk_estatus_solicitud == 6 || pk_estatus_solicitud == 2) {
      setDiseabledGenerarPDF(true)
      
    }else{
      setDiseabledGenerarPDF(false)
    }
  },[])

  const GenerarPdfSolicitud = async () =>{

    const solicitud = {
      solicitud : nrosolicitud,
    }

    const rutapdf = `${servidor_pdf_solicitud}`
    // const rutapdf = `http://localhost/sistema_empresa/solicitudes/pdf/`
    try {
      const response = await axios.post(rutapdf, JSON.stringify(solicitud), {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob', // Set the responseType to 'blob' to handle binary data
      });
  
      // Create a Blob URL for the PDF content
      const url = URL.createObjectURL(new Blob([response.data]));
      // Create a link element and trigger a click to force download
      const a = document.createElement('a');
      a.href = url;
      a.download = `${nombre_solicitud}.pdf`;
      a.click();
  
      // Cleanup: revoke the Blob URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error sending data to PHP:', error);
    }
  
  }
  const HandelSubmitPDF = (e) =>{
    e.preventDefault()
    GenerarPdfSolicitud()
    onClose()
  }


  return (
    <>
        <Box component='form' className='container_details' onSubmit={HandelSubmitPDF}
        >
          {/* sx={{minHeight:'auto',maxHeight:'500px',overflow:'auto'}} para el formulario */}
          <Box   className='caja_details' >
            <Box sx={{my:'5px'}}>
              <Typography variant="p" color="primary">Datos de Empresa:</Typography>
            </Box>
            <Grid container spacing={2}>
            
              <Grid item xs={12} md={2}>
                <TextField sx={styleCampos}
                    id="rifempresa"
                    label="Número de RIF"
                    type='text'
                    defaultValue={rif_empresa}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="primary" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField sx={styleCampos}
                    id="activeconomicaempresa"
                    label="Actividad Económica"
                    type='text'
                    defaultValue={activ_economica}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="primary" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
            </Grid>
            {/* datos solicitud */}
            <Box sx={{my:'5px'}}>
              <Typography variant="p" color="primary">Datos de Solicitud:</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField sx={styleCampos}
                    id="nrosolicitud"
                    label="Número de solicitud"
                    type='text'
                    defaultValue={nrosolicitud}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="primary" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField sx={styleCampos}
                    id="Tipsolicitud"
                    label="Tipo de solicitud"
                    type='text'
                    defaultValue={tipo_solicitud}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="primary" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={12} >
                <TextField sx={styleCampos}
                  id="nombresolicitudempresa"
                  label="Nombre de Solicitud"
                  multiline
                  minRows={5}
                  maxRows={10}
                  defaultValue={nombre_solicitud}
                  InputProps={{
                    readOnly: true,
                  }}
                  color="primary" 
                  focused
                  variant="filled"
                  />
              </Grid>
            </Grid>
            {/* datos especificos de la empresa */}
            <Box sx={{my:'5px'}}>
              <Typography variant="p" color="primary">Estado de su solicitud:</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} >
                <TextField 
                  fullWidth
                  id="estatussolicitud"
                  label="Estado de la solicitud:"
                  multiline
                  minRows={5}
                  maxRows={10}
                  placeholder="Solicitud en revisión..."
                  defaultValue={estatus_solicitud}
                  InputProps={{
                    readOnly: true,
                    // style: { color: colorEstatusSolicitud }
                  }}
                  // sx={{ color: '#1dba6cef' }}
                  color={colorEstatusSolicitud}
                  // color={estatus_solicitud ? "warning" : "primary"}
                  focused
                  variant="filled"
                  />
              </Grid>
              
            </Grid>
          </Box>


          <Box 
                    sx={{mt:2,float:'right'}}
                >
                { <Button type="submit" variant="contained" color="success" sx={{mr:2}} disabled={diseabledGenerarPDF}>
                    Generar PDF
                </Button> }
                <Button variant="contained" color="error" onClick={onClose}>
                    Cerrar
                </Button>
          </Box>
        </Box>
    </>
  )
}

export default BodyDetails