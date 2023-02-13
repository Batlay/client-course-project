import React, { useContext, useState } from 'react'
import MyButton from '../components/UI/Button/MyButton'
import MyInput from '../components/UI/Input/MyInput'
import { AuthContext } from '../context'
import axios from 'axios'
import { UserContext } from '../context/userContext'
import { Link, useNavigate } from 'react-router-dom'

// export const UserContext = React.createContext();


const Login = () => {
  const [user, setUser] = useState({username: '', password: ''})
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)
  const router = useNavigate()

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
        <form onSubmit={login} aria-label="form">
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
            <MyButton data-testid='login-button-element'>Войти</MyButton>
        </form>
        <MyButton data-testid='forgot' onClick={() => router(`/user-forgot-password`, {replace: true})}>
        Забыли Пароль?
            </MyButton>
        {/* <p className='mt-3'><Link data-testid='forgot' to='/user-forgot-password'>Забыли Пароль?</Link></p> */}
    </div>
  )
}

export default Login
