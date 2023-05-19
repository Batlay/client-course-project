import React, { useContext, useState } from 'react'
import { AuthContext } from '../context'
import axios from 'axios'
import { UserContext } from '../context/userContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [user, setUser] = useState({username: '', password: ''})
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)
  const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';
  
    const login = (event) => {
        event.preventDefault()

        axios.post(`${rootUrl}/api/login/`, user)
        .then(response =>  {
           const data = response.data
           setIsAuth(true)
           setValue(data)
           localStorage.setItem('auth', 'true')
           localStorage.setItem('user', JSON.stringify(data))
        })
        .catch(error => {
          if (error.response) {
            toast.error(error.response.data.Error)
          }
        });
    }

  return (     
    <div className='login' >
        <div className='login_form'>
            <div className="row h-100">
                <div className=" row justify-content-center">
                    <div className="col-md-3 col-10" >
    
                    <center>
                      <h6>Добро пожаловать!</h6>
                      <h6>Пожалуйста, войдите в ваш аккаунт</h6>
                    </center>

                    <form onSubmit={login} aria-label="form">
                        <input 
                          style={{margin: '10px'}}
                          required
                          className="form-control" 
                          value={user.username}
                          type='text' placeholder='Введите  логин'
                          onChange={e => setUser({...user, username: e.target.value})}
                        />
                        <input 
                          style={{margin: '10px'}}
                          required
                          className="form-control" 
                          value={user.password}
                          type='password' placeholder='Введите  пароль'
                          onChange={e => setUser({...user, password: e.target.value})}
                          
                        />
                        <center>
                            <button data-testid='login-button-element'>Войти</button>
                        </center>
                    </form>

                    <center>
                        <div className="row justify-content-center my-2"> 
                          <a href="/user-forgot-password" >
                            <small className="text-muted">Забыли пароль?</small>
                          </a> 
                        </div>
                    </center>

                    </div>
                </div>
            </div>
        </div>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/> 
      </div>
  )
}

export default Login
