function PadStartCiudadano(cedula) {
    let dataCiudadano =  cedula.padStart(9, 0)
    return (
        dataCiudadano
    )
}

export default PadStartCiudadano