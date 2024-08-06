import ViewLoging from "../Components/FormLogin/ViewLoging"
import ViewHome from "../Components/Home/ViewHome"

import { Navigate,Outlet, NavLink } from 'react-router-dom'

import { useRef, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, IconButton, Toolbar, Button, AppBar, Tooltip, Avatar, Menu, MenuItem, Grid } from '@mui/material'

// icon material ui 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// import Sidebar from '../Routers/Sidebar'
import img from '../assets/Img/Exportar_img_all'
// css
import '../assets/Css/NavLink.css'
import BodyAnual from "../Components/Graficas/BodyAnual"
import BodyMensual from "../Components/Graficas/BodyMensual"
import BodySolicitud from "../Components/Home/BodySolicitud"
import TableSolicitud from "../Components/Home/TableSolicitud"
import TableSolicitudPendientePago from "../Components/SolicitudPagoPendiente/TableSolicitudPendientePago"
import BodyCambioContrasena from "../Components/FormLogin/BodyCambioContrasena"
import BodyRecaudosSolicitud from "../Components/Home/BodyRecaudosSolicitud"
import ViewPerfil from "../Components/Perfil/ViewPerfil"
import ViewWebPortal from "../Components/WebPortal/ViewWebPortal"
import ViewGrafica from "../Components/Graficas/ViewGrafica"
import ViewError from "../Components/error404/ViewError"
import TableSolicitudAprobada from "../Components/SolicitudAprobada/TableSolicitudAprobada"
import ViewRenovar from "../Components/RenovarSolicitud/ViewRenovar"
import BodyRegisterUser from "../Components/FormLogin/BodyRegisterUser"


export const PageLoging = () =>{
    return <ViewLoging />
}
export const PageRegister = () =>{
    return <BodyRegisterUser />
}
export const PageWebportal = () =>{
    return <ViewWebPortal />
}

export const PageHome = ({user}) =>{

    return (
        <>  

            {/* <Box sx={{ flexGrow: 1, width:'100%' }}>
                <AppBar position="static" id='AppBar' >
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
                            <NavLink to='/Home' className='navApp'>Inicio</NavLink>
                            <NavLink to='/Solicitud' className='navApp'>Realizar Solicitud</NavLink>
                            
                        </Typography>

                        <Tooltip title={user.usuario}>
                            <IconButton aria-label="" onClick={openMenuLogin}>
                                <Avatar sx={{ width: 35, height: 35 }}></Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                                id="basic-menu"
                                anchorEl={menuLogin}//anchorEl: es un atributo de este componente Menu que hace referencia a quien active el menu para posicionarce donde ocurrio el evento
                                open={openmenu}
                                onClose={closeMenuLogin}
                            >
                            <MenuItem><NavLink className='clouseSession' to='/Perfil'><Typography variant="p" sx={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>Perfil  <PersonOutlineIcon color='error' /> </Typography></NavLink></MenuItem>
                            <MenuItem><NavLink className='clouseSession' to='/Login'><Typography variant="p" sx={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>Cerrar Sesión  <LogoutOutlinedIcon color='error' /> </Typography></NavLink></MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box> */}

            {/* <Sidebar /> */}

            {/* <Box component='div' id='container_nav'>
            <Box component='nav' className='nav' ref={SideBarRef}>
                <IconButton aria-label="close" color='error' id='btn_close' onClick={close_sidebar} >
                    <CloseSharpIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Box component='div' id='nav_logo'>
                    <img src={img.logoSACS2} id='logosacs' alt="logo_ivss_blanco" />
                    <Typography id='tit_logo' variant="p" color="initial">Servicio Autónomo Contraloria Sanitaria</Typography>
                </Box>    
                <Box component='div' id='cont_list'>
                    <Accordion id='linkacordeon'>
                        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Home'>Inicio</NavLink>
                    </Accordion>
                    
                    <Accordion id='acordeon'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography  sx={{color:'#fff'}}>Solicitud</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Recaudos'>Recaudo de Solicitudes</NavLink><br />
                        </AccordionDetails>
                        <AccordionDetails>
                            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Solicitud'>Realizar Solicitud</NavLink><br />
                        </AccordionDetails>
                        <AccordionDetails>
                            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'noactiveLink'} to='/Solicitudes'>Ver Solicitudes</NavLink><br />
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
            </Box> */}

            <ViewHome user={user}  />
        </>
    )
}
export const PageSolicitud = ({user}) =>{

    return (
        <>  
            <BodySolicitud user={user}  />
        </>
    )
}
export const PageTableSolicitud = ({user}) =>{

    return (
        <>  
            <TableSolicitud user={user}  />
        </>
    )
}
export const PageTableSolicitud_pagoPendiente = ({user}) =>{

    return (
        <>  
            <TableSolicitudPendientePago user={user}  />
        </>
    )
}
export const PageTableSolicitud_Aprobada = ({user}) =>{

    return (
        <>  
            <TableSolicitudAprobada user={user}  />
        </>
    )
}
export const PageRenovarSolicitud = ({user}) =>{

    return (
        <>  
            <ViewRenovar user={user}  />
        </>
    )
}
export const PageRecaudosSolicitud = ({user}) =>{

    return (
        <>  
            <BodyRecaudosSolicitud user={user}  />
        </>
    )
}
export const PagePerfilUser = ({user}) =>{

    return (
        <>  
            <ViewPerfil user={user}  />
        </>
    )
}
export const PageCambioContrasena = () =>{

    <BodyCambioContrasena />
}
export const PageError404 = () =>{

    <ViewError />
}



export const PageEstadistica = ({user}) =>{


    return (
        <>  

            {/* <Box component='div' sx={{width:'100%', display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                
                <BodyAnual user={user}  />
                <BodyMensual user={user}  />
                
            </Box> */}
            
            <ViewGrafica user={user}  />
        </>
    )
}


