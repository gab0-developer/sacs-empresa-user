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

import {expresionsRegulars,Email_Expression,Password_Expression,Rif_Expression,Texto_Expression,
    Tlf_First_Expression,Tlf_Second_Expression,Email_First_Expression,Email_Second_Expression,Text_number_Expressions,
    number_Expressions,MaxText_number_Expression,LimiteDe_Text_Number_Expression,Cedula_Expression} from '../../assets/JS/ExpresionRegulares.js'
    
import BodyPaginationStep from '../PaginacionStep/BodyPaginationStep.jsx'

// iconos
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const styleCampos ={
    width:'100%',

}




function BodyCambioContrasena() {

    // redirigirme al login una vez cambiada la contraseña
    const navigate = useNavigate();

    const [correoUsuario, setCorreoUsuario] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [datosUsuario, setDatosUsuario] = useState([]);
    const [Respuesta1, setRespuesta1] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Respuesta2, setRespuesta2] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Respuesta3, setRespuesta3] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});
    const [Respuesta4, setRespuesta4] = useState({ dato:null, error : false, message : '', color:null, fucosed: null});

    // pagination de formulario de pasos
    const [activeStepPagination, setActiveStepPagination] = useState(0);
    const [TextStepPag, setTextStepPag] = useState([
        "Ingresar su correo.",
        "Aprobar preguntas de seguridad.",
        "Ingresar nueva contraseña.",]);
    const [IconStepPag, setIconStepPag] = useState({
        1 :<MarkEmailReadOutlinedIcon />, 
        2: <QuestionAnswerOutlinedIcon />, 
        3: <HttpsOutlinedIcon />, 
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

        const emailusuario = {
            emailuser : correoUsuario.dato.toUpperCase()
        }

        const url = `${servidor}Login/CambioContrasena/Table`
      
        const resp = await axios.post(url,JSON.stringify(emailusuario))
        const resp_data = await resp.data

        if (resp_data && resp_data.length > 0 ) {
            setDatosUsuario({
                primera_pregunta :resp_data[0].primera_pregunta,
                segunda_pregunta :resp_data[0].segunda_pregunta,
                tercera_pregunta :resp_data[0].tercera_pregunta,
                cuarta_pregunta :resp_data[0].cuarta_pregunta,
                primera_respuesta :resp_data[0].primera_respuesta,
                segunda_respuesta :resp_data[0].segunda_respuesta,
                tercera_respuesta :resp_data[0].tercera_respuesta,
                cuarta_respuesta :resp_data[0].cuarta_respuesta,
            })
            setOpen(!open);
            setOpen2(false);

            
        }else{
            setOpen(false);
            setOpen2(!open2);
            return false
            
        }
        // tableData()
    }

    const Validacion_Preguntas = () =>{
      
        if( datosUsuario.primera_respuesta == Respuesta1.dato.toUpperCase().trim() && 
            datosUsuario.segunda_respuesta == Respuesta2.dato.toUpperCase().trim() && 
            datosUsuario.tercera_respuesta == Respuesta3.dato.toUpperCase().trim() && 
            datosUsuario.cuarta_respuesta ==  Respuesta4.dato.toUpperCase().trim() )
            
            {

                setCollapseComprobar(true)
                Swal.fire(
                    'Excelente!',
                    `Preguntas de Seguridad Aprobadas` ,
                    'success'
                  )
        }else{
            setCollapseComprobar(false)
            Swal.fire(
                'Error!',
                `Algunas Respuestas no son Correctas. Por favor verifique y no dejar ningun campo vacio` ,
                'error'
            )
        }

    }
    // useEffect(() =>{
    //     Validacion_Preguntas()
    // },[datosUsuario])

    const CambioContrasena = async () =>{

        const objcontrasena = {
            emailuser : correoUsuario.dato.toUpperCase(),
            contrasenauser: pass1.dato,
        }

        if(pass1.dato === pass2.dato){
            
            const url =`${servidor}Login/CambioContrasena/UpdateContrasenaUsuario`
            AxiosPost(url,objcontrasena,`Cambio de Contraseña éxitos`,null)
            // setTimeout para redirigir después de dos segundos
            setTimeout(() => {
                navigate('/Login');
            }, 1000);
            
        }else{
            Swal.fire(
                'Error!',
                `Las Contraseñas no coinciden` ,
                'error'
            )
        }
    }
    const handleSubmitpreguntas = (e) =>{
        e.preventDefault()
        datos_Preguntas()
    }
    // const handleSubmitvalidatePreguntas = (e) =>{
    //     e.preventDefault()
    //     Validacion_Preguntas()
    // }
    const handleSubmitvCambioContrasena = (e) =>{
        e.preventDefault()
        CambioContrasena()
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
    const validate_Respuesta1 = (value) => {
        Text_number_Expressions(value,setRespuesta1)   
    } 
    const validate_Respuesta2 = (value) => {
        Text_number_Expressions(value,setRespuesta2)   
    } 
    const validate_Respuesta3 = (value) => {
        Text_number_Expressions(value,setRespuesta3)   
    } 
    const validate_Respuesta4 = (value) => {
        Text_number_Expressions(value,setRespuesta4)   
    } 
    const validate_Pass1 = (value) => {
        Password_Expression(value,setPass1)   
    } 
    const validate_Pass2 = (value) => {
        Password_Expression(value,setPass2)   
    } 


  return (
    <>

        
        <Box 
            sx={{mt:2,float:'left'}}
            > 
            <Link to='/Login'>
                <Button variant="contained" color="error" >
                    Volver a login
                </Button>
            </Link>

        </Box>
        <Box component='div' sx={{width:'70%', margin:'auto', boxShadow:'2px 2px 6px 6px #ddd',borderRadius:'10px',p:'1rem'}}>
            <Box component='div' className='tit_popup' sx={{width:'100%',display:'flex',justifyContent:'center',alignContent:'center'}} >
                <center>
                    <Typography variant="h6" sx={{color:'#fff'}}>Cambio de Contraseña</Typography>
                </center>
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
                    <Box component='form' className='form_ciudadano' id='form_step' onSubmit={handleSubmitpreguntas} >

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
                                    <Grid item xs={12} md={2}>    
                                        <Button type="submit" variant="contained" color="primary"sx={{mt:1}}  tabIndex={-1} >
                                            Buscar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </center>
                            {/* Informacion de preguntas  */}
                            <Box className='cont_collapse' sx={{mt:1}}>
                                <Collapse in={open}>
                                    <Typography variant="p" color="primary" sx={{mt:3}}>Datos Obtenidos:</Typography>
                                    <Grid container spacing={2} sx={{my:2}}>
                                        <Grid item  md={5} >
                                            <TextField sx={styleCampos}
                                                id="pregunta1"
                                                label="Primera Pregunta"
                                                type="text"
                                                value={datosUsuario.primera_pregunta}
                                                InputProps={{
                                                    readOnly: true,
                                                    tabIndex:-1
                                                }}
                                                color="success" focused
                                                variant="filled"
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                            />
                                        </Grid>
                                        <Grid item  md={5} >
                                            <TextField sx={styleCampos}
                                                id="pregunta2"
                                                label="Segunda Pregunta"
                                                type="text"
                                                value={datosUsuario.segunda_pregunta}
                                                InputProps={{
                                                    readOnly: true,
                                                    tabIndex:-1
                                                }}
                                                color="success" focused
                                                variant="filled"
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                            />
                                        </Grid>
                                        <Grid item  md={5} >
                                            <TextField sx={styleCampos}
                                                id="pregunta3"
                                                label="Tercera Pregunta"
                                                type="text"
                                                value={datosUsuario.tercera_pregunta}
                                                InputProps={{
                                                    readOnly: true,
                                                    tabIndex:-1
                                                }}
                                                color="success" focused
                                                variant="filled"
                                                inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                            />
                                        </Grid>
                                        <Grid item  md={5} >
                                            <TextField sx={styleCampos}
                                                id="pregunta4"
                                                label="Cuarta Pregunta"
                                                type="text"
                                                value={datosUsuario.cuarta_pregunta}
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
                                        sx={{mt:2,float:'right'}}
                                        >
                                        <Button variant="contained" id='btn_next' color="info" 
                                            onClick={() => {nextformstep(); handlePaginationNext()}} tabIndex={-1}  >
                                        
                                            Siguiente
                                        </Button>
                                    </Box>
                                    
                                </Collapse>  
                                {/* mensaje de error */}
                                <Collapse in={open2}>
                                    <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                        <Alert severity="warning">
                                            <strong>El correo no es Correctos</strong> o <strong>No esta REGISTRADO . " POR FAVOR VERIFIQUE "</strong>!
                                        </Alert>
                                    </Stack>
                                </Collapse>     
                            </Box>
                        </Box>
                    </Box>

                    <Box component='form' className='form_ciudadano' id='form_step' >
                         {/* Informacion de ciudadano  */}
                         <Box className='cont_collapse' sx={{mt:1}}>
                                
                            <Box component='div'>
                                <Typography variant="p" color="primary" sx={{mt:3}}>Responder las Preguntas para continuar:</Typography>
                            </Box>                
                                    <Grid container spacing={2} sx={{my:2}}>
                                        <Grid item  md={6} >
                                            <TextField sx={styleCampos}
                                                id="preguntavalue1"
                                                label="Primera Pregunta"
                                                type="text"
                                                value={datosUsuario.primera_pregunta}
                                                InputProps={{
                                                    readOnly: true,
                                                    tabIndex: -1,
                                                }}
                                                color="success" focused
                                                variant="filled"
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
                                                id="preguntavalue2"
                                                label="Segunda Pregunta"
                                                type="text"
                                                value={datosUsuario.segunda_pregunta}
                                                InputProps={{
                                                    readOnly: true,
                                                    tabIndex:-1
                                                }}
                                                color="success" focused
                                                variant="filled"
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
                                                value={datosUsuario.tercera_pregunta}
                                                InputProps={{
                                                    readOnly: true,
                                                    tabIndex:-1
                                                }}
                                                color="success" focused
                                                variant="filled"
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
                                                value={datosUsuario.cuarta_pregunta}
                                                InputProps={{
                                                    readOnly: true,
                                                    tabIndex:-1
                                                }}
                                                color="success" focused
                                                variant="filled"
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
                                        <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} tabIndex={-1}>
                                            Volver
                                        </Button>
                                        <Button  variant="contained" id='btn_next' color="success"  onClick={Validacion_Preguntas} tabIndex={-1}>
                                        {/* onClick={() => {nextformstep(); handlePaginationNext()}} */}
                                            Comprobar
                                        </Button>
                                    </Box>  
                                    <Collapse in={collapseComprobar}>

                                        <Box 
                                            sx={{mt:2,float:'right'}}
                                            >
                                            <Button  variant="contained" id='btn_next' color="primary" onClick={() => {nextformstep(); handlePaginationNext()}} tabIndex={-1} >

                                                Siguiente
                                            </Button>
                                        </Box>           
                                    </Collapse>         

                                    <ToastContainer />
                            </Box>
                    </Box>
                    
                    <Box component='form' className='form_ciudadano' id='form_step' onSubmit={handleSubmitvCambioContrasena}>
                        <Grid container spacing={2}>
                            <Grid item  md={5} >
                                <FormControl sx={styleCampos} variant="outlined">
                                    {pass1.error ? (
                                        
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{ color: 'red' }}>Nueva contraseña </InputLabel>
                                        ) : (
                                        
                                        <InputLabel htmlFor="outlined-adornment-password">Nueva contraseña </InputLabel>
                                    )
                                        
                                    }
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={pass1.dato}
                                        onChange={(e) => validate_Pass1(e.target.value)}
                                        color={pass1.color}
                                        focused={pass1.fucosed}
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
                                            tabIndex="-1" // Omitir tabulación
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Contraseña"
                                        error={pass1.error}
                                        />
                                        {pass1.error ? (
                                        <FormHelperText sx={{ color: 'red' }}>{pass1.message}</FormHelperText>
                                        
                                        ) : (
                                            
                                            <FormHelperText sx={{ color: 'green' }}>{pass1.message}</FormHelperText>
                                        )

                                        }
                                </FormControl>  
                                {/* <TextField sx={styleCampos}
                                    id="contrasena"
                                    label="Nueva Contraseña"
                                    type="text"
                                    value={pass1.dato }
                                    onChange={(e) => validate_Pass1(e.target.value)}
                                    error={pass1.error}
                                    helperText ={pass1.message}
                                    color={pass1.color}
                                    focused={pass1.fucosed}
                                    InputProps={{
                                        disableTabs: true,
                                        tabIndex:-1
                                    }}
                                    tabIndex={-1} // Omitir tabulación
                                                    
                                /> */}
                            </Grid>
                            <Grid item  md={5} >
                            <FormControl sx={styleCampos} variant="outlined">
                                    {pass2.error ? (
                                        
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{ color: 'red' }}>Confirmar contraseña </InputLabel>
                                        ) : (
                                        
                                        <InputLabel htmlFor="outlined-adornment-password">Contraseña </InputLabel>
                                    )
                                        
                                    }
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword2 ? 'text' : 'password'}
                                        value={pass2.dato}
                                        onChange={(e) => validate_Pass2(e.target.value)}
                                        color={pass2.color}
                                        focused={pass2.fucosed}
                                        InputProps={{
                                        disableTabs: true,
                                        tabIndex: -1
                                        }}
                                        inputProps={{ tabIndex: -1 }} // Omitir tabulación
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={handleMouseDownPassword2}
                                            tabIndex="-1" // Omitir tabulación
                                            edge="end"
                                            >
                                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Contraseña"
                                        error={pass2.error}
                                        />
                                        {pass2.error ? (
                                        <FormHelperText sx={{ color: 'red' }}>{pass2.message}</FormHelperText>
                                        
                                        ) : (
                                            
                                            <FormHelperText sx={{ color: 'green' }}>{pass2.message}</FormHelperText>
                                        )

                                        }
                                </FormControl>  
                                {/* <TextField sx={styleCampos}
                                    id="contrasena"
                                    label="Confirmar Contraseña"
                                    type="text"
                                    value={pass2.dato }
                                    onChange={(e) => validate_Pass2(e.target.value)}
                                    error={pass2.error}
                                    helperText ={pass2.message}
                                    color={pass2.color}
                                    focused={pass2.fucosed}
                                    InputProps={{
                                        disableTabs: true,
                                        tabIndex: -1,
                                    }} 
                                    tabIndex={-1} // Omitir tabulación
                                                    
                                /> */}
                            </Grid>
                            <Grid item xs={12} md={2}>    
                                <Button type="submit" variant="contained" color="success"sx={{mt:1}} tabIndex={-1}>
                                    Confirmar
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

export default BodyCambioContrasena