import React from 'react'
import Bodywebportal from './Bodywebportal'
import { Box} from "@mui/material";
import Footer from './Footer';

function ViewWebPortal() {
  return (
    <>
      <Box component='div' sx={{mt:'2rem',width:'100%',minHeight:'90vh',display:'flex',flexDirection:'column'}}>
        <Box >
          <Bodywebportal />
        </Box>
        <Box sx={{marginTop:'auto'}}>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default ViewWebPortal
