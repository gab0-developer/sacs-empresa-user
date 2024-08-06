import React from 'react'
import Rutas from './Routers/Rutas'
import { HashRouter  as Router} from 'react-router-dom'
// import { BrowserRouter  as Router} from 'react-router-dom'
// import Viewpaciente from './Components/Pacientes/Viewpaciente'


function App() {
  return (
    <>
      {/* <Viewpaciente /> */}
      <Router>
        {/* <Rutas></Rutas>  */}
        <Rutas />
      </Router>
      
    </>
  )
}

export default App