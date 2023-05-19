import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import { publicRoutes, teacherRoutes, pupilRoutes, specRoutes } from '../Router/routes';
import { AuthContext} from '../context';
import Loader from './UI/Loader/Loader';
import NavbarPanel from './UI/Navbar/NavbarPanel';


const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  let group = 0

  if (isAuth) {
      group = JSON.parse(localStorage.getItem('user')).groups
  }

  if (isLoading) {
      return <Loader />
  }
  if (!isAuth) {
    return (
      <>
      <NavbarPanel />
      <Routes>
         {publicRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
      </Routes> 
      </>
      )
  } else {

    return (
      <>
      { group == 1 &&
      <Routes>  
          {pupilRoutes.map(route => 
              <Route exact
              element={route.component } 
              path={route.path}
              key={route.path}
              />
          )}
          {<Route path="/login" element={<Navigate to ="/tests" />}/> }
          {<Route path="" element={<Navigate to ="/tests" />}/> }
      </Routes>
      } 
      { group == 3 &&
        <>
        <NavbarPanel />
        <Routes>
            {teacherRoutes.map(route => 
                <Route exact
                element={route.component } 
                path={route.path}
                key={route.path}
                />
            )}
            {<Route path="/login" element={<Navigate to ="/pupils" />}/> }
            {<Route path="" element={<Navigate to ="/pupils" />}/> }
        </Routes>
        </>
      }
      { group == 4 &&
        <>
        <NavbarPanel />
        <Routes>
            {specRoutes.map(route => 
                <Route exact
                element={route.component } 
                path={route.path}
                key={route.path}
                />
            )}
            {<Route path="/login" element={<Navigate to ="/schools" />}/> }
            {<Route path="" element={<Navigate to ="/schools" />}/> }
        </Routes>
        </>
      }
      </>
    )
  }
}

export default AppRouter
