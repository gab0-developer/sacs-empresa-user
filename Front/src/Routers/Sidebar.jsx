// Import react and material ui 

import { useRef, useState, useContext } from 'react'

// hook context
import { Contextdatos } from "../Context/ContextAutenticacion.jsx";

import { NavLink } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, IconButton, Toolbar,
     AppBar, Tooltip, Avatar, Menu, MenuItem } from '@mui/material'

// icon material ui 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


// archivos importados
import '../assets/Css/NavLink.css'
import img from '../assets/Img/Exportar_img_all'


function Sidebar({inicialusario,usuario}) {

    const {Logout_sesison} = useContext(Contextdatos) // CONTEXT FUNCION Logout_sesison cerrar sesion
    const clouse_Session =() => {
        Logout_sesison()
    }

    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    const [menuLogin, setmenuLogin] = useState(null);
    const openmenu = Boolean(menuLogin); //para convertir el evento en bolleano

    const SideBarRef = useRef(null); 

    const close_sidebar = () =>{
        SideBarRef.current.classList.remove('nav_active')
    }
    const open_sidebar = () =>{
        SideBarRef.current.classList.add('nav_active')
    }

    const openMenuLogin = (event) => {
        setmenuLogin(event.currentTarget);
    };
    const closeMenuLogin = () => {
        setmenuLogin(null);//desactivar el evento ocurrido

    };



  return (
    <>

                {/* <li><NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/'>Inicio</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Ticket'>Ticket</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Paciente'>Paciente</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/InventarioMedicamentos'>Inventario</NavLink></li> */}
       
       <Box sx={{ flexGrow: 1, width:'100%' }}>
            <AppBar position="static" id='AppBar'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={open_sidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#fff' }}>
                        <NavLink to='/Home' className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'}>
                            Inicio
                        </NavLink>
                        {/* <NavLink to='/Solicitud'>Realizar Solicitud</NavLink>
                        <NavLink to='/Solicitudes'>Ver Solicitudes</NavLink> */}
                    </Typography>

                    <Tooltip title={usuario}>
                        <IconButton aria-label="" onClick={openMenuLogin}>
                            <Avatar sx={{ width: 35, height: 35 }}>{inicialusario}</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                            id="basic-menu"
                            anchorEl={menuLogin}//anchorEl: es un atributo de este componente Menu que hace referencia a quien active el menu para posicionarce donde ocurrio el evento
                            open={openmenu}
                            onClose={closeMenuLogin}
                        >
                        <MenuItem><NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Perfil'><Typography variant="p" sx={{display:'flex',alignItems:'center', justifyContent:'space-around', color:'red'}}>Perfil  <PersonOutlineIcon color='error' /> </Typography></NavLink></MenuItem>
                        <MenuItem onClick={clouse_Session} sx={{color:'red'}}>Cerrar Sesion</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>

        <Box component='div' id='container_nav'>
            <Box component='nav' className='nav' ref={SideBarRef} sx={{height:'100vh',overflow:'auto'}}>
                <IconButton aria-label="close" color='error' id='btn_close' onClick={close_sidebar} >
                    <CloseSharpIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Box component='div' id='nav_logo'>
                    <img src={img.logoSACS2} width='30%' id='logoivss' alt="logo_ivss_blanco" />
                    <Typography id='tit_logo' variant="p" color="initial">Servicio Autónomo Contraloria Sanitaria</Typography>
                </Box>       
                <Box component='div' id='cont_list'>
                    {/* <Accordion id='linkacordeon'>
                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/'>Inicio</NavLink>
                    </Accordion> */}
                    <Accordion id='linkacordeon'>
                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Home'>Inicio</NavLink>
                    </Accordion>
                    
                    <Accordion id='acordeon'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{color:'#fff'}}>Solicitud</Typography>
                            </AccordionSummary>

                            {/* SUB MENUS DE SOLICITUD */}
                            <Accordion id='acordeon'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{color:'#fff'}}>Crear solicitud</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Recaudos'>Recaudos de Solicitudes</NavLink><br />
                                    </AccordionDetails>
                                    <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Solicitud'>Crear Solicitud</NavLink><br />
                                    </AccordionDetails>
                            </Accordion>
                            <Accordion id='acordeon'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{color:'#fff'}}>Generar PDF de solicitudes</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Solicitudes'>Solicitudes realizadas</NavLink><br />
                                    </AccordionDetails>
                                    <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/SolicitudesAprobadas'>Solicitudes aprobadas</NavLink><br />
                                    </AccordionDetails>
                            </Accordion>
                            <Accordion id='acordeon'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{color:'#fff'}}>Movimiento de solicitud</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/SolicitudesPagosPendientes'>Solicitudes pendientes por pago</NavLink><br />
                                    </AccordionDetails>
                                    {/* <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/SolicitudesAprobadas'>Solicitudes aprobadas</NavLink><br />
                                    </AccordionDetails>
                                    <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Solicitudes'>Solicitudes realizadas</NavLink><br />
                                    </AccordionDetails> */}
                            </Accordion>
                            <Accordion id='acordeon'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{color:'#fff'}}>Renovar solicitud</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/RenovarSolicitud'>Renovar solicitud</NavLink><br />
                                    </AccordionDetails>
                            </Accordion>
                            
                    </Accordion>
                </Box>
                
            </Box>
        </Box>

        

    </>
  )
}

export default Sidebar