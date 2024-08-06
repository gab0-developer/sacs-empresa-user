export const expresionsRegulars = {
    emailRegex : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, //Validar correo electrónico:
    passwordRegex : /^[A-Z][A-Za-z0-9ñÑ*+/_.-]+$/, //Validar contraseña que comienza con una letra mayúscula y permite números y letras sin espacios:
    textoRegex : /^[a-zA-ZñÑ\s]{3,20}$/, // solo se pueden ingresar letras a partir de 3 caracteres
    textonumberRegex : /^[a-zA-ZñÑ0-9\s]{2,50}$/, // solo se pueden ingresar letras a partir de 3 caracteres y numeros
    maxtextonumberRegex : /^[a-zA-ZñÑ0-9\s]{5,100}$/, // solo se pueden ingresar letras a partir de 3 caracteres
    numberRegex : /^\d+$/, //Validar número sin espacios:
    cedulanumberRegex : /^\d{1,9}$/, //Validar unicamente cedula:
    floatnumberRegex : /^[0-9.,]{1,20}$/, //Validar número con punto(.) y coma (,):
    tlfRegex : /^\d+$/, //Validar número sin espacios:
    alphanumericRegex : /^[A-Za-zñÑ0-9]+$/, //Validar número y letras sin espacios:
    rifRegex : /^[GJVP]-\d{10,12}$/ ,  //Validar rif de empresa:
    // stringRegex : replace(/^[a-zA-Z\s]+|[a-zA-Z\s]+$/g, ''), //letras y espacion. Elimina los espaciados del inicio y final 
    
    // empresa register
    emailEmpresaRegex : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, //Validar correo electrónico:
}

//  default expresionsRegulars;
// VALIDATION CORREO INICIO DE SESION
export const Email_Expression = (value,setHook) => {
    let valor_email = value.trim()
    if (!expresionsRegulars.emailRegex.test(valor_email)) {
      return (setHook({
        error : true,
        message : 'El correo no es válido.',
      }))
      // setDiseabledSubmitSession(true)
      
    }else{
      return (setHook({
        dato: valor_email,
        error : false,
        message : 'Correo válido.',
        color:'success',
        fucosed:true
      }))
      // setDiseabledSubmitSession(false)
    }
}
// VALIDATION CONTRASEÑA
export const Password_Expression = (value,setHook) => {
    let valor_password = value.trim()
    if (!expresionsRegulars.passwordRegex.test(valor_password)) {
      return(
        setHook({
            error : true,
            message : 'La contraseña debe tener la primera letra mayuscula, ser alfa numérica e incluir algun caracter especial (/), (*), (#), ($), etc.',
        })
      )
      // setDiseabledSubmitSession(true)
      
    } else if(valor_password.length < 8) {
      return(
        setHook({
            error : true,
            message : 'La contraseña debe tener minimo 8 caracteres.',
        })
        // setDiseabledSubmitSession(false)
      )
    }else if(valor_password.length > 16) {
      return(
        setHook({
            error : true,
            message : 'La contraseña debe tener maximo 16 caracteres.',
        })
        // setDiseabledSubmitSession(false)
      )
    }
    else{
        return (
            setHook({
                dato: valor_password,
                error : false,
                message : 'Contraseña Válida.',
                color:'success',
                fucosed:true
              })
            // setDiseabledSubmitSession(false)
        )
   
    }
}
export const Rif_Expression = (value,setHook) => {
    let valor = value.trim()
      if (!expresionsRegulars.rifRegex.test(valor)) {
        return(
            setHook({
              error : true,
              message : 'El Rif no es valido. La primera letra debe ser mayúscula seguido de un guión.',
            })
            // setDiseabledNextEmpresa(true)
        )
        
      }else if (valor.length > 12){
        return(
          setHook({
            error : true,
            message : 'El Rif no es valido. Máximo 12 carácteres.',
          })
          // setDiseabledNextEmpresa(true)
      )
      }
      else{
        return (
            setHook({
              dato: valor,
              error : false,
              message : 'Rif válido.',
              color:'success',
              fucosed:true
            })
            // setDiseabledNextEmpresa(false) 
        )
      }
}
export const Texto_Expression = (value,setHook) => {
    let valor = value
      if (!expresionsRegulars.textonumberRegex.test(valor)) {
        return (
            setHook({
              error : true,
              message : 'Ingrese la información solicitada. Máximo 20 carácteres. Permitido solo letras.',
            })
            // setDiseabledNextEmpresa(true)
        )
        
      }else{
        return (
            setHook({
              dato: valor,
              error : false,
              message : 'Datos válidos.',
              color:'success',
              fucosed:true
            })
            // setDiseabledNextEmpresa(false)
        )
      }
}
export const Tlf_First_Expression = (value,setHook,valuecomparation) => {
    let valor = value.trim()
      if (!expresionsRegulars.tlfRegex.test(valor)) {
        return(
            setHook({
              error : true,
              message : 'Ingrese un número de teléfono Válido.',
            })
            // setDiseabledNextEmpresa(true)
        )
        
      }else if(valor.length > 11 || valor.length < 11) {
        return(
            setHook({
                error : true,
                message : 'Máximo 11 (once) dígitos.',
              })
            // setDiseabledSubmitSession(false)
        )
      }else if(valor === valuecomparation) {
        return(
            setHook({
                error : true,
                message : 'Este número ya lo ingreso.',
              })
              // setDiseabledSubmitSession(false)
        )
      }
      else{
        return(
            setHook({
              dato: valor,
              error : false,
              message : 'Teléfono válido Tlf_First_Expression',
              color:'success',
              fucosed:true
            })
            // setDiseabledNextEmpresa(false)
        )
      }
}
export const Tlf_Second_Expression = (value,setHook,valuecomparation) => {
    let valor = value.trim()
      if (!expresionsRegulars.tlfRegex.test(valor)) {
        return(
            setHook({
              error : true,
              message : 'Ingrese un número de teléfono válido.',
            })
            // setDiseabledNextEmpresa(true)
        )
        
      }else if(valor.length > 11 || valor.length < 11) {
        return(
            setHook({
                error : true,
                message : 'Máximo 11 (once) dígitos.',
              })
            // setDiseabledSubmitSession(false)
        )
      }else if(valor === valuecomparation) {
        return(
            setHook({
                error : true,
                message : 'Este número ya lo ingreso.',
              })
              // setDiseabledSubmitSession(false)
        )
      }
      else{
        return(
            setHook({
              dato: valor,
              error : false,
              message : 'Teléfono válido Tlf_Second_Expression',
              color:'success',
              fucosed:true
            })
            // setDiseabledNextEmpresa(false)
        )
      }
}
export const Email_First_Expression = (value,setHook,valuecomparation) => {
    let valor = value.trim()
    if (!expresionsRegulars.emailRegex.test(valor)) {
        return(
            setHook({
              error : true,
              message : 'El correo no es válido.',
            })
            // setDiseabledSubmitSession(true)
        )
      
    }else if(valor === valuecomparation) {
        return(
            setHook({
              error : true,
              message : 'Este correo ya lo ingreso.',
            })
            // setDiseabledSubmitSession(false)
        )
    }
    else{
      return(
        setHook({
            dato: valor,
            error : false,
            message : 'Correo válido.',
            color:'success',
            fucosed:true
          })
          // setDiseabledSubmitSession(false)
      )
    }
}
export const Email_Second_Expression = (value,setHook,valuecomparation) => {
    let valor = value.trim()
    if (!expresionsRegulars.emailRegex.test(valor)) {
        return(
            setHook({
              error : true,
              message : 'El correo no es válido.',
            })
            // setDiseabledSubmitSession(true)
        )
      
    }else if(valor === valuecomparation) {
        return(
            setHook({
              error : true,
              message : 'Este correo ya lo ingreso.',
            })
            // setDiseabledSubmitSession(false)
        )
    }
    else{
      return(
        setHook({
            dato: valor,
            error : false,
            message : 'Correo válido.',
            color:'success',
            fucosed:true
          })
          // setDiseabledSubmitSession(false)
      )
    }
}
export const Text_number_Expressions = (value,setHook) =>{
    let valor = value
    if (!expresionsRegulars.textonumberRegex.test(valor)) {
        return(
            setHook({
              error : true,
              message : 'Ingrese los datos solicitados.',
            })
            // setDiseabledNextEmpresa(true)
        )

    }else if(valor.length > 40) {
      return(
        setHook({
            error : true,
            message : 'Máximo 40 carácteres.',
          })
          // setDiseabledSubmitSession(false)
      )
    }
    else{
      return(
        setHook({
            dato: valor,
            error : false,
            message : 'Datos válidos.',
            color:'success',
            fucosed:true
          })
          // setDiseabledNextEmpresa(false) 
      )
    }
}
export const number_Expressions = (value,setHook) => {
    let valor = value.trim()
    if (!expresionsRegulars.numberRegex.test(valor)) {
        return(
            setHook({
                error : true,
                message : 'Ingrese solo dígitos/números solicitado sin espaciados.',
              })
              // setDiseabledNextEmpresa(true)
        )
        
    }
      // else if(valor.length > 18) {
      //   setHook({
      //     error : true,
      //     message : 'Máximo 18 digitos',
      //   })
      //   // setDiseabledSubmitSession(false)
      // }
    else{
        return(
            setHook({
                dato: valor,
                error : false,
                message : 'Datos válidos.',
                color:'success',
                fucosed:true
            })
              // setDiseabledNextEmpresa(false) 
        )
    }
}
export const referenciabancaria_Expressions = (value,setHook) => {
    let valor = value.trim()
    if (!expresionsRegulars.numberRegex.test(valor)) {
        return(
            setHook({
                error : true,
                message : 'Ingrese solo dígitos/números solicitado sin espaciados.',
              })
              // setDiseabledNextEmpresa(true)
        )
        
    }
      else if(valor.length > 22) {
        setHook({
          error : true,
          message : 'Máximo 22 digitos',
        })
        // setDiseabledSubmitSession(false)
      }
    else{
        return(
            setHook({
                dato: valor,
                error : false,
                message : 'Datos válidos.',
                color:'success',
                fucosed:true
            })
              // setDiseabledNextEmpresa(false) 
        )
    }
}
export const floatnumber_Expressions = (value,setHook) => {
    let valor = value.trim()
    if (!expresionsRegulars.floatnumberRegex.test(valor)) {
        return(
            setHook({
                error : true,
                message : 'Ingrese solo dígitos/números solicitado sin espaciados.',
              })
              // setDiseabledNextEmpresa(true)
        )
        
    }
      // else if(valor.length > 18) {
      //   setHook({
      //     error : true,
      //     message : 'Máximo 18 digitos',
      //   })
      //   // setDiseabledSubmitSession(false)
      // }
    else{
        return(
            setHook({
                dato: valor,
                error : false,
                message : 'Datos válidos.',
                color:'success',
                fucosed:true
            })
              // setDiseabledNextEmpresa(false) 
        )
    }
}
// VALIDACION PARA CAMPOS DE OBSERVACION O DE REFERENCIA (MAXTEXT)
export const MaxText_number_Expression = (value,setHook) => {
    let valor = value
      if (!expresionsRegulars.maxtextonumberRegex.test(valor)) {

        return(
            setHook({
                error : true,
                message : 'Ingrese los datos solicitados.',
              })
              // setDiseabledNextEmpresa(true)
        )
        
      }
      else if(valor.length > 100 || valor.length < 5) {
        return(
            setHook({
                error : true,
                message : 'Minimo 5 carácteres, Máximo 45 carácteres. ',
              })
              // setDiseabledSubmitSession(false)
        )
      }
      else{
        return(
            setHook({
                dato: valor,
                error : false,
                message : 'Datos válidos y correctos.',
                color:'success',
                fucosed:true
              })
              // setDiseabledNextEmpresa(false) 
        )
      }
}
// VALIDACION DE CAMPOS CON LIMITE DE CARACTERES
export const LimiteDe_Text_Number_Expression = (value,setHook) => {
    let valor = value
      if (!expresionsRegulars.textonumberRegex.test(valor)) {
        return(
            setHook({
                error : true,
                message : 'Ingresar los datos solicitados.',
            })
              // setDiseabledNextEmpresa(true)
        )
        
      }
      else if(valor.length > 20 || valor.length < 3) {
        return(
            setHook({
                error : true,
                message : 'Máximo 20 carácteres.',
            })
              // setDiseabledSubmitSession(false)
        )
      }
      else{
        return(
            setHook({
                dato: valor,
                error : false,
                message : 'Datos válidos.',
                color:'success',
                fucosed:true
            })
              // setDiseabledNextEmpresa(false) 
        )
    }
}
// VALIDACION DE CAMPO CEDULA 
export const Cedula_Expression = (value,setHook) => {
    let valor = value.trim()
    if (!expresionsRegulars.cedulanumberRegex.test(valor)) {
        return(
            setHook({
                error : true,
                message : 'Ingresar la cédula solicitada.',
              })
              // setDiseabledNextEmpresa(true)
        )
      
    }
    else if(valor.length < 1) {
        return(
            setHook({
                error : true,
                message : 'Ingrese una cédula válida y sin espaciados.',
            })
              // setDiseabledSubmitSession(false)
        )
    }
    else{

      return(
        setHook({
            dato: valor,
            error : false,
            message : 'Datos válidos.',
            color:'success',
            fucosed:true
          })
          // setDiseabledNextEmpresa(false) 
      )
    }
} 


// export const validateRifRegex = (value,setHook) => {
//     let valor = value
//     if (!expresionsRegulars.rifRegex.test(valor)) {
//       return (setHook({
//         error : true,
//         message : 'El Rif no es valido. La primera letra debe ser mayúscula seguido de un guión',
//       }))
//       // setDiseabledNextEmpresa(true)
      
//     }else{
//       return (setHook({
//         dato: valor,
//         error : false,
//         message : 'Rif válido',
//         color:'success',
//         fucosed:true
//       }))
//       // setDiseabledNextEmpresa(false) 
//     }
// } 
