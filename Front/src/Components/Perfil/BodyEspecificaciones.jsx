import React, { useEffect, useState } from 'react'
import { AxiosGet } from '../../Helpers/FetchAxios/FetchAxios'

// services 
import {servidor} from '../../Services/server.jsx'

// icon material ui
import { Box, Button, TextField, InputLabel, Grid, FormControl, Typography,
    IconButton ,InputAdornment , FormHelperText, OutlinedInput
  } from '@mui/material'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
const styleCampos ={
    width:'100%',
    mx:'0.5rem'
}


function BodyEspecificaciones({user}) {

    const [PerfilEmpresausuario,setPerfilEmpresausuario] = useState([])
    const [PropietarioEmpresausuario,setPropietarioEmpresausuario] = useState([])
    const [filterPerfilEmpresa,setFilterPerfilEmpresa] = useState([])
    const [filterPropietarioEmpresa,setFilterPropietarioEmpresa] = useState([]) //para filtrar solo una mepresa si esta repetida por dos propietarios 



    const List_Perfil_Empresa=  () => {
        const url = `${servidor}Login/ListPerfilEmpresaUser/Table`;
        AxiosGet(url,setPerfilEmpresausuario)
    };
    const List_Proiopietario_Empresa=  () => {
        const url = `${servidor}Login/ListPerfilPropietarioEmpresa/Table`;
        AxiosGet(url,setPropietarioEmpresausuario)
    };

    // FILTRAR PERFIL  SEGUN SU EMPRESA 
    const Filter_Perfil_Empresa = () => {

        setFilterPerfilEmpresa(
            PerfilEmpresausuario.filter((item) => 
                item.rif_empresa === user.pk_empresa  // ! datos de perfil de empresa logeada
            )
        )
    }
    // FILTRAR una sola empresa repetida 
    const Filter_propietario_Empresa = () => {

        setFilterPropietarioEmpresa(
            PropietarioEmpresausuario.filter((item) => 
                item.rif_empresa === user.pk_empresa  // ! datos de propietarios de empresa logeada
            )
        )
    }

    useEffect(() => {
        List_Perfil_Empresa();
    }, []);
    useEffect(() => {
        List_Proiopietario_Empresa();
    }, []);
    useEffect(() => {
        Filter_Perfil_Empresa();
    }, [PerfilEmpresausuario]);
    useEffect(() => {
        Filter_propietario_Empresa();
    }, [PropietarioEmpresausuario]);

   

  return (
    <>

        <Box component='div' className='container_especificaicones_perfil' sx={{width:'100%',p:'0.5rem'}}>
            <Box>  
                <Typography variant="h6" color="primary">Datos de la Empresa:</Typography>
            </Box>
            <Box component='div' sx={{display:'flex'}} >
                
                <Grid container spacing={2} sx={{width:'100%'}}>
                                        
                    <Grid item xs={12} md={6}>
                        
                        <Box component='div' sx={{bgcolor:'#fff' , p:'1rem',width:'100%',borderRadius:'10px', boxShadow:'2px 2px 30px #23456759'}}>
                            <Box sx={{mb:'0.5rem'}}>
                                <Typography variant="p" color="primary">propietario(s): </Typography>
                            </Box>
                            {/* propietario de mepresa */}
                            <Grid container spacing={2} sx={{width:'100%'}}>
                                {/* <Box component='div' className='propietario_perfil'sx={{my:'0.5rem',display:'flex'}}> */}
                                    
                                    {filterPropietarioEmpresa.map((item) => (
                                        
                                        <Grid item xs={12} md={12}>
                            
                                            <TextField sx={styleCampos}
                                                id="propietarioperfil"
                                                label="Propietario"
                                                type="text"
                                                defaultValue={item.propietario}
                                                InputProps={{
                                                readOnly: true,
                                                }}
                                                color="success" focused
                                                // variant="filled"
                                            />  
                            
                                        </Grid>
                                    

                                    ))}
                                {/* </Box> */}
                            </Grid>
                        </Box>
                                            
                        
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component='div' sx={{bgcolor:'#fff' , p:'1rem',width:'100%',borderRadius:'10px', boxShadow:'2px 2px 30px #23456759'}}>
                            <Box sx={{mb:'0.5rem'}}>
                                <Typography variant="p" color="primary">Representante Legal:</Typography>
                            </Box>
                            {/* propietario de mepresa */}
                            <Grid container spacing={2} sx={{width:'100%'}}>
                                
                                        
                                {/* <Box component='div' className='propietario_perfil'sx={{my:'0.5rem',display:'flex'}}> */}
                                <Grid item xs={12} md={12}>
                            
                                    <TextField sx={styleCampos}
                                        id="propietarioperfil"
                                        label="Propietario"
                                        type="text"
                                        value={filterPerfilEmpresa.map((item) => item.representante_legal)}
                                        InputProps={{
                                        readOnly: true,
                                        }}
                                        color="success" focused
                                        // variant="filled"
                                    />  
                                </Grid>

                                    {/* <p>{filterPerfilEmpresa.map((item) => item.representante_legal)}</p> */}
                                {/* </Box> */}
                                            
                                    


                            </Grid>
                        </Box>
                    </Grid>


                </Grid>
                

            </Box>

            <Box component='div' sx={{display:'flex', mt:'0.5rem'}} >

                <Grid container spacing={2} sx={{width:'100%'}}>
                        
                    <Grid item xs={12} md={6}>
                                   
                        <Box component='div' sx={{bgcolor:'#fff' , p:'1rem',width:'100%',borderRadius:'10px', boxShadow:'2px 2px 30px #23456759'}}>
                            <Box sx={{mb:'0.5rem'}}>
                                <Typography variant="p" color="primary">Regente:</Typography>
                            </Box>
                            {/* propietario de mepresa */}
                            <Grid container spacing={2} sx={{width:'100%'}}>
                                
                                {/* <Box component='div' className='propietario_perfil'sx={{my:'0.5rem',display:'flex'}}> */}
                                <Grid item xs={12} md={12}>
                                                        
                                    <TextField sx={styleCampos}
                                        id="regenteperfil"
                                        label="Regente"
                                        type="text"
                                        value={filterPerfilEmpresa.map((item) => item.regente)}
                                        InputProps={{
                                        readOnly: true,
                                        }}
                                        color="success" focused
                                        // variant="filled"
                                    />  
                                    
                                </Grid>
                                {/* <p>{filterPerfilEmpresa.map((item) => item.representante_legal)}</p> */}
                                {/* </Box> */}
                                
                            </Grid>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md={6}>
                                   
                        <Box component='div' sx={{bgcolor:'#fff' , p:'1rem',width:'100%',borderRadius:'10px', boxShadow:'2px 2px 30px #23456759'}}>
                            <Box sx={{mb:'0.5rem'}}>
                                <Typography variant="p" color="primary">Poder:</Typography>
                            </Box>
                            {/* propietario de mepresa */}
                            <Grid container spacing={2} sx={{width:'100%'}}>
                                
                                {/* <Box component='div' className='propietario_perfil'sx={{my:'0.5rem',display:'flex'}}> */}
                                <Grid item xs={12} md={12}>
                                                        
                                    <TextField sx={styleCampos}
                                        id="Poderperfil"
                                        label="Poder"
                                        type="text"
                                        value={filterPerfilEmpresa.map((item) => item.poder)}
                                        InputProps={{
                                        readOnly: true,
                                        }}
                                        color="success" focused
                                        // variant="filled"
                                    />    
                                    
                                </Grid>
                                {/* <p>{filterPerfilEmpresa.map((item) => item.representante_legal)}</p> */}
                                {/* </Box> */}
                                
                            </Grid>
                        </Box>
                        
                    </Grid>
                           
                </Grid>


                

            </Box>
        </Box>
    </>
  )
}

export default BodyEspecificaciones