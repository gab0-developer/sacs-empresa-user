import React from 'react'
import { Box, Typography} from "@mui/material";

function Footer() {
  return (
    <>
      <Box component='footer' sx={{width:'100%',height:'auto',p:'0.5rem',background:'linear-gradient(#ed1515,#ed1515)',mt:'0.5rem',borderRadius:'2px'}}>
        <Box component='div' 
            sx={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',fontSize:'12px'}}>
            <Typography variant="p" sx={{color:'#ccc'}}><strong>Servicio Autonomo de Contraloria Sanitaria</strong></Typography>
            <Typography variant="p" sx={{color:'#ccc'}}><strong>Dirección: Av. Baralt, Edificio Sur, Centro Simón Bolívar, Piso 3, Oficina 324, El Silencio, Código Postal 1010. Caracas - Venezuela.</strong></Typography>
            <Typography variant="p" sx={{color:'#ccc'}}><strong>Copyright © 2022 Servicio Autónomo de Contraloría Sanitaria. Todos los derechos reservados. G-20007772-7</strong></Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer
