import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Axios } from 'axios'


const ChangePassword = () => {
    const {id} = useParams()
    const [data, setData] = useState({
      password: ''
    })


    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        })
    }

    const submitForm = () => {
        const formData = new FormData()
        formData.append('password', data.password)
        try {
          axios.post(`/api/user-change-password/${id}`, formData 
        //   { headers: {
        //     'X-CSRFTOKEN': 'ZtsJeyEyXTUCyY23oUQ6wv5uoynJfUiv'
        //   }}
          )
          .then((res) => {
              if (res.data.bool === true){
                  setSuccess(res.data.msg)
                  setError('')
              } else {
                setSuccess('')
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
                        <h5 className="card-header">Введите пароль</h5>
                        <div className="card-body">
                        { success && <p className='text-sucess'>{success}</p>}
                        { error && <p className='text-danger'>{error}</p>}
                            <div className="mb-3">
                                <label htmlFor='exampleInputEmail' className='form-label'>Пароль</label>
                                <input 
                                type="password" 
                                value={data.password}
                                name='password'
                                onChange={handleChange}
                                className='form-control'
                                />
                                 
                            </div>
                            <button 
                            type='submit'
                            onClick={submitForm}
                            className='btn btn-primary'
                            >Отправить</button>
                        </div>
                  </div>

              </div>
          </div> 


      </div>
    )
}

export default ChangePassword