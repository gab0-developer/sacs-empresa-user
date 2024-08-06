import { useNavigate, Link} from 'react-router-dom'
import { Box, Button, TextField, Select,InputLabel, MenuItem, Alert, Stack, Collapse, Autocomplete, 
        Grid, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl ,
        IconButton, InputAdornment , FormHelperText, OutlinedInput} from '@mui/material'
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

import {expresionsRegulars,Email_Expression,Password_Expression,MaxText_number_Expression} from '../../assets/JS/ExpresionRegulares.js'

import BodyPaginationStep from '../PaginacionStep/BodyPaginationStep.jsx'

// iconos
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const styleCampos ={
    width:'100%',

}




function BodyCambioPreguntaSeguridad() {

    // redirigirme al login una vez cambiada la contraseña
    const navigate = useNavigate();

    const [correoUsuario, setCorreoUsuario] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [passSession,setPassSession] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
    const [diseabledSubmitSession,setDiseabledSubmitSession] = useState(true)
    const [datosUsuario, setDatosUsuario] = useState([]);

    const [Pregunta1, setPregunta1] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Pregunta2, setPregunta2] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Pregunta3, setPregunta3] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Pregunta4, setPregunta4] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Respuesta1, setRespuesta1] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Respuesta2, setRespuesta2] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Respuesta3, setRespuesta3] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Respuesta4, setRespuesta4] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [diseabledSubmitPreguntas,setDiseabledSubmitPreguntas] = useState(true)

    // pagination de formulario de pasos
    const [activeStepPagination, setActiveStepPagination] = useState(0);
    const [TextStepPag, setTextStepPag] = useState([
        "Ingresar su correo.",
        "Nuevas preguntas de seguridad.",]);
    const [IconStepPag, setIconStepPag] = useState({
        1 :<MarkEmailReadOutlinedIcon />, 
        2: <QuestionAnswerOutlinedIcon />, 
    });
    //---------------------------------------------------------------- 
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    // disable submit comprobar
    const [collapseComprobar, setCollapseComprobar] = useState(false);
    // cambio contraseña
    const [pass1, setPass1] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [pass2, setPass2] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});

    
    //  ocultar y mostrar password
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    const datos_Preguntas = async () =>{    

        const datausuario = {
            user : correoUsuario.dato.toUpperCase(),
            password:passSession.dato
        }

        const url = `${servidor}Login/LoginSession/Table`
      
        const resp = await axios.post(url,JSON.stringify(datausuario))
        const resp_data = await resp.data
        const obj_value = Object.values(resp_data) 

        if (resp_data && obj_value.length > 0 ) {
            
            setOpen(!open);
            setOpen2(false);
            

            
        }else{
            setOpen(false);
            setOpen2(!open2);
            return false
            
        }
        // tableData()
    }

    const CambioPreguntasSeguridad = async () =>{

        const objPreguntasSeguridad = {
            emailuser: correoUsuario.dato,
            contrasenauser: passSession.dato,
            pregunta1: Pregunta1.dato.trim(),
            respuesta1: Respuesta1.dato.trim(),
            pregunta2: Pregunta2.dato.trim(),
            respuesta2: Respuesta2.dato.trim(),
            pregunta3: Pregunta3.dato.trim(),
            respuesta3: Respuesta3.dato.trim(),
            pregunta4: Pregunta4.dato.trim(),
            respuesta4: Respuesta4.dato.trim(),
        }
        // const obj_value_preguntas = Object.values(objPreguntasSeguridad) 
        const url =`${servidor}Login/CambioContrasena/UpdatePreguntaSeguridad`
        AxiosPost(url,objPreguntasSeguridad,`Cambio de Preguntas éxitos`,null)
        // setTimeout para redirigir después de dos segundos
        setTimeout(() => {
            navigate('/Login');
        }, 1000);
    }
    const handleSubmitUsuario = (e) =>{
        e.preventDefault()
        datos_Preguntas()
    }
    const handleSubmitPreguntas = (e) =>{
        e.preventDefault()
        CambioPreguntasSeguridad()
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

    const validateEmail = (value) => {
        Email_Expression(value,setCorreoUsuario);    
    }
    const validatePassword = (value) => {
        Password_Expression(value,setPassSession)
    }
    const validate_Pregunta1 = (value) => {
        MaxText_number_Expression(value,setPregunta1)   
    } 
    const validate_Pregunta2 = (value) => {
        MaxText_number_Expression(value,setPregunta2)   
    } 
    const validate_Pregunta3 = (value) => {
        MaxText_number_Expression(value,setPregunta3)   
    } 
    const validate_Pregunta4 = (value) => {
        MaxText_number_Expression(value,setPregunta4)   
    } 
    const validate_Respuesta1 = (value) => {
        MaxText_number_Expression(value,setRespuesta1)   
    } 
    const validate_Respuesta2 = (value) => {
        MaxText_number_Expression(value,setRespuesta2)   
    } 
    const validate_Respuesta3 = (value) => {
        MaxText_number_Expression(value,setRespuesta3)   
    } 
    const validate_Respuesta4 = (value) => {
        MaxText_number_Expression(value,setRespuesta4)   
    } 


    const validate_Pass1 = (value) => {
        Password_Expression(value,setPass1)   
    } 
    const validate_Pass2 = (value) => {
        Password_Expression(value,setPass2)   
    } 
    

  
  // ------------------------------------
  // VALIDACION DE CAMPOS VACIOS DE USUARIO 
  // ------------------------------------
   useEffect(() =>{
    if(!expresionsRegulars.emailRegex.test(correoUsuario.dato) ||correoUsuario.dato === null || correoUsuario.dato === undefined ||  
       !expresionsRegulars.passwordRegex.test(passSession.dato) || passSession.dato === null || passSession.dato === undefined 
      ){
      setDiseabledSubmitSession(true)
    }else{
      setDiseabledSubmitSession(false)
    }
  },[correoUsuario,passSession])
  
  // ------------------------------------
  // VALIDACION DE CAMPOS VACIOS PREGUNTAS DE SEGURIDAD
  // ------------------------------------
   useEffect(() =>{
    if(!expresionsRegulars.maxtextonumberRegex.test(Pregunta1.dato) ||Pregunta1.dato === null || Pregunta1.dato === undefined || 
       !expresionsRegulars.maxtextonumberRegex.test(Pregunta2.dato) || Pregunta2.dato === null || Pregunta2.dato === undefined || 
       !expresionsRegulars.maxtextonumberRegex.test(Pregunta3.dato) || Pregunta3.dato === null || Pregunta3.dato === undefined || 
       !expresionsRegulars.maxtextonumberRegex.test(Pregunta4.dato) || Pregunta4.dato === null || Pregunta4.dato === undefined || 
       !expresionsRegulars.maxtextonumberRegex.test(Respuesta1.dato) || Respuesta1.dato === null || Respuesta1.dato === undefined || 
       !expresionsRegulars.maxtextonumberRegex.test(Respuesta2.dato) || Respuesta2.dato === null || Respuesta2.dato === undefined || 
       !expresionsRegulars.maxtextonumberRegex.test(Respuesta3.dato) || Respuesta3.dato === null || Respuesta3.dato === undefined || 
       !expresionsRegulars.maxtextonumberRegex.test(Respuesta4.dato) || Respuesta4.dato === null || Respuesta4.dato === undefined 
      ){
      setDiseabledSubmitPreguntas(true)
    }else{
      setDiseabledSubmitPreguntas(false)
    }
  },[Pregunta1,Pregunta2,Pregunta3,Pregunta4,Respuesta1,Respuesta2,Respuesta3,Respuesta4])
//   [Pregunta1,Pregunta2,Pregunta3,Pregunta4,Respuesta1,Respuesta2,Respuesta3,Respuesta4]

  return (
    <>

        
        <Box 
            sx={{my:2}}
            > 
            <Link to='/Login'>
                <Button variant="contained" color="error" >
                    Volver a login
                </Button>
            </Link>

        </Box>
        <Box component='div' sx={{width:'70%', margin:'auto', boxShadow:'2px 2px 6px 6px #ddd',borderRadius:'10px',p:'1rem'}}>
            <Box component='div' className='tit_popup' sx={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                {/* <center> */}
                    <Typography variant="h6" sx={{color:'#fff'}}>Cambio de preguntas</Typography>
                {/* </center> */}
            </Box>
            <Box component='div'>
                <Stack sx={{ width: '100%', mt:1}} spacing={2}>
                    <Alert severity="warning" sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <strong>Las Preguntas y Respuestas deben tener minimo 5 carácteres y deben ser solo letras</strong>!
                    </Alert>
                </Stack>
            </Box>
            {/* PAGINACION DE PASOS  */}
            <Box component='div' sx={{my:'0.5rem'}}>
                <BodyPaginationStep 
                    activeStep = {activeStepPagination}
                    iconPagStep = {IconStepPag}
                    textsteps = {TextStepPag}
                />
             </Box>
            <Box className = 'Cont_form_step'>

                <Box className='slider_form'>
                    {/* slider 1 */}
                    <Box component='form' className='form_ciudadano' id='form_step' onSubmit={handleSubmitUsuario} >

                        {/*--------------------  */}
                        {/* Buscar ciudadano  */}
                        {/*--------------------  */}
                        <Box>
                            
                            <center>
                                <Grid container spacing={2} sx={{mt:1}}>
                                    
                                    <Grid item xs={12} md={5}>
                                        <TextField sx={styleCampos}
                                            id="correo"
                                            label="Ingresar su Correo de usuario"
                                            type='email'
                                            placeholder="correo@gmail.com"
                                            value={correoUsuario.dato }
                                            onChange={(e) => validateEmail(e.target.value)}
                                            error={correoUsuario.error}
                                            helperText ={correoUsuario.message}
                                            color={correoUsuario.color}
                                            focused={correoUsuario.fucosed}
                                            InputProps={{
                                                disableTabs: true,
                                                tabIndex: -1
                                            }}
                                            inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                            
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <FormControl sx={styleCampos} variant="outlined">
                                        {passSession.error ? (
                                            
                                            <InputLabel htmlFor="outlined-adornment-password" sx={{ color: 'red' }}>Contraseña </InputLabel>
                                            ) : (
                                            
                                            <InputLabel htmlFor="outlined-adornment-password">Contraseña </InputLabel>
                                        )
                                            
                                        }
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={passSession.dato}
                                            onChange={(e) => validatePassword(e.target.value)}
                                            color={passSession.color}
                                            focused={passSession.fucosed}
                                            InputProps={{
                                            disableTabs: true,
                                            tabIndex: -1
                                            }}
                                            inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                tabIndex="-1" // Omitir tabulación
                                                >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            label="Contraseña"
                                            error={passSession.error}
                                            />
                                            {passSession.error ? (
                                            <FormHelperText sx={{ color: 'red' }}>{passSession.message}</FormHelperText>
                                            
                                            ) : (
                                                
                                                <FormHelperText sx={{ color: 'green' }}>{passSession.message}</FormHelperText>
                                            )

                                            }
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={2}>    
                                        <Button type="submit" variant="contained" color="primary"sx={{mt:1}}  tabIndex={-1} 
                                            disabled={diseabledSubmitSession}>
                                            Buscar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </center>
                            {/* Informacion de preguntas  */}
                            <Box className='cont_collapse' sx={{mt:1}}>
                                <Collapse in={open}>
                                    <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                        <Alert severity="info">
                                            <strong>Usuario Válido</strong>!
                                        </Alert>
                                    </Stack>
                                    
                                    
                                    <Box 
                                        sx={{mt:2,float:'right'}}
                                        >
                                        <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep(); handlePaginationNext()}} tabIndex={-1}  >
                                        
                                            Siguiente
                                        </Button>
                                    </Box>
                                    
                                </Collapse>  
                                {/* mensaje de error */}
                                <Collapse in={open2}>
                                    <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                        <Alert severity="warning">
                                            <strong>los datos no son Correctos </strong> o <strong>No esta REGISTRADO . " POR FAVOR BERIFIQUE "</strong>!
                                        </Alert>
                                    </Stack>
                                </Collapse>     
                            </Box>
                        </Box>
                    </Box>

                    <Box component='form' className='form_ciudadano' id='form_step' onSubmit={handleSubmitPreguntas} >
                         {/* Informacion de ciudadano  */}
                         <Box className='cont_collapse' sx={{mt:1}}>
                                
                            <Box component='div'>
                                <Typography variant="p" color="primary" sx={{mt:3}}>Responder las Preguntas para continuar:</Typography>
                            </Box>                
                                    <Grid container spacing={2} sx={{my:2}}>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="pregunta1"
                                                label="Primera Pregunta"
                                                type="text"
                                                value={Pregunta1.dato}
                                                onChange={(e) => validate_Pregunta1(e.target.value)}
                                                error={Pregunta1.error}
                                                helperText ={Pregunta1.message}
                                                color={Pregunta1.color}
                                                focused={Pregunta1.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }}
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="respuesta1"
                                                label="Primera Respuesta"
                                                type="text"
                                                value={Respuesta1.dato}
                                                onChange={(e) => validate_Respuesta1(e.target.value)}
                                                error={Respuesta1.error}
                                                helperText ={Respuesta1.message}
                                                color={Respuesta1.color}
                                                focused={Respuesta1.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }}
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="pregunta2"
                                                label="Segunda Pregunta"
                                                type="text"
                                                value={Pregunta2.dato}
                                                onChange={(e) => validate_Pregunta2(e.target.value)}
                                                error={Pregunta2.error}
                                                helperText ={Pregunta2.message}
                                                color={Pregunta2.color}
                                                focused={Pregunta2.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }}
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="respuesta2"
                                                label="Segunda Respuesta"
                                                type="text"
                                                value={Respuesta2.dato}
                                                onChange={(e) => validate_Respuesta2(e.target.value)}
                                                error={Respuesta2.error}
                                                helperText ={Respuesta2.message}
                                                color={Respuesta2.color}
                                                focused={Respuesta2.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }}
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="pregunta3"
                                                label="Tercera Pregunta"
                                                type="text"
                                                value={Pregunta3.dato}
                                                onChange={(e) => validate_Pregunta3(e.target.value)}
                                                error={Pregunta3.error}
                                                helperText ={Pregunta3.message}
                                                color={Pregunta3.color}
                                                focused={Pregunta3.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }}
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="respuestavalue3"
                                                label="Tercera Respuesta"
                                                type="text"
                                                value={Respuesta3.dato}
                                                onChange={(e) => validate_Respuesta3(e.target.value)}
                                                error={Respuesta3.error}
                                                helperText ={Respuesta3.message}
                                                color={Respuesta3.color}
                                                focused={Respuesta3.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }} 
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="pregunta4"
                                                label="Cuarta Pregunta"
                                                type="text"
                                                value={Pregunta4.dato}
                                                onChange={(e) => validate_Pregunta4(e.target.value)}
                                                error={Pregunta4.error}
                                                helperText ={Pregunta4.message}
                                                color={Pregunta4.color}
                                                focused={Pregunta4.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }}
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="respuestavalue4"
                                                label="Cuarta Respuesta"
                                                type="text"
                                                value={Respuesta4.dato}
                                                onChange={(e) => validate_Respuesta4(e.target.value)}
                                                error={Respuesta4.error}
                                                helperText ={Respuesta4.message}
                                                color={Respuesta4.color}
                                                focused={Respuesta4.fucosed}
                                                InputProps={{
                                                    disableTabs: true,
                                                    tabIndex:-1
                                                }}
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                                
                                            />
                                        </Grid>
                                        

                                    </Grid>
                                    
                                    <Box 
                                        sx={{mt:2,float:'right'}}
                                        >
                                        <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} 
                                            onClick={() => {beforeformstep(); handlePaginationBack()}} tabIndex={-1}>
                                            Volver
                                        </Button>
                                        
                                        <Button type="submit" variant="contained" color="success" tabIndex={-1} 
                                            disabled={diseabledSubmitPreguntas}>
                                            Registrar
                                        </Button>
                                    </Box>      
                                    <ToastContainer />
                            </Box>
                    </Box>
                    
                </Box>

            </Box>

        </Box>

    </>
  )
}

export default BodyCambioPreguntaSeguridad