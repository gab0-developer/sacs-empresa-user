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
import { AxiosGet } from "../../Helpers/FetchAxios/FetchAxios";
import PopupComponent from "../../Helpers/Modal/PopupComponent";
import { customHeadRender } from '../../Helpers/Muidatatable/muidatatable';
import '../../assets/Css/muidatatable.css'
// services 
import {servidor} from '../../Services/server.jsx'
// helpers
import BodyDetails from './BodyDetails';

import Sidebar from '../../Routers/Sidebar.jsx';


function TableSolicitud({user}) {

  const [tabla, setTabla] = useState()
  const [FilterSolicitud, setFilterSolicitud] = useState([])

  // collapse 
  const [CollapseSolicitud, setCollapseSolicitud] = useState(false);

  // --------modals
  const [modaldetails, setModalDetails] = useState(false)
  const OpenCloseModalDetails = () =>{setModalDetails(!modaldetails)}

  // detalles solicitud
  const [detallesSolicitud, setDetallesSolicitud] = useState({})

  const tableData = () =>{
    const url = `${servidor}Empresa/ListSolicitudesEmpresa/Table`
    AxiosGet(url,setTabla)
  }
  const ListFilterSolicitudEmpresa = () => {
    // let filtersolicitud = tabla.filter((item) => item.rif_empresa == user.pk_empresa)
    setFilterSolicitud(tabla.filter((item) => item.rif_empresa == user.pk_empresa))
  }

  useEffect(() =>{
      tableData()
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
    const detallesSolicitud = tabla.filter( (item) => 
        item.rif_empresa == datarif &&
        item.nro_solicitud == datanrosolicitud
    
    )
    setDetallesSolicitud({
      pk_estatus_solicitud: detallesSolicitud[0].pk_estatus_solicitud,
      rif_empresa: detallesSolicitud[0].rif_empresa,
      nro_solicitud: detallesSolicitud[0].nro_solicitud,
      tipo_solicitud: detallesSolicitud[0].tipo_solicitud,
      nombre_solicitud: detallesSolicitud[0].nombre_solicitud,
      activ_economica: detallesSolicitud[0].activ_economica,
      estatus_solicitud: detallesSolicitud[0].estatus_solicitud,
      // tipo_empresa: detallesSolicitud[0].tipo_empresa,
      // tipo_empresa: detallesSolicitud[0].tipo_empresa,
      // tip_area: detallesSolicitud[0].tip_area,
      // nombre_categoria: detallesSolicitud[0].nombre_categoria,
      // nombre_apellido_propietario: detallesSolicitud[0].nombre_apellido_propietario,
      // nombre_apellido_regente: detallesSolicitud[0].nombre_apellido_regente,
      // nombre_apellido_representante: detallesSolicitud[0].nombre_apellido_representante,
      // motivo_solicitud: detallesSolicitud[0].motivo_solicitud,
    })
    OpenCloseModalDetails()
  }

   // -------------------------------
  // ------------DETALES_SOLICITUD
  // --------------------------

  const consola = () =>{
    ListFilterSolicitudEmpresa()
  }


  
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
        
        {/*<button onClick={consola}>consola</button>*/}

        <Sidebar
          inicialusario={InicialUser}
          usuario={user.usuario}
        />

        <Box component='div' className='container_solicitudes'>

          <Box className='modal_Details_Solicitud'>
                <PopupComponent
                    onOpen={modaldetails}
                    title='Detalles de la Solicitud'
                    onClose={OpenCloseModalDetails}
                    bodymodal={
                    <BodyDetails
                        onClose={OpenCloseModalDetails}
                        pk_estatus_solicitud = {detallesSolicitud.pk_estatus_solicitud}
                        rif_empresa = {detallesSolicitud.rif_empresa}
                        nrosolicitud = {detallesSolicitud.nro_solicitud}
                        tipo_solicitud = {detallesSolicitud.tipo_solicitud}
                        nombre_solicitud = {detallesSolicitud.nombre_solicitud}
                        activ_economica = {detallesSolicitud.activ_economica}
                        estatus_solicitud = {detallesSolicitud.estatus_solicitud}
                    />
                    }
                />
          </Box>


          <Box component='div'>

            <Box component='dev'>
              <Button variant="contained" color='error' className='btn_modals' startIcon={<AddCircleOutlineSharpIcon />} onClick={FilterSolicitudes} >
                Solicitudes Realizadas
              </Button>
            </Box>


            <Collapse in={CollapseSolicitud}>
                  <Stack sx={{ width: '100%', mt:1 }} spacing={2}>
                    <Box component='div' sx={{margin:'2rem 0'}}>
                      <MUIDataTable 
                          sx={{textAlign:'center'}}
                          title={"SOLICITUDES REALIZADAS"}
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