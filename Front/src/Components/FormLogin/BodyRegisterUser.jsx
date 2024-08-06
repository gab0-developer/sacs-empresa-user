import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// ------------
import { useEffect, useState } from "react";
import { AxiosPost, AxiosGet } from "../../Helpers/FetchAxios/FetchAxios.jsx";
import axios from "axios";
import { Box, Button, TextField, Select,InputLabel, MenuItem, Alert, Stack, Collapse, Autocomplete, Grid, 
  Typography, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl,
  IconButton ,InputAdornment , FormHelperText, OutlinedInput } from '@mui/material'
  // icon material 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// css
import  './FormLogin.css'
import '../../assets/Css/FormStep.css'
// services
import {servidor} from '../../Services/server.jsx';
// js
import { nextformstep,beforeformstep } from '../../assets/JS/FormStep'
import {expresionsRegulars,Password_Expression,Rif_Expression,Texto_Expression,
        Tlf_First_Expression,Tlf_Second_Expression,Email_First_Expression,Email_Second_Expression,Text_number_Expressions,
        number_Expressions,MaxText_number_Expression,LimiteDe_Text_Number_Expression,Cedula_Expression} from '../../assets/JS/ExpresionRegulares.js'
// helpers
import PadStartCiudadano from '../../Helpers/Ciudadano/PadStartCiudadano'
import BodyPaginationStep from '../PaginacionStep/BodyPaginationStep.jsx';
// iconos
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SnippetFolderOutlinedIcon from '@mui/icons-material/SnippetFolderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const styleCampos = {
  width: "100%",
};

const btnactive = {
  color:'#E20000',

}
const btninactiveactive = {
  color:'#000',

}
const cuadroactive = {
  right: '0',
  transform: 'translate(0%)',
  transition: 'all 0.5s ease' ,
}

const none_ubicacion_prop_second = {
  display:'none'
}

function BodyRegisterUser() {

  // redirir a login una vez enviado el formulairo.
  const navigate = useNavigate();
  
  const [activeStepPagination, setActiveStepPagination] = useState(0);


  // hook listados de api de php
  const [lisTipEmpresa,setLisTipEmpresa] = useState([])
  const [lisEstado,setLisEstado] = useState([])
  const [lisMunicipio,setLisMunicipio] = useState([])
  const [lisParroquia,setLisParroquia] = useState([])
  const [listAreasEmpresa,setListAreasEmpresa] = useState([])
  const [listActividadEmpresa,setListActividadEmpresa] = useState([])
  const [listActivAreaEmpresa,setListActivAreaEmpresa] = useState([])
  const [listRegMercantilEmpresa,setListRegMercantilEmpresa] = useState([])
  const [listEstatus, setListEstatus] = useState([]);

  // HOOK UBICACION DE DATOS GENERALES
  const [listMunicipioEstado,setListMunicipioEstado] = useState([])
  const [listParroquiaMunicipio,setListParroquiaMunicipio] = useState([])
  const [listMunicipioEstadoPropietario,setListMunicipioEstadoPropietario] = useState([])
  const [listParroquiaMunicipioPropietario,setListParroquiaMunicipioPropietario] = useState([])
  const [listMunicipioEstadoSecondPropietario,setListMunicipioEstadoSecondPropietario] = useState([])
  const [listParroquiaMunicipioSecondPropietario,setListParroquiaMunicipioSecondPropietario] = useState([])
  const [listMunicipioEstadoRegente,setListMunicipioEstadoRegente] = useState([])
  const [listParroquiaMunicipioRegente,setListParroquiaMunicipioRegente] = useState([])
  const [listMunicipioEstadoPatente,setListMunicipioEstadoPatente] = useState([])

  // DATOS DE EMPRESA A REGISTRAR
  const [rifEmpresa, setRifEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [nameEmpresa, setNameEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [selectTipEmpresa,setSelectTipEmpresa] = useState([])
  const [selectAreaEmpresa, setSelectAreaEmpresa] = useState([])
  const [SelectAreaActivEmpresa, setSelectAreaActivEmpresa] = useState([])
  const [selectEstado, setSelectEstado] = useState([])
  const [selectMunicipio,setSelectMunicipio] = useState([])
  const [selectParroquia,setSelectParroquia] = useState([])
  const [tlfFirstEmpresa, setTlfFirstEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [tlfSecondEmpresa, setTlfSecondEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailFirstEmpresa, setEmailFirstEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailsecondempresa, setemailsecondempresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [ZonaEstablecimiento , setZonaEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [RutasEstablecimiento , setRutasEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [EspacioEstablecimiento , setEspacioEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [NivelEstablecimiento , setNivelEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [CodigoPostalEstablecimiento , setCodigoPostalEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [ReferenciaEstablecimiento , setReferenciaEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [diseabledNextEmpresa,setDiseabledNextEmpresa] = useState(true)
  const [diseabledNextUbicationEmpresa,setDiseabledNextUbicationEmpresa] = useState(true)
  // registro mercantil de empresa
  const [SelectRegMercantilEmpresa,setSelectRegMercantilEmpresa] = useState([])
  const [regMercantilEmpresa ,setRegMercantilEmpresa ] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [circunscripcionMercantilEmpresa,setcircunscripcionMercantilEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [tomoMercantilEmpresa,setTomoMercantilEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [numeroMercantilEmpresa,setNumeroMercantilEmpresa] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [fechaProtocolizacionMercantilEmpresa ,setFechaProtocolizacionMercantilEmpresa] = useState([])
  
  // patente de empresa
  const [SelectDocumentoPatente,setSelectDocumentoPatente] = useState("")
  const [NumeroPatente ,setNumeroPatente ] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [ActividadPatente,setActividadPatente] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [FechaVencimientoPatente,setFechaVencimientoPatente] = useState("")
  const [FechaOtorgacionPatente,setFechaOtorgacionPatente] = useState("")
  const [EstadoPatente ,setEstadoPatente] = useState([])
  const [MunicipioPatente ,setMunicipioPatente] = useState([])
  const [diseabledNexTMercantilPatente,setDiseabledNexTMercantilPatente] = useState(true)

  // HOOK DATOS DE PODER DE EMPRESA
  const [poder,setPoder] = useState({})
  const [cedulaPoder,setCedulaPoder] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectnacPoder,setSelectNacPoder] = useState('')
  const [TomoPoder,setTomoPoder] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [NumeroPoder,setNumeroPoder] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectEstatus,setSelectEstatus] = useState([])
  const [diseabledBuscarPoder,setDiseabledBuscarPoder] = useState(true)
  const [diseabledNextPoder,setDiseabledNextPoder] = useState(true)
  
  // HOOK DATOS DE PROPIETARIO DE EMPRESA
  const [propietario,setPropietario] = useState({})
  const [cedulaPropietario,setCedulaPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectnacPropietario,setSelectNacPropietario] = useState('')
  const [cargoPropietario,setCargoPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectEstadoPropietario,setSelectEstadoPropietario] = useState([])
  const [selectMunicipioPropietario,setSelectMunicipioPropietario] = useState([])
  const [selectParroquiaPropietario,setSelectParroquiaPropietario] = useState([])
  // const [direccionEmpresaPropietario, setEDireccionEmpresaPropietario] = useState("");
  const [tlfFirstEmpresaPropietario, setTlfFirstEmpresaPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [tlfSecondEmpresaPropietario, setTlfSecondEmpresaPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailFirstEmpresaPropietario, setEmailFirstEmpresaPropietario]= useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailsecondempresaPropietario, setemailsecondempresaPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [diseabledBuscarPropietario1,setDiseabledBuscarPropietario1] = useState(true)
  const [diseabledNextPropietario1,setDiseabledNextPropietario1] = useState(true)
  const [diseabledNextcontactoPropietario1,setDiseabledNextcontactoPropietario1] = useState(true)
  // HOOK DATOS DE SEGUNDO PROPIETARIO DE EMPRESA
  const [secondpropietario,setSecondPropietario] = useState({})
  const [cedulaSecondPropietario,setCedulaSecondPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectnacSecondPropietario,setSelectNacSecondPropietario] = useState('')
  const [cargoSecondPropietario,setCargoSecondPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectEstadoSecondPropietario,setSelectEstadoSecondPropietario] = useState([])
  const [selectMunicipioSecondPropietario,setSelectMunicipioSecondPropietario] = useState([])
  const [selectParroquiaSecondPropietario,setSelectParroquiaSecondPropietario] = useState([])
  // const [direccionEmpresaSecondPropietario, setEDireccionEmpresaSecondPropietario] = useState("");
  const [tlfFirstEmpresaSecondPropietario, setTlfFirstEmpresaSecondPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [tlfSecondEmpresaSecondPropietario, setTlfSecondEmpresaSecondPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailFirstEmpresaSecondPropietario, setEmailFirstEmpresaSecondPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailsecondempresaSecondPropietario, setemailsecondempresaSecondPropietario] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [diseabledBuscarPropietario2,setDiseabledBuscarPropietario2] = useState(true)
  const [diseabledNextPropietario2,setDiseabledNextPropietario2] = useState(true)
  const [diseabledNextcontactoPropietario2,setDiseabledNextcontactoPropietario2] = useState(true)

  // HOOK DATOS DE REGENTE DE EMPRESA
  const [regente,setRegente] = useState({})
  const [cedulaRegente,setCedulaRegente] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectnacRegente,setSelectNacRegente] = useState('')
  const [profesionRegente,setProfesionRegente] = useState('')
  const [nroMatriculaRegente,setnroMatriculaRegente] = useState('')
  const [selectEstadoRegente,setSelectEstadoRegente] = useState([])
  const [selectMunicipioRegente,setSelectMunicipioRegente] = useState([])
  const [selectParroquiaRegente,setSelectParroquiaRegente] = useState([])
  const [direccionEmpresaRegente, setEDireccionEmpresaRegente] = useState("");
  const [tlfFirstEmpresaRegente, setTlfFirstEmpresaRegente] = useState("");
  const [tlfSecondEmpresaRegente, setTlfSecondEmpresaRegente] = useState("");
  const [emailFirstEmpresaRegente, setEmailFirstEmpresaRegente] = useState("");
  const [emailsecondempresaRegente, setemailsecondempresaRegente] = useState("");
  const [diseabledBuscarRegente,setDiseabledBuscarRegente] = useState(true)
  
  // HOOK DATOS DE REPRESENTANTE LEGAL
  const [representanteLegal,setRepresentanteLegal] = useState({})
  const [cedulaRepreLegal,setCedulaRepreLegal] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [selectnacRepreLegal,setSelectNacRepreLegal] = useState('')
  const [diseabledBuscarLegal,setDiseabledBuscarLegal] = useState(true)

  
  // HOOK DE USUARIO A
  // contraseña de usuario
  const [password,setPassword] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [password2,setPassword2] = useState("");
  const [diseabledNextContrasena,setDiseabledNextContrasena] = useState(true)
  //  ocultar y mostrar password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // hokk preguntas de seguridad
  const [firstPregunta,setFirstPregunta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [secondPregunta,setSecondPregunta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [terceraPregunta,setTerceraPregunta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [cuartaPregunta,setCuartaPregunta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [firstRespuesta,setFirstRespuesta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [secondRespuesta,setSecondRespuesta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [terceraRespuesta,setTerceraRespuesta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [cuartaRespuesta,setCuartaRespuesta] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [diseabledPreguntasSeguridad,setDiseabledPreguntasSeguridad] = useState(true)

  // hook text escriturq
  const [titFfrm, setTitForm] = useState("");
  // animacion de filtrado

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openSeconPropietario, setOpenSeconPropietario] = useState(false);
  const [openSeconPropietario2, setOpenSeconPropietario2] = useState(false);
  const [openRepreLegal, setOpenRepreLegal] = useState(false);
  const [openRepreLegal2, setOpenRepreLegal2] = useState(false);
  const [openRepreRegente, setOpenRepreRegente] = useState(false);
  const [openRepreRegente2, setOpenRepreRegente2] = useState(false);
  const [openppoder, setOpenppoder] = useState(false);
  const [openppoder2, setOpenppoder2] = useState(false);
  // cuando no hay segundo propietairo
  const [openoption, setOpenOption] = useState(false);
  const [TextStepPag, setTextStepPag] = useState(["Información de su empresa.",
          "Ubicación de su empresa.",
          "Datos mercantil y patente.",
          "Poder de la empresa.",
          "Primer propietario de la empresa.",
          "Contacto del primer propietario.",
          "Segundo propietario de la empresa.",
          "Contacto del segundo propietario.", 
          "Regente de la empresa.",
          "Representante legal.",
          "Ingresar su contraseña.",
          "Ingresar preguntas de seguridad."]);
  const [IconStepPag, setIconStepPag] = useState({
    1 :<ApartmentOutlinedIcon />, 
    2: <LocationOnOutlinedIcon />, 
    3:<SnippetFolderOutlinedIcon />,
    4:<AccountCircleOutlinedIcon />,
    5:<PersonOutlineOutlinedIcon />,
    6:<PhoneInTalkOutlinedIcon />,
    7:<PersonOutlineOutlinedIcon />,
    8:<PhoneInTalkOutlinedIcon />,
    9:<AccountCircleOutlinedIcon />,
    10:<AccountCircleOutlinedIcon />,
    11:<HttpsOutlinedIcon />,
    12:<QuestionAnswerOutlinedIcon />,
  });
  const [openoptionSecondPropietario, setOpenOptionSecondPropietario] = useState(false);

  
    // boton de activacion de inicio_sesion - registro
    const [btn1, setbtn1] = useState(null);
    const [btn2, setbtn2] = useState(btnactive);
    const [cuadro, setCuadro] = useState(null);
    const [Ubicacionseconpropietario, setUbicacionseconpropietario] = useState(null);

    // boton para desactivacion de formulario de ubicaicon de segundo propietario
  
    const handleInicioSesion = () => {
      setbtn1(btnactive);
      setbtn2(btninactiveactive);
      setCuadro(cuadroactive);
    };
    const handleRegister = () => {
      setbtn1(btninactiveactive);
      setbtn2(btnactive);
      setCuadro(null);
        
    };

    // ---------------------------------------------------
    // -------------------eventos vaciar campos------------------------------------------------
    const vaciarestado_empresa = document.getElementById('estado_empresa')
    const vaciarmunicipio_empresa = document.getElementById('municipio_empresa')
    const vaciarparroquia_empresa = document.getElementById('parroquia_empresa')
    const vaciaractividadarea_empresa = document.getElementById('actividadareaempresa')
    const vaciarregmercantil_empresa = document.getElementById('regmercantilempresa')
    // vaciar estado municipio y parroquia de PROPIETARIO
    const vaciarmunicipio_empresapatente = document.getElementById('municipio_empresa_patente')
    // vaciar estado municipio y parroquia de PROPIETARIO
    const vaciarmunicipio_empresapropietario = document.getElementById('municipio_empresa_propietario')
    const vaciarparroquia_empresapropietario = document.getElementById('parroquia_empresa_propietario')
    // vaciar estado municipio y parroquia de SEGUNDO PROPIETARIO
    const vaciarmunicipio_empresasecondpropietario = document.getElementById('select_municipio_empresa_secondpropietario')
    const vaciarparroquia_empresasecondpropietario = document.getElementById('select_parroquia_empresa_secondpropietario')
    // vaciar estado municipio y parroquia de REGENTE
    const vaciarmunicipio_empresaregente = document.getElementById('municipio_empresa_regente')
    const vaciarparroquia_empresaregente = document.getElementById('parroquia_empresa_regente')

    
    const vaciar_municipio_empresa = () =>{
      // campos a vaciar 
      vaciarmunicipio_empresa.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarmunicipio_empresa.dispatchEvent(event);
      // vaciar los hook de estados
      // setSelectAlmacen([])
      // setSelectPisoAlmacen([])
    }
    const vaciar_parroquia_empresa = () =>{
      // campos a vaciar 
      vaciarparroquia_empresa.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarparroquia_empresa.dispatchEvent(event);
      
    }
    const vaciar_areaactiv_empresa = () =>{
      // campos a vaciar 
      vaciaractividadarea_empresa.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciaractividadarea_empresa.dispatchEvent(event);
      
    }
    const vaciar_regmercantil_empresa = () =>{
      // campos a vaciar 
      vaciarregmercantil_empresa.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarregmercantil_empresa.dispatchEvent(event);
      
    }
    
    // vaciar campos estado municipio y parroquia de PROPIETARIO
    const vaciar_municipio_empresa_patente = () =>{
      // campos a vaciar 
      vaciarmunicipio_empresapatente.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarmunicipio_empresapatente.dispatchEvent(event);
      
    }
    // vaciar campos estado municipio y parroquia de PROPIETARIO
    const vaciar_municipio_empresa_propietario = () =>{
      // campos a vaciar 
      vaciarmunicipio_empresapropietario.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarmunicipio_empresapropietario.dispatchEvent(event);
      
    }
    const vaciar_parroquia_empresa_propietario = () =>{
      // campos a vaciar 
      vaciarparroquia_empresapropietario.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarparroquia_empresapropietario.dispatchEvent(event);
      
    }
    // vaciar campos estado municipio y parroquia de SEGUNDO PROPIETARIO
    const vaciar_municipio_empresa_secondpropietario = () =>{
      // campos a vaciar 
      vaciarmunicipio_empresasecondpropietario.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarmunicipio_empresasecondpropietario.dispatchEvent(event);
      
    }
    const vaciar_parroquia_empresa_secondpropietario = () =>{
      // campos a vaciar 
      vaciarparroquia_empresasecondpropietario.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarparroquia_empresasecondpropietario.dispatchEvent(event);
      
    }
    // vaciar campos estado municipio y parroquia de REGENTE
    const vaciar_municipio_empresa_regente = () =>{
      // campos a vaciar 
      vaciarmunicipio_empresaregente.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarmunicipio_empresaregente.dispatchEvent(event);
      
    }
    const vaciar_parroquia_empresa_regente = () =>{
      // campos a vaciar 
      vaciarparroquia_empresaregente.value = null
      // Disparar el evento de cambio en el campo Autocomplete
      const event = new Event('change', { bubbles: true });
      vaciarparroquia_empresaregente.dispatchEvent(event);
      
    }
  


  


  // -------------------------
  // -----------LISTADOS DEL REGISTRO DE EMPRESA--------------

  const ListTipEmpresa = () =>{
    const url =`${servidor}Empresa/ListTipoEmpresa/Table`
    AxiosGet(url,setLisTipEmpresa)
  }
  const ListEstado = () =>{
    const url =`${servidor}Ciudadanos/ListEstado/Table`
    AxiosGet(url,setLisEstado)
  }
  const ListMunicipio = () =>{
    const url =`${servidor}Ciudadanos/ListMunicipio/Table`
    AxiosGet(url,setLisMunicipio)
  }
  const ListParroquia = () =>{
    const url =`${servidor}Ciudadanos/ListParroquia/Table`
    AxiosGet(url,setLisParroquia)
  }
  const ListAreaEmpresa = () =>{
    const url =`${servidor}Empresa/ListAreasEmpresa/Table`
    AxiosGet(url,setListAreasEmpresa)
  }
  const ListActivAreaEmpresa = () =>{
    const url =`${servidor}Empresa/ListActivArea/Table`
    AxiosGet(url,setListActividadEmpresa)
  }
  const ListRegMercantilEmpresa = () =>{
    const url =`${servidor}Empresa/ListRegMercantil/Table`
    AxiosGet(url,setListRegMercantilEmpresa)
  }
  const List_Estatus=  () => {
    const url = `${servidor}Empresa/ListEstatus/Table`;
    AxiosGet(url,setListEstatus)
  };
  useEffect(() =>{
      ListTipEmpresa()
      ListEstado()
      ListMunicipio()
      ListParroquia()
      ListAreaEmpresa()
      ListActivAreaEmpresa()
      ListRegMercantilEmpresa()
      List_Estatus()
  },[])

  // ubicacion deempresa

  const municipioestadoEmpresa = () => {
    setListMunicipioEstado(lisMunicipio.filter((item) => item.fk_estado == selectEstado.pk_estado))
  }
  const parroquiamunicipioEmpresa = () => {
    setListParroquiaMunicipio(lisParroquia.filter((item) => item.fk_municipio == selectMunicipio.pk_municipio))
  }
  const ActividadAreaEmpresa = () => {
    setListActivAreaEmpresa(listActividadEmpresa.filter((item) => item.fk_area == selectAreaEmpresa.pk_area))
  }
  
  // ubicacion patente
  const municipioestadoEmpresaPatente = () => {
    setListMunicipioEstadoPatente(lisMunicipio.filter((item) => item.fk_estado == EstadoPatente.pk_estado))
  }
  // ubicacion propietairo
  const municipioestadoEmpresaPropietario = () => {
    setListMunicipioEstadoPropietario(lisMunicipio.filter((item) => item.fk_estado == selectEstadoPropietario.pk_estado))
  }
  const parroquiamunicipioEmpresaPropietario = () => {
    setListParroquiaMunicipioPropietario(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioPropietario.pk_municipio))
  }
  // ubicacion segundo  propietairo
  const municipioestadoEmpresaSecondPropietario = () => {
    setListMunicipioEstadoSecondPropietario(lisMunicipio.filter((item) => item.fk_estado == selectEstadoSecondPropietario.pk_estado))
  }
  const parroquiamunicipioEmpresaSecondPropietario = () => {
    setListParroquiaMunicipioSecondPropietario(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioSecondPropietario.pk_municipio))
  }
  // ubicacion regente
  const municipioestadoEmpresaRegente = () => {
    setListMunicipioEstadoRegente(lisMunicipio.filter((item) => item.fk_estado == selectEstadoRegente.pk_estado))
  }
  const parroquiamunicipioEmpresaRegente = () => {
    setListParroquiaMunicipioRegente(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioRegente.pk_municipio))
  }
  
  
  useEffect(() =>{
    municipioestadoEmpresa()
  },[selectEstado])
  useEffect(() =>{
    parroquiamunicipioEmpresa()
  },[selectMunicipio])
  useEffect(() =>{
    ActividadAreaEmpresa()
  },[selectAreaEmpresa])
  useEffect(() =>{
    municipioestadoEmpresaPatente()
  },[EstadoPatente])
  useEffect(() =>{
    municipioestadoEmpresaPropietario()
  },[selectEstadoPropietario])
  useEffect(() =>{
    parroquiamunicipioEmpresaPropietario()
  },[selectMunicipioPropietario])
  useEffect(() =>{
    municipioestadoEmpresaSecondPropietario()
  },[selectEstadoSecondPropietario])
  useEffect(() =>{
    parroquiamunicipioEmpresaSecondPropietario()
  },[selectMunicipioSecondPropietario])
  useEffect(() =>{
    municipioestadoEmpresaRegente()
  },[selectEstadoRegente])
  useEffect(() =>{
    parroquiamunicipioEmpresaRegente()
  },[selectMunicipioRegente])

  // registro mercantil -- limpiar campo al seleccionar no 

  const NoSecondpropietario = () =>{
    // vaciar_regmercantil_empresa();
    setSecondPropietario('')
    // secondpropietario.pk_ciudadano = ''
    setOpenOption(false);
    setTextStepPag([
      "Información de su empresa.",
        "Ubicación su la empresa.",
        "Datos mercantil y patente.",
        "Poder de la empresa.",
        "Primer propietario de la empresa.",
        "Contacto del primer propietario.",
        "No tiene Segundo Propietario",
        "Regente de la empresa.",
        "Representante legal.",
        "Ingresar su contraseña.",
          "Ingresar preguntas de seguridad.",
    ])
    setIconStepPag({
      1 :<ApartmentOutlinedIcon />, 
      2: <LocationOnOutlinedIcon />, 
      3:<SnippetFolderOutlinedIcon />,
      4:<AccountCircleOutlinedIcon />,
      5:<PersonOutlineOutlinedIcon />,
      6:<PhoneInTalkOutlinedIcon />,
      7:<PersonOutlineOutlinedIcon />,
      // 8:<PhoneInTalkOutlinedIcon />,
      8:<AccountCircleOutlinedIcon />,
      9:<AccountCircleOutlinedIcon />,
      10:<HttpsOutlinedIcon />,
      11:<QuestionAnswerOutlinedIcon />,
    })
    setOpenOptionSecondPropietario(true);
    setUbicacionseconpropietario(none_ubicacion_prop_second)
    // SelectRegMercantilEmpresa([])
    // SelectRegMercantilEmpresa(null)
    
  }

  // BUCAR PODER DE EMPRESA
  const datos_poder = async () =>{

    let datacedula = `${selectnacPoder + PadStartCiudadano(cedulaPoder.dato )}`
    const cedulaciudadano = {
        cedulanac : datacedula
    }

    const url = `${servidor}Ciudadanos/Ciudadano/Table`
  
    const resp = await axios.post(url,JSON.stringify(cedulaciudadano))
    const resp_data = await resp.data

    // console.log('resp_data',resp_data)
    // console.log(cedulaciudadano)
    if (resp_data && resp_data.length > 0 ) {
        setPoder({
            pk_ciudadano :resp_data[0].pk_ciudadano,
            nombre_completo :resp_data[0].nombre_completo,
            apellido_completo :resp_data[0].apellido_completo,
            sexo :resp_data[0].sexo,
            fecha_nacimiento :resp_data[0].fecha_nacimiento,
            // fecha_nacimiento :resp_data[0].fecha_nacimiento.split(/[-/]/).reverse().join("/"),
            


        })
        setOpenppoder(!openppoder);
        setOpenppoder2(false);
        // console.log(resp_data)
        
    }else{
      setOpenppoder(false);
      setOpenppoder2(!openppoder2);
        return false
        
    }
    // tableData()
  }
  // BUCAR PROPIETARIO DE EMPRESA
  const datos_propietario = async () =>{

    let datacedula = `${selectnacPropietario + PadStartCiudadano(cedulaPropietario.dato)}`
    const cedulaciudadano = {
        cedulanac : datacedula
    }

    const url = `${servidor}Ciudadanos/Ciudadano/Table`
  
    const resp = await axios.post(url,JSON.stringify(cedulaciudadano))
    const resp_data = await resp.data

    // console.log('resp_data',resp_data)
    // console.log(cedulaciudadano)
    if (resp_data && resp_data.length > 0 ) {
        setPropietario({
            pk_ciudadano :resp_data[0].pk_ciudadano,
            nombre_completo :resp_data[0].nombre_completo,
            apellido_completo :resp_data[0].apellido_completo,
            sexo :resp_data[0].sexo,
            fecha_nacimiento :resp_data[0].fecha_nacimiento,
            // fecha_nacimiento :resp_data[0].fecha_nacimiento.split(/[-/]/).reverse().join("/"),
            


        })
        setOpen(!open);
        setOpen2(false);
        // console.log(resp_data)
        
    }else{
        setOpen(false);
        setOpen2(!open2);
        return false
        
    }
    // tableData()
  }
  // BUCAR SEGUNDO PROPIETARIO DE EMPRESA
  const datos_segundo_propietario = async () =>{

    let datacedula = `${selectnacSecondPropietario  + PadStartCiudadano(cedulaSecondPropietario.dato)}`
    const cedulaciudadano = {
        cedulanac : datacedula
    }

    const url = `${servidor}Ciudadanos/Ciudadano/Table`
  
    const resp = await axios.post(url,JSON.stringify(cedulaciudadano))
    const resp_data = await resp.data

    // console.log('resp_data',resp_data)
    // console.log(cedulaciudadano)
    if (resp_data && resp_data.length > 0 ) {
        setSecondPropietario({
            pk_ciudadano :resp_data[0].pk_ciudadano,
            nombre_completo :resp_data[0].nombre_completo,
            apellido_completo :resp_data[0].apellido_completo,
            sexo :resp_data[0].sexo,
            fecha_nacimiento :resp_data[0].fecha_nacimiento,
            // fecha_nacimiento :resp_data[0].fecha_nacimiento.split(/[-/]/).reverse().join("/"),
            


        })
        setOpenSeconPropietario(!openSeconPropietario);
        setOpenSeconPropietario2(false);
        // console.log(resp_data)
        
    }else{
      setOpenSeconPropietario(false);
      setOpenSeconPropietario2(!openSeconPropietario2);
        return false
        
    }
    // tableData()
  }
  // BUCAR REGENTE DE EMPRESA
  const datos_regente = async () =>{
    
    
    let datacedula = `${selectnacRegente + PadStartCiudadano(cedulaRegente.dato)}`
    const cedulaciudadano = {
        cedulanac : datacedula
    }

    const url = `${servidor}Ciudadanos/Regentes/Table`
  
    const resp = await axios.post(url,JSON.stringify(cedulaciudadano))
    const resp_data = await resp.data

    // console.log('resp_data regentes:',resp_data)
    // console.log(cedulaciudadano)
    if (resp_data && resp_data.length > 0 ) {
      setRegente({
            fk_ciudadano :resp_data[0].fk_ciudadano,
            nombre_completo :resp_data[0].nombre_completo,
            apellido_completo :resp_data[0].apellido_completo,
            institucion_formadora :resp_data[0].institucion_formadora,
            profesion :resp_data[0].profesion,
            fecha_grado :resp_data[0].fecha_grado,
            licencia :resp_data[0].licencia,
            tomo_registro :resp_data[0].tomo_registro,
            folio_registro :resp_data[0].folio_registro,
            // fecha_nacimiento :resp_data[0].fecha_nacimiento.split(/[-/]/).reverse().join("/"),
            


        })
        setOpenRepreRegente(!openRepreRegente);
        setOpenRepreRegente2(false);
        // console.log(resp_data)
        

        
    }else{
      setOpenRepreRegente(false);
        setOpenRepreRegente2(!openRepreRegente2);
        return false
        
    }
    // tableData()
}
  // BUCAR REPRESENTANTE LEGAL DE EMPRESA
  const datos_RepreLegal = async () =>{
    
    let datacedula = `${selectnacRepreLegal + PadStartCiudadano(cedulaRepreLegal.dato)}`
    const cedulaciudadano = {
        cedulanac : datacedula
    }

    const url = `${servidor}Ciudadanos/Ciudadano/Table`
  
    const resp = await axios.post(url,JSON.stringify(cedulaciudadano))
    const resp_data = await resp.data

    // console.log('resp_data',resp_data)
    // console.log(cedulaciudadano)
    if (resp_data && resp_data.length > 0 ) {
      setRepresentanteLegal({
            pk_ciudadano :resp_data[0].pk_ciudadano,
            nombre_completo :resp_data[0].nombre_completo,
            apellido_completo :resp_data[0].apellido_completo,
            sexo :resp_data[0].sexo,
            fecha_nacimiento :resp_data[0].fecha_nacimiento,
            // fecha_nacimiento :resp_data[0].fecha_nacimiento.split(/[-/]/).reverse().join("/"),
            


        })
        setOpenRepreLegal(!openRepreLegal);
        setOpenRepreLegal2(false);
        // console.log(resp_data)
        
    }else{
      setOpenRepreLegal(false);
      setOpenRepreLegal2(!openRepreLegal2);
      return false
        
    }
    // tableData()
}

  // 
  const HandleSubmitPoder = (e) =>{
    e.preventDefault()
    datos_poder()
  
  }
  const HandleSubmitPropietario = (e) =>{
    e.preventDefault()
    datos_propietario()
  
  }
  const HandleSubmitSecondPropietario = (e) =>{
    e.preventDefault()
    datos_segundo_propietario()
  
  }
  const HandleSubmitRegente = (e) =>{
    e.preventDefault()
    datos_regente()
  
  }
  const HandleSubmitRepreLegal = (e) =>{
    e.preventDefault()
    datos_RepreLegal()
  
  }
  const ActiveIconStep = () =>{
     
    setTextStepPag([
      "Información de su empresa.",
        "Ubicación su la empresa.",
        "Datos mercantil y patente.",
        "Poder de la empresa.",
        "Primer propietario de la empresa.",
        "Contacto del primer propietario.",
        "Segundo propietario de la empresa.",
        "Contacto del segundo propietario.", 
        "Regente de la empresa.",
        "Representante legal.",
        "Ingresar su contraseña.",
        "Ingresar preguntas de seguridad."
    ])
    setIconStepPag({
      1 :<ApartmentOutlinedIcon />, 
      2: <LocationOnOutlinedIcon />, 
      3:<SnippetFolderOutlinedIcon />,
      4:<AccountCircleOutlinedIcon />,
      5:<PersonOutlineOutlinedIcon />,
      6:<PhoneInTalkOutlinedIcon />,
      7:<PersonOutlineOutlinedIcon />,
      8:<PhoneInTalkOutlinedIcon />,
      9:<AccountCircleOutlinedIcon />,
      10:<AccountCircleOutlinedIcon />,
      11:<HttpsOutlinedIcon />,
      12:<QuestionAnswerOutlinedIcon />,
    })
  }

   

  //  --------------------------------
  // ------------REGISTRAR EMPRESA-----------
  // ------------------------------

  const RegisterEmpresa = async () =>{
      
      const dataEmpresa = {

        rifEmpresa: rifEmpresa.dato,
        nombreempresa: nameEmpresa.dato,
        tipempresa: selectTipEmpresa.pk_tip_empresa,
        tlfempresa:tlfFirstEmpresa.dato,
        tlfsecondempresa : tlfSecondEmpresa.dato,
        emailempresa : emailFirstEmpresa.dato,
        emailsecondempresa : emailsecondempresa.dato,
        parroquiaempresa : selectParroquia.pk_parroquia,
        urbanizacionempresa: ZonaEstablecimiento.dato,
        avenidadempresa: RutasEstablecimiento.dato,
        edificioempresa: EspacioEstablecimiento.dato,
        pisolocalempresa: NivelEstablecimiento.dato,
        codigopostalempresa: CodigoPostalEstablecimiento.dato,
        referenciaempresa:  ReferenciaEstablecimiento.dato,
        // registro mercantil
        tipregmercantil : SelectRegMercantilEmpresa.pk_tip_reg_merc,
        regmercantil  :regMercantilEmpresa.dato ,
        circunscripcionmercantil  : circunscripcionMercantilEmpresa.dato,
        tomomercantil  :tomoMercantilEmpresa.dato ,
        numeromercantil  :numeroMercantilEmpresa.dato ,
        fechaprotocolizacionmercantil :fechaProtocolizacionMercantilEmpresa ,
        // patente de empresa 
        documentpatente: SelectDocumentoPatente ,
        numeropatente: NumeroPatente.dato ,
        actividadpatente: ActividadPatente.dato ,
        fechavencimientopatente: FechaVencimientoPatente ,
        fechaotorgacionpatente: FechaOtorgacionPatente ,
        estadopatente: EstadoPatente.pk_estado ,
        municpiopatente: MunicipioPatente.pk_municipio ,

        // primer propietario
        cedulaprimerpropietairo :propietario.pk_ciudadano,
        cargoprimerpropietario: cargoPropietario.dato,
        parroquiaprimerpropietario : selectParroquiaPropietario.pk_parroquia,
        tlfprimerpropietario : tlfFirstEmpresaPropietario.dato,
        tlfdosprimerpropietario : tlfSecondEmpresaPropietario.dato,
        emailprimerpropietario : emailFirstEmpresaPropietario.dato,
        emaildosprimerpropietario : emailsecondempresaPropietario.dato,
        
        // segundo propietario
        cedulasecondpropietario:secondpropietario.pk_ciudadano ,
        cargosecondpropietario: cargoSecondPropietario.dato,
        parroquiasecondpropietario: selectParroquiaSecondPropietario.pk_parroquia,
        tlfsecondpropietario: tlfFirstEmpresaSecondPropietario.dato ,
        tlfdossecondpropietario: tlfSecondEmpresaSecondPropietario.dato ,
        emailsecondropietario: emailFirstEmpresaSecondPropietario.dato ,
        emaildossecondropietario: emailsecondempresaSecondPropietario.dato ,

        // poder de empresa
        cedulapoder: poder.pk_ciudadano,
        estatuspoder: selectEstatus.pk_estatus,
        numeropoder: NumeroPoder.dato,
        tomopoder: TomoPoder.dato,
        
        cedularegente :regente.fk_ciudadano,
        cedulareplegal: representanteLegal.pk_ciudadano,
        contrasena : password.dato, 
        firstpregunta : firstPregunta.dato,
        firstrespuesta : firstRespuesta.dato,
        secondpregunta : secondPregunta.dato,
        secondrespuesta : secondRespuesta.dato,
        tercerapregunta : terceraPregunta.dato,
        tercerarespuesta : terceraRespuesta.dato,
        cuartapregunta : cuartaPregunta.dato,
        cuartarespuesta : cuartaRespuesta.dato,
        // pk_ciudadano : ciudadano.PK_CIUDADANO,
        // pk_ciud_pariente : pariente.PK_CIUDADANO,
        

    }
    
    if (dataEmpresa.cedulasecondpropietario == undefined) {

      const dataRegisterEmpresa = {

        rifEmpresa: rifEmpresa.dato,
        nombreempresa: nameEmpresa.dato,
        tipempresa: selectTipEmpresa.pk_tip_empresa,
        tlfempresa:tlfFirstEmpresa.dato,
        tlfsecondempresa : tlfSecondEmpresa.dato,
        emailempresa : emailFirstEmpresa.dato,
        emailsecondempresa : emailsecondempresa.dato,
        parroquiaempresa : selectParroquia.pk_parroquia,
        urbanizacionempresa: ZonaEstablecimiento.dato,
        avenidadempresa: RutasEstablecimiento.dato,
        edificioempresa: EspacioEstablecimiento.dato,
        pisolocalempresa: NivelEstablecimiento.dato,
        codigopostalempresa: CodigoPostalEstablecimiento.dato,
        referenciaempresa:  ReferenciaEstablecimiento.dato,
        // registro mercantil
        tipregmercantil : SelectRegMercantilEmpresa.pk_tip_reg_merc,
        regmercantil  :regMercantilEmpresa.dato ,
        circunscripcionmercantil  : circunscripcionMercantilEmpresa.dato,
        tomomercantil  :tomoMercantilEmpresa.dato ,
        numeromercantil  :numeroMercantilEmpresa.dato ,
        fechaprotocolizacionmercantil :fechaProtocolizacionMercantilEmpresa ,
        // patente de empresa 
        documentpatente: SelectDocumentoPatente ,
        numeropatente: NumeroPatente.dato ,
        actividadpatente: ActividadPatente.dato ,
        fechavencimientopatente: FechaVencimientoPatente ,
        fechaotorgacionpatente: FechaOtorgacionPatente ,
        estadopatente: EstadoPatente.pk_estado ,
        municpiopatente: MunicipioPatente.pk_municipio ,
        // primer propietario
        cedulaprimerpropietairo :propietario.pk_ciudadano,
        cargoprimerpropietario: cargoPropietario.dato,
        parroquiaprimerpropietario : selectParroquiaPropietario.pk_parroquia,
        tlfprimerpropietario : tlfFirstEmpresaPropietario.dato,
        tlfdosprimerpropietario : tlfSecondEmpresaPropietario.dato,
        emailprimerpropietario : emailFirstEmpresaPropietario.dato,
        emaildosprimerpropietario : emailsecondempresaPropietario.dato,
        
        // segundo propietario
        cedulasecondpropietario: null ,
        cargosecondpropietario: null,
        parroquiasecondpropietario: null,
        tlfsecondpropietario: null ,
        tlfdossecondpropietario: null ,
        emailsecondropietario: null ,
        emaildossecondropietario: null ,

        // poder de empresa
        cedulapoder: poder.pk_ciudadano,
        estatuspoder: selectEstatus.pk_estatus,
        numeropoder: NumeroPoder.dato,
        tomopoder: TomoPoder.dato,
        
        cedularegente :regente.fk_ciudadano,
        cedulareplegal: representanteLegal.pk_ciudadano,
        contrasena : password.dato,
        firstpregunta : firstPregunta.dato,
        firstrespuesta : firstRespuesta.dato,
        secondpregunta : secondPregunta.dato,
        secondrespuesta : secondRespuesta.dato,
        tercerapregunta : terceraPregunta.dato,
        tercerarespuesta : terceraRespuesta.dato,
        cuartapregunta : cuartaPregunta.dato,
        cuartarespuesta : cuartaRespuesta.dato,
        // pk_ciudadano : ciudadano.PK_CIUDADANO,
        // pk_ciud_pariente : pariente.PK_CIUDADANO,
        

      }
      console.log('dataRegisterEmpresa sin second propietario : ',dataRegisterEmpresa)
      const url =`${servidor}Empresa/Empresa/RegistrarEmpresa`
      AxiosPost(url,dataRegisterEmpresa,`Empresa: ${nameEmpresa.dato} con RIF: ${rifEmpresa.dato} - Usuario: ${emailFirstEmpresa.dato}`,null)
    }else{
      console.log('dataEmpresa con dos propietario: ',dataEmpresa)
      const url =`${servidor}Empresa/Empresa/RegistrarEmpresa`
      AxiosPost(url,dataEmpresa,`Empresa: ${nameEmpresa.dato} con RIF: ${rifEmpresa.dato} - Usuario: ${emailFirstEmpresa.dato}`,null)
    }
    
    // const url =`${servidor}empresa/empresa/insert`
    // const resp = await axios.post(url,JSON.stringify(dataEmpresa))
    // const resp_data = await resp.data
    // console.log('respuesta-data',resp_data)

   
  }

  const vaciar_login_register = () =>{
    
    // vaciar setRifEmpresa

    setRifEmpresa("");
    setNameEmpresa("");
    setSelectTipEmpresa([]);
    setSelectAreaEmpresa([]);
    setSelectAreaActivEmpresa([]);
    setSelectEstado([]);
    setSelectMunicipio([]);
    setSelectParroquia([]);
    setTlfFirstEmpresa("");
    setTlfSecondEmpresa("");
    setEmailFirstEmpresa("");
    setemailsecondempresa("");
    setDiseabledNextEmpresa(true);

    // vaciar mercantil

    setSelectRegMercantilEmpresa([]);
    setRegMercantilEmpresa({});
    setcircunscripcionMercantilEmpresa({});
    setTomoMercantilEmpresa({});
    setNumeroMercantilEmpresa({});
    setFechaProtocolizacionMercantilEmpresa([]);

    // patente de empresa
      setSelectDocumentoPatente("")
      setNumeroPatente ({})
      setActividadPatente("")
      setFechaVencimientoPatente("")
      setFechaOtorgacionPatente("")
      setEstadoPatente([])
      setMunicipioPatente([])

    // HOOK DATOS DE PROPIETARIO DE EMPRESA
    setPropietario({});
    setCedulaPropietario('');
    setSelectNacPropietario('');
    setCargoPropietario('');
    setSelectEstadoPropietario([]);
    setSelectMunicipioPropietario([]);
    setSelectParroquiaPropietario([]);
    setTlfFirstEmpresaPropietario("");
    setTlfSecondEmpresaPropietario("");
    setEmailFirstEmpresaPropietario({});
    setemailsecondempresaPropietario({});
      

    // HOOK DATOS DE SEGUNDO PROPIETARIO DE EMPRESA
      setSecondPropietario({});
      setCedulaSecondPropietario('');
      setSelectNacSecondPropietario('');
      setCargoSecondPropietario('');
      setSelectEstadoSecondPropietario([]);
      setSelectMunicipioSecondPropietario([]);
      setSelectParroquiaSecondPropietario([]);
      // setEDireccionEmpresaSecondPropietario("");
      setTlfFirstEmpresaSecondPropietario("");
      setTlfSecondEmpresaSecondPropietario("");
      setEmailFirstEmpresaSecondPropietario("");
      setemailsecondempresaSecondPropietario("");
      

    // HOOK DATOS DE REGENTE DE EMPRESA
      setCedulaRegente('')
      setSelectNacRegente('')

    // HOOK DATOS DE REPRESENTANTE LEGAL
      setRepresentanteLegal({})
      setCedulaRepreLegal('')
      setSelectNacRepreLegal('')

      // HOOK DATOS DE PODER DE EMPRESA
      setPoder({})
      setCedulaPoder('')
      setSelectNacPoder('')
      setTomoPoder('')
      setNumeroPoder('')
      setSelectEstatus([])

      // contraseña de usuario
    setPassword("");

    // hokk preguntas de seguridad
    setFirstPregunta("");
    setSecondPregunta("");
    setTerceraPregunta("");
    setCuartaPregunta("");
    setFirstRespuesta("");
    setSecondRespuesta("");
    setTerceraRespuesta("");
    setCuartaRespuesta("");
  }

  const HandleSubmitRegisterEmpresa = (e) =>{
    e.preventDefault()
    RegisterEmpresa()
    // setTimeout para redirigir después de dos segundos
    setTimeout(() => {
      navigate('/Login');
    }, 1000);
    // vaciar_login_register()

    // onClose()
  
  }

  
   
    // *---------------------------------------------------
    // * VALIDATE CAMPO EXPRESIONES REGULARES -
    // *---------------------------------------------------

    const validateRif = (value) => {
      Rif_Expression(value,setRifEmpresa)
    } 
    const validatenameEmpresa = (value) => {
      Texto_Expression(value,setNameEmpresa)
    } 
    const validatefirstTlf = (value) => {
      Tlf_First_Expression(value,setTlfFirstEmpresa,tlfSecondEmpresa.dato)
     
    } 
    const validateSecondtTlf = (value) => {
      Tlf_Second_Expression(value,setTlfSecondEmpresa,tlfFirstEmpresa.dato)
    } 

    const validateFirstEmail = (value) => {
      Email_First_Expression(value,setEmailFirstEmpresa,emailsecondempresa.dato)
    }
    const validateSecondEmail = (value) => {
      Email_Second_Expression(value,setemailsecondempresa,emailFirstEmpresa.dato)
    }
    const validateZona_empresa = (value) => {
      Text_number_Expressions(value,setZonaEstablecimiento)
    } 
    const validateAvenida_empresa = (value) => {
      Text_number_Expressions(value,setRutasEstablecimiento)
    } 
    const validateEspacio_empresa = (value) => {
      Text_number_Expressions(value,setEspacioEstablecimiento)
    } 
    const validateNivel_empresa = (value) => {
      Text_number_Expressions(value,setNivelEstablecimiento)
    } 
    const validateCodigo_empresa = (value) => {
      number_Expressions(value,setCodigoPostalEstablecimiento)
    } 
    const validateReferencia_empresa = (value) => {
      MaxText_number_Expression(value,setReferenciaEstablecimiento)
    } 
    const validateNroRegistroMercantil_empresa = (value) => {
      LimiteDe_Text_Number_Expression(value,setRegMercantilEmpresa)
    } 
    const validateCircunscripcion_empresa = (value) => {
      LimiteDe_Text_Number_Expression(value,setcircunscripcionMercantilEmpresa)
    } 
    const validateTomo_empresa = (value) => {
      LimiteDe_Text_Number_Expression(value,setTomoMercantilEmpresa)
    } 
    const validateNroMercantil_empresa = (value) => {
      LimiteDe_Text_Number_Expression(value,setNumeroMercantilEmpresa)
    } 
    const validateNroPatente_empresa = (value) => {
      LimiteDe_Text_Number_Expression(value,setNumeroPatente)
    } 
    const validateActividadPatente_empresa = (value) => {
      Text_number_Expressions(value,setActividadPatente)
    } 
    const validateCedulaPoder_empresa = (value) => {
      Cedula_Expression(value,setCedulaPoder)
    } 
    const validateTomoPoder_empresa = (value) => {
      number_Expressions(value,setTomoPoder)
    } 
    const validateNroPoder_empresa = (value) => {
      number_Expressions(value,setNumeroPoder)
    } 
    const validateCedulaPropietario_empresa = (value) => {
      Cedula_Expression(value,setCedulaPropietario)
    } 
    const validateCargoPropietario_empresa = (value) => {
      Text_number_Expressions(value,setCargoPropietario)
    } 
    const validatefirstTlf_Propietario_1 = (value) => {
      Tlf_First_Expression(value,setTlfFirstEmpresaPropietario,tlfSecondEmpresaPropietario.dato)
    } 
    const validateSecondtTlf_Propietario_1 = (value) => {
      Tlf_Second_Expression(value,setTlfSecondEmpresaPropietario,tlfFirstEmpresaPropietario.dato)
    } 
    const validateFirstEmail_Propietario_1 = (value) => {
      Email_First_Expression(value,setEmailFirstEmpresaPropietario,emailsecondempresaPropietario.dato)
    }
    const validateSecondEmail_Propietario_1 = (value) => {
      Email_Second_Expression(value,setemailsecondempresaPropietario,emailFirstEmpresaPropietario.dato)
    }
    const validateCedulaPropietario2_empresa = (value) => {
      Cedula_Expression(value,setCedulaSecondPropietario)
    } 
    const validateCargoPropietario2_empresa = (value) => {
      Text_number_Expressions(value,setCargoSecondPropietario)
    } 
    const validatefirstTlf_Propietario_2 = (value) => {
      Tlf_First_Expression(value,setTlfFirstEmpresaSecondPropietario,tlfSecondEmpresaSecondPropietario.dato)
    } 
    const validateSecondtTlf_Propietario_2 = (value) => {
      Tlf_Second_Expression(value,setTlfSecondEmpresaSecondPropietario,tlfFirstEmpresaSecondPropietario.dato)
    } 
    const validateFirstEmail_Propietario_2 = (value) => {
      Email_First_Expression(value,setEmailFirstEmpresaSecondPropietario,emailsecondempresaSecondPropietario.dato)
    }
    const validateSecondEmail_Propietario_2 = (value) => {
      Email_Second_Expression(value,setemailsecondempresaSecondPropietario,emailFirstEmpresaSecondPropietario.dato)
    }
    const validateCedulaRegente_empresa = (value) => {
      Cedula_Expression(value,setCedulaRegente)
    } 
    const validateCedulaRepresentLegal_empresa = (value) => {
      Cedula_Expression(value,setCedulaRepreLegal)
    } 
    const validatePassword_empresa = (value) => {
      Password_Expression(value,setPassword)
    }
    const validate_FisrtPregunta = (value) => {
      Text_number_Expressions(value,setFirstPregunta)
    } 
    const validate_FisrtRespuesta = (value) => {
      Text_number_Expressions(value,setFirstRespuesta)
    } 
    const validate_SecondPregunta = (value) => {
      Text_number_Expressions(value,setSecondPregunta)
    } 
    const validate_SecondRespuesta = (value) => {
      Text_number_Expressions(value,setSecondRespuesta)
    } 
    const validate_TercerPregunta = (value) => {
      Text_number_Expressions(value,setTerceraPregunta)
    } 
    const validate_TercerRespuesta = (value) => {
      Text_number_Expressions(value,setTerceraRespuesta)
    } 
    const validate_CuartaPregunta = (value) => {
      Text_number_Expressions(value,setCuartaPregunta)
    } 
    const validate_CuartaRespuesta = (value) => {
      Text_number_Expressions(value,setCuartaRespuesta)
    } 
     

 
  // *---------------------------------------------------
  // * VALIDACION DE CAMPOS VACIOS REGISTRO
  // *---------------------------------------------------

  // campos select para validar que no esten vacios estos campos

  const select_tipo_empresa = document.getElementById('select_tipo_empresa');
  const estado_empresa = document.getElementById('estado_empresa');
  const municipio_empresa = document.getElementById('municipio_empresa');
  const parroquia_empresa = document.getElementById('parroquia_empresa');

  // VALIDACION DE EMPRESA
  useEffect(() =>{
    if(
      !expresionsRegulars.rifRegex.test(rifEmpresa.dato) ||
      !expresionsRegulars.numberRegex.test(tlfFirstEmpresa.dato) || tlfFirstEmpresa.dato === null || tlfFirstEmpresa.dato === undefined || 
      !expresionsRegulars.numberRegex.test(tlfSecondEmpresa.dato) || tlfSecondEmpresa.dato === null || tlfSecondEmpresa.dato === undefined ||  
      !expresionsRegulars.emailRegex.test(emailFirstEmpresa.dato) || emailFirstEmpresa.dato === null || emailFirstEmpresa.dato === undefined ||
      !expresionsRegulars.emailRegex.test(emailsecondempresa.dato) || emailsecondempresa.dato === null || emailsecondempresa.dato === undefined ||
      selectTipEmpresa.length == 0 || selectTipEmpresa == '' || selectTipEmpresa == null || selectTipEmpresa == undefined || select_tipo_empresa.value.length === 0||
      !expresionsRegulars.textonumberRegex.test(nameEmpresa.dato) || nameEmpresa.dato === null || nameEmpresa.dato === undefined
      ){
      setDiseabledNextEmpresa(true)
    }
    else{
      setDiseabledNextEmpresa(false)
    }

    
  },[rifEmpresa,tlfFirstEmpresa,tlfSecondEmpresa,emailFirstEmpresa,emailsecondempresa,selectTipEmpresa,nameEmpresa])



  useEffect(() =>{
    if(
        selectEstado.length == 0 || selectEstado == '' || selectEstado == null || estado_empresa.value.length === 0|| estado_empresa.value.length === null||
        selectMunicipio.length == 0 || selectMunicipio == '' || selectMunicipio == null || municipio_empresa.value.length === 0|| municipio_empresa.value.length === null||
        selectParroquia.length == 0 || selectParroquia == '' || selectParroquia == null || parroquia_empresa.value.length === 0|| parroquia_empresa.value.length === null||
        !expresionsRegulars.textonumberRegex.test(ZonaEstablecimiento.dato) || ZonaEstablecimiento.dato === null || ZonaEstablecimiento.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(RutasEstablecimiento.dato) || RutasEstablecimiento.dato === null || RutasEstablecimiento.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(EspacioEstablecimiento.dato) || EspacioEstablecimiento.dato === null || EspacioEstablecimiento.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(NivelEstablecimiento.dato) || NivelEstablecimiento.dato === null || NivelEstablecimiento.dato === undefined ||
        !expresionsRegulars.numberRegex.test(CodigoPostalEstablecimiento.dato) || CodigoPostalEstablecimiento.dato === null || CodigoPostalEstablecimiento.dato === undefined ||
        !expresionsRegulars.maxtextonumberRegex.test(ReferenciaEstablecimiento.dato) || ReferenciaEstablecimiento.dato === null || ReferenciaEstablecimiento.dato === undefined 
      ){
      setDiseabledNextUbicationEmpresa(true)
    }else{
      setDiseabledNextUbicationEmpresa(false)
    }
  },[selectEstado,selectMunicipio,selectParroquia,ZonaEstablecimiento,RutasEstablecimiento,EspacioEstablecimiento,NivelEstablecimiento,CodigoPostalEstablecimiento,ReferenciaEstablecimiento])

    // VALIDACION MERCANTIL y patente EMPRESA

    // -----campos select para validar que no esten vacios estos campos

    const select_regmercantilempresa = document.getElementById('select_regmercantilempresa');
    const fechaprotomercantil = document.getElementById('fechaprotomercantil');
    const fechaotorgamientopatente = document.getElementById('fechaotorgamientopatente');
    const fechavenciminetopatente = document.getElementById('fechavenciminetopatente');
    //const select_documentpatente = document.getElementById('select_documentpatente');
    const estado_empresa_patente = document.getElementById('estado_empresa_patente');
    const municipio_empresa_patente = document.getElementById('municipio_empresa_patente');
    

    useEffect(() =>{
      if(SelectRegMercantilEmpresa.length == 0 || SelectRegMercantilEmpresa == '' || SelectRegMercantilEmpresa == null || select_regmercantilempresa.value.length === 0|| select_regmercantilempresa.value.length === null||
          !expresionsRegulars.textonumberRegex.test(regMercantilEmpresa.dato) || regMercantilEmpresa.dato === null || regMercantilEmpresa.dato === undefined ||
          !expresionsRegulars.textonumberRegex.test(circunscripcionMercantilEmpresa.dato) || circunscripcionMercantilEmpresa.dato === null || circunscripcionMercantilEmpresa.dato === undefined ||
          !expresionsRegulars.textonumberRegex.test(tomoMercantilEmpresa.dato) || tomoMercantilEmpresa.dato === null || tomoMercantilEmpresa.dato === undefined ||
          !expresionsRegulars.textonumberRegex.test(numeroMercantilEmpresa.dato) || numeroMercantilEmpresa.dato === null || numeroMercantilEmpresa.dato === undefined ||
          !expresionsRegulars.textonumberRegex.test(NumeroPatente.dato) || NumeroPatente.dato === null || NumeroPatente.dato === undefined ||
          !expresionsRegulars.textonumberRegex.test(ActividadPatente.dato) || ActividadPatente.dato === null || ActividadPatente.dato === undefined ||

          SelectDocumentoPatente.length == 0 || SelectDocumentoPatente == '' || SelectDocumentoPatente == null || //select_documentpatente.value.length === 0 ||
          fechaProtocolizacionMercantilEmpresa.length == 0 || fechaProtocolizacionMercantilEmpresa == '' || fechaProtocolizacionMercantilEmpresa == null || fechaprotomercantil.value.length === 0 ||
          FechaOtorgacionPatente.length == 0 || FechaOtorgacionPatente == '' || FechaOtorgacionPatente == null || fechaotorgamientopatente.value.length === 0 ||
          FechaVencimientoPatente.length == 0 || FechaVencimientoPatente == '' || FechaVencimientoPatente == null || fechavenciminetopatente.value.length === 0 ||
          
          EstadoPatente.length == 0 || EstadoPatente == '' || EstadoPatente == null || estado_empresa_patente.value.length === 0|| estado_empresa_patente.value.length === null||
          MunicipioPatente.length == 0 || MunicipioPatente == '' || MunicipioPatente == null || municipio_empresa_patente.value.length === 0|| municipio_empresa_patente.value.length === null
        ){
        setDiseabledNexTMercantilPatente(true)
      }else{
        setDiseabledNexTMercantilPatente(false)
      }
    },[SelectRegMercantilEmpresa,regMercantilEmpresa,circunscripcionMercantilEmpresa,tomoMercantilEmpresa,numeroMercantilEmpresa,fechaProtocolizacionMercantilEmpresa,
      SelectDocumentoPatente,NumeroPatente,ActividadPatente,FechaVencimientoPatente,FechaOtorgacionPatente,EstadoPatente,MunicipioPatente])

    // VALIDACION PODER EMPRESA
       // -----campos select para validar que no esten vacios estos campos
    const select_estatus_poder = document.getElementById('select_estatus_poder');

    useEffect(() =>{
      if(!expresionsRegulars.numberRegex.test(cedulaPoder.dato) || cedulaPoder.dato === null || cedulaPoder.dato === undefined ||
          selectnacPoder.length == 0 || selectnacPoder == '' || selectnacPoder == null 

        ){
        setDiseabledBuscarPoder(true)
      }else{
        setDiseabledBuscarPoder(false)
      }
    },[cedulaPoder,selectnacPoder])
    useEffect(() =>{
      if(!expresionsRegulars.numberRegex.test(TomoPoder.dato) || TomoPoder.dato === null || TomoPoder.dato === undefined ||
        !expresionsRegulars.numberRegex.test(NumeroPoder.dato) || NumeroPoder.dato === null || NumeroPoder.dato === undefined ||
          selectEstatus.length == 0 || selectEstatus == '' || selectEstatus == null || select_estatus_poder.value.length === 0|| select_estatus_poder.value.length === null
          

        ){
        setDiseabledNextPoder(true)
      }else{
        setDiseabledNextPoder(false)
      }
    },[TomoPoder,NumeroPoder,selectEstatus])
    // VALIDACION PROPIETARIO 1 EMPRESA

    const select_nac_propietario_1 = document.getElementById('select_nac_propietario_1')
    const estado_empresa_propietario = document.getElementById('estado_empresa_propietario');
    const municipio_empresa_propietario = document.getElementById('municipio_empresa_propietario');
    const parroquia_empresa_propietario = document.getElementById('parroquia_empresa_propietario');

    useEffect(() =>{
      if(!expresionsRegulars.numberRegex.test(cedulaPropietario.dato) || cedulaPropietario.dato === null || cedulaPropietario.dato === undefined || 
          selectnacPropietario.length == 0 || selectnacPropietario == '' || selectnacPropietario == null //|| select_nac_propietario_1.value.length === 0

        ){
        setDiseabledBuscarPropietario1(true)
      }else{
        setDiseabledBuscarPropietario1(false)
      }
    },[cedulaPropietario,selectnacPropietario])
    useEffect(() =>{
      if(!expresionsRegulars.textonumberRegex.test(cargoPropietario.dato) || cargoPropietario.dato === null || cargoPropietario.dato === undefined 

        ){
        setDiseabledNextPropietario1(true)
      }else{
        setDiseabledNextPropietario1(false)
      }
    },[cargoPropietario])
    useEffect(() =>{
      if(
        !expresionsRegulars.numberRegex.test(tlfFirstEmpresaPropietario.dato) || tlfFirstEmpresaPropietario.dato === null || tlfFirstEmpresaPropietario.dato === undefined ||
        !expresionsRegulars.numberRegex.test(tlfSecondEmpresaPropietario.dato) || tlfSecondEmpresaPropietario.dato === null || tlfSecondEmpresaPropietario.dato === undefined ||
        !expresionsRegulars.emailRegex.test(emailFirstEmpresaPropietario.dato) || emailFirstEmpresaPropietario.dato === null || emailFirstEmpresaPropietario.dato === undefined ||
        !expresionsRegulars.emailRegex.test(emailsecondempresaPropietario.dato) || emailsecondempresaPropietario.dato === null || emailsecondempresaPropietario.dato === undefined ||
        selectEstadoPropietario.length == 0 || selectEstadoPropietario == '' || selectEstadoPropietario == null || estado_empresa_propietario.value.length === 0|| estado_empresa_propietario.value.length === null||
        selectMunicipioPropietario.length == 0 || selectMunicipioPropietario == '' || selectMunicipioPropietario == null || municipio_empresa_propietario.value.length === 0|| municipio_empresa_propietario.value.length === null||
        selectParroquiaPropietario.length == 0 || selectParroquiaPropietario == '' || selectParroquiaPropietario == null || parroquia_empresa_propietario.value.length === 0|| parroquia_empresa_propietario.value.length === null
        
        ){
        setDiseabledNextcontactoPropietario1(true)
      }else{
        setDiseabledNextcontactoPropietario1(false)
      }
    },[selectEstadoPropietario,selectMunicipioPropietario,selectParroquiaPropietario,tlfFirstEmpresaPropietario,tlfSecondEmpresaPropietario,emailFirstEmpresaPropietario,
      emailsecondempresaPropietario])

    // VALIDACION PROPIETARIO 2 EMPRESA

    const select_estado_empresa_secondpropietario = document.getElementById('select_estado_empresa_secondpropietario');
    const select_municipio_empresa_secondpropietario = document.getElementById('select_municipio_empresa_secondpropietario');
    const select_parroquia_empresa_secondpropietario = document.getElementById('select_parroquia_empresa_secondpropietario');

    useEffect(() =>{
      if(!expresionsRegulars.numberRegex.test(cedulaSecondPropietario.dato) || cedulaSecondPropietario.dato === null || cedulaSecondPropietario.dato === undefined ||
        // cedulaSecondPropietario.length == 0 || cedulaSecondPropietario == '' || cedulaSecondPropietario == null ||
          selectnacSecondPropietario.length == 0 || selectnacSecondPropietario == '' || selectnacSecondPropietario == null

        ){
        setDiseabledBuscarPropietario2(true)
      }else{
        setDiseabledBuscarPropietario2(false)
      }
    },[cedulaSecondPropietario,selectnacSecondPropietario])
    useEffect(() =>{
      if(!expresionsRegulars.textonumberRegex.test(cargoSecondPropietario.dato) || cargoSecondPropietario.dato === null || cargoSecondPropietario.dato === undefined
        // cargoSecondPropietario.length == 0 || cargoSecondPropietario == '' || cargoSecondPropietario == null 

        ){
        setDiseabledNextPropietario2(true)
      }else{
        setDiseabledNextPropietario2(false)
      }
    },[cargoSecondPropietario])
    useEffect(() =>{
      if(!expresionsRegulars.numberRegex.test(tlfFirstEmpresaSecondPropietario.dato) || tlfFirstEmpresaSecondPropietario.dato === null || tlfFirstEmpresaSecondPropietario.dato === undefined ||
      !expresionsRegulars.numberRegex.test(tlfSecondEmpresaSecondPropietario.dato) || tlfSecondEmpresaSecondPropietario.dato === null || tlfSecondEmpresaSecondPropietario.dato === undefined ||
      !expresionsRegulars.emailRegex.test(emailFirstEmpresaSecondPropietario.dato) || emailFirstEmpresaSecondPropietario.dato === null || emailFirstEmpresaSecondPropietario.dato === undefined ||
      !expresionsRegulars.emailRegex.test(emailsecondempresaSecondPropietario.dato) || emailsecondempresaSecondPropietario.dato === null || emailsecondempresaSecondPropietario.dato === undefined ||
        
        selectEstadoSecondPropietario.length == 0 || selectEstadoSecondPropietario == '' || selectEstadoSecondPropietario == null || select_estado_empresa_secondpropietario.value.length === 0|| select_estado_empresa_secondpropietario.value.length === null||
          selectMunicipioSecondPropietario.length == 0 || selectMunicipioSecondPropietario == '' || selectMunicipioSecondPropietario == null || select_municipio_empresa_secondpropietario.value.length === 0|| select_municipio_empresa_secondpropietario.value.length === null||
          selectParroquiaSecondPropietario.length == 0 || selectParroquiaSecondPropietario == '' || selectParroquiaSecondPropietario == null || select_parroquia_empresa_secondpropietario.value.length === 0|| select_parroquia_empresa_secondpropietario.value.length === null
          // tlfFirstEmpresaSecondPropietario.length == 0 || tlfFirstEmpresaSecondPropietario == '' || tlfFirstEmpresaSecondPropietario == null ||
          // tlfSecondEmpresaSecondPropietario.length == 0 || tlfSecondEmpresaSecondPropietario == '' || tlfSecondEmpresaSecondPropietario == null ||
          // emailFirstEmpresaSecondPropietario.length == 0 || emailFirstEmpresaSecondPropietario == '' || emailFirstEmpresaSecondPropietario == null ||
          // emailsecondempresaSecondPropietario.length == 0 || emailsecondempresaSecondPropietario == '' || emailsecondempresaSecondPropietario == null

        ){
        setDiseabledNextcontactoPropietario2(true)
      }else{
        setDiseabledNextcontactoPropietario2(false)
      }
    },[selectEstadoSecondPropietario,selectMunicipioSecondPropietario,selectParroquiaSecondPropietario,tlfFirstEmpresaSecondPropietario,tlfSecondEmpresaSecondPropietario,
      emailFirstEmpresaSecondPropietario,emailsecondempresaSecondPropietario])
    
      // VALIDACION REGENTE EMPRESA
    useEffect(() =>{
      if(!expresionsRegulars.numberRegex.test(cedulaRegente.dato) || cedulaRegente.dato === null || cedulaRegente.dato === undefined ||
        // cedulaRegente.length == 0 || cedulaRegente == '' || cedulaRegente == null ||
          selectnacRegente.length == 0 || selectnacRegente == '' || selectnacRegente == null

        ){
        setDiseabledBuscarRegente(true)
      }else{
        setDiseabledBuscarRegente(false)
      }
    },[cedulaRegente,selectnacRegente])
      // VALIDACION REPRESENTANTE LEGAL EMPRESA
    useEffect(() =>{
      if(!expresionsRegulars.numberRegex.test(cedulaRepreLegal.dato) || cedulaRepreLegal.dato === null || cedulaRepreLegal.dato === undefined ||
          // cedulaRepreLegal.length == 0 || cedulaRepreLegal == '' || cedulaRepreLegal == null ||
          selectnacRepreLegal.length == 0 || selectnacRepreLegal == '' || selectnacRepreLegal == null

        ){
        setDiseabledBuscarLegal(true)
      }else{
        setDiseabledBuscarLegal(false)
      }
    },[cedulaRepreLegal,selectnacRepreLegal])
      // VALIDACION CONTRASEÑA EMPRESA
    useEffect(() =>{
      if(
        !expresionsRegulars.passwordRegex.test(password.dato) || password.dato === null || password.dato === undefined 
        // contrasena.dato === undefined || contrasena.dato === null
         ){
          setDiseabledNextContrasena(true)
        }else{
        setDiseabledNextContrasena(false)
      }
    },[password])
      // VALIDACION PREGUNTAS SEGURIDAD EMPRESA
    useEffect(() =>{
      if(
        !expresionsRegulars.textonumberRegex.test(firstPregunta.dato) || firstPregunta.dato === null || firstPregunta.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(secondPregunta.dato) || secondPregunta.dato === null || secondPregunta.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(terceraPregunta.dato) || terceraPregunta.dato === null || terceraPregunta.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(cuartaPregunta.dato) || cuartaPregunta.dato === null || cuartaPregunta.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(firstRespuesta.dato) || firstRespuesta.dato === null || firstRespuesta.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(secondRespuesta.dato) || secondRespuesta.dato === null || secondRespuesta.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(terceraRespuesta.dato) || terceraRespuesta.dato === null || terceraRespuesta.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(cuartaRespuesta.dato) || cuartaRespuesta.dato === null || cuartaRespuesta.dato === undefined 

          // firstPregunta.length == 0 || firstPregunta == '' || firstPregunta == null ||
          // secondPregunta.length == 0 || secondPregunta == '' || secondPregunta == null ||
          // terceraPregunta.length == 0 || terceraPregunta == '' || terceraPregunta == null ||
          // cuartaPregunta.length == 0 || cuartaPregunta == '' || cuartaPregunta == null ||
          // firstRespuesta.length == 0 || firstRespuesta == '' || firstRespuesta == null ||
          // secondRespuesta.length == 0 || secondRespuesta == '' || secondRespuesta == null ||
          // terceraRespuesta.length == 0 || terceraRespuesta == '' || terceraRespuesta == null ||
          // cuartaRespuesta.length == 0 || cuartaRespuesta == '' || cuartaRespuesta == null

        ){
        setDiseabledPreguntasSeguridad(true)
      }else{
        setDiseabledPreguntasSeguridad(false)
      }
    },[firstPregunta,secondPregunta,terceraPregunta,cuartaPregunta,firstRespuesta,secondRespuesta,terceraRespuesta,cuartaRespuesta,secondPregunta])


    // ---------------------------------------------------------------- 
    // PAGINACION DE PASOS FORMULARIO
    // ---------------------------------------------------------------- 

    // let TextSteps;
    const handlePaginationNext = () => {
      setActiveStepPagination((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handlePaginationBack = () => {
      setActiveStepPagination((prevActiveStep) => prevActiveStep - 1);
    };
    
  return (
    <>

      <Box component='div' sx={{p:'1rem', position:'relative',maxHeight:'100%',width:'100%',
               boxShadow:'8px 8px  6px #ccc, -2px -2px 10px #ccc',borderRadius:'6px',background:'#ffffffd9' }} >

        <Box component='div'>
          <Link to='/Login' className="link_olvido_pass" >
            <Typography variant="p" color="error" sx={{fontSize:'16px'}}><strong>Iniciar Sesión</strong></Typography>
          </Link>
        </Box>
        <Box component='div' sx={{my:'1rem',textAlign:'center',}}>
          <Typography variant="h5" color="error"><strong>Registrar empresa</strong></Typography>
        </Box>

        {/* PAGINACION DE PASOS  */}
      <BodyPaginationStep 
        activeStep = {activeStepPagination}
        iconPagStep = {IconStepPag}
        textsteps = {TextStepPag}
      />
        <Box component='div' sx={{textAlign:'center', mb:'1rem',  bgcolor:'#aaa'}}>
            <Alert severity="info" sx={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                <strong>Su correo Principal de empresa sera su usuario</strong>!
            </Alert>

        </Box>



        <Box className = 'Cont_form_step'>

          <Box className='slider_form'>
              {/* slider 1 empresa */}
              
              <Box component='form' className='form_empresa' id='form_step'>
                  <Box>
                    <Typography variant="p" color='error'><strong>Datos de la Empresa:</strong> </Typography>
                  </Box>
                  <Grid container spacing={2} sx={{my:2}}>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="rifempresa"
                          label="Rif Empresarial"
                          type="text"
                          placeholder='J-12345678965'
                          value={rifEmpresa.dato}
                          onChange={(e) => validateRif(e.target.value)}
                          error={rifEmpresa.error}
                          helperText ={rifEmpresa.message}
                          color={rifEmpresa.color}
                          focused={rifEmpresa.fucosed}
                      />
                    </Grid>
                    <Grid item xs={12}  md={6} >
                      <TextField sx={styleCampos}
                          id="nameempresa"
                          label="Nombre de empresa"
                          type="text"
                          value={nameEmpresa.dato}
                          onChange={(e) => validatenameEmpresa(e.target.value)}
                          error={nameEmpresa.error}
                          helperText ={nameEmpresa.message}
                          color={nameEmpresa.color}
                          focused={nameEmpresa.fucosed}
                          // color="success" focused
                      />
                    </Grid>
                    <Grid item xs={12}  md={6} >
                      <Autocomplete sx={styleCampos} 
                        id="select_tipo_empresa" 
                        options={lisTipEmpresa}
                        onChange={(e,newValue) => {
                          setSelectTipEmpresa({
                              pk_tip_empresa: newValue ? newValue.pk_tip_empresa : null,
                              tipo_empresa: newValue ? newValue.tipo_empresa : null
                            })
                        }}
                        getOptionLabel={(option) => option.tipo_empresa}
                        renderInput={(params) => <TextField {...params} label="Tipo de Empresa" variant="outlined" />}
                      />
                    </Grid>  
                  </Grid>
                  {/* contactos */}
                  <Box>
                    <Box>
                      <Typography variant="p" color='error'><strong>Contactos de Empresa:</strong> </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{my:2}}>
                      <Grid item xs={12} md={6} >
                        <TextField sx={styleCampos}
                              id="tlfempresa"
                              label="Tlf Principal "
                              type="number"
                              value={tlfFirstEmpresa.dato}
                              onChange={(e) => validatefirstTlf(e.target.value)}
                              error={tlfFirstEmpresa.error}
                              helperText ={tlfFirstEmpresa.message}
                              color={tlfFirstEmpresa.color}
                              focused={tlfFirstEmpresa.fucosed}
                              // color="success" focused
                              
                        />
                      </Grid>
                      <Grid item xs={12} md={6} >
                        <TextField sx={styleCampos}
                              id="tlf2empresa"
                              label="Tlf Segundario"
                              type="number"
                              value={tlfSecondEmpresa.dato}
                              onChange={(e) => validateSecondtTlf(e.target.value)}
                              error={tlfSecondEmpresa.error}
                              helperText ={tlfSecondEmpresa.message}
                              color={tlfSecondEmpresa.color}
                              focused={tlfSecondEmpresa.fucosed}
                              // color="success" focused
                        />
                      </Grid>
                      <Grid item xs={12} md={6} >
                        <TextField sx={styleCampos}
                              id="emailempresa"
                              label="Correo Principal"
                              type="email"
                              placeholder="correomiempresagmaiol.com"
                              value={emailFirstEmpresa.dato}
                              onChange={(e) => validateFirstEmail(e.target.value)}
                              error={emailFirstEmpresa.error}
                              helperText ={emailFirstEmpresa.message}
                              color={emailFirstEmpresa.color}
                              focused={emailFirstEmpresa.fucosed}
                              // color="success" focused
                              />
                      </Grid>
                      <Grid item xs={12} md={6} >
                        <TextField sx={styleCampos}
                              id="email2empresa"
                              label="Correo Segundario"
                              type="email"
                              placeholder="correosegundarioempresa@.."
                              value={emailsecondempresa.dato}
                              onChange={(e) => validateSecondEmail(e.target.value)}
                              error={emailsecondempresa.error}
                              helperText ={emailsecondempresa.message}
                              color={emailsecondempresa.color}
                              focused={emailsecondempresa.fucosed}
                        />
                      </Grid>
                      
                                      
                    </Grid>

                  </Box>
                  {/* -------------- */}

                  <Box 
                      sx={{mt:2,float:'right'}}
                      >
                      <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep() ;handlePaginationNext()}} 
                      disabled={diseabledNextEmpresa}>     
                          Siguiente
                      </Button>
                  </Box>
              </Box>
              <Box component='form' className='form_empresa' id='form_step'>
                        {/* ubicacion */}
            
                  <Box >
                    <Box>
                      <Typography variant="p" color='error'><strong>Ubicación de empresa:</strong> </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{my:2}}>
                      <Grid item xs={12} md={6} >
                        <Autocomplete sx={styleCampos} 
                          id="estado_empresa" 
                          options={lisEstado}
                          onChange={(e,newValue) => {
                            vaciar_municipio_empresa() //vacio el campo municipio al cambiar el estado
                            setSelectEstado({
                                pk_estado: newValue ? newValue.pk_estado : null,
                                nombre_estado: newValue ? newValue.nombre_estado : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_estado}
                          renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} >
                        <Autocomplete sx={styleCampos} 
                          id="municipio_empresa" 
                          options={listMunicipioEstado}
                          onChange={(e,newValue) => {
                            vaciar_parroquia_empresa() //vacio el campo parroquia al cambiar municipio
                            setSelectMunicipio({
                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                fk_estado: newValue ? newValue.fk_estado : null,
                                nombre_municipio: newValue ? newValue.nombre_municipio : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_municipio}
                          renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} >
                        <Autocomplete sx={styleCampos} 
                          id="parroquia_empresa" 
                          options={listParroquiaMunicipio}
                          onChange={(e,newValue) => {
                            setSelectParroquia({
                                pk_parroquia: newValue ? newValue.pk_parroquia : null,
                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                nombre_parroquia: newValue ? newValue.nombre_parroquia : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_parroquia}
                          renderInput={(params) => <TextField {...params} label="Parroquia" variant="outlined" />}
                        />
                      </Grid>

                    </Grid>
                  </Box>

                    {/* especificaciones de la ubicacion  */}
                    <Box component='div'>
                      <Box>
                        <Typography variant="p" color='error' ><strong>Especificaciones:</strong> </Typography>
                      </Box>
                      <Grid container spacing={2} sx={{my:2}}>
                            <Grid item xs={12} md={6}>
                              <TextField sx={styleCampos}
                                  id="zonaestablecimiento"
                                  label="urbanización/Sector/Zona Industrial"
                                  type="text"
                                  value={ZonaEstablecimiento.dato }
                                  onChange={(e) => validateZona_empresa(e.target.value)}
                                  error={ZonaEstablecimiento.error}
                                  helperText ={ZonaEstablecimiento.message}
                                  color={ZonaEstablecimiento.color}
                                  focused={ZonaEstablecimiento.fucosed}
                                  // color="success" focused
                                />
                              </Grid>
                            <Grid item xs={12} md={6}>
                              <TextField sx={styleCampos}
                                  id="rutaestablecimiento"
                                  label="Avenida/Carrera/Calle/Esquina"
                                  type="text"
                                  value={RutasEstablecimiento.dato }
                                  onChange={(e) => validateAvenida_empresa(e.target.value)}
                                  error={RutasEstablecimiento.error}
                                  helperText ={RutasEstablecimiento.message}
                                  color={RutasEstablecimiento.color}
                                  focused={RutasEstablecimiento.fucosed}
                                  // color="success" focused
                              />
                              </Grid>
                            <Grid item xs={12} md={4}>
                              <TextField sx={styleCampos}
                                    id="espacioestablecimiento"
                                    label="Edificio/Galpón"
                                    type="text"
                                    value={EspacioEstablecimiento.dato }
                                    onChange={(e) => validateEspacio_empresa(e.target.value)}
                                    error={EspacioEstablecimiento.error}
                                    helperText ={EspacioEstablecimiento.message}
                                    color={EspacioEstablecimiento.color}
                                    focused={EspacioEstablecimiento.fucosed}
                                    // color="success" focused
                                />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <TextField sx={styleCampos}
                                        id="nivelestablecimiento"
                                        label="Piso/Planta/Local"
                                        type="text"
                                        value={NivelEstablecimiento.dato}
                                        onChange={(e) => validateNivel_empresa(e.target.value)}
                                        error={NivelEstablecimiento.error}
                                        helperText ={NivelEstablecimiento.message}
                                        color={NivelEstablecimiento.color}
                                        focused={NivelEstablecimiento.fucosed}
                                        // color="success" focused
                                    />
                              </Grid>
                              
                              <Grid item xs={12} md={4} >
                                <TextField sx={styleCampos}
                                        id="codigolocalempresa"
                                        label="Código Postal"
                                        type="number"
                                        value={CodigoPostalEstablecimiento.dato }
                                        onChange={(e) => validateCodigo_empresa(e.target.value)}
                                        error={CodigoPostalEstablecimiento.error}
                                        helperText ={CodigoPostalEstablecimiento.message}
                                        color={CodigoPostalEstablecimiento.color}
                                        focused={CodigoPostalEstablecimiento.fucosed}
                                        // color="success" focused
                                />
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <TextField sx={styleCampos}
                                id="referenciaestablecimiento"
                                label="Punto de referencia"
                                placeholder='Punto de Referencia de la empresa'
                                multiline
                                minRows={5}
                                maxRows={10}
                                value={ReferenciaEstablecimiento.dato}
                                onChange={(e) => validateReferencia_empresa(e.target.value)}
                                error={ReferenciaEstablecimiento.error}
                                helperText ={ReferenciaEstablecimiento.message}
                                color={ReferenciaEstablecimiento.color}
                                focused={ReferenciaEstablecimiento.fucosed}
                                
                                />
                            </Grid>
                      </Grid>
                    </Box>

                    {/* -------------- */}

                  <Box 
                      sx={{mt:2,float:'right'}}
                      >
                        <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}}  onClick={() => {beforeformstep(); handlePaginationBack()}} >
                          Regresar
                        </Button>
                      <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep() ;handlePaginationNext()}} 
                      disabled={diseabledNextUbicationEmpresa}>     
                          Siguiente
                      </Button>
                  </Box>
              </Box>

              
                {/* registro mercantil */}
              <Box component='form' className='form_empresa' id='form_step'>

                <Box>
                    <Typography variant="p" color='error'><strong>Registro mercantil de su Empresa:</strong> </Typography>
                  </Box>

                  <Grid container spacing={2} sx={{my:2}}>
                    <Grid item xs={12} md={6} >
                      <Autocomplete sx={styleCampos} 
                        id="select_regmercantilempresa" 
                        options={listRegMercantilEmpresa}
                        onChange={(e,newValue) => {
                          setSelectRegMercantilEmpresa({
                              pk_tip_reg_merc: newValue ? newValue.pk_tip_reg_merc : null,
                              tipo_registro: newValue ? newValue.tipo_registro : null
                            })
                        }}
                        getOptionLabel={(option) => option.tipo_registro}
                        renderInput={(params) => <TextField {...params} label="Tipo de Registro Mercantil" variant="outlined" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="regmercantil"
                          label="Registro Mercantil"
                          type="text"
                          value={regMercantilEmpresa.dato }
                          onChange={(e) => validateNroRegistroMercantil_empresa(e.target.value)}
                          error={regMercantilEmpresa.error}
                          helperText ={regMercantilEmpresa.message}
                          color={regMercantilEmpresa.color}
                          focused={regMercantilEmpresa.fucosed}
                          // color="success" focused
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="circunscripcionmercantil"
                          label="Circunscripción"
                          type="text"
                          value={circunscripcionMercantilEmpresa.dato }
                          onChange={(e) => validateCircunscripcion_empresa(e.target.value)}
                          error={circunscripcionMercantilEmpresa.error}
                          helperText ={circunscripcionMercantilEmpresa.message}
                          color={circunscripcionMercantilEmpresa.color}
                          focused={circunscripcionMercantilEmpresa.fucosed}
                          // color="success" focused
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="tomomercantil"
                          label="Tomo"
                          type="text"
                          value={tomoMercantilEmpresa.dato }
                          onChange={(e) => validateTomo_empresa(e.target.value)}
                          error={tomoMercantilEmpresa.error}
                          helperText ={tomoMercantilEmpresa.message}
                          color={tomoMercantilEmpresa.color}
                          focused={tomoMercantilEmpresa.fucosed}
                          // color="success" focused
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="nromercantil"
                          label="Número registro mercantil"
                          type="text"
                          value={numeroMercantilEmpresa.dato }
                          onChange={(e) => validateNroMercantil_empresa(e.target.value)}
                          error={numeroMercantilEmpresa.error}
                          helperText ={numeroMercantilEmpresa.message}
                          color={numeroMercantilEmpresa.color}
                          focused={numeroMercantilEmpresa.fucosed}
                          // color="success" focused
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="fechaprotomercantil"
                          label="Fecha Protocolización"
                          type="date"
                          value={fechaProtocolizacionMercantilEmpresa }
                          onChange={(e) => setFechaProtocolizacionMercantilEmpresa(e.target.value)}
                          focused
                      />
                    </Grid>
                  </Grid>
                      
                    {/* patente de empresa  */}
                  <Box>
                    <Typography variant="p" color="error"><strong>Registro de la Patente:</strong></Typography>
                  </Box>

                  <Grid container spacing={2} sx={{my:2}}>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Documento Presentado</InputLabel>
                          <Select sx={styleCampos}
                              labelId="demo-simple-select-label"
                              id="select_documentpatente"
                              value={SelectDocumentoPatente }
                              label="Documento de Presentado"
                              onChange={(e) => setSelectDocumentoPatente(e.target.value)}
                              >
                              <MenuItem value='PATENTE'>PATENTE</MenuItem>
                              <MenuItem value='SOLICITUD'>SOLICITUD</MenuItem>
                                            
                          </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <TextField sx={styleCampos}
                            id="nropatente"
                            label="Nro Patente"
                            type="text"
                            value={NumeroPatente.dato  }
                            onChange={(e) => validateNroPatente_empresa(e.target.value)}
                            error={NumeroPatente.error}
                            helperText ={NumeroPatente.message}
                            color={NumeroPatente.color}
                            focused={NumeroPatente.fucosed}
                            // color="success" focused
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <TextField sx={styleCampos}
                            id="actividadpatente"
                            label="Actividad Patente"
                            type="text"
                            value={ActividadPatente.dato  }
                            onChange={(e) => validateActividadPatente_empresa(e.target.value)}
                            error={ActividadPatente.error}
                            helperText ={ActividadPatente.message}
                            color={ActividadPatente.color}
                            focused={ActividadPatente.fucosed}
                            // color="success" focused
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="fechaotorgamientopatente"
                          label="Fecha del Otorgamiento"
                          type="date"
                          value={FechaOtorgacionPatente  }
                          onChange={(e) => setFechaOtorgacionPatente(e.target.value)}
                          focused
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                          id="fechavenciminetopatente"
                          label="Fecha de Vencimiento"
                          type="date"
                          value={FechaVencimientoPatente   }
                          onChange={(e) => setFechaVencimientoPatente(e.target.value)}
                          focused
                      />
                    </Grid>

                  </Grid>

                  <Box>
                    <Typography variant="p" color="error"><strong>Estado y Municpio Otorgante de la Patente:</strong></Typography>
                  </Box>

                    <Grid container spacing={2} sx={{my:2}}>
                        <Grid item xs={12} md={6} >
                              <Autocomplete sx={styleCampos} 
                                id="estado_empresa_patente" 
                                options={lisEstado}
                                onChange={(e,newValue) => {
                                  vaciar_municipio_empresa_patente() //vacio el campo municipio al cambiar el estado de patente
                                  setEstadoPatente({
                                      pk_estado: newValue ? newValue.pk_estado : null,
                                      nombre_estado: newValue ? newValue.nombre_estado : null
                                    })
                                }}
                                getOptionLabel={(option) => option.nombre_estado}
                                renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                              />
                        </Grid>
                        <Grid item xs={12} md={6} >
                          <Autocomplete sx={styleCampos} 
                            id="municipio_empresa_patente" 
                            options={listMunicipioEstadoPatente}
                            onChange={(e,newValue) => {
                              // vaciar_parroquia_empresa() //vacio el campo parroquia al cambiar municipio
                              setMunicipioPatente({
                                  pk_municipio: newValue ? newValue.pk_municipio : null,
                                  fk_estado: newValue ? newValue.fk_estado : null,
                                  nombre_municipio: newValue ? newValue.nombre_municipio : null
                                })
                            }}
                            getOptionLabel={(option) => option.nombre_municipio}
                            renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                          />
                        </Grid>
                    </Grid>

                  {/* ----------------------- */}
                  <Box 
                    sx={{mt:2,float:'right'}}
                    >
                    <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                        Regresar
                    </Button>
                    <Button variant="contained" id='btn_next' color="info" disabled={diseabledNexTMercantilPatente}
                    onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                            
                      Siguiente
                    </Button>
                  </Box> 
              </Box>

              
                {/* slider de poder de empresa */}
              <Box component='form' className='form_poder' id='form_step'  onSubmit={HandleSubmitPoder}>

                  {/*--------------------  */}
                  {/* Buscar ciudadano poder  */}
                  {/*--------------------  */}
                  <Box>
                      <Box>
                        <Typography variant="p" color='error'><strong>Datos Personales de Poder de Empresa:</strong> </Typography>
                      </Box>
                      <center>
                          <Grid container spacing={2} sx={{mt:1}}>
                              <Grid item xs={12} md={3}>
                                  <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                                      <Select sx={styleCampos}
                                          labelId="demo-simple-select-label"
                                          id="select_nacionalidad_poder"
                                          value={selectnacPoder }
                                          label="Nacionalidad"
                                          onChange={(e) => setSelectNacPoder(e.target.value)}
                                          >
                                          <MenuItem value='V'>V</MenuItem>
                                          <MenuItem value='E'>E</MenuItem>
                                          
                                      </Select>
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} md={5}>
                                  <TextField sx={styleCampos}
                                      id="Cédula"
                                      label="Cédula"
                                      value={cedulaPoder.dato }
                                      onChange={(e) => validateCedulaPoder_empresa(e.target.value)}
                                      error={cedulaPoder.error}
                                      helperText ={cedulaPoder.message}
                                      color={cedulaPoder.color}
                                      focused={cedulaPoder.fucosed}
                                                                                    
                                  />
                              </Grid>
                              <Grid item xs={12} md={2}>    
                                  <Button type="submit" variant="contained" color="primary"sx={{mt:1}}
                                  disabled={diseabledBuscarPoder}>
                                      Buscar
                                  </Button>
                              </Grid>
                          </Grid>
                      </center>
                      {/* Informacion de ciudadano  */}
                      <Box className='cont_collapse' sx={{mt:1}}>
                          <Collapse in={openppoder}>
                              <Typography variant="p" color="primary" sx={{mt:3}}>Datos Obtenidos:</Typography>
                              <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={5} >
                                      <TextField sx={styleCampos}
                                          id="nombre"
                                          label="Nombre"
                                          type="text"
                                          value={poder .nombre_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>       
                                      <TextField sx={styleCampos}
                                          id="apellido"
                                          label="Apellido"
                                          type="text"
                                          value={poder .apellido_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>       
                                      <TextField sx={styleCampos}
                                          id="sexo"
                                          label="Sexo"
                                          type="text"
                                          value={poder .sexo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>
                                      <TextField sx={styleCampos}
                                          id="fecha_nacimiento"
                                          label="Fecha de Nacimiento"
                                          type="text"
                                          value={poder .fecha_nacimiento}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />     
                                  </Grid>

                              </Grid>
                              {/* cargo del propietario de la empresa */}
                              <br />
                              <Box>
                                <Box>
                                  <Typography variant="p" color="primary" > Datos de Poder: </Typography>
                                </Box>
                                <Grid container spacing={2} sx={{mt:1}}>
                                        
                                  <Grid item xs={12} md={4}>
                                      <TextField sx={styleCampos}
                                          id="tomopoder"
                                          label="Tomo"
                                          value={TomoPoder.dato}
                                          onChange={(e) => validateTomoPoder_empresa(e.target.value)}
                                          error={TomoPoder.error}
                                          helperText ={TomoPoder.message}
                                          color={TomoPoder.color}
                                          focused={TomoPoder.fucosed}                                               
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                      <TextField sx={styleCampos}
                                          id="numeropoder"
                                          label="Número de Poder"
                                          value={NumeroPoder.dato}
                                          onChange={(e) => validateNroPoder_empresa(e.target.value)}
                                          error={NumeroPoder.error}
                                          helperText ={NumeroPoder.message}
                                          color={NumeroPoder.color}
                                          focused={NumeroPoder.fucosed}                                                   
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={4} >
                                      <Autocomplete sx={styleCampos} 
                                      id="select_estatus_poder" 
                                      options={listEstatus}
                                      onChange={(e,newValue) => {
                                            setSelectEstatus({
                                              pk_estatus: newValue ? newValue.pk_estatus : null,
                                              tipo_estatus: newValue ? newValue.tipo_estatus : null
                                          })
                                      }}
                                      getOptionLabel={(option) => option.tipo_estatus}
                                      renderInput={(params) => <TextField {...params} label="Estatus" variant="outlined" />}
                                      />
                                  </Grid>
                                        
                                </Grid>
                              </Box>
                              <br />
                              <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Volver
                                </Button> */}
                                <Button variant="contained" id='btn_next' color="info" disabled={diseabledNextPoder}
                                  onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                            
                                    Siguiente
                                </Button>
                              </Box> 
                              
                              
                          </Collapse>  
                          {/* mensaje de error */}
                          <Collapse in={openppoder2}>
                              <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                  <Alert severity="warning" >
                                    <strong>Los Datos no son Correctos</strong> o <strong>No esta REGISTRADO . " POR FAVOR BERIFIQUE "</strong>!
                                  </Alert>
                              
                                  {/* <Alert severity="warning" action={
                                          <Button color="info" variant='outlined' size="small">
                                              Registrar
                                          </Button>
                                      } ><strong>Los Datos no son Correctos</strong> o <strong>No esta REGISTRADO . " POR FAVOR BERIFIQUE "</strong>!</Alert>
                              */}
                              </Stack>
                          </Collapse> 
                          
                          <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                <Button variant="contained" id='btn_next' color="warning"  onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Regresar
                                </Button>
                                
                          </Box>     
                      </Box>
                      
                  </Box>
              </Box>
              

              {/* slider de propietario de empresa */}
              <Box component='form' className='form_propietario' id='form_step'  onSubmit={HandleSubmitPropietario}>

                  {/*--------------------  */}
                  {/* Buscar ciudadano propietario  */}
                  {/*--------------------  */}
                  <Box>
                      <Box>
                        <Typography variant="p" color='error'><strong>Datos Personales del Propietario de Empresa:</strong> </Typography>
                      </Box>
                      <center>
                          <Grid container spacing={2} sx={{mt:1}}>
                              <Grid item xs={12} md={3}>
                                  <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                                      <Select sx={styleCampos}
                                          labelId="demo-simple-select-label"
                                          id="select_nac_propietario_1"
                                          value={selectnacPropietario}
                                          label="Nacionalidad"
                                          onChange={(e) => setSelectNacPropietario(e.target.value)}
                                          >
                                          <MenuItem value='V'>V</MenuItem>
                                          <MenuItem value='E'>E</MenuItem>
                                          
                                      </Select>
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} md={5}>
                                  <TextField sx={styleCampos}
                                      id="Cédula"
                                      label="Cédula"
                                      value={cedulaPropietario.dato}
                                      onChange={(e) => validateCedulaPropietario_empresa(e.target.value)}
                                      error={cedulaPropietario.error}
                                      helperText ={cedulaPropietario.message}
                                      color={cedulaPropietario.color}
                                      focused={cedulaPropietario.fucosed}
                                                                                    
                                  />
                              </Grid>
                              <Grid item xs={12} md={2}>    
                                  <Button type="submit" variant="contained" color="primary"sx={{mt:1}}
                                  disabled={diseabledBuscarPropietario1}>
                                      Buscar
                                  </Button>
                              </Grid>
                          </Grid>
                      </center>
                      {/* Informacion de ciudadano  */}
                      <Box className='cont_collapse' sx={{mt:1}}>
                          <Collapse in={open}>
                              <Typography variant="p" color="primary" sx={{mt:3}}>Datos Obtenidos:</Typography>
                              <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={5} >
                                      <TextField sx={styleCampos}
                                          id="nombre"
                                          label="Nombre"
                                          type="text"
                                          value={propietario.nombre_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>       
                                      <TextField sx={styleCampos}
                                          id="apellido"
                                          label="Apellido"
                                          type="text"
                                          value={propietario.apellido_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>       
                                      <TextField sx={styleCampos}
                                          id="sexo"
                                          label="Sexo"
                                          type="text"
                                          value={propietario.sexo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>
                                      <TextField sx={styleCampos}
                                          id="fecha_nacimiento"
                                          label="Fecha de Nacimiento"
                                          type="text"
                                          value={propietario.fecha_nacimiento}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />     
                                  </Grid>

                              </Grid>
                              {/* cargo del propietario de la empresa */}
                              <br />
                              <Box>
                                <Box>
                                  <Typography variant="p" color='primary'> Cargo del Propietario: </Typography>
                                </Box>
                                <Grid container spacing={2} sx={{mt:1}}>
                                        
                                  <Grid item xs={12} md={12}>
                                      <TextField sx={styleCampos}
                                          id="cargopropietario"
                                          label="Cargo del Propietario"
                                          type="text"
                                          value={cargoPropietario.dato}
                                          onChange={(e) => validateCargoPropietario_empresa(e.target.value)}
                                          error={cargoPropietario.error}
                                          helperText ={cargoPropietario.message}
                                          color={cargoPropietario.color}
                                          focused={cargoPropietario.fucosed}
                                                                                              
                                      />
                                  </Grid>
                                        
                                </Grid>
                              </Box>
                              <br />
                              <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Volver
                                </Button> */}
                                <Button variant="contained" id='btn_next' color="info" disabled={diseabledNextPropietario1}
                                  onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                            
                                    Siguiente
                                </Button>
                              </Box> 
                              
                              
                          </Collapse>  
                          {/* mensaje de error */}
                          <Collapse in={open2}>
                              <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                  <Alert severity="warning"><strong>Los Datos no son Correctos</strong> o <strong>No esta REGISTRADO . " POR FAVOR BERIFIQUE "</strong>!</Alert>
                              </Stack>
                          </Collapse> 
                          
                          <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                <Button variant="contained" id='btn_next' color="warning"  onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Regresar
                                </Button>
                                
                          </Box>     
                      </Box>
                      
                  </Box>
              </Box>

              {/* ubicacion de propietario de empresa */}
              
              <Box component='form' className='form_empresa' id='form_step'>


                <Box>
                  {/* contactos del propietario de empresa*/}
                  <Box>
                    <Typography variant="p" color='error'><strong>Contactos del Propietario:</strong> </Typography>
                  </Box>
                  <Grid container spacing={2} sx={{my:2}}>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="tlfempresapropietario"
                            label="Tlf Principal "
                            type="number"
                            value={tlfFirstEmpresaPropietario.dato}
                            onChange={(e) => validatefirstTlf_Propietario_1(e.target.value)}
                            error={tlfFirstEmpresaPropietario.error}
                            helperText ={tlfFirstEmpresaPropietario.message}
                            color={tlfFirstEmpresaPropietario.color}
                            focused={tlfFirstEmpresaPropietario.fucosed}
                            // color="success" focused
                            
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="tlf2empresapropietario"
                            label="Tlf Segundario"
                            type="number"
                            value={tlfSecondEmpresaPropietario.dato}
                            onChange={(e) => validateSecondtTlf_Propietario_1(e.target.value)}
                            error={tlfSecondEmpresaPropietario.error}
                            helperText ={tlfSecondEmpresaPropietario.message}
                            color={tlfSecondEmpresaPropietario.color}
                            focused={tlfSecondEmpresaPropietario.fucosed}
                            // color="success" focused
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="emailempresa"
                            label="Correo Principal"
                            type="email"
                            placeholder="correomiempresagmail.com"
                            value={emailFirstEmpresaPropietario.dato}
                            onChange={(e) => validateFirstEmail_Propietario_1(e.target.value)}
                            error={emailFirstEmpresaPropietario.error}
                            helperText ={emailFirstEmpresaPropietario.message}
                            color={emailFirstEmpresaPropietario.color}
                            focused={emailFirstEmpresaPropietario.fucosed}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="email2empresa"
                            label="Correo Segundario"
                            type="email"
                            placeholder="correosegundarioempresa@.."
                            value={emailsecondempresaPropietario.dato}
                            onChange={(e) => validateSecondEmail_Propietario_1(e.target.value)}
                            error={emailsecondempresaPropietario.error}
                            helperText ={emailsecondempresaPropietario.message}
                            color={emailsecondempresaPropietario.color}
                            focused={emailsecondempresaPropietario.fucosed}
                      />
                    </Grid>
                    
                                    
                  </Grid>
                </Box>

                  {/* ubicaicon */}
            
                  <Box component='div' >
                    <Box>
                      <Typography variant="p" color='error'><strong>Ubicación del Propietario:</strong> </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{my:2}}>
                      <Grid item xs={12} md={5} >
                        <Autocomplete sx={styleCampos} 
                          id="estado_empresa_propietario" 
                          options={lisEstado}
                          onChange={(e,newValue) => {
                            vaciar_municipio_empresa_propietario() //vacio el campo municipio al cambiar el estado
                            setSelectEstadoPropietario({
                                pk_estado: newValue ? newValue.pk_estado : null,
                                nombre_estado: newValue ? newValue.nombre_estado : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_estado}
                          renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} md={5} >
                        <Autocomplete sx={styleCampos} 
                          id="municipio_empresa_propietario" 
                          options={listMunicipioEstadoPropietario}
                          onChange={(e,newValue) => {
                            vaciar_parroquia_empresa_propietario() //vacio el campo parroquia al cambiar municipio
                            setSelectMunicipioPropietario({
                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                fk_estado: newValue ? newValue.fk_estado : null,
                                nombre_municipio: newValue ? newValue.nombre_municipio : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_municipio}
                          renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} md={5} >
                        <Autocomplete sx={styleCampos} 
                          id="parroquia_empresa_propietario" 
                          options={listParroquiaMunicipioPropietario}
                          onChange={(e,newValue) => {
                            setSelectParroquiaPropietario({
                                pk_parroquia: newValue ? newValue.pk_parroquia : null,
                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                nombre_parroquia: newValue ? newValue.nombre_parroquia : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_parroquia}
                          renderInput={(params) => <TextField {...params} label="Parroquia" variant="outlined" />}
                        />
                      </Grid>
                                    
                    </Grid>
                  </Box>

                  <Box 
                          sx={{mt:2,float:'right'}}
                          >
                          <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                              Regresar
                          </Button>
                          <Button variant="contained" id='btn_next' color="info" disabled={diseabledNextcontactoPropietario1}
                            onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                      
                              Siguiente
                          </Button>
                      </Box>   
              </Box>

                  {/*--------------------  */}
                  {/* slider de segundo propietario  */}
                  {/*--------------------  */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitSecondPropietario}>
                    <Box>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">¿Registrar segundo Propietario? </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Si" onClick={() =>{ setOpenOption(true); setOpenOptionSecondPropietario(false); setUbicacionseconpropietario(null); ActiveIconStep()  }} />
                                <FormControlLabel value="male" control={<Radio />} label="No" onClick={NoSecondpropietario} />
                                
                            </RadioGroup>
                        </FormControl>
                        <Collapse in={openoption}>
                            <Box>
                              <Box>
                                <Typography variant="p" color='error'><strong>Datos Personales del Segundo Propietario de Empresa:</strong> </Typography>
                              </Box>
                              <center>
                                  <Grid container spacing={2} sx={{mt:1}}>
                                      <Grid item xs={12} md={3}>
                                          <FormControl fullWidth>
                                              <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                                              <Select sx={styleCampos}
                                                  labelId="demo-simple-select-label"
                                                  id="select_nac"
                                                  value={selectnacSecondPropietario }
                                                  label="Nacionalidad"
                                                  onChange={(e) => setSelectNacSecondPropietario(e.target.value)}
                                                  >
                                                  <MenuItem value='V'>V</MenuItem>
                                                  <MenuItem value='E'>E</MenuItem>
                                                  
                                              </Select>
                                          </FormControl>
                                      </Grid>
                                      <Grid item xs={12} md={5}>
                                          <TextField sx={styleCampos}
                                              id="Cédula"
                                              label="Cédula"
                                              value={cedulaSecondPropietario.dato }
                                              onChange={(e) => validateCedulaPropietario2_empresa(e.target.value)}
                                              error={cedulaSecondPropietario.error}
                                              helperText ={cedulaSecondPropietario.message}
                                              color={cedulaSecondPropietario.color}
                                              focused={cedulaSecondPropietario.fucosed}                                           
                                          />
                                      </Grid>
                                      <Grid item xs={12} md={2}>    
                                          <Button type="submit" variant="contained" color="primary"sx={{mt:1}} disabled={diseabledBuscarPropietario2}>
                                              Buscar
                                          </Button>
                                      </Grid>
                                  </Grid>
                              </center>
                              {/* Informacion de ciudadano segundo propietario  */}
                              <Box className='cont_collapse' sx={{mt:1}}>
                                  <Collapse in={openSeconPropietario }>
                                      <Typography variant="p" color="primary" sx={{mt:3}}>Datos Obtenidos:</Typography>
                                      <Grid container spacing={2} sx={{my:2}}>
                                          <Grid item xs={12} md={5} >
                                              <TextField sx={styleCampos}
                                                  id="nombre"
                                                  label="Nombre"
                                                  type="text"
                                                  value={secondpropietario.nombre_completo}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  color="success" focused
                                              />
                                          </Grid>
                                          <Grid item xs={12} md={5}>       
                                              <TextField sx={styleCampos}
                                                  id="apellido"
                                                  label="Apellido"
                                                  type="text"
                                                  value={secondpropietario.apellido_completo}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  color="success" focused
                                              />
                                          </Grid>
                                          <Grid item xs={12} md={5}>       
                                              <TextField sx={styleCampos}
                                                  id="sexo"
                                                  label="Sexo"
                                                  type="text"
                                                  value={secondpropietario.sexo}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  color="success" focused
                                              />
                                          </Grid>
                                          <Grid item xs={12} md={5}>
                                              <TextField sx={styleCampos}
                                                  id="fecha_nacimiento"
                                                  label="Fecha de Nacimiento"
                                                  type="text"
                                                  value={secondpropietario.fecha_nacimiento}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  color="success" focused
                                              />     
                                          </Grid>

                                      </Grid>
                                      {/* cargo del propietario de la empresa */}
                                      <br />
                                      <Box>
                                        <Box>
                                          <Typography variant="p" > Cargo del Propietario: </Typography>
                                        </Box>
                                        <Grid container spacing={2} sx={{mt:1}}>
                                                
                                          <Grid item xs={12} md={12}>
                                              <TextField sx={styleCampos}
                                                  id="cargopropietario"
                                                  label="Cargo del Propietario"
                                                  value={cargoSecondPropietario.dato}
                                                  onChange={(e) => validateCargoPropietario2_empresa(e.target.value)}
                                                  error={cargoSecondPropietario.error}
                                                  helperText ={cargoSecondPropietario.message}
                                                  color={cargoSecondPropietario.color}
                                                  focused={cargoSecondPropietario.fucosed}                                                 
                                              />
                                          </Grid>
                                                
                                        </Grid>
                                      </Box>
                                      <br />
                                      <Box 
                                        sx={{mt:2,float:'right'}}
                                        >
                                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                            Volver
                                        </Button> */}
                                        <Button variant="contained" id='btn_next' color="info" disabled={diseabledNextPropietario2}
                                          onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                                    
                                            Siguiente
                                        </Button>
                                      </Box> 
                                      
                                      
                                  </Collapse>  
                                  {/* mensaje de error */}
                                  <Collapse in={openSeconPropietario2}>
                                      <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                          <Alert severity="warning"><strong>Los Datos no son Correctos</strong> o <strong>No esta REGISTRADO . " POR FAVOR BERIFIQUE "</strong>!</Alert>
                                      </Stack>
                                      
                                  </Collapse> 
                                  
                                      
                              </Box>
                      
                            </Box>
                        </Collapse>   
                        {/* mostrar btn siguiente sino hay segundo propietario */}
                        <Collapse in={openoptionSecondPropietario}>
                              <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                            
                                    Siguiente
                                </Button>
                              </Box>  
                        </Collapse>
                        <Box 
                            sx={{mt:2,float:'right'}}
                            >
                            <Button variant="contained" id='btn_next' color="warning"  onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                Regresar
                            </Button>
                            {/* <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                        
                                Siguiente
                            </Button> */}
                        </Box>    
                    </Box>

              </Box>

              {/* ubicacion de segundo propietario de empresa */}
              
              <Box component='form' className='form_empresa' id='form_step' sx={Ubicacionseconpropietario}>


                <Box>
                  {/* contactos del propietario de empresa*/}
                  <Box>
                    <Typography variant="p" color='error'><strong>Contactos del Segundo Propietario:</strong> </Typography>
                  </Box>
                  <Grid container spacing={2} sx={{my:2}}>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="tlfempresapropietario"
                            label="Tlf Principal "
                            type="number"
                            value={tlfFirstEmpresaSecondPropietario.dato}
                            onChange={(e) => validatefirstTlf_Propietario_2(e.target.value)}
                            error={tlfFirstEmpresaSecondPropietario.error}
                            helperText ={tlfFirstEmpresaSecondPropietario.message}
                            color={tlfFirstEmpresaSecondPropietario.color}
                            focused={tlfFirstEmpresaSecondPropietario.fucosed}
                            
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="tlf2empresapropietario"
                            label="Tlf Segundario"
                            type="number"
                            value={tlfSecondEmpresaSecondPropietario.dato}
                            onChange={(e) => validateSecondtTlf_Propietario_2(e.target.value)}
                            error={tlfSecondEmpresaSecondPropietario.error}
                            helperText ={tlfSecondEmpresaSecondPropietario.message}
                            color={tlfSecondEmpresaSecondPropietario.color}
                            focused={tlfSecondEmpresaSecondPropietario.fucosed}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="emailempresa"
                            label="Correo Principal"
                            type="email"
                            placeholder="correomiempresagmail.com"
                            value={emailFirstEmpresaSecondPropietario.dato}
                            onChange={(e) => validateFirstEmail_Propietario_2(e.target.value)}
                            error={emailFirstEmpresaSecondPropietario.error}
                            helperText ={emailFirstEmpresaSecondPropietario.message}
                            color={emailFirstEmpresaSecondPropietario.color}
                            focused={emailFirstEmpresaSecondPropietario.fucosed}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <TextField sx={styleCampos}
                            id="email2empresa"
                            label="Correo Segundario"
                            type="email"
                            placeholder="correosegundarioempresa@.."
                            value={emailsecondempresaSecondPropietario.dato}
                            onChange={(e) => validateSecondEmail_Propietario_2(e.target.value)}
                            error={emailsecondempresaSecondPropietario.error}
                            helperText ={emailsecondempresaSecondPropietario.message}
                            color={emailsecondempresaSecondPropietario.color}
                            focused={emailsecondempresaSecondPropietario.fucosed}
                      />
                    </Grid>
                    
                                    
                  </Grid>
                </Box>

                  {/* ubicaicon segundo propietario*/}
            
                  <Box component='div' >
                    <Box>
                      <Typography variant="p" color='error'><strong>Ubicación del Propietario:</strong> </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{my:2}}>
                      <Grid item xs={12} md={5} >
                        <Autocomplete sx={styleCampos} 
                          id="select_estado_empresa_secondpropietario" 
                          options={lisEstado}
                          onChange={(e,newValue) => {
                            vaciar_municipio_empresa_secondpropietario() //vacio el campo municipio al cambiar el estado
                            setSelectEstadoSecondPropietario({
                                pk_estado: newValue ? newValue.pk_estado : null,
                                nombre_estado: newValue ? newValue.nombre_estado : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_estado}
                          renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} md={5} >
                        <Autocomplete sx={styleCampos} 
                          id="select_municipio_empresa_secondpropietario" 
                          options={listMunicipioEstadoSecondPropietario}
                          onChange={(e,newValue) => {
                            vaciar_parroquia_empresa_secondpropietario() //vacio el campo parroquia al cambiar municipio
                            setSelectMunicipioSecondPropietario({
                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                fk_estado: newValue ? newValue.fk_estado : null,
                                nombre_municipio: newValue ? newValue.nombre_municipio : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_municipio}
                          renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item  xs={12} md={5} >
                        <Autocomplete sx={styleCampos} 
                          id="select_parroquia_empresa_secondpropietario" 
                          options={listParroquiaMunicipioSecondPropietario}
                          onChange={(e,newValue) => {
                            setSelectParroquiaSecondPropietario({
                                pk_parroquia: newValue ? newValue.pk_parroquia : null,
                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                nombre_parroquia: newValue ? newValue.nombre_parroquia : null
                              })
                          }}
                          getOptionLabel={(option) => option.nombre_parroquia}
                          renderInput={(params) => <TextField {...params} label="Parroquia" variant="outlined" />}
                        />
                      </Grid>
                                    
                    </Grid>
                  </Box>

                  <Box 
                          sx={{mt:2,float:'right'}}
                          >
                          <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                              Regresar
                          </Button>
                          <Button variant="contained" id='btn_next' color="info" disabled={diseabledNextcontactoPropietario2}
                            onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                      
                              Siguiente
                          </Button>
                      </Box>   
              </Box>


              {/* slider de regente de empresa */}
              <Box component='form' className='form_propietario' id='form_step'  onSubmit={HandleSubmitRegente}>

                  {/*--------------------  */}
                  {/* Buscar ciudadano  */}
                  {/*--------------------  */}
                  <Box>
                      <Box>
                        <Typography variant="p" color='error'><strong>Datos Personales del Regente de Empresa:</strong> </Typography>
                      </Box>
                      <center>
                          <Grid container spacing={2} sx={{mt:1}}>
                              <Grid item xs={12} md={3}>
                                  <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                                      <Select sx={styleCampos}
                                          labelId="demo-simple-select-label"
                                          id="select_nac"
                                          value={selectnacRegente}
                                          label="Nacionalidad"
                                          onChange={(e) => setSelectNacRegente(e.target.value)}
                                          >
                                          <MenuItem value='V'>V</MenuItem>
                                          <MenuItem value='E'>E</MenuItem>
                                          
                                      </Select>
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} md={5}>
                                  <TextField sx={styleCampos}
                                      id="Cédula"
                                      label="Cédula"
                                      type="text"
                                      value={cedulaRegente.dato}
                                      onChange={(e) => validateCedulaRegente_empresa(e.target.value)}
                                      error={cedulaRegente.error}
                                      helperText ={cedulaRegente.message}
                                      color={cedulaRegente.color}
                                      focused={cedulaRegente.fucosed}
                                                                                    
                                  />
                              </Grid>
                              <Grid item xs={12} md={2}>    
                                  <Button type="submit" variant="contained" color="primary"sx={{mt:1}} disabled={diseabledBuscarRegente}>
                                      Buscar
                                  </Button>
                              </Grid>
                          </Grid>
                      </center>
                      {/* Informacion de ciudadano  */}
                      <Box className='cont_collapse' sx={{mt:1}}>
                          <Collapse in={openRepreRegente}>
                              <Typography variant="p" color="primary" sx={{mt:3}}>Datos Obtenidos:</Typography>
                              <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={6} >
                                      <TextField sx={styleCampos}
                                          id="nombreregente"
                                          label="Nombre"
                                          type="text"
                                          value={regente.nombre_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>       
                                      <TextField sx={styleCampos}
                                          id="apellidoregente"
                                          label="Apellido"
                                          type="text"
                                          value={regente.apellido_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={12}>       
                                      <TextField sx={styleCampos}
                                          id="institucionformadoraregente"
                                          label="institución de formación"
                                          type="text"
                                          value={regente.institucion_formadora}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>
                                      <TextField sx={styleCampos}
                                          id="licenciaregente"
                                          label="Licencia"
                                          type="text"
                                          value={regente.licencia}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />     
                                  </Grid>

                              </Grid>
                              <br />
                              <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Volver
                                </Button> */}
                                <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                            
                                    Siguiente
                                </Button>
                              </Box> 
                              
                              
                          </Collapse>  
                          {/* mensaje de error */}
                          <Collapse in={openRepreRegente2}>
                              <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                  <Alert severity="warning">
                                    <strong>Los Datos no son Correctos</strong> o <strong>No esta REGISTRADO . " De no estar registrado debe dirigirse a la dirección de Profesionales de la salud a verificar sus datos"</strong>!
                                  </Alert>
                              </Stack>
                          </Collapse> 
                          
                          <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                <Button variant="contained" id='btn_next' color="warning"  onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Regresar
                                </Button>
                                
                          </Box>     
                      </Box>
                      
                  </Box>
              </Box>


              {/* slider representante legal de la empresa */}
              <Box component='form' className='form_reprelegal' id='form_step'  onSubmit={HandleSubmitRepreLegal}>

                  {/*--------------------  */}
                  {/* Buscar ciudadano  */}
                  {/*--------------------  */}
                  <Box>
                      <Box>
                        <Typography variant="p" color='error'><strong>Datos Personales del Representante Legal de la Empresa:</strong> </Typography>
                      </Box>
                      <center>
                          <Grid container spacing={2} sx={{mt:1}}>
                              <Grid item xs={12} md={3}>
                                  <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                                      <Select sx={styleCampos}
                                          labelId="demo-simple-select-label"
                                          id="select_nac"
                                          value={selectnacRepreLegal}
                                          label="Nacionalidad"
                                          onChange={(e) => setSelectNacRepreLegal(e.target.value)}
                                          >
                                          <MenuItem value='V'>V</MenuItem>
                                          <MenuItem value='E'>E</MenuItem>
                                          
                                      </Select>
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} md={5}>
                                  <TextField sx={styleCampos}
                                      id="Cédula"
                                      label="Cédula"
                                      value={cedulaRepreLegal.dato}
                                      onChange={(e) => validateCedulaRepresentLegal_empresa(e.target.value)}   
                                      error={cedulaRepreLegal.error}
                                      helperText ={cedulaRepreLegal.message}
                                      color={cedulaRepreLegal.color}
                                      focused={cedulaRepreLegal.fucosed}
                                  />
                              </Grid>
                              <Grid item xs={12} md={2}>    
                                  <Button type="submit" variant="contained" color="primary"sx={{mt:1}} disabled={diseabledBuscarLegal}>
                                      Buscar
                                  </Button>
                              </Grid>
                          </Grid>
                      </center>
                      {/* Informacion de ciudadano  */}
                      <Box className='cont_collapse' sx={{mt:1}}>
                          <Collapse in={openRepreLegal}>
                              <Typography variant="p" color="primary" sx={{mt:3}}>Datos Obtenidos:</Typography>
                              <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={5} >
                                      <TextField sx={styleCampos}
                                          id="nombre"
                                          label="Nombre"
                                          type="text"
                                          value={representanteLegal.nombre_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>       
                                      <TextField sx={styleCampos}
                                          id="apellido"
                                          label="Apellido"
                                          type="text"
                                          value={representanteLegal.apellido_completo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>       
                                      <TextField sx={styleCampos}
                                          id="sexo"
                                          label="Sexo"
                                          type="text"
                                          value={representanteLegal.sexo}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={5}>
                                      <TextField sx={styleCampos}
                                          id="fecha_nacimiento"
                                          label="Fecha de Nacimiento"
                                          type="text"
                                          value={representanteLegal.fecha_nacimiento}
                                          InputProps={{
                                              readOnly: true,
                                          }}
                                          color="success" focused
                                      />     
                                  </Grid>

                              </Grid>
                  
                              <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Volver
                                </Button> */}
                                <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                            
                                    Siguiente
                                </Button>
                              </Box> 
                              
                              
                          </Collapse>  
                          {/* mensaje de error */}
                          <Collapse in={openRepreLegal2}>
                              <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                                  <Alert severity="warning">
                                    <strong>Los Datos no son Correctos</strong> o <strong>No esta REGISTRADO . " POR FAVOR BERIFIQUE "</strong>!
                                  </Alert>
                              
                                  {/* <Alert severity="warning" action={
                                          <Button color="info" variant='outlined' size="small">
                                              Registrar
                                          </Button>
                                      } ><strong>Los Datos no son Correctos</strong> o <strong>No esta REGISTRADO . " POR FAVOR BERIFIQUE "</strong>!</Alert>
                              */}
                              </Stack>
                          </Collapse> 
                          
                          <Box 
                                sx={{mt:2,float:'right'}}
                                >
                                <Button variant="contained" id='btn_next' color="warning"  onClick={() => {beforeformstep(); handlePaginationBack()}} >
                                    Regresar
                                </Button>
                                
                          </Box>     
                      </Box>
                      
                  </Box>
              </Box>


              {/* slider confirmacion de contraseña */}
              <Box component='form' className='form_contrasenauser' id='form_step' >
                  <Box>
                    <Typography variant="p" color='error'><strong>Ingresar su Contraseña de usuario:</strong> </Typography>
                  </Box>
                  <Box>
                          <center>
                              <Grid container spacing={2} sx={{mt:1}}>
                                  
                                  <Grid item xs={12} md={12}>
                                      <FormControl sx={styleCampos} variant="outlined">
                                        {password.error ? (
                                          
                                          <InputLabel htmlFor="outlined-adornment-password" sx={{ color: 'red' }}>Contraseña </InputLabel>
                                          ) : (
                                            
                                          <InputLabel htmlFor="outlined-adornment-password">Contraseña </InputLabel>
                                        )
                                          
                                        }
                                        <OutlinedInput
                                          id="outlined-adornment-password"
                                          type={showPassword ? 'text' : 'password'}
                                          value={password.dato}
                                          onChange={(e) => validatePassword_empresa(e.target.value)}
                                          color={password.color}
                                          focused={password.fucosed}
                                          InputProps={{
                                            disableTabs: true,
                                          }}
                                          endAdornment={
                                            <InputAdornment position="end">
                                              <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                              >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                              </IconButton>
                                            </InputAdornment>
                                          }
                                          label="Contraseña"
                                          error={password.error}
                                          />
                                          {password.error ? (
                                            <FormHelperText sx={{ color: 'red' }}>{password.message}</FormHelperText>
                                            
                                            ) : (
                                              
                                              <FormHelperText sx={{ color: 'green' }}>{password.message}</FormHelperText>
                                            )

                                          }
                                      </FormControl>  
                                      {/* <TextField sx={styleCampos}
                                          id="pass1"
                                          label="Contraseña"
                                          type="password"
                                          defaultValue={password.dato}
                                          onChange={(e) => validatePassword_empresa(e.target.value)}
                                          error={password.error}
                                          helperText ={password.message}
                                          color={password.color}
                                          focused={password.fucosed}
                                          
                                      /> */}
                                  </Grid>
                                  {/* <Grid item xs={12} md={5}>
                                      <TextField sx={styleCampos}
                                          id="pass1"
                                          label="Confirmar Contraseña"
                                          type='text'
                                          // defaultValue={ciudadanop}
                                          // onChange={(e) => setCiudadanop(e.target.value)}
                                          
                                      />
                                  </Grid> */}
                                  <Grid item xs={12} md={12}>
                                    <Stack sx={{ width: '100%', mt:3 }} spacing={2}>
                                      <Alert severity="warning"><strong>Recuerde la contraseña que ingreso, ya que con esta podra Iniciar Sesión</strong> </Alert>
                                    </Stack>
                                      
                                  </Grid>
                                
                                  
                              </Grid>
                          </center>   
                      <Box 
                          sx={{mt:2,float:'right'}}
                          >
                          <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                              Regresar
                          </Button>
                          <Button variant="contained" id='btn_next' color="info" disabled={diseabledNextContrasena}
                            onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                      
                              Siguiente
                          </Button>
                      </Box>    
                  </Box>
              </Box>

              {/* slider preguntas de seguridad */}
              <Box component='form' className='form_preguntas_seguridad' id='form_step' onSubmit={HandleSubmitRegisterEmpresa} >
                  <Box>
                    <Typography variant="p" color='error'><strong>Ingrese sus Preguntas de Seguridad:</strong> </Typography>
                  </Box>
                  <Box>
                          <center>
                              <Grid container spacing={2} sx={{mt:1}}>
                                  
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="firstpreguntauser"
                                          label="Primera Pregunta"
                                          type='text'
                                          value={firstPregunta.dato}
                                          onChange={(e) => validate_FisrtPregunta(e.target.value.trim())}
                                          error={firstPregunta.error}
                                          helperText ={firstPregunta.message}
                                          color={firstPregunta.color}
                                          focused={firstPregunta.fucosed}
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="firstrespuesta"
                                          label="Primera Respuesta"
                                          type='text'
                                          value={firstRespuesta.dato}
                                          onChange={(e) => validate_FisrtRespuesta(e.target.value.trim())}
                                          error={firstRespuesta.error}
                                          helperText ={firstRespuesta.message}
                                          color={firstRespuesta.color}
                                          focused={firstRespuesta.fucosed}
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="secondpreguntauser"
                                          label="Segunda Pregunta"
                                          type='text'
                                          value={secondPregunta.dato}
                                          onChange={(e) => validate_SecondPregunta(e.target.value.trim())}
                                          error={secondPregunta.error}
                                          helperText ={secondPregunta.message}
                                          color={secondPregunta.color}
                                          focused={secondPregunta.fucosed}
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="secondrespuesta"
                                          label="Segunda Respuesta"
                                          type='text'
                                          value={secondRespuesta.dato}
                                          onChange={(e) => validate_SecondRespuesta(e.target.value.trim())}
                                          error={secondRespuesta.error}
                                          helperText ={secondRespuesta.message}
                                          color={secondRespuesta.color}
                                          focused={secondRespuesta.fucosed}
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="tercerapregunta"
                                          label="Tercera Pregunta"
                                          type='text'
                                          value={terceraPregunta.dato}
                                          onChange={(e) => validate_TercerPregunta(e.target.value.trim())}
                                          error={terceraPregunta.error}
                                          helperText ={terceraPregunta.message}
                                          color={terceraPregunta.color}
                                          focused={terceraPregunta.fucosed}
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="tercerarespuesta"
                                          label="Tercera Respuesta"
                                          type='text'
                                          value={terceraRespuesta.dato}
                                          onChange={(e) => validate_TercerRespuesta(e.target.value.trim())}
                                          error={terceraRespuesta.error}
                                          helperText ={terceraRespuesta.message}
                                          color={terceraRespuesta.color}
                                          focused={terceraRespuesta.fucosed}
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="cuartapregunta"
                                          label="Cuarta Pregunta"
                                          type='text'
                                          value={cuartaPregunta.dato}
                                          onChange={(e) => validate_CuartaPregunta(e.target.value.trim())}
                                          error={cuartaPregunta.error}
                                          helperText ={cuartaPregunta.message}
                                          color={cuartaPregunta.color}
                                          focused={cuartaPregunta.fucosed}
                                      />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <TextField sx={styleCampos}
                                          id="cuartarespuesta"
                                          label="Cuarta Respuesta"
                                          type='text'
                                          value={cuartaRespuesta.dato}
                                          onChange={(e) => validate_CuartaRespuesta(e.target.value.trim())}
                                          error={cuartaRespuesta.error}
                                          helperText ={cuartaRespuesta.message}
                                          color={cuartaRespuesta.color}
                                          focused={cuartaRespuesta.fucosed}
                                      />
                                  </Grid>
                                  
                              </Grid>
                                  <Stack sx={{ width: '100%', mt:3 }} spacing={2}>
                                    <Alert severity="warning"><strong>Recuerde sus Preguntas y Respuestas de Seguridad.</strong> </Alert>
                                  </Stack>
                          </center>   
                      <Box 
                          sx={{mt:2,float:'right'}}
                          >
                          <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => {beforeformstep(); handlePaginationBack()}} >
                              Regresar
                          </Button>
                          <Button type="submit" variant="contained" color="success"sx={{mr:2}} disabled={diseabledPreguntasSeguridad}>
                            Registrar
                          </Button> 
                          {/* <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep() ;handlePaginationNext()}} >
                                      
                              Siguiente
                          </Button> */}
                      </Box>    
                  </Box>
              </Box>
              

          </Box>


        </Box>


      </Box>
    </>
  )
}

export default BodyRegisterUser
