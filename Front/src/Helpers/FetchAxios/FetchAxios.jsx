import axios from "axios";
import Swal from 'sweetalert2'

// -----------toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const AxiosGet = async (url,setestado) => {
  try {
    const resp = await axios.get(url)
    if (resp.status == 200 && resp.statusText == 'OK') {
      const resp_data = await resp.data
      setestado(resp_data)
      // return resp_data
      
    }else{
      console.log('ERROR DESCONOCIDO, NOTIFICAR A LOS DESARROLLADORES')
    }
    
  } catch (error) {
    console.log('ERROR DE RUTA: ' + error)
  }
}
export const AxiosPostData = async (url,obj_data,dataname,tableData) => {

  try {
    const resp = await axios.post(url,JSON.stringify(obj_data))
    if (resp.status == 200 && resp.statusText == 'OK') {
      const resp_data = await resp.data
      
      if(resp_data == 2){
      
        tableData()
        return (
          Swal.fire(
            'Registrado!',
            `${dataname} Registrado` ,
            'success'
          )
        )
      }else if(resp_data == 1){
        return(
          Swal.fire(
            'Error!',
            `${dataname} ya esta Registrado.`,
            'error'
          )
        )
      }else if(resp_data == 3){
        tableData()
        return (
          Swal.fire(
            'No Existe!',
            `${dataname} NO ESTA REGISTRADO` ,
            'error'
          )
        )
      }else if(resp_data == 4){
        tableData()
        return (
          Swal.fire(
            'Agotado!',
            `${dataname}` ,
            'error'
          )
        )
      }else if(resp_data == 5){
        tableData()
        return (
          Swal.fire(
            'Error de Ciclo!',
            `${dataname} NO se puede Asignar porque no ha Cumplido el perído de tiempo del primer ciclo` ,
            'warning'
          )
        )
      }
      else{
        return(
          Swal.fire(
            'Gran Error!',
            'Ocurrio un error inesperado.',
            'question'
          )
        )
      }

    }else{
      console.log('ERROR DESCONOCIDO')
    }
    
  } catch (error) {
    console.log('ERROR DE RUTA: ' + error)
  }
}
export const AxiosPost = async (url,obj_data,dataname,tableData) => {

  try {
    const resp = await axios.post(url,JSON.stringify(obj_data))
    if (resp.status == 200 && resp.statusText == 'OK') {
      const resp_data = await resp.data
   
      if(resp_data == 2){
      
        // tableData()
        return (
          Swal.fire(
            'Registrado!',
            `${dataname}` ,
            'success'
          )
        )
      }else if(resp_data == 1){
        return(
          Swal.fire(
            'Error!',
            `${dataname} ya esta Registrado.`,
            'error'
          )
        )
      }else if(resp_data == 3){
        // tableData()
        return (
          Swal.fire(
            'No Existe!',
            // `${dataname} NO ESTA REGISTRADO` ,
            'error'
          )
        )
      }else if(resp_data == 4){
        // tableData()
        return (
          Swal.fire(
            'Regente!',
            `El Regente ya esta registrado en tres empresas. No puede continuar con el registro` ,
            'error'
          )
        )
      }else{
        return(
          Swal.fire(
            'Gran Error!',
            'Ocurrio un error inesperado.',
            'question'
          )
        )
      }

    }else{
      console.log('ERROR DESCONOCIDO')
    }
    
  } catch (error) {
    console.log('ERROR DE RUTA: ' + error)
  }
}
export const AxiosPostSolicitud = async (url,obj_data,dataname,tableData) => {

  try {
    const resp = await axios.post(url,JSON.stringify(obj_data))
    if (resp.status == 200 && resp.statusText == 'OK') {
      const resp_data = await resp.data

      if(resp_data == 2){

        // tableData()
        // <ToastContainer /> ---este se llama en el contenedor donde se va a mostrar
        return (
          toast.success(`${dataname} `,{position:toast.POSITION.TOP_RIGHT})
        )

      }else if(resp_data == 1){
        return(
          Swal.fire(
            'Error!',
            `${dataname} ya esta Registrado.`,
            'error'
          )
        )
      }else if(resp_data == 3){
        tableData()
        return (
          Swal.fire(
            'No Existe!',
            `${dataname} NO ESTA REGISTRADO` ,
            'error'
          )
        )
      }else if(resp_data == 4){
        tableData()
        return (
          Swal.fire(
            'Agotado!',
            `${dataname}` ,
            'error'
          )
        )
      }else if(resp_data == 5){
        tableData()
        return (
          Swal.fire(
            'Error de Ciclo!',
            `${dataname} NO se puede Asignar porque no ha Cumplido el perído de tiempo del primer ciclo` ,
            'warning'
          )
        )
      }
      else{
        return(
          Swal.fire(
            'Gran Error!',
            'Ocurrio un error inesperado.',
            'question'
          )
        )
      }

    }else{
      console.log('ERROR DESCONOCIDO')
    }
    
  } catch (error) {
    console.log('ERROR DE RUTA: ' + error)
  }
}



export const AxiosPut = async (url,obj_data,dataname,datamodif = null,tableData) => {
  try {
    const resp = await axios.post(url,JSON.stringify(obj_data))
    if (resp.status == 200 && resp.statusText == 'OK') {
      const resp_data = await resp.data
      
      if(resp_data == 2){
        
        tableData()
        return (
          Swal.fire(
            'Modificado!',
            `${dataname}`,
            'success'
          )
        )
      }else if(resp_data == 1){
        return(
          Swal.fire(
            'Error!',
            `${datamodif} ya esta Registrado!`,
            'error'
          )
        )
      }else{
        return(
          Swal.fire(
            'Error inesperado!',
            'Esta intentando Modificar un registro no existente en la data.',
            'warning'
          )
        )
      }

    }else{
      console.log('ERROR DESCONOCIDO, NOTIFICAR A LOS DESARROLLADORES')
    }
    
  } catch (error) {
    console.log('ERROR DE RUTA: ' + error)
  }
  
}
export const AxiosDelete = (url,obj_data,dataname,tableData) => {
  try {

    Swal.fire({
      title: `¿ Esta Seguro de eliminar ${dataname} ?`,
      text: `El registro ${dataname} sera eliminado permanentemente`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#18afa5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then(async(result) => {
      if (result.isConfirmed) {

        const resp = await axios.post(url,JSON.stringify(obj_data))
        if (resp.status == 200 && resp.statusText == 'OK') {
          const resp_data = await resp.data 

          if(resp_data == 2){
            Swal.fire(
              'Eliminado!',
              `El Registro ${dataname} ha sido eliminado permanentemente.`,
              'success'
            )

          }else{
            Swal.fire(
              'Error de Emergencia!',
              'Esta intentando eliminar un registro que no existente o no se encuentra en la data.',
              'warning'
            )
          }
          tableData()

        }else{
          console.log('ERROR DESCONOCIDO, NOTIFICAR A LOS DESARROLLADORES')
        }

      }
    })

  } catch (error) {
    console.log('ERROR DE RUTA: ' + error)
  }
  
}
