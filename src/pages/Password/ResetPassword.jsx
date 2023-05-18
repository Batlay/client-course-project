import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../../components/UI/Button/MyButton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
      email: '',
    })

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('email', data.email)
        try {
          axios.post('/api/user-forgot-password/', formData)
          .then((res) => {
              if (res.data.bool === true){
                setDisabled(true)
                toast.success(res.data.msg)
                  setError('')
              } else {
                  setError(res.data.msg)
              }
          })
        } catch(error) {
            console.log(error)
        }
    }

    return (
      <div className='container mt-4'>
         <div className="row">
              <div className="col-6 offset-3">
                  <div className="card">
                        <h5 className="card-header">Введите ваш Email</h5>
                        <div className="card-body">
                        { success && <p className='text-sucess'>{success}</p>}
                        { error && <p className='text-danger'>{error}</p>}
                        <form  onSubmit={submitForm}>
                            <div className="mb-3">
                                <p>Введите адрес электронной почты и вам будет отправлено письмо с инструкцией по сбросу пароля</p>
                                  <label htmlFor='exampleInputEmail' className='form-label'>Email</label>
                                  
                                  <input
                                  required
                                  disabled={disabled} 
                                  type="email" 
                                  value={data.email}
                                  name='email'
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
                            
                            </center>
                            </form>
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
/> 

      </div>
    )
}

export default ResetPassword