import React from 'react'
import BodyRenovar from './BodyRenovar'
import { Box} from '@mui/material'

// sidebar barra de navegacion
import Sidebar from '../../Routers/Sidebar.jsx';

function ViewRenovar({user}) {


   // letra inicial del usuario logeado
   const InicialUser = user.usuario.substr(0 ,1)
  return (
    <>
      <Sidebar
            inicialusario={InicialUser}
            usuario={user.usuario}
        />
      
      <Box component='div'>
        <BodyRenovar user={user} />
      </Box>
    </>
  )
}

export default ViewRenovar
