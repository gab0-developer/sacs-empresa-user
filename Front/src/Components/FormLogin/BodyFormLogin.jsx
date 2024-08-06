// ------------
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box, Typography} from '@mui/material'

// css
import  './FormLogin.css'
import '../../assets/Css/FormStep.css'
// componentes login
import BodyInicioSesion from './BodyInicioSesion.jsx';
import BodyRegisterUser from './BodyRegisterUser.jsx';

import img from '../../assets/Img/Exportar_img_all'
const btnactive = {
  color:'#E20000',
  cursor:'pointer'
}
const btninactiveactive = {
  color:'gray',
  cursor:'pointer'
}
const formularioinactive = {
  display:'none',
}

function BodyFormLogin() {

  const btnactive = {
    color:'#E20000',
    cursor:'pointer'
  }

   // boton de activacion de inicio_sesion - registro
   const [btn1, setbtn1] = useState(null);
   const [btn2, setbtn2] = useState(btnactive);
   const [activeFormularioIniSession, setActiveFormularioIniSession] = useState(null);
   const [activeFormularioRegister, setActiveFormularioRegister] = useState(null);

    // hook text escriturq
  const [titFfrm, setTitForm] = useState("");


   // boton para desactivacion de formulario de ubicaicon de segundo propietario
  
   const handleInicioSesion = () => {
    setbtn1(btnactive);
    setbtn2(btninactiveactive);
    setActiveFormularioIniSession(null);
    setActiveFormularioRegister(formularioinactive);
  };
  const handleRegister = () => {
    setbtn1(btninactiveactive);
    setbtn2(btnactive);
    setActiveFormularioRegister(null);
    setActiveFormularioIniSession(formularioinactive);
      
  };

  // ------------------------------
  // ----efecto escritura------ 
  // ------------------------------

  const textload = () =>{
    
    setTimeout(() =>{
      setTitForm('¡Cumple con las normativas!')
    },0)
    setTimeout(() =>{
      setTitForm('¡Realiza tus Solicitudes!')
    },4000)
    setTimeout(() =>{
      setTitForm('¡Genera tus Reportes!')
    },8000)

  }

  useEffect(() =>{
    setbtn2(btninactiveactive);
    setActiveFormularioRegister(formularioinactive);
    textload()
    setInterval(textload,12000)
  },[])


  const textgradienth4 ={
    backgroundImage: 'linear-gradient(to right, #ff0000, #f04579)', // Degradado de color
    WebkitBackgroundClip: 'text', // Establece el área del texto afectada por el fondo
    color: 'transparent', // Hace el texto transparente para mostrar el degradado de fondo
    animation: 'moverFondo 5s linear infinite', // 5 segundos de duración, movimiento lineal y se repite infinitamente
    // Otros estilos que desees agregar
    
  }
  const textgradienth2 ={
    backgroundImage: 'linear-gradient(to right, #fc5252, #ffe031)', // Degradado de color
    WebkitBackgroundClip: 'text', // Establece el área del texto afectada por el fondo
    color: 'transparent', // Hace el texto transparente para mostrar el degradado de fondo
    animation: 'moverFondo 5s linear infinite', // 5 segundos de duración, movimiento lineal y se repite infinitamente
    // Otros estilos que desees agregar
    
  }



  return (
    <>
  
      <Box>
        
        <Box component='div' className="caja_form" sx={{width:'100%',position:'relative',height:'auto',
                  display:'flex',alignItems:'center',justifyContent:'space-between',
                  overflow:'hidden',pt:'1rem'}}>
            
          <Box component='center' className="container_text_forms" sx={{width:'50%',position:'relative'}}>
            <Box component='div' sx={{maxWidth:'100%'}}>
              <img src={img.logoSACS2} style={{width:'30%'}} alt="" />
              <h4 style={textgradienth4}>Servicios Autónomos de Contraloria Sanitaria</h4>
              <h4 style={textgradienth2}>{titFfrm}</h4>
            </Box>
            <Box component='div' sx={{position:'relative',mt:'3rem',transform:'rotate(-45deg)'}}>
              <img src={img.juntos} style={{width:'30%'}} alt="" />
            </Box>
          </Box>
          
          {/* ESTRUCTURA DE LOS FORMULARIOS */}
          <Box component='div' className="container_forms"  
            >
            <Box component='div'  sx={{width:'100%',px:2,textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Box component='div' sx={{mr:5,p:1}}>
                  <Typography variant="p" color="error"  sx={btn1}  onClick={() => handleInicioSesion()} ><strong>Iniciar Sesión</strong></Typography>
                </Box>
                {/* <Box component='div'>
                  <Typography variant="p" color="error" sx={btn2} onClick={() => handleRegister()} ><strong>Registrarse</strong></Typography>
                </Box> */}
                <Box component='div'>
                  <Link to='/Registrarse' className="link_olvido_pass">
                    <Typography variant="p" color="error" sx={{fontSize:'16px'}}><strong>Registrar empresa</strong></Typography>
                  </Link>
                </Box>
            </Box>

            {/* FORMULARIOS  */}
            <Box component='div'  sx={{p:'1rem'}}>
              {/* INICIAR SESION */}
              <Box sx={activeFormularioIniSession} >
                <BodyInicioSesion />
              </Box>
              {/* REGISTRAR USUARIO  bgcolor:'orange' */}
              {/* <Box sx={activeFormularioRegister} >
                <BodyRegisterUser />
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>

    </>
  );
}

export default BodyFormLogin;
