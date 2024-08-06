import { Box, Typography } from '@mui/material'
import React from 'react'

// css
import '../../assets/Css/PerfilLogin.css'
import img from '../../assets/Img/Exportar_img_all'

function BodyMembretePerfil({user}) {
  return (
    <>
        <Box component='div' className='membrete_empresa' sx={{width:'100%', borderRadius:'2rem'}}>
            <Box component='div' className='container_logo_membrete' sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} >
                <img src={img.logoSACS2} alt="logoSACS2" className='logo_membrete' />
                {/* <Typography variant="h6" sx={{color:'#fa7617'}} ><strong>Servicio Autonómo Contraloria sanitaria</strong></Typography> */}
            </Box>
            <Box component='div' className='name_empresa_membrete' sx={{textAlign:'center',my:'0.5rem'}}>
                <Typography variant="h6" className='text_gradient_membrete' sx={{fontSize: 50}} >{user.nombre_empresa}</Typography>
            </Box>
        </Box>
    </>
  )
}

export default BodyMembretePerfil