import { useNavigate,} from 'react-router-dom'
import { Box, Button, TextField, Collapse, Alert, 
        Autocomplete, Grid, Typography, Fab  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AxiosGet, AxiosPostSolicitud } from '../../Helpers/FetchAxios/FetchAxios.jsx'
import Swal from 'sweetalert2'
// notificaciones
import { ToastContainer, toast } from 'react-toastify';
// servicios
import {servidor} from  '../../Services/server.jsx'

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

import '../../assets/Css/FormStep.css'

import { nextformstep,beforeformstep } from '../../assets/JS/FormStep.js'
import '../../assets/Css/EstructuraForm.css'
import './viewhome.css'
// helpers
import PadStartCiudadano from '../../Helpers/Ciudadano/PadStartCiudadano.jsx'
// JS
import {expresionsRegulars, Texto_Expression,
  Tlf_First_Expression,Tlf_Second_Expression,Email_First_Expression,Email_Second_Expression,Text_number_Expressions,floatnumber_Expressions,
  number_Expressions,MaxText_number_Expression} from '../../assets/JS/ExpresionRegulares.js'


import Sidebar from '../../Routers/Sidebar.jsx';
import BodyPaginationStep from '../PaginacionStep/BodyPaginationStep.jsx'

// iconos
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

// import '../assets/Css/NavLink.css'
const styleCampos ={
    width:'100%',

}

 // ---------usuairo en localstorage:

//  let obtenerlocalstorage = localStorage.getItem('user')
//  let usarioempresa = JSON.parse(obtenerlocalstorage)
//  -------------------------------------



function BodySolicitud({user}) {
  // redirir a pagina una vez enviado el formulairo. Defino la ruta en Formulario Formas Product
  const navigate = useNavigate();


  // PAGINATION STEP FORM
  const [activeStepPagination, setActiveStepPagination] = useState(0);
  // Texto para los iconos del formulario de pasos
  const [TextStepPag, setTextStepPag] = useState([
    "Seleccionar tipo de solicitud",
    "Seleccionar tipo de categoria.",
    "Seleccionar tipo de operación.",
    "Seleccionar tipo de productos.",
    "Seleccionar tipo de establecimiento.",
    "Productos importados.",
    "Seleccionar forma de los productos.",
  ]);
  // iconos de pasos del formulario
  const [IconStepPag, setIconStepPag] = useState({
    1 :<DescriptionOutlinedIcon />, 
    2: <SourceOutlinedIcon />, 
    3:<PostAddOutlinedIcon />,
    4:<PostAddOutlinedIcon />,
    5:<AddBusinessOutlinedIcon />,
    6:<AddShoppingCartOutlinedIcon />,
    7:<FactCheckOutlinedIcon />,
  });

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  // collapse event
  const [CollapseCatgoria, setCollapseCatgoria] = useState(false);
  const [CollapseCatgoria2, setCollapseCatgoria2] = useState(false);
  const [CollapseOperaciones, setCollapseOperaciones] = useState(false);
  const [CollapseOperaciones2, setCollapseOperaciones2] = useState(false);
  const [CollapseProductos, setCollapseProductos] = useState(false);
  const [CollapseProductos2, setCollapseProductos2] = useState(false);
  const [CollapseEstablecimiento, setCollapseEstablecimiento] = useState(false);
  const [CollapseclouseEstablecimiento, setCollapseclouseEstablecimiento] = useState(false);
  const [CollapseEstablecimiento2, setCollapseEstablecimiento2] = useState(false);
  const [CollapseclouseEstablecimiento2, setCollapseclouseEstablecimiento2] = useState(false);
  const [CollapsePresentProductImport, setCollapsePresentProductImport] = useState(false);
  const [CollapseForma, setCollapseForma] = useState(false);
  const [CollapseForma2, setCollapseForma2] = useState(false);
  

  // ------------Establecimiento nr1--------------------

  const [selectEstablecimiento,setSelectEstablecimiento] = useState([])
  const [selectDominio,setSelectDominio] = useState([])
  const [selectEstatus,setSelectEstatus] = useState([])
  const [selectEstadoEstablecimiento,setSelectEstadoEstablecimiento] = useState([])
  const [selectMunicipioEstablecimiento,setSelectMunicipioEstablecimiento] = useState([])
  const [selectParroquiaEstablecimiento,setSelectParroquiaEstablecimiento] = useState([])
  const [direccionEstablecimiento, setEDireccionEstablecimiento] = useState("");
  const [tlfFirstEstablecimiento, setTlfFirstEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [tlfSecondEstablecimiento, setTlfSecondEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailFirstEstablecimiento, setEmailFirstEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [emailsecondEstablecimiento, setemailsecondEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [observacionEstablecimiento, setObservacionEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null});
  const [ZonaEstablecimiento , setZonaEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [RutasEstablecimiento , setRutasEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [EspacioEstablecimiento , setEspacioEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [NivelEstablecimiento , setNivelEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [ReferenciaEstablecimiento , setReferenciaEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [CodigoPostalEstablecimiento , setCodigoPostalEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [MetrosCuadradosEstablecimiento , setMetrosCuadradosEstablecimiento] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [diseabledEstablecimiento,setDiseabledEstablecimiento] = useState(true) // desabilitar btn registrar establecimiento
  // ------------Establecimiento nr2--------------------

  const [selectEstablecimiento2,setSelectEstablecimiento2] = useState([])
  const [selectDominio2,setSelectDominio2] = useState([])
  const [selectEstatus2,setSelectEstatus2] = useState([])
  const [selectEstadoEstablecimiento2,setSelectEstadoEstablecimiento2] = useState([])
  const [selectMunicipioEstablecimiento2,setSelectMunicipioEstablecimiento2] = useState([])
  const [selectParroquiaEstablecimiento2,setSelectParroquiaEstablecimiento2] = useState([])
  const [direccionEstablecimiento2, setEDireccionEstablecimiento2] = useState("");
  const [tlfFirstEstablecimiento2, setTlfFirstEstablecimiento2] = useState("");
  const [tlfSecondEstablecimiento2, setTlfSecondEstablecimiento2] = useState("");
  const [emailFirstEstablecimiento2, setEmailFirstEstablecimiento2] = useState("");
  const [emailsecondEstablecimiento2, setemailsecondEstablecimiento2] = useState("");
  const [observacionEstablecimiento2, setObservacionEstablecimiento2] = useState("");
  const [ZonaEstablecimiento2 , setZonaEstablecimiento2] = useState("")
  const [RutasEstablecimiento2 , setRutasEstablecimiento2] = useState("")
  const [EspacioEstablecimiento2 , setEspacioEstablecimiento2] = useState("")
  const [NivelEstablecimiento2 , setNivelEstablecimiento2] = useState("")
  const [ReferenciaEstablecimiento2 , setReferenciaEstablecimiento2] = useState("")
  const [CodigoPostalEstablecimiento2 , setCodigoPostalEstablecimiento2] = useState("")
  const [MetrosCuadradosEstablecimiento2 , setMetrosCuadradosEstablecimiento2] = useState("")
  // ------------Establecimiento nr3--------------------

  const [selectEstablecimiento3,setSelectEstablecimiento3] = useState([])
  const [selectDominio3,setSelectDominio3] = useState([])
  const [selectEstatus3,setSelectEstatus3] = useState([])
  const [selectEstadoEstablecimiento3,setSelectEstadoEstablecimiento3] = useState([])
  const [selectMunicipioEstablecimiento3,setSelectMunicipioEstablecimiento3] = useState([])
  const [selectParroquiaEstablecimiento3,setSelectParroquiaEstablecimiento3] = useState([])
  const [direccionEstablecimiento3, setEDireccionEstablecimiento3] = useState("");
  const [tlfFirstEstablecimiento3, setTlfFirstEstablecimiento3] = useState("");
  const [tlfSecondEstablecimiento3, setTlfSecondEstablecimiento3] = useState("");
  const [emailFirstEstablecimiento3, setEmailFirstEstablecimiento3] = useState("");
  const [emailsecondEstablecimiento3, setemailsecondEstablecimiento3] = useState("");
  const [observacionEstablecimiento3, setObservacionEstablecimiento3] = useState("");
  const [ZonaEstablecimiento3 , setZonaEstablecimiento3] = useState("")
  const [RutasEstablecimiento3 , setRutasEstablecimiento3] = useState("")
  const [EspacioEstablecimiento3 , setEspacioEstablecimiento3] = useState("")
  const [NivelEstablecimiento3 , setNivelEstablecimiento3] = useState("")
  const [ReferenciaEstablecimiento3 , setReferenciaEstablecimiento3] = useState("")
  const [CodigoPostalEstablecimiento3 , setCodigoPostalEstablecimiento3] = useState("")
  const [MetrosCuadradosEstablecimiento3 , setMetrosCuadradosEstablecimiento3] = useState("")
  // productos importados 
  const [NombreProductoimportado , setNombreProductoimportado] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [PresentacionProductoimportado , setPresentacionProductoimportado] = useState("")
  const [registroSanitarioProductImport , setregistroSanitarioProductImport] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [LaboratorioFabricanteproductimport , setLaboratorioFabricanteproductimport] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [PaisProcedenteProductImport , setPaisProcedenteProductImport] = useState("")
  const [NacpropietarioProductImport , setNacpropietarioProductImport] = useState("")
  const [propietarioProductImport , setpropietarioProductImport] = useState("")
  const [FarmaceuticoProductImport , setFarmaceuticoProductImport] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [NombrePropietairoProductImport , setNombrePropietairoProductImport] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [ApellidoPropietairoProductImport , setApellidoPropietairoProductImport] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [OtraPresentacionProductImport , setOtraPresentacionProductImport] = useState({dato:null,error : false,message : '',color:null,fucosed: null})
  const [diseabledAddProductImportado,setDiseabledAddProductImportado] = useState(true) // desabilitar btn agregar producto importado
  // --------------------------------------------------------------------------

   // hook ubicaicon general 
   const [lisEstado,setLisEstado] = useState([])
   const [lisMunicipio,setLisMunicipio] = useState([])
   const [lisParroquia,setLisParroquia] = useState([])
  // primer establecimiento
   const [listMunicipioEstadoEstablecimiento,setListMunicipioEstadoEstablecimiento] = useState([])
   const [listParroquiaMunicipioEstablecimiento,setListParroquiaMunicipioEstablecimiento] = useState([])
  // segundo establecimiento
   const [listMunicipioEstadoEstablecimiento2,setListMunicipioEstadoEstablecimiento2] = useState([])
   const [listParroquiaMunicipioEstablecimiento2,setListParroquiaMunicipioEstablecimiento2] = useState([])
  // tercer establecimiento
   const [listMunicipioEstadoEstablecimiento3,setListMunicipioEstadoEstablecimiento3] = useState([])
   const [listParroquiaMunicipioEstablecimiento3,setListParroquiaMunicipioEstablecimiento3] = useState([])

  // -----------------------------

  // tipo de solicitud
  const [listTipSolicitud,setListTipSolicitud] = useState([]);
  const [listnombreSolicitud,setListnombreSolicitud] = useState([]);
  const [listCoordinacionEmpresa,setListCoordinacionEmpresa] = useState([])
  const [listCoordinacionAreaEmpresa,setListCoordinacionAreaEmpresa] = useState([])
  const [listAreasEmpresa,setListAreasEmpresa] = useState([])
  const [listActividadEmpresa,setListActividadEmpresa] = useState([])
  const [lisCategoriaEmpresa,setLisCategoriaEmpresa] = useState([])
  const [lisOperaiconesEmpresa,setLisOperaiconesEmpresa] = useState([])
  const [lisProductosEmpresa,setLisProductosEmpresa] = useState([])
  const [lisPresentaiconProductImportadosEmpresa,setLisPresentaiconProductImportadosEmpresa] = useState([])
  const [lisPaisesProductosimportadosEmpresa,setLisPaisesProductosimportadosEmpresa] = useState([])
  const [diseabledTipSolicitud,setDiseabledTipSolicitud] = useState(true)
  // establecimiento
  const [listEstablecimiento, setListEstablecimiento] = useState([]);
  const [listSolicitudEstablecimiento, setListSolicitudEstablecimiento] = useState([]);
  const [listDominio, setListDominio] = useState([]);
  const [listEstatus, setListEstatus] = useState([]);
  // formas producto
  const [listFormasProduct, setListFormasProduct] = useState([]);
  
  // select solicitud
  const [selectTipSolicitud, setSelectTipSolicitud] = useState([]);
  const [selectNombreSolicitud, setSelectNombreSolicitud] = useState([]);
  // select area y actividad de empresa
  const [selectCoordinacionEmpresa, setSelectCoordinacionEmpresa] = useState([]);
  const [selectAreaEmpresa, setSelectAreaEmpresa] = useState([]);
  const [selectActivEmpresa, setSelectActivEmpresa] = useState([]);
  // select categoria segun la actividad de empresa
  const [selectCategoriaEmpresa, setSelectCategoriaEmpresa] = useState([]);
  const [diseabledTipCategoria,setDiseabledTipCategoria] = useState(true) //desabilitar bton tipo categoria
  // select operaicon segun la categoria de empresa
  const [selecOperaiconEmpresa, setSelecOperaiconEmpresa] = useState([]);
  const [diseabledAddTipOperations,setDiseabledAddTipOperations] = useState(true) //desabilitar bton agregar operacion
  // select productos segun la actividad de empresa
  const [selectProductosEmpresa, setSelectProductosEmpresa] = useState([]);
  const [diseabledAddTipProductSensib,setDiseabledAddTipProductSensib] = useState(true) //desabilitar bton tipo producto sensibilizante
  // select productos formas de productos
  const [selectFormasProductosEmpresa, setSelectFormasProductosEmpresa] = useState([]);
  const [diseabledFormaProductos,setDiseabledFormaProductos] = useState(true) //desabilitar bton tipo producto sensibilizante
  
  // select de varias operaicones:
  const [inputsdomOperaciones, setInputsDomOperaciones] = useState([]);
  const [disabledSubmitoperaciones, setDisabledSubmitoperaciones] = useState(true); //desabilitar bton register producto
  // select de varias productos:
  const [inputsdomProductos, setInputsDomProductos] = useState([]);
  const [disabledSubmitProductos, setDisabledSubmitProductos] = useState(true); //desabilitar bton register producto
  // ------------------------
  // select de varias formas del productos:
  const [inputsdomFormasProduct, setInputsDomFormasProduct] = useState([]);
  const [disabledSubmitFormasProduct, setDisabledSubmitFormasProduct] = useState(true); //desabilitar bton forma producto
  // ingreso de varios productos importados:
  const [inputsdomProductImportados, setInputsDomProductImportados] = useState([]);
  const [disabledSubmitProductImportados, setDisabledSubmitProductImportados] = useState(true); //desabilitar bton producto importados
  // ------------------------
  // -----------FILTRADO PARA LA SOLICITUD-------------
  // ----------------------------------------
  // filtrado segun el tipo de solicitud
  const [FilterlistnombreSolicitud, setFilterListnombreSolicitud] = useState([]);
  // filtrado de area sugun la cooordinacion
  const [FilterlistAreaEmpresa, setFilterListAreaEmpresa] = useState([]);
  // filtrado de actividad sugun el area
  const [FilterlistActivEmpresa, setFilterListActivEmpresa] = useState([]);
  // filtrado de categoria sugun el area
  const [FilterlistCategoriaEmpresa, setFilterListCategoriaEmpresa] = useState([]);
  // filtrado de operaciones sugun la categoria
  const [FilterlistOperacionesEmpresa, setFilterListOperacionesEmpresa] = useState([]);
  // filtrado de productos sugun la actividad
  const [FilterlistProductosEmpresa, setFilterListProductosEmpresa] = useState([]);
  // filtrado de establecimiento sugun el tipo de solicitud
  const [FilterlistSolicitudEstablecimiento, setFilterListSolicitudEstablecimiento] = useState([]);
  // filtrado de formas sugun el area de la empresa
  const [FilterlistFormaProductArea, setFilterListFormaProdAreauct] = useState([]);

  
   //   ----------------------------------------------
   // ------------------LIST ESTADO-MUNICIPIO - PARROQUIA---------------


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

  useEffect(() =>{
      ListEstado()
      ListMunicipio()
      ListParroquia()

  },[])

  // municipio-parroquia de los establecimientos segun su estado y municipio
  const municipioestadoEmpresaEstablecimiento = () => {
    setListMunicipioEstadoEstablecimiento(lisMunicipio.filter((item) => item.fk_estado == selectEstadoEstablecimiento.pk_estado))
  }
  const parroquiamunicipioEmpresaEstablecimiento = () => {
      setListParroquiaMunicipioEstablecimiento(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioEstablecimiento.pk_municipio))
  }
  const municipioestadoEmpresaEstablecimiento2 = () => {
    setListMunicipioEstadoEstablecimiento2(lisMunicipio.filter((item) => item.fk_estado == selectEstadoEstablecimiento2.pk_estado))
  }
  const parroquiamunicipioEmpresaEstablecimiento2 = () => {
      setListParroquiaMunicipioEstablecimiento2(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioEstablecimiento2.pk_municipio))
  }
  const municipioestadoEmpresaEstablecimiento3 = () => {
    setListMunicipioEstadoEstablecimiento3(lisMunicipio.filter((item) => item.fk_estado == selectEstadoEstablecimiento3.pk_estado))
  }
  const parroquiamunicipioEmpresaEstablecimiento3 = () => {
      setListParroquiaMunicipioEstablecimiento3(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioEstablecimiento3.pk_municipio))
  }


  useEffect(() =>{
    municipioestadoEmpresaEstablecimiento()
  },[selectEstadoEstablecimiento])
  useEffect(() =>{
    parroquiamunicipioEmpresaEstablecimiento()
  },[selectMunicipioEstablecimiento])
  useEffect(() =>{
    municipioestadoEmpresaEstablecimiento2()
  },[selectEstadoEstablecimiento2])
  useEffect(() =>{
    parroquiamunicipioEmpresaEstablecimiento2()
  },[selectMunicipioEstablecimiento2])
  useEffect(() =>{
    municipioestadoEmpresaEstablecimiento3()
  },[selectEstadoEstablecimiento3])
  useEffect(() =>{
    parroquiamunicipioEmpresaEstablecimiento3()
  },[selectMunicipioEstablecimiento3])

  // ------------------vaciar campos de ubicaicon 

   // vaciar estado municipio y parroquia de establecimientos
   const vaciarmunicipio_empresestablecimiento = document.getElementById('municipio_empresa_establecimiento')
   const vaciarparroquia_empresaestablecimiento = document.getElementById('parroquia_empresa_establecimiento')
   const vaciarmunicipio_empresestablecimiento2 = document.getElementById('municipio_empresa_establecimiento2')
   const vaciarparroquia_empresaestablecimiento2 = document.getElementById('parroquia_empresa_establecimiento2')
   const vaciarmunicipio_empresestablecimiento3 = document.getElementById('municipio_empresa_establecimiento3')
   const vaciarparroquia_empresaestablecimiento3 = document.getElementById('parroquia_empresa_establecimiento3')


   // vaciar campos estado municipio y parroquia de establecimineto
   const vaciar_municipio_empresa_establecimineto = () =>{
       // campos a vaciar 
       vaciarmunicipio_empresestablecimiento.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarmunicipio_empresestablecimiento.dispatchEvent(event);
       
     }
     const vaciar_parroquia_empresa_establecimiento = () =>{
       // campos a vaciar 
       vaciarparroquia_empresaestablecimiento.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarparroquia_empresaestablecimiento.dispatchEvent(event);
       
     }
   // vaciar campos estado municipio y parroquia de establecimineto2
   const vaciar_municipio_empresa_establecimineto2 = () =>{
       // campos a vaciar 
       vaciarmunicipio_empresestablecimiento2.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarmunicipio_empresestablecimiento2.dispatchEvent(event);
       
     }
     const vaciar_parroquia_empresa_establecimiento2 = () =>{
       // campos a vaciar 
       vaciarparroquia_empresaestablecimiento2.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarparroquia_empresaestablecimiento2.dispatchEvent(event);
       
     }
   // vaciar campos estado municipio y parroquia de establecimineto3
   const vaciar_municipio_empresa_establecimineto3 = () =>{
       // campos a vaciar 
       vaciarmunicipio_empresestablecimiento3.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarmunicipio_empresestablecimiento3.dispatchEvent(event);
       
     }
     const vaciar_parroquia_empresa_establecimiento3 = () =>{
       // campos a vaciar 
       vaciarparroquia_empresaestablecimiento3.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarparroquia_empresaestablecimiento3.dispatchEvent(event);
       
     }

   

    //  useEffect(() =>{
    //    municipioestadoEmpresaEstablecimiento()
    //  },[selectEstadoEstablecimiento])


  // ----------------------------------------------
   // ------------------SOLICITUD----------------------------

  const List_TipSolicitud=  () => {
    const url = `${servidor}Empresa/ListTipoSolicitud/Table`;
    AxiosGet(url,setListTipSolicitud)
 };
  const List_NombreSolicitud=  () => {
    const url = `${servidor}Empresa/ListNombreSolicitud/Table`;
    AxiosGet(url,setListnombreSolicitud)
  };

  // Coordinacion de la empresa
  const ListCoordinacionEmpresa = () =>{
    const url =`${servidor}Empresa/ListCoordinacion/Table`
    AxiosGet(url,setListCoordinacionEmpresa)
  }
  // area y actividad de la empresa
  const ListCoordinacionAreaEmpresa = () =>{
    const url =`${servidor}Empresa/ListCoordinacionArea/Table`
    AxiosGet(url,setListCoordinacionAreaEmpresa)
  }
  // area y actividad de la empresa
  const ListAreaEmpresa = () =>{
    const url =`${servidor}Empresa/ListAreasEmpresa/Table`
    AxiosGet(url,setListAreasEmpresa)
  }
  const ListActivAreaEmpresa = () =>{
    const url =`${servidor}Empresa/ListActivArea/Table`
    AxiosGet(url,setListActividadEmpresa)
  }
  // LISTA DE CATEGORIA DE EMPRESA
  const ListActivCategoriaEmpresa = () =>{
    const url =`${servidor}Empresa/ListActivCategoria/Table`
    AxiosGet(url,setLisCategoriaEmpresa)
  }
  // LISTA DE OPERACIONES DE EMPRESA
  const ListActivoperacionesEmpresa = () =>{
    const url =`${servidor}Empresa/ListOperacionesActiv/Table`
    AxiosGet(url,setLisOperaiconesEmpresa)
  }
  
  // LISTA DE PRODUCTOS DE EMPRESA
  const ListActivproductosEmpresa = () =>{
    const url =`${servidor}Empresa/ListActivProductos/Table`
    AxiosGet(url,setLisProductosEmpresa)
  }
  
  

  // ESTABLECIMIENTO

  const List_Establecimientos=  () => {
    const url = `${servidor}Empresa/ListTipEstablecimiento/Table`;
    AxiosGet(url,setListEstablecimiento)
  };
  const List_Solicitud_Establecimientos=  () => {
    const url = `${servidor}Empresa/ListSolicitudEstablecimiento/Table`;
    AxiosGet(url,setListSolicitudEstablecimiento)
  };
  const List_Dominio=  () => {
      const url = `${servidor}Empresa/ListTipoDominio/Table`;
      AxiosGet(url,setListDominio)
  };
  const List_Estatus=  () => {
      const url = `${servidor}Empresa/ListEstatus/Table`;
      AxiosGet(url,setListEstatus)
  };

  // FORMAS PRODUCTOS
  const List_FormasProduct=  () => {
      const url = `${servidor}Empresa/ListFormasProduct/Table`;
      AxiosGet(url,setListFormasProduct)
  };
  // LISTA DE PRESENTACION PRODUCTOS IMPORTADOS 
  const ListPresentacionproductosImportadosEmpresa = () =>{
    const url =`${servidor}Empresa/ListPresentacionProductImport/Table`
    AxiosGet(url,setLisPresentaiconProductImportadosEmpresa)
  }
  // LISTA DE PAISES PRODUCTOS IMPORTADOS 
  const ListPaisesproductosImportadosEmpresa = () =>{
    const url =`${servidor}Paises/Paises/Table`
    AxiosGet(url,setLisPaisesProductosimportadosEmpresa)
  }
  

  useEffect(() => {
    List_TipSolicitud();
  }, []);
  useEffect(() => {
      List_NombreSolicitud();
  }, []);
  // area y actividad de la empresa 
  useEffect(() =>{
    ListCoordinacionEmpresa()
    ListCoordinacionAreaEmpresa()
    ListAreaEmpresa()
    ListActivAreaEmpresa()
    ListActivCategoriaEmpresa()
    ListActivoperacionesEmpresa()
    ListActivproductosEmpresa()
  },[])
  // LISTADO DE DATA PARA ESTABLECIMIENTO
  useEffect(() =>{
    List_Establecimientos()
    List_Dominio()
    List_Estatus()
    List_FormasProduct()
    List_Solicitud_Establecimientos()
    ListPresentacionproductosImportadosEmpresa()
    ListPaisesproductosImportadosEmpresa()
  },[])

  
  const List_FilterNombreSolicitud=  () => {
    setFilterListnombreSolicitud(listnombreSolicitud.filter((item) => item.fk_tipo_solicitud == selectTipSolicitud.pk_tipo_solicitud))
  };
  // FILTRAR ESTABLECIMIENTO SEGUN NOMBRE DE LA SOLICITUD
  const List_FilternombreSolicitud_Establecimiento=  () => {
    setFilterListSolicitudEstablecimiento(listSolicitudEstablecimiento.filter((item) => item.fk_nombre_solicitud == selectNombreSolicitud.pk_nombre_solicitud))
  };
  // FILTRAR AREA SEGUN SU COORDINACION 
  const List_FilterAreaEmpresa=  () => {
    setFilterListAreaEmpresa(listCoordinacionAreaEmpresa.filter((item) => item.fk_coordinacion == selectCoordinacionEmpresa.fk_coordinacion))
  };
  // FILTRAR ACTIVIDAD SEGUN SU AREA Y COORDINACION
  const List_FilterActivEmpresa=  () => {
    setFilterListActivEmpresa(listActividadEmpresa.filter((item) => item.fk_coordinacion == selectCoordinacionEmpresa.fk_coordinacion && 
                                                          item.pk_coor_area == selectAreaEmpresa.pk_coor_area))
  };

  useEffect(() => {
    List_FilterNombreSolicitud();
  }, [selectTipSolicitud]);
  useEffect(() => {
    List_FilternombreSolicitud_Establecimiento();
  }, [selectNombreSolicitud]);

  useEffect(() => {
    List_FilterAreaEmpresa();
  }, [selectCoordinacionEmpresa]);
  useEffect(() => {
    List_FilterActivEmpresa();
  }, [selectAreaEmpresa]);

  // FILTRAR CATEGORIA SEGUN SI ESA ACTIVIDAD TIENE CATEGORIA
  const List_FilterCategoriaEmpresa=  () => {
    let filter_categorias = lisCategoriaEmpresa.filter((item) => item.pk_activ_economic == selectActivEmpresa.fk_activ_economic)
    if (filter_categorias.length > 0) {
      // setCollapseProductos(false)
      // setCollapseProductos2(true)
      setCollapseCatgoria2(false)
      setCollapseCatgoria(true)
      setFilterListCategoriaEmpresa(filter_categorias)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_productos = 
      setCollapseCatgoria2(true)
      // setCollapseProductos(true)
      setCollapseCatgoria(false)
    }
  };
  // FILTRAR OPERACIONES SEGUN SU AREA Y ACTIVIDAD
  const List_FilterOperaiconesEmpresa=  () => {
    let filter_operaicones = lisOperaiconesEmpresa.filter((item) => item.pk_coor_area == selectActivEmpresa.pk_coor_area && 
                                                           item.fk_activ_economic == selectActivEmpresa.fk_activ_economic)
    
    if (filter_operaicones.length > 0) {
      // setInputsDomOperaciones([])
      setCollapseOperaciones(true)
      setCollapseOperaciones2(false)
      setFilterListOperacionesEmpresa(filter_operaicones)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_productos = 
      setInputsDomOperaciones([])
      setCollapseOperaciones(false)
      setCollapseOperaciones2(true)

    }
  };
  // FILTRAR PRODUCTOS SEGUN SU AREA Y ACTIVIIDAD 
  const List_FilterProductoEmpresa=  () => {
    let filter_productos = lisProductosEmpresa.filter((item) => item.fk_area == selectAreaEmpresa.pk_area &&
                                                                item.pk_activ_economic == selectActivEmpresa.fk_activ_economic)
    if (filter_productos.length > 0) {
      setCollapseProductos(true)
      setCollapseProductos2(false)
      setFilterListProductosEmpresa(filter_productos)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_productos = 
      setCollapseProductos(false)
      setCollapseProductos2(true)
    }
  };
  // FILTRAR ESTABLECIMIENTO SEGUN NOMBRE DE LA SOLICITUD
  const List_FilterFormaAreaEmpresa=  () => {
    let filter_formas = listFormasProduct.filter((item) => item.fk_area == selectAreaEmpresa.pk_area)

    if (filter_formas.length > 0) {
      setCollapseForma(true)
      setCollapseForma2(false)
      setFilterListFormaProdAreauct(filter_formas)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_formas = 
      setCollapseForma(false)
      setCollapseForma2(true)
    }

  };

  useEffect(() => {
    List_FilterCategoriaEmpresa();
  }, [selectActivEmpresa]);
  useEffect(() => {
    List_FilterOperaiconesEmpresa();
  }, [selectCategoriaEmpresa]);
  useEffect(() => {
    List_FilterProductoEmpresa();
  }, [selectActivEmpresa]);
  useEffect(() => {
    List_FilterFormaAreaEmpresa();
  }, [selectAreaEmpresa]);


  // Evento para vaciar campos de solicitud :
  const vaciarnombreSolciitud = document.getElementById('select_nombre_solicitud')
  const vaciarAreaEmpresa = document.getElementById('selectarea')
  const vaciaractividadEmpresa = document.getElementById('selectActividadempresa')
  const vaciarcategoriaEmpresa = document.getElementById('select_tipo_categoria')
  const vaciaroperacionEmpresa = document.getElementById('select_tipo_operaciones')
  const vaciarproductosEmpresa = document.getElementById('select_tipo_productos')

  // vaciar campos 
  const vaciar_nombre_solcitud = () =>{
    // campos a vaciar 
    vaciarnombreSolciitud.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciarnombreSolciitud.dispatchEvent(event);
    
  }
  const vaciar_area_empresa = () =>{
    // campos a vaciar 
    vaciarAreaEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciarAreaEmpresa.dispatchEvent(event);
    
  }
  const vaciar_activ_empresa = () =>{
    // campos a vaciar 
    vaciaractividadEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciaractividadEmpresa.dispatchEvent(event);
    
  }
  const vaciar_categoria_empresa = () =>{
    // campos a vaciar 
    vaciarcategoriaEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciarcategoriaEmpresa.dispatchEvent(event);
    
  }
  const vaciar_operacion_empresa = () =>{
    // campos a vaciar 
    vaciaroperacionEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciaroperacionEmpresa.dispatchEvent(event);
    
  }
  const vaciar_productos_empresa = () =>{
    // campos a vaciar 
    vaciarproductosEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciarproductosEmpresa.dispatchEvent(event);
    
  }

  
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS OPERACIONES-------------------------
  // *---------------------------------------------------

  //  CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomOperaciones.length > 0 ){
      setDisabledSubmitoperaciones(false)
    }else{
      setDisabledSubmitoperaciones(true)
    }
    setInputsDomOperaciones(inputsdomOperaciones)
  },[inputsdomOperaciones])
  
  const addInputoperaciones = () => {
    setInputsDomOperaciones([...inputsdomOperaciones,{
      rifempresa:user.pk_empresa,
      pkcategoria: selectCategoriaEmpresa.pk_categoria,
      categoria: selectCategoriaEmpresa.nombre,
      pk_operaciones : selecOperaiconEmpresa.pk_operaciones,
      nombre_operaciones: selecOperaiconEmpresa.nombre_operaciones,
      
    }]);

  
  };
  // ELEMINIAR INPUTS CREADOS 
  const DeleteInputoperaciones = (pk) => {
    // const indexInput = [inputsdomOperaciones[index]]
    setInputsDomOperaciones(inputsdomOperaciones.filter((item) => item.pk_operaciones !== pk ));
    
  };
  
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS PRODUCTOS-------------------------
  // *---------------------------------------------------

  // CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomProductos.length > 0 ){
      setDisabledSubmitProductos(false)
    }else{
      setDisabledSubmitProductos(true)
    }
    setInputsDomProductos(inputsdomProductos)
  },[inputsdomProductos])
  
  const addInputProductos = () => {
    setInputsDomProductos([...inputsdomProductos,{
      rifempresa:user.pk_empresa,
      pk_activ_economic : selectActivEmpresa.fk_activ_economic,
      activ_economica : selectActivEmpresa.activ_economica, 
      // pk_activ_economic : selectProductosEmpresa.pk_activ_economic,
      pk_tip_producto : selectProductosEmpresa.pk_tip_producto,
      nombre_tip_producto: selectProductosEmpresa.nombre_tip_producto
    }]);

  
  };
  // ELEMINIAR INPUTS CREADOS 
  const DeleteInputProductos = (pk) => {
    // const indexInput = [inputsdomProductos[index]]
    setInputsDomProductos(inputsdomProductos.filter((item) => item.pk_tip_producto !== pk ));    
  };
  
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS FORMAS PRODUCTOS-------------------------
  // *---------------------------------------------------

  // CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomFormasProduct.length > 0 ){
      setDisabledSubmitFormasProduct(false)
    }else{
      setDisabledSubmitFormasProduct(true)
    }
    setInputsDomFormasProduct(inputsdomFormasProduct)
  },[inputsdomFormasProduct])
  
  const addInputFormaProductos = () => {
    setInputsDomFormasProduct([...inputsdomFormasProduct,{
      rifempresa:user.pk_empresa,
      pk_forma_product: selectFormasProductosEmpresa.pk_forma_product,
      forma_producto: selectFormasProductosEmpresa.forma_producto,
    }]);

  
  };
  // ELEMINIAR INPUTS CREADOS 
  const DeleteInputFormaProductos = (pk) => {
    // const indexInput = [inputsdomFormasProduct[index]]
    setInputsDomFormasProduct(inputsdomFormasProduct.filter((item) => item.pk_forma_product !== pk ));
    
  };
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS PRODUCTOS IMPORTADOS-------------------------
  // *---------------------------------------------------

  // CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomProductImportados .length > 0 ){
      setDisabledSubmitProductImportados(false)
    }else{
      setDisabledSubmitProductImportados(true)
    }
    setInputsDomProductImportados(inputsdomProductImportados )
  },[inputsdomProductImportados ])

  // CADA VEZ QUE SE ACTUALICE EL ESTADO CollapsePresentProductImport SE EJECUTARA LA FUNCION
  //  Y SI MI PRESENTACION DE PRODUCTO ES "OTRO" ENTONCES MOSTRAR CAMPO INPUT 
  useEffect(()=>{
    if(PresentacionProductoimportado.pk_present_product_import == "17" ){
      setCollapsePresentProductImport(true)
      // ! validar que el nuevo campo no este vacio
      
    }else{
      setCollapsePresentProductImport(false)
      setOtraPresentacionProductImport({dato:''})
      // setDisabledSubmitProductImportados(true)
    }
  },[PresentacionProductoimportado ])
  
  
 const addInputProductosImportados = () => {

  let datacedulapropietario = `${NacpropietarioProductImport  + PadStartCiudadano(propietarioProductImport  )}`

  // si es nueva presentacion cambiar el valor de presentacionProductImport por el hook otraNuevapresentaicon
  if (PresentacionProductoimportado.pk_present_product_import == "17") {
    setInputsDomProductImportados([...inputsdomProductImportados ,{
      rifempresa:user.pk_empresa,
      NombreProductoimportado :NombreProductoimportado.dato ,
      PresentacionProductImport :OtraPresentacionProductImport.dato, //cambiamos la presentacion por la nueva hecha por el usuario
      registroSanitarioProductImport :registroSanitarioProductImport.dato ,
      LaboratorioFabricanteproductimport :LaboratorioFabricanteproductimport.dato ,
      PaisProcedenteProductImport :PaisProcedenteProductImport.nombre_pais ,
      datacedulapropietario:NombrePropietairoProductImport.dato +' '+ ApellidoPropietairoProductImport.dato ,
      // datacedulapropietario:datacedulapropietario,
      FarmaceuticoProductImport :FarmaceuticoProductImport.dato ,
      // propietarioProductImport :NacpropietarioProductImport + propietarioProductImport , //solo la cedula para mostrarla
    }]);

    
    // vaciar hook de establecimiento para reutilizarlos 
    setNombreProductoimportado({dato:''})
    // setregistroSanitarioProductImport({dato:''})
    setLaboratorioFabricanteproductimport({dato:''})
    setFarmaceuticoProductImport({dato:''})
    setOtraPresentacionProductImport({dato:''})
    
  }else{

    setInputsDomProductImportados([...inputsdomProductImportados ,{
      rifempresa:user.pk_empresa,
      NombreProductoimportado :NombreProductoimportado.dato ,
      PresentacionProductImport :PresentacionProductoimportado.presentacion_product_import ,
      registroSanitarioProductImport :registroSanitarioProductImport.dato ,
      LaboratorioFabricanteproductimport :LaboratorioFabricanteproductimport.dato ,
      PaisProcedenteProductImport :PaisProcedenteProductImport.nombre_pais ,
      datacedulapropietario:NombrePropietairoProductImport.dato +' '+ ApellidoPropietairoProductImport.dato ,
      // datacedulapropietario:datacedulapropietario,
      FarmaceuticoProductImport :FarmaceuticoProductImport.dato ,
      // propietarioProductImport :NacpropietarioProductImport + propietarioProductImport , //solo la cedula para mostrarla
    }]);

    
  // vaciar hook de establecimiento para reutilizarlos 
  // setNombreProductoimportado('')
  // setregistroSanitarioProductImport('')
  // setLaboratorioFabricanteproductimport('')
  // setFarmaceuticoProductImport('')

    setNombreProductoimportado({dato:''})
    // setregistroSanitarioProductImport({dato:''})
    setLaboratorioFabricanteproductimport({dato:''})
    setFarmaceuticoProductImport({dato:''})
    setOtraPresentacionProductImport({dato:''})

  }



};
// ELEMINIAR INPUTS CREADOS 
const DeleteInputProductImportados = (producto) => {
  // const indexInput = [inputsdomProductImportados [index]]
  setInputsDomProductImportados(inputsdomProductImportados .filter((item) => item.NombreProductoimportado !== producto ));
  
};

  // -----------------------------------
  // REGISTRO DE TIPO DE SOLICITUD 
  // --------------------------------------

  const DataTip_Solicitud = () =>{
    const objtipSolicitud = {
      
      rifempresa:user.pk_empresa,
      tiposolicitud: selectTipSolicitud.pk_tipo_solicitud,
      nombresolicitud : selectNombreSolicitud.pk_nombre_solicitud ,
      areaempresa : selectAreaEmpresa.pk_coor_area , // guardamos el pk_coor_area en fk_area debido a una modificacion en el sistema 
      // areaempresa : selectAreaEmpresa.pk_area ,
      activempresa : selectActivEmpresa.fk_activ_economic ,
    }
    
    List_FilterCategoriaEmpresa()
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertTipSolicitud`
    // const url =`${servidor}empresa/SolicitudEmpresa/InsertTipSolicitud`
    AxiosPostSolicitud(url,objtipSolicitud,` ${selectTipSolicitud.descripcion}`,null)

    // AxiosPost(url,objtipSolicitud,` ${selectTipSolicitud.descripcion}`,null)
  }
  const DataCategoria_Solicitud = () =>{
    const objCategoriaSolicitud = {
      rifempresa:user.pk_empresa,
      categoria:selectCategoriaEmpresa.pk_categoria,
    }
    
    List_FilterOperaiconesEmpresa()
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertCategoriaSolicitud`
    // const url =`${servidor}empresa/SolicitudEmpresa/InsertCategoriaSolicitud`
    AxiosPostSolicitud(url,objCategoriaSolicitud,` ${selectCategoriaEmpresa.nombre} Registrado`,null)

    // AxiosPost(url,objtipSolicitud,` ${selectTipSolicitud.descripcion}`,null)
  }

  const Dataoperaciones_Solicitud = () =>{
    
    
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertOperacionesSolicitud`
    AxiosPostSolicitud(url,inputsdomOperaciones,` Productos de su Empresa Registrados`,null)
  }
  const DataProductos_Solicitud = () =>{
    
    
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertProductosSolicitud`
    AxiosPostSolicitud(url,inputsdomProductos,` Productos de su Empresa Registrados`,null)
  }
  const DataEstablecimiento_Solicitud = () =>{

    const objEstablecimiento = {
      rifempresa:user.pk_empresa,
      tipestablecimiento :selectEstablecimiento.pk_tip_establecimiento,
      dominio :selectDominio.pk_dominio,
      parroquia :selectParroquiaEstablecimiento.pk_parroquia,
      tlf :tlfFirstEstablecimiento.dato,
      tfldos  :tlfSecondEstablecimiento.dato,
      email :emailFirstEstablecimiento.dato,
      emaildos :emailsecondEstablecimiento.dato,
      observacion :observacionEstablecimiento.dato,
      estatus :selectEstatus.pk_estatus,
      zonaestablecimiento  :ZonaEstablecimiento.dato ,
      rutaestablecimiento  :RutasEstablecimiento.dato ,
      espacioestablecimiento  :EspacioEstablecimiento.dato ,
      nivelestablecimiento  :NivelEstablecimiento.dato ,
      codigoestablecimiento  :CodigoPostalEstablecimiento.dato ,
      metroscuadradosestablecimiento  :MetrosCuadradosEstablecimiento.dato ,
      referenciaestablecimiento  :ReferenciaEstablecimiento.dato ,
  
    } 
    
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertPrimerEstablecimientoSolicitud`
    AxiosPostSolicitud(url,objEstablecimiento,` ${selectEstablecimiento.descripcion} Registrado`,null)
  }
  
  const DataEstablecimiento2_Solicitud = () =>{

    const objEstablecimiento = {
      rifempresa:user.pk_empresa,
      tipestablecimiento :selectEstablecimiento2.pk_tip_establecimiento,
      dominio :selectDominio2.pk_dominio,
      parroquia :selectParroquiaEstablecimiento2.pk_parroquia,
      direstablecimiento :direccionEstablecimiento2,
      tlf :tlfFirstEstablecimiento2,
      tfldos  :tlfSecondEstablecimiento2,
      email :emailFirstEstablecimiento2,
      emaildos :emailsecondEstablecimiento2,
      observacion :observacionEstablecimiento2,
      estatus :selectEstatus2.pk_estatus,
      zonaestablecimiento  :ZonaEstablecimiento2 ,
      rutaestablecimiento  :RutasEstablecimiento2 ,
      espacioestablecimiento  :EspacioEstablecimiento2 ,
      nivelestablecimiento  :NivelEstablecimiento2 ,
      codigoestablecimiento  :CodigoPostalEstablecimiento2 ,
      metroscuadradosestablecimiento  :MetrosCuadradosEstablecimiento2 ,
      referenciaestablecimiento  :ReferenciaEstablecimiento2 ,
  
    } 
    
    const url =`${servidor}empresa/solicitudempresa/InsertPrimerEstablecimientoSolicitud`
    AxiosPostSolicitud(url,objEstablecimiento,` ${selectEstablecimiento2.descripcion} Registrado`,null)

    // vaciar hook de establecimiento para reutilizarlos 
  }
  const DataEstablecimiento3_Solicitud = () =>{

    const objEstablecimiento = {
      rifempresa:user.pk_empresa,
      tipestablecimiento :selectEstablecimiento3.pk_tip_establecimiento,
      dominio :selectDominio3.pk_dominio,
      parroquia :selectParroquiaEstablecimiento3.pk_parroquia,
      tlf :tlfFirstEstablecimiento3,
      tfldos  :tlfSecondEstablecimiento3,
      email :emailFirstEstablecimiento3,
      emaildos :emailsecondEstablecimiento3,
      observacion :observacionEstablecimiento3,
      estatus :selectEstatus3.pk_estatus,
      zonaestablecimiento  :ZonaEstablecimiento3 ,
      rutaestablecimiento  :RutasEstablecimiento3 ,
      espacioestablecimiento  :EspacioEstablecimiento3 ,
      nivelestablecimiento  :NivelEstablecimiento3 ,
      codigoestablecimiento  :CodigoPostalEstablecimiento3 ,
      metroscuadradosestablecimiento  :MetrosCuadradosEstablecimiento3 ,
      referenciaestablecimiento  :ReferenciaEstablecimiento3 ,
  
    } 
  
    const url =`${servidor}empresa/solicitudempresa/InsertPrimerEstablecimientoSolicitud`
    AxiosPostSolicitud(url,objEstablecimiento,` ${selectEstablecimiento3.descripcion} Registrado`,null)

  }

  const Dataproductimportados_Solicitud = () =>{
  
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertProductImportSolicitud`
    AxiosPostSolicitud(url,inputsdomProductImportados ,` Productos Importados Registrados`,null)
    
  }
  const DataFormasproduct_Solicitud = () =>{

    if (inputsdomFormasProduct.length > 0) {
      
      const url =`${servidor}Empresa/SolicitudEmpresa/InsertFormasProductSolicitud`
      AxiosPostSolicitud(url,inputsdomFormasProduct,` Formas de sus Productos Registrados`,null)
      Swal.fire(
        'Finalizado!',
        `Registro culminado` ,
        'success'
      )
      // setTimeout para redirigir después de dos segundos
      setTimeout(() => {
        navigate('/Home');
      }, 1000);
    }else{
      Swal.fire(
        'Finalizado!',
        `Registro culminado` ,
        'success'
      )
      // setTimeout para redirigir después de dos segundos
      setTimeout(() => {
        navigate('/Home');
      }, 1000);
    }
    

  }
  

 
  
  const HandleSubmitTipSolicitud = (e) =>{
    e.preventDefault()
    DataTip_Solicitud()
    nextformstep()
    handlePaginationNext()
    
  }
  const HandleSubmitCategoriaSolicitud = (e) =>{
    e.preventDefault()
    DataCategoria_Solicitud()
    nextformstep()
    handlePaginationNext()
  
  }
  const HandleSubmitOperaiconesSolicitud = (e) =>{
    e.preventDefault()
    Dataoperaciones_Solicitud()
    nextformstep()
    handlePaginationNext()
    
  }
  const HandleSubmitProductosSolicitud = (e) =>{
    e.preventDefault()
    DataProductos_Solicitud()
    nextformstep()
    handlePaginationNext()
  
  }
  const HandleSubmitEstablecimientoSolicitud = (e) =>{
    e.preventDefault()
    DataEstablecimiento_Solicitud()
    nextformstep()
    handlePaginationNext()
  
  }

  // NO UTILIZADA PORQUE SE REALIZA UNA SOLICITUD POR CADA ESTABLECIMINETO
  // const HandleSubmitEstablecimiento2Solicitud = (e) =>{
  //   e.preventDefault()
  //   DataEstablecimiento2_Solicitud()
  //   nextformstep()
  
  // }
  // const HandleSubmitEstablecimiento3Solicitud = (e) =>{
  //   e.preventDefault()
  //   DataEstablecimiento3_Solicitud()
  //   nextformstep()
  
  // }
  const HandleSubmitProductImportadosSolicitud = (e) =>{
    e.preventDefault()
    Dataproductimportados_Solicitud()
    nextformstep()
    handlePaginationNext()
  
  }
  const HandleSubmitFormasProductSolicitud = (e) =>{
    e.preventDefault()
    DataFormasproduct_Solicitud()
    nextformstep()
    handlePaginationNext()
  
  }

  
  // ---------------------------------------------------------------- 
  // PAGINACION DE PASOS FORMULARIO
  // ---------------------------------------------------------------- 
  
  const handlePaginationNext = () => {
    setActiveStepPagination((prevActiveStep) => prevActiveStep + 1);
  };
  
  // const handlePaginationBack = () => {
  //   setActiveStepPagination((prevActiveStep) => prevActiveStep - 1);
  // };

  // ---------------------------------------------------------------- 
  // ---------------------------------------------------------------- 
  
  
  // -----------------------------------------------------------
  // -----------------------------------------------------------
  // ------------------VALIDACIONES DE CAMPOS VACIOS EN TODA LA SOLICITUD -----------------------------------------
  // -----------------------------------------------------------
  // -----------------------------------------------------------

   // VALIDACION TIPO SOLICITUD
   let select_tipo_solicitud = document.getElementById('select_tipo_solicitud')
   let select_nombre_solicitud = document.getElementById('select_nombre_solicitud')
   let selectarea = document.getElementById('selectarea')
   let selectActividadempresa = document.getElementById('selectActividadempresa')

  // const [actividadEmpresa,setActividadEmpresa] = useState(selectActividadempresa)

   useEffect(() =>{
    if(

      selectTipSolicitud.length == 0 || selectTipSolicitud == '' || selectTipSolicitud == null || select_tipo_solicitud.value.length === 0|| select_tipo_solicitud.value.length === null ||
      selectNombreSolicitud.length == 0 || selectNombreSolicitud == '' || selectNombreSolicitud == null || select_nombre_solicitud.value.length === 0|| select_nombre_solicitud.value.length === null ||
      selectAreaEmpresa.length == 0 || selectAreaEmpresa == '' || selectAreaEmpresa == null || selectarea.value.length === 0|| selectarea.value.length === null ||
      selectActivEmpresa.length == 0 || selectActivEmpresa == '' || selectActivEmpresa == null || selectActividadempresa.value.length === 0|| selectActividadempresa.value.length === null
      
      ){
      setDiseabledTipSolicitud(true)
    }else
          {
      setDiseabledTipSolicitud(false)
    }
  },[selectTipSolicitud,selectNombreSolicitud,selectAreaEmpresa,selectActivEmpresa])


  // VALIDATION CAMPO "TIPO DE CATEGORIA"

  let select_tipo_categoria = document.getElementById('select_tipo_categoria')

  useEffect(() =>{
    if(
      selectCategoriaEmpresa.length == 0 || selectCategoriaEmpresa == '' || selectCategoriaEmpresa == null || select_tipo_categoria.value.length === 0|| select_tipo_categoria.value.length === null
      ){
      setDiseabledTipCategoria(true)
    }else{
      setDiseabledTipCategoria(false)
    }
  },[selectCategoriaEmpresa])


  // VALIDATION "TIPO DE OPERACION"

  let select_tipo_operaciones = document.getElementById('select_tipo_operaciones')

  useEffect(() =>{
    if(
      selecOperaiconEmpresa.length == 0 || selecOperaiconEmpresa == '' || selecOperaiconEmpresa == null || select_tipo_operaciones.value.length === 0|| select_tipo_operaciones.value.length === null
      ){
      setDiseabledAddTipOperations(true)
    }else{
      setDiseabledAddTipOperations(false)
    }
  },[selecOperaiconEmpresa])

  // VALIDATION "TIPO DE PRODUCTOS"

  let select_tipo_productos = document.getElementById('select_tipo_productos')

  useEffect(() =>{
    if(
      selectProductosEmpresa.length == 0 || selectProductosEmpresa == '' || selectProductosEmpresa == null || select_tipo_productos.value.length === 0|| select_tipo_productos.value.length === null
      ){
      setDiseabledAddTipProductSensib(true)
    }else{
      setDiseabledAddTipProductSensib(false)
    }
  },[selectProductosEmpresa])

  // VALIDATION "TIPO DE ESTABLECIMIENTO"

  const validatefirstTlf_Establecimineto = (value) => {
    Tlf_First_Expression(value,setTlfFirstEstablecimiento,tlfSecondEstablecimiento.dato)
  } 
  const validateSecondtTlf_Establecimiento = (value) => {
    Tlf_Second_Expression(value,setTlfSecondEstablecimiento,tlfFirstEstablecimiento.dato)
  
  } 
  const validateFirstEmail_Establecimiento = (value) => {
    Email_First_Expression(value,setEmailFirstEstablecimiento,emailsecondEstablecimiento.dato)
   
  }
  const validateSecondEmail_Establecimiento = (value) => {
    Email_Second_Expression(value,setemailsecondEstablecimiento,emailFirstEstablecimiento.dato)
    
  }
  const validateZona_Establecimiento = (value) => {
    Text_number_Expressions(value,setZonaEstablecimiento)
   
  } 
  const validateRutas_Establecimiento = (value) => {
    Text_number_Expressions(value,setRutasEstablecimiento)
   
  } 
  const validateEspacio_Establecimiento = (value) => {
    Text_number_Expressions(value,setEspacioEstablecimiento)
   
  } 
  const validateNivel_Establecimiento = (value) => {
    Text_number_Expressions(value,setNivelEstablecimiento)
   
  } 
  const validateCodigo_Establecimiento = (value) => {
    number_Expressions(value,setCodigoPostalEstablecimiento)
  } 
  const validateMetrosCuadrados_Establecimiento = (value) => {
    floatnumber_Expressions(value,setMetrosCuadradosEstablecimiento)
  } 
  const validateReferencia_Establecimiento = (value) => {
    MaxText_number_Expression(value,setReferenciaEstablecimiento)
  } 
  const validateObservacion_Establecimiento = (value) => {
    MaxText_number_Expression(value,setObservacionEstablecimiento)
  } 

  let select_establecimiento = document.getElementById('select_establecimiento')
  let select_dominio = document.getElementById('select_dominio')
  let select_estatus_establecimineto = document.getElementById('select_estatus_establecimineto')
  let select_estado_empresa_establecimiento = document.getElementById('estado_empresa_establecimiento')
  let select_municipio_empresa_establecimiento = document.getElementById('municipio_empresa_establecimiento')
  let select_parroquia_empresa_establecimiento = document.getElementById('parroquia_empresa_establecimiento')

  useEffect(() =>{
    if(
      selectEstablecimiento.length == 0 || selectEstablecimiento == '' || selectEstablecimiento == null || select_establecimiento.value.length === 0|| select_establecimiento.value.length === null ||
      selectDominio.length == 0 || selectDominio == '' || selectDominio == null || select_dominio.value.length === 0|| select_dominio.value.length === null ||
      selectEstatus.length == 0 || selectEstatus == '' || selectEstatus == null || select_estatus_establecimineto.value.length === 0|| select_estatus_establecimineto.value.length === null ||
      
      !expresionsRegulars.numberRegex.test(tlfFirstEstablecimiento.dato) || tlfFirstEstablecimiento.dato === null || tlfFirstEstablecimiento.dato === undefined || 
      !expresionsRegulars.numberRegex.test(tlfSecondEstablecimiento.dato) || tlfSecondEstablecimiento.dato === null || tlfSecondEstablecimiento.dato === undefined ||  
      !expresionsRegulars.emailRegex.test(emailFirstEstablecimiento.dato) || emailFirstEstablecimiento.dato === null || emailFirstEstablecimiento.dato === undefined ||
      !expresionsRegulars.emailRegex.test(emailsecondEstablecimiento.dato) || emailsecondEstablecimiento.dato === null || emailsecondEstablecimiento.dato === undefined ||

      selectEstadoEstablecimiento.length == 0 || selectEstadoEstablecimiento == '' || selectEstadoEstablecimiento == null || select_estado_empresa_establecimiento.value.length === 0|| select_estado_empresa_establecimiento.value.length === null ||
      selectMunicipioEstablecimiento.length == 0 || selectMunicipioEstablecimiento == '' || selectMunicipioEstablecimiento == null || select_municipio_empresa_establecimiento.value.length === 0|| select_municipio_empresa_establecimiento.value.length === null ||
      selectParroquiaEstablecimiento.length == 0 || selectParroquiaEstablecimiento == '' || selectParroquiaEstablecimiento == null || select_parroquia_empresa_establecimiento.value.length === 0|| select_parroquia_empresa_establecimiento.value.length === null ||

      !expresionsRegulars.textonumberRegex.test(ZonaEstablecimiento.dato) || ZonaEstablecimiento.dato === null || ZonaEstablecimiento.dato === undefined ||
      !expresionsRegulars.textonumberRegex.test(RutasEstablecimiento.dato) || RutasEstablecimiento.dato === null || RutasEstablecimiento.dato === undefined ||
      !expresionsRegulars.textonumberRegex.test(EspacioEstablecimiento.dato) || EspacioEstablecimiento.dato === null || EspacioEstablecimiento.dato === undefined ||
      !expresionsRegulars.textonumberRegex.test(NivelEstablecimiento.dato) || NivelEstablecimiento.dato === null || NivelEstablecimiento.dato === undefined ||
      !expresionsRegulars.numberRegex.test(CodigoPostalEstablecimiento.dato) || CodigoPostalEstablecimiento.dato === null || CodigoPostalEstablecimiento.dato === undefined ||
      !expresionsRegulars.floatnumberRegex.test(MetrosCuadradosEstablecimiento.dato) || MetrosCuadradosEstablecimiento.dato === null || MetrosCuadradosEstablecimiento.dato === undefined ||
      !expresionsRegulars.maxtextonumberRegex.test(ReferenciaEstablecimiento.dato) || ReferenciaEstablecimiento.dato === null || ReferenciaEstablecimiento.dato === undefined ||
      !expresionsRegulars.maxtextonumberRegex.test(observacionEstablecimiento.dato) || observacionEstablecimiento.dato === null || observacionEstablecimiento.dato === undefined
      ){
      setDiseabledEstablecimiento(true)
    }else{
      setDiseabledEstablecimiento(false)
    }
  },[selectEstablecimiento,selectDominio,selectEstatus,tlfFirstEstablecimiento,tlfSecondEstablecimiento,emailFirstEstablecimiento,emailsecondEstablecimiento,
    selectEstadoEstablecimiento,selectMunicipioEstablecimiento,selectParroquiaEstablecimiento,ZonaEstablecimiento,RutasEstablecimiento,EspacioEstablecimiento,
    NivelEstablecimiento,CodigoPostalEstablecimiento,MetrosCuadradosEstablecimiento,ReferenciaEstablecimiento,observacionEstablecimiento])


  // VALIDATE DE PRODUCTOS IMPORTADOS

  const validateName_Propietario_ProductImport = (value) => {
    Texto_Expression(value,setNombrePropietairoProductImport)
  } 
  const validateApellido_Propietario_ProductImport = (value) => {
    Texto_Expression(value,setApellidoPropietairoProductImport)
  } 
  const validateRegisterSanitario_ProductImport = (value) => {
    Text_number_Expressions(value,setregistroSanitarioProductImport)
    
  } 
  const validatelaboratorioFabricante_ProductImport = (value) => {
    Texto_Expression(value,setLaboratorioFabricanteproductimport)
    
  } 
  const validateNameFarmaceutico_ProductImport = (value) => {
    Texto_Expression(value,setFarmaceuticoProductImport)
  } 
  const validateNameProducto_ProductImport = (value) => {
    Texto_Expression(value,setNombreProductoimportado)
  } 
  const validateNameOtroProducto_ProductImport = (value) => {
    Texto_Expression(value,setOtraPresentacionProductImport)
    
  } 

  let select_paisproductimport = document.getElementById('select_paisproductimport')
  let select_presentacionproductimport = document.getElementById('select_presentacionproductimport')
  
  useEffect(() =>{
    // if(){
      
      // }
      if(
        
        !expresionsRegulars.textoRegex.test(NombrePropietairoProductImport.dato) || NombrePropietairoProductImport.dato === null || NombrePropietairoProductImport.dato === undefined ||
        !expresionsRegulars.textoRegex.test(ApellidoPropietairoProductImport.dato) || ApellidoPropietairoProductImport.dato === null || ApellidoPropietairoProductImport.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(registroSanitarioProductImport.dato) || registroSanitarioProductImport.dato === null || registroSanitarioProductImport.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(LaboratorioFabricanteproductimport.dato) || LaboratorioFabricanteproductimport.dato === null || LaboratorioFabricanteproductimport.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(FarmaceuticoProductImport.dato) || FarmaceuticoProductImport.dato === null || FarmaceuticoProductImport.dato === undefined ||
        !expresionsRegulars.textonumberRegex.test(NombreProductoimportado.dato) || NombreProductoimportado.dato === null || NombreProductoimportado.dato === undefined ||
        // !expresionsRegulars.textoRegex.test(OtraPresentacionProductImport.dato) || OtraPresentacionProductImport.dato === null || OtraPresentacionProductImport.dato === undefined ||
        
        PaisProcedenteProductImport.length == 0 || PaisProcedenteProductImport == '' || PaisProcedenteProductImport == null || select_paisproductimport.value.length === 0|| select_paisproductimport.value.length === null ||
        PresentacionProductoimportado.length == 0 || PresentacionProductoimportado == '' || PresentacionProductoimportado == null || select_presentacionproductimport.value.length === 0|| select_presentacionproductimport.value.length === null 
        
        ){
          setDiseabledAddProductImportado(true)
          
        }
        else{
          setDiseabledAddProductImportado(false)
        }
        
      },[NombrePropietairoProductImport,ApellidoPropietairoProductImport,registroSanitarioProductImport,LaboratorioFabricanteproductimport,FarmaceuticoProductImport,
        NombreProductoimportado,PaisProcedenteProductImport,PresentacionProductoimportado,OtraPresentacionProductImport])
        
   
    
  // VALIDATE DE PRODUCTOS EXPORTADOS

  let select_tipo_formas = document.getElementById('select_tipo_formas')
  useEffect(() => {
     // VALIDATE "FORMA DE LOS PRODUCTOS"
      

     if(
       selectFormasProductosEmpresa.length == 0 || selectFormasProductosEmpresa == '' || selectFormasProductosEmpresa == null || select_tipo_formas.value.length === 0|| select_tipo_formas.value.length === null       
       
       ){
       setDiseabledFormaProductos(true)
     
     }
     else{
       setDiseabledFormaProductos(false)
     }
  },[selectFormasProductosEmpresa])
  

 // letra inicial del usuario logeado
 const InicialUser = user.usuario.substr(0 ,1)

  return (
    <>

      <Sidebar
        inicialusario={InicialUser}
        usuario={user.usuario}
      />
     
      <Box component='div' 

          sx={{width:'90%', margin:'auto',boxShadow:'2px 2px 6px #12265f71',borderRadius:'7px', p:'1rem', marginBottom:'2rem'}}
        >

         
          {/* ---------------------------- */}
          <Box component='div' className='container_encabezado' sx={{mb:'1rem'}}>
            <Box component='div' className='encabezado_tit_solicitud_form' >
              <center>
                <Typography variant="h6" sx={{color:'#fff',p:'1rem'}}>Realice su Solicitud</Typography>
              </center>
            </Box>
            
            <Box component='center'>
              <center>
                <Alert severity="warning">Se le Informa que por cada paso que complete se estara <strong>registrando su informacion!</strong>.
                 Una vez que empieze <strong>abstengase de salirse del proceso.</strong> <strong>LLENE LOS CAMPOS ANTES DE AVANZAR</strong>
                 </Alert>
              </center>
            </Box>
             {/* PAGINACION DE PASOS  */}
             <Box component='div' sx={{my:'0.5rem'}}>
              <BodyPaginationStep 
                activeStep = {activeStepPagination}
                iconPagStep = {IconStepPag}
                textsteps = {TextStepPag}
              />
             </Box>
          </Box>

          <Box component='div' sx={{ml:'0.5rem'}}>
            <TextField
              id="rifempresa"
              label="Rif de Empresa"
              defaultValue={user.pk_empresa}
              InputProps={{
                readOnly: true,
              }}
              color="success" focused
            />
          </Box>

        <Box className = 'Cont_form_step' sx={{mt:'1rem'}}>

          <Box className='slider_form'>
              {/* slider 1 TIPO Y NOMBRE DE SOLICITUD */}
              <Box component='form' className='form_ciudadano' id='form_step'  onSubmit={HandleSubmitTipSolicitud}>

                  {/*--------------------  */}
                  {/* Tipo de solicitud  */}
                  {/*--------------------  */}
                  <Box>
                  <Grid container spacing={2} sx={{py:1}}>

                    <Grid item xs={12} md={6} sm={6}>
                        <Autocomplete sx={styleCampos}
                                id="select_tipo_solicitud" 
                                options={listTipSolicitud}
                                onChange={(e, newValue) => {
                                    vaciar_nombre_solcitud()
                                    setSelectTipSolicitud({
                                        pk_tipo_solicitud : newValue ? newValue.pk_tipo_solicitud : null,
                                        descripcion: newValue ? newValue.descripcion : null,
                                    });
                                }}
                                getOptionLabel={(option) => option.descripcion}
                                renderInput={(params) => <TextField {...params} label="Tipo de Solicitud" variant="outlined" />}
                                freeSolo
                                required={true}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                            <Autocomplete
                                sx={styleCampos}
                                id="select_nombre_solicitud" 
                                options={FilterlistnombreSolicitud}
                                onChange={(e, newValue) => {
                                    
                                    setSelectNombreSolicitud({
                                        pk_nombre_solicitud : newValue ? newValue.pk_nombre_solicitud : null,
                                        fk_tipo_solicitud: newValue ? newValue.fk_tipo_solicitud : null,
                                        fk_coordinacion: newValue ? newValue.fk_coordinacion : null,
                                        descripcion: newValue ? newValue.descripcion : null,
                                    });
                                }}
                                getOptionLabel={(option) => option.descripcion}
                                renderInput={(params) => <TextField {...params} label="Nombre Solicitud" variant="outlined" />}
                                freeSolo
                                required={true}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                            <Autocomplete
                                sx={styleCampos}
                                id="selectcoordinacion" 
                                options={listCoordinacionEmpresa}
                                onChange={(e, newValue) => {
                                  vaciar_area_empresa()
                                  setSelectCoordinacionEmpresa({
                                        fk_coordinacion : newValue ? newValue.fk_coordinacion : null,
                                        coordinacion: newValue ? newValue.coordinacion : null,
                                    });
                                }} 
                                getOptionLabel={(option) => option.coordinacion}
                                renderInput={(params) => <TextField {...params} label="Seleciconar coordinacion" variant="outlined" />}
                                freeSolo
                                required={true}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                            <Autocomplete
                                sx={styleCampos}
                                id="selectarea" 
                                options={FilterlistAreaEmpresa}
                                onChange={(e, newValue) => {
                                  vaciar_activ_empresa()
                                  setSelectAreaEmpresa({
                                        pk_coor_area : newValue ? newValue.pk_coor_area : null,
                                        fk_coordinacion : newValue ? newValue.fk_coordinacion : null,
                                        pk_area : newValue ? newValue.pk_area : null,
                                        area: newValue ? newValue.area : null,
                                    });
                                }} 
                                getOptionLabel={(option) => option.area}
                                renderInput={(params) => <TextField {...params} label="área de Empresa" variant="outlined" />}
                                freeSolo
                                required={true}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                            <Autocomplete
                                sx={styleCampos}
                                id="selectActividadempresa" 
                                options={FilterlistActivEmpresa.filter(option => option.fk_activ_economic == 11)}
                                onChange={(e, newValue) => {
                                  vaciar_categoria_empresa()
                                  vaciar_productos_empresa()
                                  setSelectActivEmpresa({
                                        pk_coor_area : newValue ? newValue.pk_coor_area : null,
                                        fk_coordinacion : newValue ? newValue.fk_coordinacion : null,
                                        fk_activ_economic : newValue ? newValue.fk_activ_economic : null,
                                        activ_economica: newValue ? newValue.activ_economica : null,
                                        // fk_area : newValue ? newValue.fk_area : null,
                                    });
                                }}
                                getOptionLabel={(option) => option.activ_economica}
                                renderInput={(params) => <TextField {...params} label="Actividad de Empresa" variant="outlined" />}
                                freeSolo
                                required={true}
                            />
                    </Grid>



                  </Grid> 
                  </Box>


                  <Box 
                      sx={{mt:2,float:'right'}}
                    >
                    
                    <Button type='submit' variant="contained" id='btn_next' color="success" disabled={diseabledTipSolicitud}>
                                          
                      Registrar
                    </Button>
                    {/* <Button type='submit' variant="contained" id='btn_next' color="success" disabled={diseabledTipSolicitud} >
                                          
                      Registrar
                    </Button> */}

                    <ToastContainer />
                  </Box> 
              </Box>
              {/* slider 2 CATEGORIA DE EMPRESA */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitCategoriaSolicitud} >
                  
                   {/*--------------------  */}
                  {/* categoria de actividad de la solicitud  */}
                  {/*--------------------  */}
                  <Box>
                    <Collapse in={CollapseCatgoria} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="error">Actividad: <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente:</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                  
                          <Grid item xs={12} md={6} sm={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_categoria" 
                                      options={FilterlistCategoriaEmpresa}
                                      onChange={(e, newValue) => {
                                        vaciar_operacion_empresa()
                                          setSelectCategoriaEmpresa({
                                              pk_categoria : newValue ? newValue.pk_categoria : null,
                                              nombre: newValue ? newValue.nombre : null,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.nombre}
                                      renderInput={(params) => <TextField {...params} label="Seleccionar Tipo de Categoria" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          
                        </Grid> 

                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={diseabledTipCategoria} >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 

                    </Collapse>
                  </Box>
                  <Box>
                    <Collapse in={CollapseCatgoria2} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="secondary">
                          La actividad <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente no tiene categoria. Puede continuar.
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep(); handlePaginationNext()}}>
                                              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>

              </Box>
  
              {/* slider 2 OPERACIONES DE EMPRESA */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitOperaiconesSolicitud} 
                  sx={{minHeight:'auto',maxHeight:'300px',overflow:'auto'}}>
                  
                   {/*--------------------  */}
                  {/* operaciones de actividad de la solicitud  */}
                  {/*--------------------  */}
                  
                  <Box>
                    <Collapse in={CollapseOperaciones} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="error">Actividad: <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                    
                          <Grid item xs={12} md={6} sm={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_operaciones" 
                                      options={FilterlistOperacionesEmpresa}
                                      onChange={(e, newValue) => {
                                          
                                        setSelecOperaiconEmpresa({
                                              pk_coor_area : newValue ? newValue.pk_coor_area : null,
                                              fk_activ_economic : newValue ? newValue.fk_activ_economic : null,
                                              pk_operaciones : newValue ? newValue.pk_operaciones : null,
                                              area : newValue ? newValue.area : null,
                                              activ_economica : newValue ? newValue.activ_economica : null,
                                              nombre_operaciones: newValue ? newValue.nombre_operaciones : null,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.nombre_operaciones}
                                      renderInput={(params) => <TextField {...params} label="Seleccionar Tipo de operaciones" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          

                          <Grid item xs={12} md={3} sm={6}>
                            <Fab color="success" aria-label="add" onClick={addInputoperaciones} disabled={diseabledAddTipOperations}>
                              <AddIcon />
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputoperaciones}>
                              Agregar a Lista
                            </Button> */}
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM */}
                      {/* --------------------------------------- */}
                      <Box>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomOperaciones.map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.pk_operaciones} sx={{mt:2}} key={item.pk_operaciones} >
                              <Grid container spacing={2}>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="nombrecategoria"
                                      label="Categoria Seleciconada"
                                      type="text"
                                      defaultValue={item.categoria}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="nombreoperacion"
                                      label="Operacion"
                                      type="text"
                                      defaultValue={item.nombre_operaciones}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  {/* Evento remover campo */}
                                  <Grid item xs={12} md={3} sm={6}>
                                    
                                    <Fab color="error" aria-label="add" onClick={() => DeleteInputoperaciones(item.pk_operaciones)}>
                                      <ClearIcon />
                                    </Fab>
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputoperaciones(item.pk_operaciones)}>
                                      Eliminar Operación
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitoperaciones} >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 

                    </Collapse>
                  </Box>

                  {/* SINO HAY OPERACIONES  */}
                  <Box>
                    <Collapse in={CollapseOperaciones2} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="secondary">
                          La Actividad <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente no tiene operaciones. Puede continuar.
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep(); handlePaginationNext()}}>
                                              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>




              </Box>
  
              {/* slider 2 PRODUCTOS ALTAMENTE SENCIBILIZANTES DE EMPRESA */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitProductosSolicitud} 
                  sx={{minHeight:'auto',maxHeight:'600px',overflow:'auto'}}>
                  
                   {/*--------------------  */}
                  {/* PRODUCTOS de actividad de la solicitud  */}
                  {/*--------------------  */}
                  
                  <Box>
                    <Collapse in={CollapseProductos} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="error">Actividad: <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                          {/* <Grid item xs={12} md={6} sm={6}>
                            <TextField sx={styleCampos}
                              id="activempresa"
                              label="Actividad de Empresa"
                              defaultValue={selectActivEmpresa.activ_economica}
                              InputProps={{
                                readOnly: true,
                              }}
                              color="success" focused
                            />
                          </Grid> */}
                          <Grid item xs={12} md={6} sm={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_productos" 
                                      options={FilterlistProductosEmpresa}
                                      onChange={(e, newValue) => {
                                          
                                        setSelectProductosEmpresa({
                                              pk_activ_economic : newValue ? newValue.pk_activ_economic : null,
                                              activ_economica : newValue ? newValue.activ_economica : null,
                                              pk_tip_producto : newValue ? newValue.pk_tip_producto : null,
                                              nombre_tip_producto: newValue ? newValue.nombre_tip_producto : null,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.nombre_tip_producto}
                                      renderInput={(params) => <TextField {...params} label="Seleccionar Tipo de Productos" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          

                          <Grid item xs={12} md={3} sm={6}>
                            <Fab color="success" aria-label="add" onClick={addInputProductos} disabled={diseabledAddTipProductSensib} >
                              <AddIcon />
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputProductos}>
                              Agregar a Lista
                            </Button>   */}
                            {/* <IconButton aria-label="circle" color='error' sx={{fontSize:'4rem'}} onClick={addInputProductos}>
                              <AddCircleIcon/>
                            </IconButton> */}
                            
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM PRODUCTOS */}
                      {/* --------------------------------------- */}
                      <Box>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomProductos.map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.pk_tip_producto} sx={{mt:2}} key={item.pk_tip_producto} >
                              <Grid container spacing={2}>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="actividad"
                                      label="Actividad seleccionada"
                                      type="text"
                                      defaultValue={item.activ_economica}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="nombreoperacion"
                                      label="Nombre de Operación"
                                      type="text"
                                      defaultValue={item.nombre_tip_producto}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  

                                  <Grid item xs={12} md={3} sm={6}>
                                    
                                    <Fab color="error" aria-label="add" onClick={() => DeleteInputProductos(item.pk_tip_producto)}>
                                      <ClearIcon />
                                    </Fab>  
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputProductos(item.pk_tip_producto)}>
                                      Eliminar Producto
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitProductos} >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 

                    </Collapse>
                  </Box>
                  
                  {/* SINO HAY PRODUCTOS SENSIBILIZANTE */}
                  <Box>
                    <Collapse in={CollapseProductos2} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="secondary">
                        La Actividad <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente no tiene Productos Altamente Sensibilizantes. Puede continuar.
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button variant="contained" id='btn_next' color="info" onClick={() => {nextformstep(); handlePaginationNext()}}>              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>




              </Box>
              

              {/* establecimiento de la empresa */}

              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitEstablecimientoSolicitud}
                sx={{ml:'0.5rem'}}
                >

                  <Box component='div'>
                    <Typography variant="p" color="primary">Datos de Establecimiento y su Dominio:</Typography>
                  </Box>

                           <Box className='establecimiento_dominio'>
                               <Grid container spacing={2} sx={{my:2}}>
                                   <Grid item xs={12} md={4}  sm={6}>
                                       <Autocomplete sx={styleCampos} 
                                       id="select_establecimiento" 
                                       options={FilterlistSolicitudEstablecimiento }
                                       onChange={(e,newValue) => {
                                           setSelectEstablecimiento({
                                               pk_tip_establecimiento: newValue ? newValue.fk_tip_establecimiento : null,
                                               descripcion: newValue ? newValue.tipo_estableicmiento : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.tipo_estableicmiento}
                                       renderInput={(params) => <TextField {...params} label="Tipo de Establecimiento" variant="outlined" />}
                                       />
                                   </Grid>       
                                   <Grid item xs={12} md={4}  sm={6}>
                                       <Autocomplete sx={styleCampos} 
                                       id="select_dominio" 
                                       options={listDominio}
                                       onChange={(e,newValue) => {
                                           setSelectDominio({
                                               pk_dominio: newValue ? newValue.pk_dominio : null,
                                               tip_dominio: newValue ? newValue.tip_dominio : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.tip_dominio}
                                       renderInput={(params) => <TextField {...params} label="Tipo de Dominio" variant="outlined" />}
                                       />
                                   </Grid>       
                                   <Grid item xs={12} md={4}  sm={6}>
                                       <Autocomplete sx={styleCampos} 
                                       id="select_estatus_establecimineto" 
                                       options={listEstatus}
                                       onChange={(e,newValue) => {
                                            setSelectEstatus({
                                               pk_estatus: newValue ? newValue.pk_estatus : null,
                                               tipo_estatus: newValue ? newValue.tipo_estatus : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.tipo_estatus}
                                       renderInput={(params) => <TextField {...params} label="Seleccionar su estatus" variant="outlined" />}
                                       />
                                   </Grid>       
                               </Grid>
                           </Box>
                    
                  <Box component='div'>
                    <Typography variant="p" color="primary">Contactos:</Typography>
                  </Box>

                    {/* contacto */}
                  <Box>
                               
                    <Grid container spacing={2} sx={{my:2}}>
                                   <Grid item xs={12} md={3}  sm={6}>
                                        <TextField sx={styleCampos}
                                                id="tlfempresapropietario"
                                                label="Tlf Principal "
                                                type="text"
                                                value={tlfFirstEstablecimiento.dato}
                                                onChange={(e) => validatefirstTlf_Establecimineto(e.target.value)}
                                                error={tlfFirstEstablecimiento.error}
                                                helperText ={tlfFirstEstablecimiento.message}
                                                color={tlfFirstEstablecimiento.color}
                                                focused={tlfFirstEstablecimiento.fucosed}
                                                
                                        />
                                   </Grid>
                                   <Grid item xs={12} md={3}  sm={6}>
                                   <TextField sx={styleCampos}
                                           id="tlf2empresapropietario"
                                           label="Tlf Segundario"
                                           type="text"
                                           value={tlfSecondEstablecimiento.dato}
                                           onChange={(e) => validateSecondtTlf_Establecimiento(e.target.value)}
                                           error={tlfSecondEstablecimiento.error}
                                            helperText ={tlfSecondEstablecimiento.message}
                                            color={tlfSecondEstablecimiento.color}
                                            focused={tlfSecondEstablecimiento.fucosed}
                                   />
                                   </Grid>
                                   <Grid item xs={12} md={3}  sm={6}>
                                      <TextField sx={styleCampos}
                                        id="emailempresa"
                                        label="Correo Principal"
                                        type="text"
                                        placeholder="correomiempresagmail.com"
                                        value={emailFirstEstablecimiento.dato}
                                        onChange={(e) => validateFirstEmail_Establecimiento(e.target.value)}
                                        error={emailFirstEstablecimiento.error}
                                        helperText ={emailFirstEstablecimiento.message}
                                        color={emailFirstEstablecimiento.color}
                                        focused={emailFirstEstablecimiento.fucosed}
                                      />
                                   </Grid>
                                   <Grid item xs={12} md={3}  sm={6}>
                                    <TextField sx={styleCampos}
                                            id="email2empresa"
                                            label="Correo Segundario"
                                            type="text"
                                            placeholder="correosegundarioempresa@.."
                                            value={emailsecondEstablecimiento.dato}
                                            onChange={(e) => validateSecondEmail_Establecimiento(e.target.value)}
                                            error={emailsecondEstablecimiento.error}
                                            helperText ={emailsecondEstablecimiento.message}
                                            color={emailsecondEstablecimiento.color}
                                            focused={emailsecondEstablecimiento.fucosed}
                                    />
                                   </Grid>
                              
                                                   
                    </Grid>
                  </Box>

                           {/* ubicaicon */}

                           <Box component='div' >
                               <Box component='div'>
                                   <Typography variant="p" color='primary'>Ubicación: </Typography>
                               </Box>
                               <Grid container spacing={2} sx={{my:2}}>
                                   <Grid item xs={12}  md={3}  sm={6}>
                                       <Autocomplete sx={styleCampos} 
                                       id="estado_empresa_establecimiento" 
                                       options={lisEstado}
                                       onChange={(e,newValue) => {
                                           vaciar_municipio_empresa_establecimineto() //vacio el campo municipio al cambiar el estado
                                           setSelectEstadoEstablecimiento({
                                               pk_estado: newValue ? newValue.pk_estado : null,
                                               nombre_estado: newValue ? newValue.nombre_estado : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.nombre_estado}
                                       renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                                       />
                                   </Grid>
                                   <Grid item xs={12}  md={4.5} sm={6} >
                                       <Autocomplete sx={styleCampos} 
                                       id="municipio_empresa_establecimiento" 
                                       options={listMunicipioEstadoEstablecimiento}
                                       onChange={(e,newValue) => {
                                           vaciar_parroquia_empresa_establecimiento() //vacio el campo parroquia al cambiar municipio
                                           setSelectMunicipioEstablecimiento({
                                               pk_municipio: newValue ? newValue.pk_municipio : null,
                                               fk_estado: newValue ? newValue.fk_estado : null,
                                               nombre_municipio: newValue ? newValue.nombre_municipio : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.nombre_municipio}
                                       renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                                       />
                                   </Grid>
                                   <Grid item xs={12}  md={4.5} sm={6} >
                                       <Autocomplete sx={styleCampos} 
                                       id="parroquia_empresa_establecimiento" 
                                       options={listParroquiaMunicipioEstablecimiento}
                                       onChange={(e,newValue) => {
                                           setSelectParroquiaEstablecimiento({
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
                               {/* ubicacion detallada del establecimineto */}
                               <Box component='div'>
                                   <Typography variant="p" color='primary'>Especificación: </Typography>
                               </Box>
                               <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                        id="zonaestablecimiento"
                                        label="Urbanización/Sector/Zona Industrial"
                                        type="text"
                                        value={ZonaEstablecimiento.dato}
                                        onChange={(e) => validateZona_Establecimiento(e.target.value)}
                                        error={ZonaEstablecimiento.error}
                                        helperText ={ZonaEstablecimiento.message}
                                        color={ZonaEstablecimiento.color}
                                        focused={ZonaEstablecimiento.fucosed}
                                                
                                      />
                                    </Grid>
                                   <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                        id="rutaestablecimiento"
                                        label="Avenida/Carrera/Calle/Esquina"
                                        type="text"
                                        value={RutasEstablecimiento.dato}
                                        onChange={(e) => validateRutas_Establecimiento(e.target.value)}
                                        error={RutasEstablecimiento.error}
                                        helperText ={RutasEstablecimiento.message}
                                        color={RutasEstablecimiento.color}
                                        focused={RutasEstablecimiento.fucosed}
                                                
                                      />
                                    </Grid>
                                   <Grid item xs={12} md={4} sm={6}>
                                      <TextField sx={styleCampos}
                                          id="zonaestablecimiento"
                                          label="Edificio/Galpón"
                                          type="text"
                                          value={EspacioEstablecimiento.dato}
                                          onChange={(e) => validateEspacio_Establecimiento(e.target.value)}
                                          error={EspacioEstablecimiento.error}
                                          helperText ={EspacioEstablecimiento.message}
                                          color={EspacioEstablecimiento.color}
                                          focused={EspacioEstablecimiento.fucosed}
                                                  
                                        />
                                    </Grid>
                                   <Grid item xs={12} md={4} sm={6}>
                                      <TextField sx={styleCampos}
                                          id="nivelestablecimiento"
                                          label="Piso/Planta/Local"
                                          type="text"
                                          value={NivelEstablecimiento.dato}
                                          onChange={(e) => validateNivel_Establecimiento(e.target.value)}
                                          error={NivelEstablecimiento.error}
                                          helperText ={NivelEstablecimiento.message}
                                          color={NivelEstablecimiento.color}
                                          focused={NivelEstablecimiento.fucosed}
                                                  
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4} sm={6} >
                                      <TextField sx={styleCampos}
                                          id="codigoestablecimineto"
                                          label="Código Postal"
                                          type="number"
                                          value={CodigoPostalEstablecimiento.dato }
                                          onChange={(e) => validateCodigo_Establecimiento(e.target.value)}
                                          error={CodigoPostalEstablecimiento.error}
                                          helperText ={CodigoPostalEstablecimiento.message}
                                          color={CodigoPostalEstablecimiento.color}
                                          focused={CodigoPostalEstablecimiento.fucosed}
                                      />
                                   </Grid>
                                    <Grid item xs={12} md={4} sm={6} >
                                      <TextField sx={styleCampos}
                                          id="metrosestablecimiento"
                                          label="metros Cuadrados"
                                          type="number"
                                          placeholder='ejemplo: 125,89'
                                          value={MetrosCuadradosEstablecimiento.dato }
                                          onChange={(e) => validateMetrosCuadrados_Establecimiento(e.target.value)}
                                          error={MetrosCuadradosEstablecimiento.error}
                                          helperText ={MetrosCuadradosEstablecimiento.message}
                                          color={MetrosCuadradosEstablecimiento.color}
                                          focused={MetrosCuadradosEstablecimiento.fucosed}
                                      />
                                   </Grid>
                                   
                               </Grid>
                               <Grid container spacing={2}>

                                <Grid item xs={12} md={6} sm={6} >
                                       <TextField sx={styleCampos}
                                       id="referenciaestablecimiento"
                                       label="Punto de referencia"
                                       placeholder='Punto de Referencia del establecimineto'
                                       multiline
                                       minRows={5}
                                       maxRows={10}
                                       value={ReferenciaEstablecimiento.dato}
                                       onChange={(e) => validateReferencia_Establecimiento(e.target.value)}
                                       error={ReferenciaEstablecimiento.error}
                                       helperText ={ReferenciaEstablecimiento.message}
                                       color={ReferenciaEstablecimiento.color}
                                       focused={ReferenciaEstablecimiento.fucosed}
                                       
                                       />
                                   </Grid>
                                   <Grid item xs={12} md={6} sm={6} >
                                        <TextField sx={styleCampos}
                                        id="dirpropietario"
                                        label="Observacion"
                                        placeholder='Nota: puede ingresar una breve descripcion o dejar el campo vacio'
                                        multiline
                                        minRows={5}
                                        maxRows={10}
                                        value={observacionEstablecimiento.dato}
                                        onChange={(e) => validateObservacion_Establecimiento(e.target.value)}
                                        error={observacionEstablecimiento.error}
                                        helperText ={observacionEstablecimiento.message}
                                        color={observacionEstablecimiento.color}
                                        focused={observacionEstablecimiento.fucosed}
                                        
                                        />
                                    </Grid>
                               </Grid>
                           </Box>

                  <Box 
                      sx={{mt:2,float:'right'}}
                    >

                    {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                      Volver
                    </Button> */}
                    
                    <Button type='submit' variant="contained" id='btn_next' color="success" disabled={diseabledEstablecimiento} >
                                          
                      Registrar
                    </Button>

                    <ToastContainer />
                  </Box> 
              </Box>


              {/*  productos inportados  */}
              
              <Box component='form'  className='form_ciudadano' id='form_step' onSubmit={HandleSubmitProductImportadosSolicitud}
                sx={{minHeight:'auto',maxHeight:'600px',overflow:'auto',}}>
                  
                      <Box component='div'>
                        <Typography variant="h6" color="primary">Ingresar sus productos Importados :</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1,ml:'1px',mr:'1px'}}>

                          <Grid item xs={12} md={2.9} sm={6}>
                            <TextField sx={styleCampos}
                                id="NombrePropietarioimportado"
                                label="Nombre del propietario"
                                value={NombrePropietairoProductImport.dato }
                                onChange={(e) => validateName_Propietario_ProductImport(e.target.value)}
                                error={NombrePropietairoProductImport.error}
                                helperText ={NombrePropietairoProductImport.message}
                                color={NombrePropietairoProductImport.color}
                                focused={NombrePropietairoProductImport.fucosed}                                                    
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9} sm={6}>
                            <TextField sx={styleCampos}
                                id="ApellidoPropietarioimportado"
                                label="Apellido del propietario"
                                value={ApellidoPropietairoProductImport.dato  }
                                onChange={(e) => validateApellido_Propietario_ProductImport(e.target.value)}
                                error={ApellidoPropietairoProductImport.error}
                                helperText ={ApellidoPropietairoProductImport.message}
                                color={ApellidoPropietairoProductImport.color}
                                focused={ApellidoPropietairoProductImport.fucosed}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9} sm={6}>
                            <TextField sx={styleCampos}
                                id="registroSanitarioProductImport"
                                label="Registro Sanitario"
                                value={registroSanitarioProductImport.dato }
                                onChange={(e) => validateRegisterSanitario_ProductImport(e.target.value)}
                                error={registroSanitarioProductImport.error}
                                helperText ={registroSanitarioProductImport.message}
                                color={registroSanitarioProductImport.color}
                                focused={registroSanitarioProductImport.fucosed}                                                          
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9} sm={6}>
                            <TextField sx={styleCampos}
                                id="LaboratorioFabricanteproductimport "
                                label="Laboratio Fabricante"
                                value={LaboratorioFabricanteproductimport.dato  }
                                onChange={(e) => validatelaboratorioFabricante_ProductImport(e.target.value)}
                                error={LaboratorioFabricanteproductimport.error}
                                helperText ={LaboratorioFabricanteproductimport.message}
                                color={LaboratorioFabricanteproductimport.color}
                                focused={LaboratorioFabricanteproductimport.fucosed}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9} sm={6}>
                            <TextField sx={styleCampos}
                                id="FarmaceuticoProductImport    "
                                label="Farmaceútico patrocinante"
                                value={FarmaceuticoProductImport.dato }
                                onChange={(e) => validateNameFarmaceutico_ProductImport(e.target.value)}
                                error={FarmaceuticoProductImport.error}
                                helperText ={FarmaceuticoProductImport.message}
                                color={FarmaceuticoProductImport.color}
                                focused={FarmaceuticoProductImport.fucosed}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9} sm={6}>
                            <TextField sx={styleCampos}
                                id="NombreProductoimportado"
                                label="nombre del producto"
                                value={NombreProductoimportado.dato}
                                onChange={(e) => validateNameProducto_ProductImport(e.target.value)}
                                error={NombreProductoimportado.error}
                                helperText ={NombreProductoimportado.message}
                                color={NombreProductoimportado.color}
                                focused={NombreProductoimportado.fucosed}
                                                                                            
                            />
                          </Grid>

                          <Grid item xs={12} md={2.9} sm={6} >
                            <Autocomplete sx={styleCampos} 
                            id="select_paisproductimport" 
                            options={lisPaisesProductosimportadosEmpresa}
                            onChange={(e,newValue) => {
                              setPaisProcedenteProductImport({
                                    pk_pais: newValue ? newValue.pk_pais : null,
                                    nombre_pais: newValue ? newValue.nombre_pais : null
                                })
                            }}
                            getOptionLabel={(option) => option.nombre_pais}
                            renderInput={(params) => <TextField {...params} label="País Procedente" variant="outlined" />}
                            />
                          </Grid>

                          <Grid item xs={12} md={2.9} sm={6}>
                            <Autocomplete sx={styleCampos} 
                            id="select_presentacionproductimport" 
                            options={lisPresentaiconProductImportadosEmpresa}
                            onChange={(e,newValue) => {
                              setPresentacionProductoimportado({
                                    pk_present_product_import: newValue ? newValue.pk_present_product_import : null,
                                    presentacion_product_import: newValue ? newValue.presentacion_product_import : null
                                })
                            }}
                            getOptionLabel={(option) => option.presentacion_product_import}
                            renderInput={(params) => <TextField {...params} label="Presentacion del Producto" variant="outlined" />}
                            />
                          </Grid>
                            <Grid item xs={12} md={2.9} sm={6}>
                          <Collapse in={CollapsePresentProductImport}>
                              <TextField sx={styleCampos}
                                  id="otraPresentProductImport"
                                  label="Nueva Presentación"
                                  value={OtraPresentacionProductImport.dato }
                                  onChange={(e) => validateNameOtroProducto_ProductImport(e.target.value)}
                                  error={OtraPresentacionProductImport.error}
                                  helperText ={OtraPresentacionProductImport.message}
                                  color={OtraPresentacionProductImport.color}
                                  focused={OtraPresentacionProductImport.fucosed}
                                                                                              
                              />
                          </Collapse>
                            </Grid>
                          
                          <Grid item xs={12} md={3} sm={6}>
                            <Fab color="success" aria-label="add" disabled={diseabledAddProductImportado} onClick={addInputProductosImportados}>
                              <AddIcon /> 
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputProductosImportados}>
                              Agregar a Lista
                            </Button>                     */}
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM PRODUCTOS IMPORTADOS*/}
                      {/* --------------------------------------- */}
                      <Box component='div' sx={{ml:'1rem'}}>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomProductImportados .map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.NombreProductoimportado} sx={{mt:2}} key={item.NombreProductoimportado} >
                              <Grid container spacing={2}>

                                <Grid item xs={12} md={4} sm={6}>
                                    
                                    <TextField sx={styleCampos}
                                      id="datospropietario"
                                      label="Datos del propietario"
                                      type="text"
                                      defaultValue={item.datacedulapropietario }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="nombreproducto"
                                      label="Nombre de Producto"
                                      type="text"
                                      defaultValue={item.NombreProductoimportado}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="presentacionproducto"
                                      label="Presentancion del Producto"
                                      type="text"
                                      defaultValue={item.PresentacionProductImport}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="registrosaniatario"
                                      label="Registro Sanitario"
                                      type="text"
                                      defaultValue={item.registroSanitarioProductImport }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="paisprocedente"
                                      label="País Procedente del Producto"
                                      type="text"
                                      defaultValue={item.PaisProcedenteProductImport  }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="labfabricante"
                                      label="Laboratorio Fabricante"
                                      type="text"
                                      defaultValue={item.LaboratorioFabricanteproductimport  }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="farmaceuticopatrocinante"
                                      label="Farmaceútico Patrocinante"
                                      type="text"
                                      defaultValue={item.FarmaceuticoProductImport  }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  
                                  {/* Evento remover campo */}
                                  <Grid item xs={12} md={3} sm={6}>
                                  <Fab color="error" aria-label="add" onClick={() => DeleteInputProductImportados(item.NombreProductoimportado)}>
                                    <ClearIcon />
                                  </Fab>
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputProductImportados(item.NombreProductoimportado)}>
                                      Eliminar de lista
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitProductImportados } >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 
              </Box>

              {/* formas del producto */}
              
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitFormasProductSolicitud}
                sx={{minHeight:'auto',maxHeight:'600px',overflow:'auto'}}>

                  <Box>
                    <Collapse in={CollapseForma}>
                    
                      <Box component='div'>
                        <Typography variant="h6" color="primary">Seleccionar las Formas de Producto de su empresa:</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                
                          <Grid item xs={12} md={6} sm={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_formas" 
                                      options={FilterlistFormaProductArea}
                                      onChange={(e, newValue) => {
                                          
                                        setSelectFormasProductosEmpresa({
                                              pk_area_forma : newValue ? newValue.pk_area_forma : null,
                                              fk_area : newValue ? newValue.fk_area : null,
                                              area : newValue ? newValue.area : null,
                                              pk_forma_product : newValue ? newValue.pk_forma_product : null,
                                              forma_producto: newValue ? newValue.forma_producto : null,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.forma_producto}
                                      renderInput={(params) => <TextField {...params} label="Formas del Producto" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          

                          <Grid item xs={12} md={3} sm={6}>
                            <Fab color="success" aria-label="add" disabled={diseabledFormaProductos} onClick={addInputFormaProductos}>
                              <AddIcon />
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputFormaProductos}>
                              Agregar a Lista
                            </Button>                     */}
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM FORMAS*/}
                      {/* --------------------------------------- */}
                      <Box>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomFormasProduct.map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.pk_forma_product} sx={{mt:2}} key={item.pk_forma_product} >
                              <Grid container spacing={2}>
                                  
                                  <Grid item xs={12} md={4} sm={6}>
                                    <TextField sx={styleCampos}
                                      id="nombreoperacion"
                                      label="Nombre de Operación"
                                      type="text"
                                      defaultValue={item.forma_producto}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  {/* Evento remover campo */}
                                  <Grid item xs={12} md={3} sm={6}>
                                    <Fab color="error" aria-label="add" onClick={() => DeleteInputFormaProductos(item.pk_forma_product)}>
                                      <ClearIcon />
                                    </Fab>
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputFormaProductos(item.pk_forma_product)}>
                                      Eliminar de lista
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitFormasProduct} >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 
                    </Collapse>
                  </Box>
                  
                  {/* SINO HAY FORMA POR EL AREA SELECCIONADA */}

                  <Box>
                        <Collapse in={CollapseForma2} >
                          
                          <Box component='div'>
                            <Typography variant="p" color="secondary">
                              El Área <strong>{selectAreaEmpresa.descripcion}</strong> seleccionada anteriormente no tiene para seleccionar Formas de Productos. Puede continuar.
                            </Typography>
                          </Box>
                          <Box 
                            sx={{mt:2,float:'right'}}
                            >
                            {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                              Volver
                            </Button> */}
                            <Button type='submit' variant="contained" id='btn_next' color="success">
                                                  
                              Culminar
                            </Button>

                          </Box> 
                        </Collapse>
                      </Box>
              </Box>
                  
              
              

          </Box>

        
        </Box>
      </Box>
    </>
  )
}

export default BodySolicitud