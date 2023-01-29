import React, { useContext, useState } from 'react'
import MyButton from '../components/UI/Button/MyButton'
import MyInput from '../components/UI/Input/MyInput'
import { AuthContext } from '../context'
import axios from 'axios'
import { UserContext } from '../context/userContext'

// export const UserContext = React.createContext();

const Login = () => {
  const [user, setUser] = useState({username: '', password: ''})
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)
  
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

    const login = (event) => {
        event.preventDefault()
     
        console.log('Данные при входе' , user)

        axios.post('/api/login/', user)
        .then(response =>  {
           const data = response.data
           setIsAuth(true)
           setValue(data)
           localStorage.setItem('auth', 'true')
           localStorage.setItem('user', JSON.stringify(data))
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          }
        });
    }

  return (
    <div>
        <form onSubmit={login}>
            <MyInput 
              value={user.username}
            type='text' placeholder='Введите  логин'
              onChange={e => setUser({...user, username: e.target.value})}
            />
            <MyInput 
            value={user.password}
            type='password' placeholder='Введите  пароль'
              onChange={e => setUser({...user, password: e.target.value})}
              
            />
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}

export default Login
