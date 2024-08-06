import React from 'react'
import { Box,Alert,Button,Typography, Grid } from "@mui/material";
import Bodycard from './Bodycard';
import img from '../../assets/Img/Exportar_img_all'

function Bodywebportal() {
  return (
    <>
      <Box component='div' 
          sx={{width: '100%',
              //  boxShadow:'10px 26px 300px -31px rgba(237,9,9,1)'
              }}
          >
          <Box component='center' sx={{mb:'0.5rem'}}>
            <Alert sx={{textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',background: 'linear-gradient(to right bottom, #ed1515d6, #ed1515d6)'}}>
              <strong>Bienvenido!! Como sugerencia se le informa hacer su registro desde un computador para mayor comodida e interactividad</strong>.
            </Alert>
          </Box>
          <Box component='div' sx={{mt:'2.5rem'}}>
            <Grid container spacing={2}

                sx={{width: '100%',display: 'flex',justifyContent: 'space-around'}}
              >

              <Grid item xs={12} md={3} sm={6}>
                <Bodycard 
                  title='USUARIOS EMPRESAS'
                  image={img.userEmpresa}
                  textbtn='Iniciar Usuario'
                  routerdom={true}
                  link='/Login'
                  />    
              </Grid>
              <Grid item xs={12} md={3} sm={6}>
                <Bodycard 
                  title='USUARIOS FUNCIONARIOS'
                  image={img.userFuncionario}
                  textbtn='Iniciar Funcionario'
                  routerdom={false}
                />    
              </Grid>
            </Grid>
          </Box>
          
        
      </Box>
    </>
  )
}

export default Bodywebportal
