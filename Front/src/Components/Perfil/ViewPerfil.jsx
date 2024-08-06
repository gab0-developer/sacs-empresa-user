import React from 'react'
import BodyPerfil from './BodyPerfil'

// sidebar barra de navegacion
import Sidebar from '../../Routers/Sidebar.jsx';

function ViewPerfil({user}) {

   // letra inicial del usuario logeado
   const InicialUser = user.usuario.substr(0 ,1)

  return (
    <>
      <Sidebar
        inicialusario={InicialUser}
        usuario={user.usuario}
      />

      <BodyPerfil user={user} />
    </>
  )
}

export default ViewPerfil