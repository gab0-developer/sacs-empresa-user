import { Box, Button, IconButton,TextField, Tooltip, Select,InputLabel, MenuItem, Alert, Stack, Collapse, Autocomplete, Grid, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material'

import { useEffect, useState } from "react"; 
// MATERIAL UI 
import MUIDataTable from 'mui-datatables';
import EditIcon from '@mui/icons-material/Edit';

// material Icon 
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import LoupeIcon from '@mui/icons-material/Loupe';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// HELPERS 
import { AxiosGet } from "../../Helpers/FetchAxios/FetchAxios.jsx";
import PopupComponent from "../../Helpers/Modal/PopupComponent.jsx";
import { customHeadRender } from '../../Helpers/Muidatatable/muidatatable.jsx';
import '../../assets/Css/muidatatable.css'
// services 
import {servidor} from '../../Services/server.jsx'
// helpers
import BodyDetails from './BodyDetails.jsx';

import Sidebar from '../../Routers/Sidebar.jsx';


function TableSolicitud({user}) {

  const [tabla, setTabla] = useState()
  const [ListSolicitudPendientePago, setListSolicitudPendientePago] = useState()
  const [FilterSolicitud, setFilterSolicitud] = useState([])

  // collapse 
  const [CollapseSolicitud, setCollapseSolicitud] = useState(false);

  // --------modals
  const [modaldetails, setModalDetails] = useState(false)
  const OpenCloseModalDetails = () =>{setModalDetails(!modaldetails)}

  // detalles solicitud
  const [detallesSolicitud, setDetallesSolicitud] = useState({})

  const tableData = () =>{
    const url = `${servidor}Empresa/ListSolicitudesEmpresaPagoPendiente/Table`
    AxiosGet(url,setTabla)
  }
  const ListSolicitud_PendientePago = () =>{
    const url = `${servidor}Empresa/ListSolicitudMontoPago/Table`
    AxiosGet(url,setListSolicitudPendientePago)
  }
  const ListFilterSolicitudEmpresa = () => {
    // let filtersolicitud = tabla.filter((item) => item.rif_empresa == user.pk_empresa)
    setFilterSolicitud(tabla.filter((item) => item.rif_empresa == user.pk_empresa))
  }

  useEffect(() =>{
      tableData()
      ListSolicitud_PendientePago()
  },[])



  // -------------------------------
  // ------------FILTRADO DE SOLICITUD SEGUN LA EMPRESA LOGEADA
  // --------------------------
  const FilterSolicitudes = () =>{
    setCollapseSolicitud(!CollapseSolicitud);
    ListFilterSolicitudEmpresa()
  }


  // -------------------------------
  // ------------DETALES_SOLICITUD
  // --------------------------
  const DetalleSolicitud = (data) =>{
    let datarif = data[0]
    let datanrosolicitud = data[1]

    const detallesSolicitud = ListSolicitudPendientePago.filter( (item) => 
        item.fk_empresa == datarif &&
        item.solicitud == datanrosolicitud
    
    )
    setDetallesSolicitud({
      rif_empresa: detallesSolicitud[0].fk_empresa,
      nro_solicitud: detallesSolicitud[0].solicitud,
      nombre_solicitud: detallesSolicitud[0].nombre_solicitud,
      estatus_solicitud: detallesSolicitud[0].estatus_solicitud,
      fecha_solicitud: detallesSolicitud[0].fecha_solicitud,
      caducidad: detallesSolicitud[0].caducidad,
      monto_bs: detallesSolicitud[0].monto_bs,
    })
    OpenCloseModalDetails()
  }

   // -------------------------------
  // ------------DETALES_SOLICITUD
  // --------------------------
  
  const columns = [

    {
        name : 'rif_empresa',
        label : 'RIF_EMPRESA',
        options:{
          display:"excluded", //ocultar columna
        }
    },
    {
      name : 'nro_solicitud',
      label : 'NRO_SOLICITUD',
      options:{
            customHeadRender: (columnMeta, handleToggleColumn) => {
              return customHeadRender(columnMeta, handleToggleColumn)
            },
            customBodyRender: (value, tableMeta, updateValue) => {
              return <div className="celdas_data">{value}</div>
            },
      }
    },
    {
      name : 'tipo_empresa',
      label : 'TIPO DE EMPRESA',
      options:{
            customHeadRender: (columnMeta, handleToggleColumn) => {
              return customHeadRender(columnMeta, handleToggleColumn)
            },
            customBodyRender: (value, tableMeta, updateValue) => {
              return <div className="celdas_data">{value}</div>
            },
          }
    },
    {
      name : 'tip_area',
      label : 'ÁREA',
      options:{
            customHeadRender: (columnMeta, handleToggleColumn) => {
              return customHeadRender(columnMeta, handleToggleColumn)
            },
            customBodyRender: (value, tableMeta, updateValue) => {
              return <div className="celdas_data">{value}</div>
            },
          }
    },
    {
      name : 'activ_economica',
      label : 'ACTIVIDAD',
      options:{
            customHeadRender: (columnMeta, handleToggleColumn) => {
              return customHeadRender(columnMeta, handleToggleColumn)
            },
            customBodyRender: (value, tableMeta, updateValue) => {
              return <div className="celdas_data">{value}</div>
            },
          }
    },
    {
      name : 'Action',
      label : 'ACCIONES',
      options:{
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return customHeadRender(columnMeta, handleToggleColumn)
        },
        customBodyRender:(value, tableMeta, updateValue) =>{
            const transf_obj = Object.assign({},tableMeta.rowData)
            return (
                <>
                  <div className="celdas_data">
                  <Tooltip title="Detalles">
                      <IconButton aria-label="editicon" color='success' onClick={() => DetalleSolicitud(transf_obj)}>
                          <LoupeIcon />
                      </IconButton>
                    </Tooltip>
                  {/* <Tooltip title="PDF">
                      <IconButton aria-label="editicon" color='primary' onClick={() => PdfSolicitud(transf_obj)}>
                          <PictureAsPdfIcon />
                      </IconButton>
                    </Tooltip> */}
                  
                  </div>

                </>
            )
        }
        
    }
    },

  ]

  
  const opciones ={
    
    filterType: 'checkbox',
    // fixedHeader: true,
    selectableRows: false ,// o none
    // selectableRowsOnClick: true,
    filter:true,
    search:true,
    searchPlaceholder:'Buscar..',
    // searchAlwaysOpen:true,
    print: false ,
    download: false ,
    viewColumns:true,
    sort:true,
    draggable:true,
    responsive:'standard',
    rowsPerPage: 5,
    rowsPerPageOptions:[5,10,15,20,30,40,50],

    // traducir tabla en español
    textLabels: {
      body: {
        noMatch: 'No se encontraron registros',
        toolTip: 'Ordenar',
      },
      pagination: {
        next: 'Siguiente página',
        previous: 'Página anterior',
        rowsPerPage: 'Filas por página:',
        displayRows: 'de',
      },
      toolbar: {
        search: 'Buscar',
        downloadCsv: 'Descargar CSV',
        print: 'Imprimir',
        viewColumns: 'Ver columnas',
        filterTable: 'Filtrar tabla',
      },
      filter: {
        all: 'Todos',
        title: 'FILTROS',
        reset: 'REINICIAR',
      },
      viewColumns: {
        title: 'Mostrar columnas',
        titleAria: 'Mostrar/Ocultar columnas de la tabla',
      },
      selectedRows: {
        text: 'fila(s) seleccionada(s)',
        delete: 'Borrar',
        deleteAria: 'Borrar filas seleccionadas',
      },
    },

    draggableColumns:{
        enabled:true
    },
  }



  // letra inicial del usuario logeado
  const InicialUser = user.usuario.substr(0 ,1)

  return (
    <>
    
        <Sidebar
          inicialusario={InicialUser}
          usuario={user.usuario}
        />

        <Box component='div' className='container_solicitudes'>

          <Box className='modal_Details_Solicitud'>
                <PopupComponent
                    onOpen={modaldetails}
                    title='Credenciales de pago de la solicitud'
                    onClose={OpenCloseModalDetails}
                    bodymodal={
                    <BodyDetails
                        onClose={OpenCloseModalDetails}
                        rif_empresa = {detallesSolicitud.rif_empresa}
                        nrosolicitud = {detallesSolicitud.nro_solicitud}
                        nombre_solicitud = {detallesSolicitud.nombre_solicitud}
                        estatus_solicitud = {detallesSolicitud.estatus_solicitud}
                        fecha_solicitud = {detallesSolicitud.fecha_solicitud}
                        caducidad = {detallesSolicitud.caducidad}
                        monto_bs = {detallesSolicitud.monto_bs}
                        tableData = {tableData}
                        FilterSolicitudes = {FilterSolicitudes}
                    />
                    }
                />
          </Box>


          <Box component='div'>

            <Box component='dev'>
              <Button variant="contained" color='error' className='btn_modals' startIcon={<AddCircleOutlineSharpIcon />} onClick={FilterSolicitudes} >
                Solicitudes Pendientes por Pago
              </Button>
            </Box>


            <Collapse in={CollapseSolicitud}>
                  <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                    <Box component='div' sx={{margin:'2rem 0'}}>
                      <MUIDataTable 
                          sx={{textAlign:'center'}}
                          title={"SOLICITUDES PENDIENTES POR PAGAR"}
                          data={FilterSolicitud}
                          columns={columns}
                          options={opciones}
                      />
                    </Box>
                  </Stack>
            </Collapse> 

            

          </Box>

        </Box>

    </>
  )
}

export default TableSolicitud