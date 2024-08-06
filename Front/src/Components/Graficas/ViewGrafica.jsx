import React from "react";
import BodyAnual from "./BodyAnual";
import BodyMensual from './BodyMensual'

import Sidebar from '../../Routers/Sidebar.jsx';


function ViewGrafica({ user }) {
  // letra inicial del usuario logeado
  const InicialUser = user.usuario.substr(0 ,1)

  return (
    <>

      <Sidebar
        inicialusario={InicialUser}
        usuario={user.usuario}
      />

      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <BodyAnual user={user} />
        <BodyMensual user={user} />
      </Box>
    </>
  );
}

export default ViewGrafica;
