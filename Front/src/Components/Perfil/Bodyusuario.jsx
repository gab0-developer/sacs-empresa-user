import { Box, Typography,Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AxiosGet} from '../../Helpers/FetchAxios/FetchAxios'
// icon material ui
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// services 
import {servidor} from '../../Services/server.jsx'


function Bodyusuario({user}) {

    const [PerfilEmpresausuario,setPerfilEmpresausuario] = useState([])
    const [filterPerfilEmpresa,setFilterPerfilEmpresa] = useState([])
    const [filterUnValorEmpresa,setFilterUnValorEmpresa] = useState([])
    const [filterEmpresa,setFilterEmpresa] = useState([])



    const List_Perfil_Empresa=  () => {
        const url = `${servidor}Login/ListPerfilEmpresaUser/Table`;
        AxiosGet(url,setPerfilEmpresausuario)
    };

    // FILTRAR PERFIL  SEGUN SU EMPRESA 
    const Filter_Perfil_Empresa = () => {

        setFilterPerfilEmpresa(
            PerfilEmpresausuario.filter((item) => 
                item.rif_empresa == user.pk_empresa  // ! SOLICITUD DE EMPRESA LOGEADA
            )
        )
    }
    // FILTRAR PERFIL  SEGUN SU EMPRESA 
    const Filter_unsolo_detalle_Empresa = () => {

        setFilterUnValorEmpresa(
            filterPerfilEmpresa.find((item) => 
                item.rif_empresa === user.pk_empresa  // ! filtrar un solo valor para detalles detalles de la empresa si hay repeticion de empresa
            )
        )
    }

    useEffect(() => {
        List_Perfil_Empresa();
    }, []);
    useEffect(() => {
        Filter_Perfil_Empresa();
    }, [PerfilEmpresausuario]);
    useEffect(() => {
        Filter_unsolo_detalle_Empresa();
    }, [filterPerfilEmpresa]);
    // useEffect(() => {
    //     setFilterEmpresa(filterUnValorEmpresa);
    // }, [filterUnValorEmpresa]);

    

  return (
    <>


{/* sx={{zIndex:'-200',backgroundImage:'linear-gradient(111.4deg, rgb(221, 49, 49) 0.4%, rgb(255, 90, 8) 150.2%)',filter:'blur(5px)'}} */}
        <Box component='div' className='perfil_usuario' sx={{width:'100%',borderRadius:'10px',boxShadow:'2px 2px 30px #23456759',p:'1rem'}}>
            <Box className='perfil' sx={{width:'100%'}}>
                <Box component='center' className='container_perfil' >
                    {/* <center> */}
                    <Box sx={{zIndex:'400'}}>
                        <PersonSharpIcon  sx={{fontSize:'20px',color:'orange',boxShadow:'2px 2px 10px #152a646b',border:'5px solid #fff',my:'0.5rem',p:'0.5rem', borderRadius:'50%',width:'20%', height:'30%' }} />
                        <Box component='div'>
                            <Typography variant="p" sx={{fontSize:18,color:'#fff'}}><strong>RIF: {user.pk_empresa}</strong></Typography>
                        </Box>
                    </Box>
                    {/* </center> */}
                </Box>
            </Box>
            <Box component='div' className='container_details_perfil'>

                <Grid container spacing={2} sx={{width:'100%'}}>
                    <Grid item xs={12} md={4} sm={6}>
                    
                        <Box  component='div' className='pérfil' sx={{my:'0.5rem'}}>
                            <Typography variant="p" color="error" sx={{display:'flex',alignItems:'center'}}><PersonOutlineOutlinedIcon />Perfil: </Typography>
                        </Box>
                        <Box component='div' >
                            <Typography variant="p" color="initial"><strong>Nombre de Empresa:</strong> {filterPerfilEmpresa.map((item) => item.nombre_empresa.toLowerCase())}</Typography> <br />
                            <Typography variant="p" color="initial"><strong>Tipo de Empresa:</strong> {filterPerfilEmpresa.map((item) => item.tipo_empresa.toLowerCase())}</Typography><br />
                        </Box>      
                    
                    </Grid>        
                    <Grid item xs={12} md={4} sm={6}>
                    
                        <Box  component='div' className='pérfil' sx={{my:'0.5rem'}}>
                            <Typography variant="p" color="error" sx={{display:'flex',alignItems:'center'}}><LocationOnOutlinedIcon />Ubicación </Typography>
                        </Box>
                        <Box component='div' >
                            <Typography variant="p" color="initial"><strong>Estado:</strong> {filterPerfilEmpresa.map((item) => item.estado_empresa.toLowerCase())}</Typography> <br />
                            <Typography variant="p" color="initial"><strong>Municipio:</strong> {filterPerfilEmpresa.map((item) => item.municipio_empresa.toLowerCase())}</Typography><br />
                            <Typography variant="p" color="initial"><strong>Parroquia:</strong> {filterPerfilEmpresa.map((item) => item.parroquia_empresa.toLowerCase())}</Typography><br />
                            <Typography variant="p" color="initial"><strong>Avenidad:</strong> {filterPerfilEmpresa.map((item) => item.avenida.toLowerCase())}</Typography><br />
                        </Box>     
                    
                    </Grid>        
                    <Grid item xs={12} md={4} sm={6}>
                    
                        <Box  component='div' className='pérfil' sx={{my:'0.5rem'}}>
                            <Typography variant="p" color="error" sx={{display:'flex',alignItems:'center'}}><DraftsOutlinedIcon />Contactos</Typography>
                        </Box>
                        <Box component='div' >
                            <Typography variant="p" color="initial"><strong>Teléfono Local:</strong> {filterPerfilEmpresa.map((item) => item.telefono_local.toLowerCase())}</Typography> <br />
                            <Typography variant="p" color="initial"><strong>Teléfono Movil:</strong> {filterPerfilEmpresa.map((item) => item.telefono_local.toLowerCase())}</Typography> <br />
                            <Typography variant="p" color="initial"><strong>Correo Principal:</strong> {filterPerfilEmpresa.map((item) => item.correo_principal.toLowerCase())}</Typography><br />
                            <Typography variant="p" color="initial"><strong>Correo Segundario:</strong> {filterPerfilEmpresa.map((item) => item.correo_segundario.toLowerCase())}</Typography><br />
                        </Box>     
                    
                    </Grid>        
                
                </Grid>
            </Box>
        </Box>
    </>
  )
}

export default Bodyusuario