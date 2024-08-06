import React, { useState } from 'react'
import { Box,TextField,Button,Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { servidor_funcionario_models } from "../../Services/server.jsx";


function Bodycard({title,image,textbtn,link,routerdom}) {

  // const [disabledEnlace,setDisabledEnlace]=  useState(true)

  return (
    <>
        <Box component='div'>
          <Box clasclassName='container_card' 
              sx={{width:'100%',margin:'auto'}}
            >
            <Box component='div' clasclassName='card'
                sx={{width:'100%',height:'350px',borderRadius:'7px',
                background:'linear-gradient(#ed1515d6,#e16223d6)',boxShadow:'12px 12px 18px  #ccc',overflow:'hidden'}}
              >
              <Box component='div' className='container_content' 
                  sx={{width:'100%',height:'100%',pt:'1rem', 
                      display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}
                >
                <Box sx={{width:'70%',height:'70%' }}>
                  <img src={image} alt=""  width='100%' height='100%' />
                </Box>
                <Box>
                  <Typography variant="p" sx={{color:'#fff', textAlign: "center",my:'1rem' }}><strong>{title}</strong></Typography>
                </Box>
                <Box component='div' sx={{width:'100%'}}>
                  {routerdom ?(
                      <Link to={link} className="link_portalweb">
                        <Button variant="contained" color="primary" sx={{width:'100%'}} >
                          {textbtn}
                        </Button>
                      </Link>
                    ) :(
                      <Box >
                        <a href={servidor_funcionario_models} target="_blank" rel="noopener noreferrer">
                          <Button variant="contained" color="error" sx={{width:'100%'}}>
                            {textbtn}
                          </Button>
                        </a>
                      </Box>

                    )
                  }
                  
                </Box>
              </Box>
            </Box>
          
          </Box>
        </Box>
    </>
  )
}

export default Bodycard
