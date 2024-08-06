import { Navigate,Outlet } from 'react-router-dom'
// Outlet : Es un componente el cual se le puede agregar muchos 
// componentes de ract-router

export const ProtectedRouters = ({children,user,redirectTop="/Login"}) => {
  
  // return  <p>{user.usuario}</p>
  if (!user || !user.usuario) {
    return <Navigate to={redirectTop} />
  }
      // return <Navigate to='/Home' />
  return children ? children : <Outlet/>



}

const validateUser = (user) => {
  return user.usuario !== null && user.usuario !== undefined && user.usuario !== ''
      && user.contrasena !== null && user.contrasena !== undefined && user.contrasena !== '';
}

