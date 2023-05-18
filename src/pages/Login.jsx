import React, { useContext, useState } from 'react'
import MyButton from '../components/UI/Button/MyButton'
import MyInput from '../components/UI/Input/MyInput'
import { AuthContext } from '../context'
import axios from 'axios'
import { UserContext } from '../context/userContext'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            // toast.error("Не удалось войти. Проверьте корректность введенных вами данных")
            toast.error(error.response.data.Error)
          }
        });
    }

  return (
      // <div className='login' style={{backgroundImage:`http://localhost:8000/static/login_form.png`}}>
        
    <div className='login' >
        <div className='login_form'>
            <div className="row h-100">
            <div className=" row justify-content-center">
                    <div className="col-md-3 col-10" >
           {/* <Container>
                <Row>
                <Col md={8} col={10} my={5}> */}
                    <center>
                      <h6 h6 >Добро пожаловать!</h6>
                      <h6 >Пожалуйста, войдите в ваш аккаунт</h6>
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
        {/* <MyButton data-testid='forgot' onClick={() => router(`/user-forgot-password`, {replace: true})}>
            Забыли Пароль?
            </MyButton> */}
            <center>
            <div className="row justify-content-center my-2"> 
              <a href="/user-forgot-password" >
                <small className="text-muted">Забыли пароль?</small>
              </a> 
            </div>
            </center>
            {/* </Col>
                </Row>
            </Container> */}
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
    theme="light"
/>  {/* <p className='mt-3'><Link data-testid='forgot' to='/user-forgot-password'>Забыли Пароль?</Link></p> */}
    </div>
  )
}

export default Login
