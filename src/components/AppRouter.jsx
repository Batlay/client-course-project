import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../Router/routes';
import { AuthContext, Context } from '../context';
import Loader from './UI/Loader/Loader';
import NavbarPanel from './UI/Navbar/NavbarPanel';
import Login from '../pages/Login';
import { UserContext } from '../context/userContext';


const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)

//   const User = localStorage.geItem('user')

  console.log('Состояние авторизации:' , isAuth)


  if (isLoading) {
      return <Loader />
  }
  if (!isAuth) {
    return (
      <Routes>
         <Route  path = "/login" element={<Login />} key ='/login' />
        {<Route path="*" element={<Navigate to ="/login" />}/> }
    </Routes> )
  } else {

  return (
    <>
    <div className="navbar">
    <NavbarPanel />
    </div>
    { value.groups == 1 &&
    <Routes>  
        {privateRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
        {<Route path="/login" element={<Navigate to ="/tests" />}/> }
    </Routes>
  } 
  { value.groups == 3 &&
    <Routes>
        {privateRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
         {<Route path="/login" element={<Navigate to ="/about" />}/> }
    </Routes>
  }
    </>
  )
  }
}

export default AppRouter
