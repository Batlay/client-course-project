import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../Router/routes';
import { AuthContext} from '../context';
import Loader from './UI/Loader/Loader';
import NavbarPanel from './UI/Navbar/NavbarPanel';
import { UserContext } from '../context/userContext';


const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)

//   const User = localStorage.geItem('user')

  // console.log('Состояние авторизации:' , isAuth)
  // console.log('Данные пользователя:' , value)
  let group = 0

  if (isAuth) {
      group = JSON.parse(localStorage.getItem('user')).groups
  }

  if (isLoading) {
      return <Loader />
  }
  if (!isAuth) {
    return (
      <Routes>
         {publicRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
         {/* <Route  path = "/login" element={<Login />} key ='/login' /> */}
        {/* {<Route path="*" element={<Navigate to ="/login" />}/> } */}
    </Routes> )
  } else {

  return (
    <>
    
    <NavbarPanel />
   
    { group == 1 &&
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
  { group == 2 &&
    <Routes>  
        {privateRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
        {<Route path="/login" element={<Navigate to ="/administator/schools" />}/> }
    </Routes>
  }
  { group == 3 &&
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
   { group == 4 &&
    <Routes>
        {privateRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
         {<Route path="/login" element={<Navigate to ="/schools" />}/> }
    </Routes>
  }
    </>
  )
  }
}

export default AppRouter
