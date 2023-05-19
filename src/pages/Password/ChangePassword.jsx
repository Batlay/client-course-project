import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MyButton from '../../components/UI/Button/MyButton'

const ChangePassword = () => {
    const {id} = useParams()
    const [data, setData] = useState({
      password: '',
      password1: ''
    })
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();

    const handleChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        if (data.password === data.password1){
            if (!isValidPassword(data.password)) {
              setSuccess('')
              setError('Введите корректный пароль')
            }  else {
                formData.append('password', data.password)
                try {
                  axios.post(`${rootUrl}/api/user-change-password/${id}`, formData 
                  )
                  .then((res) => {
                      if (res.data.bool === true){
                          setSuccess(res.data.msg)
                          setError('')
                          setData({
                            password: '',
                            password1: ''
                          })
                          setDisabled(true)
                          navigate("/success-change-password");
                      } else {
                        setSuccess('')
                        setError(res.data.msg)
                      }
                  })
                } catch(error) {
                    console.log(error)
                }
                }
        } else {
          setSuccess('')
          setError('Поля не совпадают')
        }
    }

    function isValidPassword(password) {
        return  strongRegex.test(password);
    }

    return (
      <div className='container mt-4'>
         <div className="row">
              <div className="col-6 offset-3">
                  <div className="card">
                        <h5 className="card-header">Введите новый пароль</h5>
                        <div className="card-body">
                        { success && <p className='text-sucess'>{success}</p>}
                        { error && <p className='text-danger'>{error}</p>}
                            <form  onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor='exampleInputEmail' className='form-label'>Пожалуйта, дважды введите новый пароль для подтверждения. <br/> 
                                    </label>
                                    <input 
                                    required
                                    disabled={disabled}
                                    style={{margin: '10px'}}
                                    type="password" 
                                    value={data.password}
                                    name='password'
                                    onChange={handleChange}
                                    className='form-control'
                                    />
                                    <input  
                                    required
                                    disabled={disabled}
                                    style={{margin: '10px'}}
                                    type="password" 
                                    value={data.password1}
                                    name='password1'
                                    onChange={handleChange}
                                    className='form-control'
                                    /> 
                                </div>
                                <center>
                                <MyButton
                                  disabled={disabled}
                                  style={{borderRadius: '5px'}}
                                  type='submit'
                                  >Отправить
                                </MyButton>
                                
                                <p> Пароль:<br/> 
                                  *не менее 1 строчной буквы<br/> 
                                  *хотя бы 1 заглавная буква <br/>
                                  *8 символов или длиннее <br/>
                                  *не менее 1 цифры
                                </p>
                                </center>
                            </form>
                        </div>
                  </div>
              </div>
          </div> 
      </div>
    )
}

export default ChangePassword