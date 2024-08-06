import { createContext, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
//lib encriptacion
import CryptoJS from 'crypto-js';
// servicio
import {servidor} from '../Services/server.jsx'

export const Contextdatos = createContext() //? creo el context 

export function ContextAutentication({children}) {  //? funcion context para todo el proyecto

    const [userLogin, setuserLogin] = useState([]);

    const secretKey = import.meta.env.VITE_CRYPTO_KEY
    // Función para cifrar los datos
    const encryptData = (data) => {
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
        return encryptedData;
    };
   
    const decryptData = (encryptedData) => {

        try {
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
            const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
            return decryptedData;
        } catch (error) {
            console.error('Error al desencriptar los datos:', error);
            return error;
        }
    };

    // LOGEAR USER
    const User_login = async(datauser)  => {

        const userAutenticacion = {
            user: datauser.user,
            password: datauser.pass,
        };


        const url =`${servidor}Login/LoginSession/Table`;

        const resp = await axios.post(url, JSON.stringify(userAutenticacion));
        const resp_data = await resp.data;

        
        if (resp_data === false || resp_data.length === 0) {
            
            setuserLogin([])
            // return false
            return(
                Swal.fire(
                  'Lo Siento!',
                  `Usuario o Contraseña incorrecta. Por favor verifique o Registrese`,
                  'error'
                )
            )
        } else {

            setuserLogin({
                usuario: resp_data.correo_principal,
                // contrasena: resp_data.contrasena,
                activ_economica: resp_data.activ_economica,
                area_empresa: resp_data.area_empresa,
                correo_segundario: resp_data.correo_segundario,
                nombre_empresa: resp_data.nombre_empresa,
                pk_activ_economic: resp_data.pk_activ_economic,
                pk_area: resp_data.pk_area,
                pk_catastro: resp_data.pk_catastro,
                pk_empresa: resp_data.pk_empresa,
                pk_regente: resp_data.pk_regente,
                pk_tip_reg_merc: resp_data.pk_tip_reg_merc,
                regente_empresa: resp_data.regente_empresa,
                registro_mercantil: resp_data.registro_mercantil,
                representante_legal: resp_data.representante_legal,
                tipo_empresa: resp_data.tipo_empresa,
                tipo_estatus: resp_data.tipo_estatus,
                verificado: resp_data.verificado,
            });

            const datauser = {
                usuario: resp_data.correo_principal,
                // contrasena: resp_data.contrasena,
                activ_economica: resp_data.activ_economica,
                area_empresa: resp_data.area_empresa,
                correo_segundario: resp_data.correo_segundario,
                nombre_empresa: resp_data.nombre_empresa,
                pk_activ_economic: resp_data.pk_activ_economic,
                pk_area: resp_data.pk_area,
                pk_catastro: resp_data.pk_catastro,
                pk_empresa: resp_data.pk_empresa,
                pk_regente: resp_data.pk_regente,
                pk_tip_reg_merc: resp_data.pk_tip_reg_merc,
                regente_empresa: resp_data.regente_empresa,
                registro_mercantil: resp_data.registro_mercantil,
                representante_legal: resp_data.representante_legal,
                tipo_empresa: resp_data.tipo_empresa,
                tipo_estatus: resp_data.tipo_estatus,
                verificado: resp_data.verificado,
            }
            const encriptarusuario = encryptData(datauser)
            sessionStorage.setItem('user', encriptarusuario);
            // sessionStorage.setItem('user', JSON.stringify(datauser));
            return(
                Swal.fire(
                  `Bienvenido! ${resp_data.correo_principal}`,
                  `Inicio de Sesión Exitoso`,
                  'success'
                )
            )
            
        }

    

    };

     // CERRAR SESION
     const Logout_sesison = () =>{
        // navigate('/LoginAdmin');
        setuserLogin([])
        sessionStorage.removeItem('user');
    }


    return (
        <>
            {/* pasar valores al contect creado */}
            <Contextdatos.Provider 
                    value={{
                        userLogin,//estado hook
                        User_login, // funcion
                        Logout_sesison, // funcion cerrar sesion
                        decryptData // Pasar la función para desencriptar datos en el contexto
                    }}
                >

                {children}

            </Contextdatos.Provider>
        </>
    )
}

