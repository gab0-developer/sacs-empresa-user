import React from 'react'
// services
import {servidor} from '../../Services/server.jsx';


// import herramientas
import { useEffect, useState } from "react";
import { AxiosGet } from '../../Helpers/FetchAxios/FetchAxios';
// import chartjs
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BodyMensual({user}) {

    // let obtenerlocalstorage = localStorage.getItem('user')
    // let usarioempresa = JSON.parse(obtenerlocalstorage)

    const [SolicitudAnual, setSolicitudAnual] = useState([])
    const [filtradoSolicitudMensual, setFiltradoSolicitudMensual] = useState([])
    const [CantidadSoliMensual, setCantidadSoliMensual] = useState()
    const [mensual, setMensual] = useState([])


    const DataSolicitudesAnual= async () => {
        const url = `${servidor}Estadisticas/SolicitudEmpresaMensual/Table`;
        AxiosGet(url,setSolicitudAnual)
        
    };

    const filterAnual = () =>{
        setFiltradoSolicitudMensual(SolicitudAnual.filter((item) => item.fk_empresa == user.pk_empresa))
        // let filtrado = SolicitudAnual.filter((item) => item.fk_empresa == usarioempresa.pk_empresa)
    }

    useEffect(() => {
        DataSolicitudesAnual();
    }, []);
    useEffect(() => {
        filterAnual();
    }, [SolicitudAnual]);

    const obtenerData = () =>{
        
        setCantidadSoliMensual(filtradoSolicitudMensual.map((item) => item.cantidad))
        setMensual(filtradoSolicitudMensual.map((item) => item.mes))
     
    }

    useEffect(() =>{
        obtenerData()
    },[filtradoSolicitudMensual])


    const meses = ['Ninguno','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    let mesesNombres = mensual.map((item) => meses[parseInt(item)]);


    const consola = () =>{
        obtenerData()
        // filterAnual()
        
    }

    let options = {
        responsive: true,
        animation: true,
        plugins: {
            legend: {
                display: true,
            },
            
            title: {
                display: true,
                text: 'Solicitudes Mensual ',
            },
        },
        scales:{
            x:{
                ticks: {color: 'rgba(0, 0, 0, 0.5)'}
            }
        }
    };
      
    let data = {
            labels: mesesNombres,
            datasets: [
                {
                    label: `Cantidad Solicitudes: `,
                    data: CantidadSoliMensual,
                    backgroundColor: 'rgba(255, 234, 99, 0.5)',
                }
            ],
        };
  return (
    <>
        {/* <button onClick={consola}>concola</button> */}
        <Box sx={{width:'100%'}}>
            <Bar data={data} options={options} />
        </Box>
    </>
  )
}

export default BodyMensual