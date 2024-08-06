import { useNavigate, Link} from 'react-router-dom'
import { Box, Button, TextField, Select,InputLabel, MenuItem, Alert, Stack, Collapse, Autocomplete, 
        Grid, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl ,
        IconButton, InputAdornment , FormHelperText, OutlinedInput,
        AlertTitle} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AxiosGet,AxiosPost } from '../../Helpers/FetchAxios/FetchAxios'
import PadStartCiudadano from '../../Helpers/Ciudadano/PadStartCiudadano'
import axios from 'axios'
import '../../assets/Css/FormStep.css'
import Swal from 'sweetalert2'

import '../../assets/Css/Popup.css'
  // icon material 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// services
import {servidor} from "../../Services/server.jsx"

// -----------toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { nextformstep,beforeformstep } from '../../assets/JS/FormStep'

import {expresionsRegulars,Email_Expression,Password_Expression,Rif_Expression,Texto_Expression,
  Tlf_First_Expression,Tlf_Second_Expression,Email_First_Expression,Email_Second_Expression,Text_number_Expressions,
  number_Expressions,MaxText_number_Expression,LimiteDe_Text_Number_Expression,Cedula_Expression} from '../../assets/JS/ExpresionRegulares.js'
import BodyPaginationStep from '../PaginacionStep/BodyPaginationStep.jsx'
// iconos
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';

// css jsx
const styleCampos ={
  width:'100%'
}

function BodyRenovar({user}) {

  const navigate = useNavigate();

  const [nropermiso, setNropermiso] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
  const [datosPermisoSolicitud, setDatosPermisoSolicitud] = useState([]);
  const [messageSolicitud, setMessageSolicitud] = useState({ message : '', color:null});
  const [alertseverity, setAlertseverity] = useState("");
    // 
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [diseabledNextRenovation,setDiseabledNextRenovation] = useState(true) // desabilitar btn registrar pago
  const [diseabledSerchPermisoSolic,setDiseabledSerchPermisoSolic] = useState(true) // desabilitar btn registrar pago
  // disable submit comprobar
  const [collapseComprobar, setCollapseComprobar] = useState(false);

  // pagination de formulario de pasos
  const [activeStepPagination, setActiveStepPagination] = useState(0);
  const [TextStepPag, setTextStepPag] = useState([
    "Nro del permiso de la solicitud.",
    "Renovar la solicitud.",]);
  const [IconStepPag, setIconStepPag] = useState({
  1 :<DescriptionOutlinedIcon />, 
  2: <TaskOutlinedIcon />, 
  
  });
    

    
  const datos_solicitud = async () =>{    

      const permisoSolicitud = {
        nro_permiso : nropermiso.dato.toUpperCase()
      }

      const url = `${servidor}Empresa/SolicitudRenovacion/search`
    
      const resp = await axios.post(url,JSON.stringify(permisoSolicitud))
      const resp_data = await resp.data      
      
      if (resp_data && resp_data.length > 0 ) {
      // OBTENER SOLO DD/MM/YYYY DE  "fecha_creacion Y fecha_caducidad"
  
      const fechaCreacion = resp_data[0].fecha_creacion.split(' ')
      const fechaCreacion_mdy = fechaCreacion[0]
      const fechaCaducidad = resp_data[0].fecha_caducidad.split(' ')
      const fechaCaducidad_mdy = fechaCaducidad[0]

        setDatosPermisoSolicitud({
            nro_solicitud :resp_data[0].nro_solicitud,
            nombre_solicitud :resp_data[0].nombre_solicitud,
            fecha_creacion : fechaCreacion_mdy,
            fecha_caducidad :fechaCaducidad_mdy,
        })
        
        setOpen(!open);
        setOpen2(false);

        
    }else{
      setOpen(false);
      setOpen2(!open2);
      return false
        
    }

    // DESACTIVAR BOTON PARA EVITAR RENOVACION SI NO SE HA VENCIDO LA SOLICITUD


      // tableData()
  }
  
  function PeriodoVencimiento_Solicitud(fecha_caducidad_solciitud) {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Los meses comienzan desde 0, por lo que se suma 1
    let año = fecha.getFullYear();

    // Asegurarse de que el día y el mes tengan dos dígitos
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }

    const fecha_js= dia + '/' + mes + '/' + año;

    if(fecha_js > fecha_caducidad_solciitud  ){
      setDiseabledNextRenovation(true)
      setAlertseverity("warning")
      setMessageSolicitud({
        message: 'Disculpe, no puede renovar su solicitud antes de la fecha de caducidad',
        color:'warning'
      })
    }else{
      setDiseabledNextRenovation(false)
      setAlertseverity("success")
      setMessageSolicitud({
        message: 'Excelente, puede continuar con su renovación',
        color:'success'
      })
    }
    
  }
  useEffect(() => {
    PeriodoVencimiento_Solicitud(datosPermisoSolicitud.fecha_caducidad)
  },[datosPermisoSolicitud])


  const RenovarSolicitud = async () =>{

    const objrenovacionsolicitud = {
      rif_empresa:user.pk_empresa,
      nro_permiso : nropermiso.dato,
    }

    const url =`${servidor}Empresa/SolicitudRenovacion/InsertRenovacionSolicitud`
    AxiosPost(url,objrenovacionsolicitud,`<strong>SOLICITUD RENOVADA SATISFATOREAMENTE:</strong> ${datosPermisoSolicitud.nombre_solicitud} `,null)
    
  }

  const handleSubmitPermisoSolicitud = (e) =>{
      e.preventDefault()
      datos_solicitud()
  }
  const handleSubmitRenovarSolicitud = (e) =>{
    e.preventDefault()
    RenovarSolicitud()

    // redireccionar:
    navigate('/SolicitudesPagosPendientes');
  }

  // ---------------------------------------------------------------- 
    // PAGINACION DE PASOS FORMULARIO
    // ---------------------------------------------------------------- 

    // let TextSteps;
    const handlePaginationNext = () => {
      setActiveStepPagination((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handlePaginationBack = () => {
      setActiveStepPagination((prevActiveStep) => prevActiveStep - 1);
    };

    // ---------------------------------
    // * -------------VALIDATE CAMPOS --------------------
    // ---------------------------------

    const validateNroPermiso = (value) => {
      MaxText_number_Expression(value,setNropermiso);    
    }


     // ---------------------------------
    // * -------------VALIDATE BTN - DESACTIVAR --------------------
    // ---------------------------------

    useEffect(() => {
      // VALIDATE "FORMA DE LOS PRODUCTOS"
       
 
      if(
       !expresionsRegulars.maxtextonumberRegex.test(nropermiso.dato) || nropermiso.dato === null || nropermiso.dato === undefined 
       ){
        setDiseabledSerchPermisoSolic(true)
      
      }
      else{
        setDiseabledSerchPermisoSolic(false)
      }
   },[nropermiso])
    
  return (
    <>
      
        <Box component='div' sx={{width:'70%', margin:'auto', boxShadow:'2px 2px 6px 6px #ddd',borderRadius:'10px',p:'1rem',my:'1rem'}}>

          <Box component='div' className='tit_popup'  >
              {/* <center> */}
                  <Typography variant="h6" sx={{width:'100%',color:'#fff', display:'flex', justifyContent:'center'}}>Renovar solicitud</Typography>
              {/* </center> */}
          </Box>
           {/* PAGINACION DE PASOS  */}
          <BodyPaginationStep 
            activeStep = {activeStepPagination}
            iconPagStep = {IconStepPag}
            textsteps = {TextStepPag}
          />

          <Box className = 'Cont_form_step'>

            <Box className='slider_form'>

              {/* slider 1 */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={handleSubmitPermisoSolicitud} >
                {/* <p>{user.pk_empresa}</p> */}
                {/*--------------------  */}
                {/* Buscar solcitud por permiso para renovar  */}
                {/*--------------------  */}
                <Box>
                    
                    <center>
                        <Grid container spacing={2} sx={{mt:1}}>
                            
                            <Grid item xs={12} md={8}>
                                <TextField sx={styleCampos}
                                    id="correo"
                                    label="Ingresar su número de permiso"
                                    type='text'
                                    placeholder="ABC00000000"
                                    value={nropermiso.dato }
                                    onChange={(e) => validateNroPermiso(e.target.value.toUpperCase())}
                                    error={nropermiso.error}
                                    helperText ={nropermiso.message}
                                    color={nropermiso.color}
                                    focused={nropermiso.fucosed}
                                    InputProps={{
                                        disableTabs: true,
                                        tabIndex: -1
                                    }}
                                    inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                    
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>    
                                <Button type="submit" variant="contained" color="primary"sx={{mt:1}}  tabIndex={-1} disabled={diseabledSerchPermisoSolic} >
                                    Buscar permiso
                                </Button>
                            </Grid>
                        </Grid>
                    </center>
                    {/* Informacion de preguntas  */}
                    <Box className='cont_collapse' sx={{mt:1}}>
                        <Collapse in={open}>
                          {/* <Box component='div' sx={{ textAlign:'cenetr'}}> */}
                            <center>

                              <Alert severity={alertseverity} color={messageSolicitud.color} sx={{textAlign:'center'}} >{messageSolicitud.message}</Alert>
                            </center>
                          {/* </Box> */}
                            <Typography variant="p" color="primary" sx={{mt:3}}>Solciitud a renovar:</Typography>
                            <Grid container spacing={2} sx={{my:2}}>
                                <Grid item xs={12}  md={12} >
                                    <TextField sx={styleCampos}
                                        id="nro_solicitud"
                                        label="Nro de solicitud"
                                        type="text"
                                        value={datosPermisoSolicitud.nro_solicitud}
                                        InputProps={{
                                            readOnly: true,
                                            tabIndex:-1
                                        }}
                                        color="success" focused
                                        variant="filled"
                                        inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} >
                                    <TextField sx={styleCampos}
                                      id="nombresolicitudempresa"
                                      label="Nombre de solicitud"
                                      multiline
                                      minRows={5}
                                      maxRows={10}
                                      defaultValue={datosPermisoSolicitud.nombre_solicitud}
                                      InputProps={{
                                        readOnly: true,
                                        tabIndex:-1
                                      }}
                                      color="success" 
                                      focused
                                      variant="filled"
                                      />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField sx={styleCampos}
                                        id="fechacreacion"
                                        label="Fecha de creacion"
                                        type="text"
                                        value={datosPermisoSolicitud.fecha_creacion}
                                        InputProps={{
                                            readOnly: true,
                                            tabIndex:-1
                                        }}
                                        color="success" focused
                                        variant="filled"
                                        inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField sx={styleCampos}
                                        id="fechacaducidad"
                                        label="fecha de caducidad"
                                        type="text"
                                        value={datosPermisoSolicitud.fecha_caducidad}
                                        InputProps={{
                                            readOnly: true,
                                            tabIndex:-1
                                        }}
                                        color="success" focused
                                        variant="filled"
                                        inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                    />
                                </Grid>
                                

                            </Grid>
                            
                            <Box 
                                sx={{ width:'100%',}}
                                >
                                  <Grid container spacing={2} sx={{my:2}}>
                                    <Grid item xs={12} md={12} >
                                      <Button variant="contained" id='btn_next' color="info" sx={{mt:1, width:'100%'}}  
                                          onClick={() => {nextformstep(); handlePaginationNext();}} tabIndex={-1}  disabled={diseabledNextRenovation}>
                                          Siguiente
                                      </Button>
                                    </Grid>
                                  </Grid>
                                
                            </Box>
                            
                        </Collapse>  
                        {/* mensaje de error */}
                        <Collapse in={open2}>
                            <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                <Alert severity="warning">
                                    <strong>Este numero de permiso de solicitud no es valido o no existe, por favor verifique y vuelva a intentarlo</strong>!
                                </Alert>
                            </Stack>
                        </Collapse>     
                    </Box>
                </Box>


              </Box>

              {/* slider 2 */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={handleSubmitRenovarSolicitud}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} >  
                              <Alert severity="success"  sx={{ width: '100%', height: '20vh', fontSize: '1.2rem' }}>
                                <AlertTitle sx={{textAlign:'center'}}>Renovar solicitud :<AlertTitle color='primary'>{datosPermisoSolicitud.nro_solicitud}</AlertTitle> </AlertTitle>
                                ¡Estupendo! Te informamos con alegría que puedes renovar tu solicitud. ¡Es momento de seguir adelante con tus planes!.
                              </Alert>
                            </Grid>
                            
                            <Grid item xs={12} md={12}>  
                                <Button type="submit" variant="contained" color="success"sx={{mt:1, width:'100%'}} tabIndex={-1}>
                                    Confirmar renovacion.
                                </Button>
                            <Button variant="contained" id='btn_next' color="warning" sx={{my:2, width:'100%'}} onClick={() => {beforeformstep(); handlePaginationBack()}} tabIndex={-1}>
                                Volver
                            </Button>  
                            </Grid>
                        </Grid>
              
              </Box>

            </Box>

          </Box>

        </Box>


    </>
  )
}

export default BodyRenovar
