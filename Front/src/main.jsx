import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Box, Container, CssBaseline } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import img from './assets/Img/Exportar_img_all'
import { ContextAutentication } from './Context/ContextAutenticacion';

// import './assets/Css/Fondo.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Box sx={{width:'100%'}}>
      <Box component='center' sx={{bgcolor:'#fff' }}>
        <img src={img.bannersacs123}  alt="" />
      </Box>
      {/* <Container maxWidth='sl' sx={{my:'1rem'}}>
      </Container> */}
        <CssBaseline>
          <ContextAutentication>
            <App />
          </ContextAutentication>
        </CssBaseline>  
    </Box>
  </React.StrictMode>,
)
