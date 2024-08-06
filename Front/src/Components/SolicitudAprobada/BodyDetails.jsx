import { useNavigate,} from 'react-router-dom'
import { Box, Button, TextField, Collapse, Alert, 
        Autocomplete, Grid, Typography, Fab  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AxiosGet, AxiosPost } from '../../Helpers/FetchAxios/FetchAxios'
import axios from "axios";

// import {servidor_pdf} from '../../Services/server.jsx';

// VALIDATE EXPRESSION REGULARS (validacion exprecion regulares js)
import { expresionsRegulars,number_Expressions,referenciabancaria_Expressions } from './../../assets/JS/ExpresionRegulares';
// services 
import {servidor, servidor_pdf_permiso} from '../../Services/server.jsx'
// css jsx
const styleCampos ={
  width:'100%'
}

function BodyDetails({onClose,rif_empresa,nro_permiso,nro_solicitud,nombre_solicitud,estatus_solicitud,
                        fecha_creacion, fecha_caducidad
}) {

  // OBTENER SOLO DD/MM/YYYY DE  "fecha_creacion Y fecha_caducidad"

  const fechaCreacion = fecha_creacion.split(' ')
  const fechaCreacion_mdy = fechaCreacion[0]
  const fechaCaducidad = fecha_caducidad.split(' ')
  const fechaCaducidad_mdy = fechaCaducidad[0]

  const [listbancos, setListbancos] = useState()
  const [referenciaBancaria,setReferenciaBancaria] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [fechaPagoRealizado ,setFechaPagoRealizado] = useState("")
  const [selectBanco,setSelectBanco] = useState([])
  const [diseabledRegistrarPago,setDiseabledRegistrarPago] = useState(true) // desabilitar btn registrar pago

  const navigate = useNavigate();


  // OBTENER LISTADO DE DATOS

  const List_Tipos_Bancos = () =>{
    const url = `${servidor}Empresa/ListBancos/Table`
    AxiosGet(url,setListbancos)
  }
  useEffect(() =>{
    List_Tipos_Bancos()
    // ListSolicitud_PendientePago()
  },[])




  const GenerarPdfSolicitud = async () =>{
    const solicitud = {
      permiso : nro_permiso,
    }

    const rutapdf = `${servidor_pdf_permiso}`
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
      a.download = `APROBADA-${nombre_solicitud}.pdf` ;
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


// ------------------------------------
  // *--------------VALIDATE CAMPO EXPRESIONES REGULARES ----------------------
  // ------------------------------------
  
  const validateReferenciaBancaaria = (value) => {
    referenciabancaria_Expressions(value,setReferenciaBancaria);
    
  }


// ------------------------------------
  // *--------------VALIDATE CAMPO - DESACTIVAR BTN SUBMIT----------------------
  // ------------------------------------

  // VALIDATE DE PRODUCTOS EXPORTADOS

  let select_banco = document.getElementById('select_banco')
  let fechapago_realizado = document.getElementById('fechapagorealizado')
  useEffect(() => {
     // VALIDATE "FORMA DE LOS PRODUCTOS"
      

     if(
      !expresionsRegulars.numberRegex.test(referenciaBancaria.dato) || referenciaBancaria.dato === null || referenciaBancaria.dato === undefined ||
       selectBanco.length == 0 || selectBanco == '' || selectBanco == null || select_banco.value.length === 0|| select_banco.value.length === null  ||     
       fechaPagoRealizado.length == 0 || fechaPagoRealizado == '' || fechaPagoRealizado == null || fechapago_realizado.value.length === 0     
       
       ){
       setDiseabledRegistrarPago(true)
     
     }
     else{
       setDiseabledRegistrarPago(false)
     }
  },[referenciaBancaria,selectBanco,fechaPagoRealizado])

  return (
    <>
        <Box component='form' className='container_details' onSubmit={HandelSubmitPDF}
        >
          {/* sx={{minHeight:'auto',maxHeight:'500px',overflow:'auto'}} para el formulario */}
          <Box   className='caja_details' >
            <Box sx={{my:'5px'}}>
              <Typography variant="p" color="primary">Datos de su solicitud:</Typography>
            </Box>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth
                    id="rifempresa"
                    label="Número de RIF"
                    type='text'
                    defaultValue={rif_empresa}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="success" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth
                    id="nrosolicitud"
                    label="Nro Solicitud"
                    type='text'
                    defaultValue={nro_solicitud}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="success" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={6} >
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
                  color="success" 
                  focused
                  variant="filled"
                  />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField sx={styleCampos}
                  id="estatuslicitud"
                  label="Estado de la Solicitud"
                  multiline
                  minRows={5}
                  maxRows={10}
                  defaultValue={estatus_solicitud}
                  InputProps={{
                    readOnly: true,
                  }}
                  color="success" 
                  focused
                  variant="filled"
                  />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField fullWidth
                    id="fechacreacion"
                    label="Fecha de creación"
                    type='text'
                    defaultValue={fechaCreacion_mdy}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="warning" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth
                    id="fechacaducidad"
                    label="Fecha de caducidad"
                    type='text'
                    defaultValue={fechaCaducidad_mdy}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="error" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
                  
              
            </Grid>


          </Box>


          <Box 
                    sx={{mt:2,float:'right'}}
                >
                <Button type="submit" variant="contained" color="success" sx={{mr:2}}>
                    Generar PDF
                </Button>
                <Button variant="contained" color="error" onClick={onClose}>
                    Cerrar
                </Button>
          </Box>
        </Box>
    </>
  )
}

export default BodyDetails