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

function BodyAnual({user}) {

    // let obtenerlocalstorage = localStorage.getItem('user')
    // let usarioempresa = JSON.parse(obtenerlocalstorage)


    const [SolicitudAnual, setSolicitudAnual] = useState([])
    const [filtradoSolicitudAnual, setFiltradoSolicitudAnual] = useState([])
    const [Cantidad, setCantidad] = useState()
    const [year, setYear] = useState([])
    const [patologiayear, setPatologiaYear] = useState()

    const DataSolicitudesAnual= async () => {
        const url = `${servidor}Estadisticas/SolicitudEmpresaAnual/Table`;
        AxiosGet(url,setSolicitudAnual)
        
    };

    const filterAnual = () =>{
        setFiltradoSolicitudAnual(SolicitudAnual.filter((item) => item.fk_empresa == user.pk_empresa))
        // let filtrado = SolicitudAnual.filter((item) => item.fk_empresa == usarioempresa.pk_empresa)
    }

    useEffect(() => {
        DataSolicitudesAnual();
    }, []);
    useEffect(() => {
        filterAnual();
    }, [SolicitudAnual]);

    const obtenerData = () =>{
        //     let cantidadData = filtradoSolicitudAnual.map((item) => item.cantidad)
        //     let anioData = filtradoSolicitudAnual.map((item) => item.anio)
        
        setCantidad(filtradoSolicitudAnual.map((item) => item.cantidad))
        setYear(filtradoSolicitudAnual.map((item) => item.anio))
        // setCantidad(cantidadData)
        // setYear(anioData)
    }

    useEffect(() =>{
        obtenerData()
    },[filtradoSolicitudAnual])


    


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
                text: 'Solicitudes Anual',
            },
        },
        scales:{
            x:{
                ticks: {color: 'rgba(0, 0, 0, 0.5)'}
            }
        }
    };
      
    let data = {
            labels: year,
            datasets: [
                {
                    label: `Cantidad Solicitudes: `,
                    data: Cantidad,
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

export default BodyAnual