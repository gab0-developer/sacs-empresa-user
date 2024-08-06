import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AxiosGet } from '../../Helpers/FetchAxios/FetchAxios'

// ICON MATERIAL UI 
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// services 
import {servidor} from '../../Services/server.jsx'

function BodyCards({user}) {

    const [cantidadSolicitud,setCantidadSolicitud] = useState([])
    const [cantidadEstablecimiento,setCantidadEstablecimiento] = useState([])
    const [filtercantidadSolicitud,setFilterCantidadSolicitud] = useState([])
    const [filtercantidadEstablecimiento,setFilterCantidadEstablecimiento] = useState([])


    const List_Cantidad_Solicitud=  () => {
        const url = `${servidor}Login/PerfilCantidadSolicitud/Table`;
        AxiosGet(url,setCantidadSolicitud)
    };
    const List_Cantidad_Establecimiento=  () => {
        const url = `${servidor}Login/PerfilCantidadEstablecimiento/Table`;
        AxiosGet(url,setCantidadEstablecimiento)
    };

    
    // FILTRAR SOLICITUD SEGUN SU EMPRESA 
    const Filter_Solicitud_Empresa = () => {

        setFilterCantidadSolicitud(
            cantidadSolicitud.filter((item) => 
                item.empresa === user.pk_empresa  // ! SOLICITUD DE EMPRESA LOGEADA
            )
        )
    }
    // FILTRAR SOLICITUD SEGUN SU EMPRESA 
    const Filter_Establecimiento_Empresa = () => {

        setFilterCantidadEstablecimiento(
            cantidadEstablecimiento.filter((item) => 
                item.empresa === user.pk_empresa   // ! ESTABLECIMIENTO DE EMPRESA LOGEADA
            )
        )
    }

    useEffect(() => {
        List_Cantidad_Solicitud();
    }, []);
    useEffect(() => {
        List_Cantidad_Establecimiento();
    }, []);
    useEffect(() => {
        Filter_Solicitud_Empresa();
    }, [cantidadSolicitud]);
    useEffect(() => {
        Filter_Establecimiento_Empresa();
    }, [cantidadEstablecimiento]);

  return (
    <>  
    
        <Box component='div' className='caja_cards' sx={{width:'100%'}}>
            <Grid container spacing={2}>
                {/* CANTIDAD SOLICITUDES */} 
                <Grid item xs={12} md={6}>
                    <Box component='div' sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',p:'1rem',bgcolor:'#ffffff',boxShadow:'2px 2px 30px #23456759',borderRadius:'6px',borderRight:'3px solid #eab150',margin:'1rem 0',marginRight:'1rem'}}>
                        <Box component='div'>
                        <Typography variant="p" sx={{fontSize:20}} >Solicitudes </Typography>
                        <Box component='div' sx={{p:'1rem', display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <Typography variant="p" color="initial">Cantidad: </Typography>
                            <Typography variant="p" color="primary" sx={{fontSize: 30,ml:'3rem'}}>{filtercantidadSolicitud.map((item) => item.cantidad)}</Typography>
                            {/* <Typography variant="p" color="primary" sx={{fontSize: 30,ml:'3rem'}}>{cantidadpacientes.map((item) => item.PACIENTES_REGISTRADOS)}</Typography> */}
                        </Box>
                        </Box>
                        <Box component='div' sx={{bgcolor:'#eab150',borderRadius:'50%',p:'0.3rem'}} >
                            <ContactMailIcon  sx={{ fontSize: 30, color:'#ffffffc4' }} />
                        </Box>
                    </Box>      
                </Grid>
                {/* CANTIDAD ESTABLECIMIENTO */} 
                <Grid item xs={12} md={6}>
                    <Box component='div' sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',p:'1rem',bgcolor:'#ffffff',boxShadow:'2px 2px 30px #23456759',borderRadius:'6px',borderRight:'3px solid #43d48e',margin:'1rem 0',marginRight:'1rem'}}>
                        <Box component='div'>
                        <Typography variant="p" sx={{fontSize:20}} >Establecimientos </Typography>
                        <Box component='div' sx={{p:'1rem', display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <Typography variant="p" color="initial">Cantidad: </Typography>
                            <Typography variant="p" color="primary" sx={{fontSize: 30,ml:'3rem'}}>{filtercantidadEstablecimiento.map((item) => item.cantidad)}</Typography>
                            {/* <Typography variant="p" color="primary" sx={{fontSize: 30,ml:'3rem'}}>{cantidadpacientes.map((item) => item.PACIENTES_REGISTRADOS)}</Typography> */}
                        </Box>
                        </Box>
                        <Box component='div' sx={{bgcolor:'#43d48e',borderRadius:'50%',p:'0.5rem'}} >
                            <ApartmentIcon  sx={{ fontSize: 30, color:'#ffffffc4' }} />
                        </Box>
                    </Box>      
                </Grid>
              
            </Grid>    
        </Box>
    
    </>
  )
}

export default BodyCards