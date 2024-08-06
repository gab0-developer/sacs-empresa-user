import { useNavigate,} from 'react-router-dom'
import { Box, Button, TextField, Collapse, Alert, 
        Autocomplete, Grid, Typography, Fab  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AxiosGet, AxiosPost } from '../../Helpers/FetchAxios/FetchAxios'
import axios from "axios";

// VALIDATE EXPRESSION REGULARS (validacion exprecion regulares js)
import { expresionsRegulars,number_Expressions,referenciabancaria_Expressions } from './../../assets/JS/ExpresionRegulares';
// services 
import {servidor} from '../../Services/server.jsx'
// css jsx
const styleCampos ={
  width:'100%'
}

function BodyDetails({onClose,rif_empresa,nrosolicitud,nombre_solicitud,estatus_solicitud,
                        fecha_solicitud, caducidad, monto_bs, tableData ,FilterSolicitudes
}) {

  const [listbancos, setListbancos] = useState()
  const [referenciaBancaria,setReferenciaBancaria] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [fechaPagoRealizado ,setFechaPagoRealizado] = useState("")
  const [selectBanco,setSelectBanco] = useState([])
  const [diseabledRegistrarPago,setDiseabledRegistrarPago] = useState(true) // desabilitar btn registrar pago

  const navigate = useNavigate();


  // OBTENER LISTADO DE DATOS

  const List_Tipos_Bancos = () =>{
    const url = `${servidor}Empresa/ListBancos/Table`
    AxiosGet(url,setListbancos)
  }
  useEffect(() =>{
    List_Tipos_Bancos()
    // ListSolicitud_PendientePago()
  },[])




  const RegistrarPagoSolicitud = async () =>{

    const datapagosolicitud = {
      rif_empresa : rif_empresa,
      nrosolicitud : nrosolicitud,
      tipoBanco : selectBanco.pk_banco,
      monto_bs : monto_bs,
      referenciaBancaria : referenciaBancaria.dato,
      fechaPagoRealizado : fechaPagoRealizado,
    }

    const url =`${servidor}Empresa/SolicitudPago/InsertCredencialesPagoSolicitud`
    AxiosPost(url,datapagosolicitud,`Solicitud: ${nombre_solicitud} Nro: ${nrosolicitud}`,null)
    
    // ejecutar funcion para actualizar la data de la tabla de la solicitudes pendiente por pago
    tableData()
    FilterSolicitudes()
  
  }
  const HandelSubmitPago = (e) =>{
    e.preventDefault()
    RegistrarPagoSolicitud()
    tableData()
    FilterSolicitudes()
    onClose()
    navigate('/Solicitudes');
  }


// ------------------------------------
  // *--------------VALIDATE CAMPO EXPRESIONES REGULARES ----------------------
  // ------------------------------------
  
  const validateReferenciaBancaaria = (value) => {
    referenciabancaria_Expressions(value,setReferenciaBancaria);
    
  }


// ------------------------------------
  // *--------------VALIDATE CAMPO - DESACTIVAR BTN SUBMIT----------------------
  // ------------------------------------

  // VALIDATE DE PRODUCTOS EXPORTADOS

  let select_banco = document.getElementById('select_banco')
  let fechapago_realizado = document.getElementById('fechapagorealizado')
  useEffect(() => {
     // VALIDATE "FORMA DE LOS PRODUCTOS"
      

     if(
      !expresionsRegulars.numberRegex.test(referenciaBancaria.dato) || referenciaBancaria.dato === null || referenciaBancaria.dato === undefined ||
       selectBanco.length == 0 || selectBanco == '' || selectBanco == null || select_banco.value.length === 0|| select_banco.value.length === null  ||     
       fechaPagoRealizado.length == 0 || fechaPagoRealizado == '' || fechaPagoRealizado == null || fechapago_realizado.value.length === 0     
       
       ){
       setDiseabledRegistrarPago(true)
     
     }
     else{
       setDiseabledRegistrarPago(false)
     }
  },[referenciaBancaria,selectBanco,fechaPagoRealizado])

  return (
    <>
        <Box component='form' className='container_details' onSubmit={HandelSubmitPago}
        >
          {/* sx={{minHeight:'auto',maxHeight:'500px',overflow:'auto'}} para el formulario */}
          <Box   className='caja_details' >
            <Box sx={{my:'5px'}}>
              <Typography variant="p" color="primary">Datos de su solicitud:</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3.5}>
                <TextField fullWidth
                    id="rifempresa"
                    label="Número de RIF"
                    type='text'
                    defaultValue={rif_empresa}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="primary" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth
                    id="nrosolicitud"
                    label="Nro Solicitud"
                    type='text'
                    defaultValue={nrosolicitud}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="primary" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth
                    id="montosolicitud"
                    label="monto de Solicitud"
                    type='text'
                    defaultValue={`${monto_bs}Bs`}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="warning" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField sx={styleCampos}
                  id="nombresolicitudempresa"
                  label="Nombre de Solicitud"
                  multiline
                  minRows={5}
                  maxRows={10}
                  defaultValue={nombre_solicitud}
                  InputProps={{
                    readOnly: true,
                  }}
                  color="primary" 
                  focused
                  variant="filled"
                  />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField sx={styleCampos}
                  id="estatuslicitud"
                  label="Estado de la Solicitud"
                  multiline
                  minRows={5}
                  maxRows={10}
                  defaultValue={estatus_solicitud}
                  InputProps={{
                    readOnly: true,
                  }}
                  color="error" 
                  focused
                  variant="filled"
                  />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth
                    id="fechasolicitud"
                    label="Solicitud creada"
                    type='text'
                    defaultValue={fecha_solicitud}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="warning" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth
                    id="vencimientosolicitud"
                    label="Vencimiento de la Solicitud"
                    type='text'
                    defaultValue={caducidad}
                    InputProps={{
                        readOnly: true,
                    }}
                    color="warning" 
                    focused
                    variant="filled"
                        
                    />
              </Grid>

              
            </Grid>

            {/* ********************************** */}
            {/* ***** INGRESAR CREDENCIALES DEL PAGO REALIZADO DE LA SOLICITUD */}
            {/* ********************************** */}
            
            <Box sx={{my:'5px',mt:'1rem'}}>
              <Typography variant="p" color={{color: "#ff1744"}}>Credenciales de pago:</Typography>
            </Box>
            <Grid container spacing={2}>

              <Grid item xs={12} md={8}  sm={6}>
                <Autocomplete fullWidth
                  id="select_banco" 
                  options={listbancos }
                  onChange={(e,newValue) => {
                      setSelectBanco({
                          pk_banco: newValue ? newValue.pk_banco : null,
                          nombre_banco: newValue ? newValue.nombre_banco : null
                      })
                  }}
                  getOptionLabel={(option) => option.nombre_banco}
                  renderInput={(params) => <TextField {...params} label="Seleciconar Banco" variant="outlined" />}
                />
              </Grid> 
              <Grid item xs={12} md={4} >
                <TextField fullWidth
                    id="fechapagorealizado"
                    label="Fecha del pago realizado"
                    type="date"
                    value={fechaPagoRealizado }
                    onChange={(e) => setFechaPagoRealizado(e.target.value)}
                    focused
                />
              </Grid>
              <Grid item xs={12} md={12}>
                        <TextField fullWidth
                          sx={{width:'100%',}}
                          id="referenciabancaria"
                          label="Referencia Bancaria"
                          type="number"
                          placeholder="00000000000..."
                          value={referenciaBancaria.dato}
                          onChange={(e) => validateReferenciaBancaaria(e.target.value)}
                          error={referenciaBancaria.error}
                          helperText ={referenciaBancaria.message}
                          color={referenciaBancaria.color}
                          focused={referenciaBancaria.fucosed}
                          InputProps={{
                            disableTabs: true,
                            tabIndex: -1
                          }}
                        />
                      </Grid>
            </Grid>

          </Box>


          <Box 
                    sx={{mt:2,float:'right'}}
                >
                <Button type="submit" variant="contained" color="success" sx={{mr:2}} disabled={diseabledRegistrarPago}>
                    Registrar pago
                </Button>
                <Button variant="contained" color="error" onClick={onClose}>
                    Cerrar
                </Button>
          </Box>
        </Box>
    </>
  )
}

export default BodyDetails