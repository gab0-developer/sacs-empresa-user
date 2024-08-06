let contadorstep = 1;//cntador de pasos 
// let btn_indicadores = document.getElementById('btn_indicadores').length //cantidad de elementos del formulario

export function nextformstep (setStepIndicador,Stepindicador) {
    // let form_step = document.querySelector('#form_step')
    // form_step.classList.remove('noactive')
    // form_step.classList.add('active')
    contadorstep++;

    let slider_form = document.querySelector('.slider_form')
    slider_form.scrollLeft += slider_form.offsetWidth  
    // setStepIndicador(contadorstep)

    // console.log('cantidad indicadores: ',btn_indicadores)
    
} 
export function beforeformstep (setStepIndicador,Stepindicador) {
    contadorstep--;

    let slider_form = document.querySelector('.slider_form')
    slider_form.scrollLeft -= slider_form.offsetWidth  

    // setStepIndicador(contadorstep) //incrementar btn_indicador
     
} 

// * INDICADORES DE SLIDER
export function indicador_next_before_formstep (index,setStepIndicador) {
    // let form_step = document.querySelector('#form_step')
    // form_step.classList.remove('active')
    // form_step.classList.add('noactive')
    let slider_form = document.querySelector('.slider_form')
    // slider_form.scrollLeft = index * slider_form.offsetWidth  
    slider_form.scrollLeft = index * slider_form.offsetWidth  
    // active indicador 
    console.log('cantidad indicadores: ',btn_indicadores)
     
} 


// const [Stepindicador, setStepIndicador] = useState(1);
// <Box id='indicadores_slider'>

// <Typography variant="p" color="primary">Medicamentos/Insumos Asignados: </Typography>
// {
//     detalles.map((item,index) =>(
//       <Box component='div' id="container_indicador" key={index} className={`${Stepindicador === index + 1 && "active_indicador"}`}>
//         <button id="btn_indicadores"  onClick={() => indicador_next_before_formstep(index,setStepIndicador)}>{index + 1}</button>
//       </Box>
//     ))
// }
// </Box>



