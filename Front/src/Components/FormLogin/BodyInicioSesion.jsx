// ----react-hook-form
import React from 'react'
// ------------
import { useContext, useEffect, useState } from "react";
import { Box, Button, TextField, InputLabel, Grid, FormControl, Typography,
        IconButton ,InputAdornment , FormHelperText, OutlinedInput
      } from '@mui/material'
  // icon material 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// hook context
import { Contextdatos } from "../../Context/ContextAutenticacion.jsx";
// css
import  './FormLogin.css'
import '../../assets/Css/FormStep.css'
import { Link } from "react-router-dom";
// JS
import {expresionsRegulars,Email_Expression,Password_Expression} from '../../assets/JS/ExpresionRegulares.js'


const styleCampos = {
  width: "100%",
};

function BodyInicioSesion() {

   // HOOK INICIO DE SESION 
   const [emailsesison,setEmailSesison] = useState({
    dato:null,
    error : false,
    message : '',
    color:null,
    fucosed: null
  })
   const [passSession,setPassSession] = useState({
    dato:null,
    error : false,
    message : '',
    color:null,
    fucosed: null
   })
   const [diseabledSubmitSession,setDiseabledSubmitSession] = useState(true)

  //  ocultar y mostrar password
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // -----------------------------------
  // -----------------------------------

  const {User_login} = useContext(Contextdatos) // CONTEXT FUNCION user_login

   // -------------------CONTEXT DE INICIO DE SESSION------------------
  // const [usuerLogin, setusuerLogin] = useState([]);

  const user_data_login = () =>{
    User_login({
      user: emailsesison.dato.toUpperCase(),
      pass:passSession.dato
      
      });
      
  }
  
  const HandleSubmitIniciarSession = (e) =>{
    e.preventDefault()
    user_data_login()
  }


  // ------------------------------------
  // *--------------VALIDATE CAMPO EXPRESIONES REGULARES ----------------------
  // ------------------------------------
  
  const validateEmail = (value) => {
    Email_Expression(value,setEmailSesison);
    // let valor_email = value
    // if (!expresionsRegulars.emailRegex.test(valor_email)) {
    //   setEmailSesison({
    //     error : true,
    //     message : 'El correo no es válido',
    //   })
    //   // setDiseabledSubmitSession(true)
      
    // }else{
    //   setEmailSesison({
    //     email: valor_email,
    //     error : false,
    //     message : 'Correo válido',
    //     color:'success',
    //     fucosed:true
    //   })
    //   // setDiseabledSubmitSession(false)
    // }
  }
  const validatePassword = (value) => {
    Password_Expression(value,setPassSession)
    // let valor_password = value
    // if (!expresionsRegulars.passwordRegex.test(valor_password)) {
    //   setPassSession({
    //     error : true,
    //     message : 'La contraseña debe comenzar la primera letra mayuscula y ser alfa numérica',
    //   })
    //   // setDiseabledSubmitSession(true)
      
    // } else if(valor_password.length < 8) {
    //   setPassSession({
    //     error : true,
    //     message : 'La contraseña debe tener minimo 8 caracteres',
    //   })
    //   // setDiseabledSubmitSession(false)
    // }else{
    //   setPassSession({
    //     pass: valor_password,
    //     error : false,
    //     message : 'Contraseña Válida',
    //     color:'success',
    //     fucosed:true
    //   })
    //   // setDiseabledSubmitSession(false)
    // }
  }
  
  
  
  
  // ------------------------------------
  // VALIDACION DE CAMPOS VACIOS INICIO DE SESIÓN
  // ------------------------------------
   useEffect(() =>{
    if(!expresionsRegulars.emailRegex.test(emailsesison.dato) ||emailsesison.length == 0 || emailsesison == '' || emailsesison == null || 
       !expresionsRegulars.passwordRegex.test(passSession.dato) || passSession.length == 0 || passSession == '' || passSession == null
      ){
      setDiseabledSubmitSession(true)
    }else{
      setDiseabledSubmitSession(false)
    }
  },[emailsesison,passSession])

  return (
    <>

    
         <Box component='form' onSubmit={HandleSubmitIniciarSession} sx={{p:'1rem', position:'relative',maxHeight:'100%',width:'100%',
               boxShadow:'8px 8px  6px #ccc, -2px -2px 10px #ccc',borderRadius:'6px',background:'#ffffffd9' }}>
                
                <Box component='div' sx={{my:'1rem',textAlign:'center',}}>
                    <Typography variant="h5" color="error"><strong>Iniciar Sesión</strong></Typography>
                </Box>

                <Grid container spacing={2} sx={{width:'100%'}}>
          
                      <Grid item xs={12} md={12}>
                        <TextField
                          sx={{width:'100%',}}
                          id="usuario_inicioisesion"
                          label="email"
                          type="email"
                          placeholder="correo@gmail.com"
                          value={emailsesison.dato}
                          onChange={(e) => validateEmail(e.target.value)}
                          error={emailsesison.error}
                          helperText ={emailsesison.message}
                          color={emailsesison.color}
                          focused={emailsesison.fucosed}
                          InputProps={{
                            disableTabs: true,
                            tabIndex: -1
                          }}
                          // inputProps={{ tabIndex: -1 }} // Omitir tabulación
                          // onChange={(e) => EmailSesison(e.target.value.toUpperCase())}
                          // { ... register("correo")}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
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
                        {/* <TextField
                          // sx={styleCampos}
                          fullWidth
                          id="pass_iniciosesion"
                          label="Contraseña"
                          type="password"
                          value={passSession.dato}
                          onChange={(e) => validatePassword(e.target.value)}
                          error={passSession.error}
                          helperText ={passSession.message}
                          color={passSession.color}
                          focused={passSession.fucosed}
                          InputProps={{
                            disableTabs: true,
                          }}
                          // {...register("contrasena")}
                        /> */}
                      </Grid>
                        
                      <Grid item xs={12} md={12}>
                        <Button type='submit' variant="text" className="btn_loging" 
                          sx={{width:'100%',color:'#fff',backgroundImage: 'linear-gradient(to right top, #de4343, #e04a4a, #e25151, #e35858, #e55f5f)',mt:'1rem',padding:'1rem'}} 
                          disabled={diseabledSubmitSession}
                          tabIndex={-1} // Omitir tabulación
                          >
                          Iniciar sesion
                        </Button>
                      </Grid>
                      
                </Grid>
                
                {/* COMPONENTE CAMBIO DE CONTRASEÑA */}
                <Box component='div' sx={{mt:'0.5rem'}}>
                  <center>
                    <Link to='/CambioPassword' className="link_olvido_pass">
                      ¿Ha Olvidado su Contraseña?
                    </Link>
                  </center>
                  <center>
                    <Link to='/PreguntaSeguridad' className="link_olvido_pass">
                      Cambiar Preguntas de Seguridad
                    </Link>
                  </center>
                  
                
                </Box>
              </Box>
              
    </>
  )
}

export default BodyInicioSesion
