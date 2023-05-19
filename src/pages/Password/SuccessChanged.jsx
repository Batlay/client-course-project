import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../../components/UI/Button/MyButton'

const SuccessChanged = () => {
    const router = useNavigate()

    return (
      <div className='container mt-4'>
         <div className="row">
              <div className="col-6 offset-3">
                  <div className="card">
                        <h5 className="card-header">Сброс пароля завершен</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <p>Ваш пароль упешно изменен.</p>
                            </div>
                            <center>
                            <MyButton
                                style={{borderRadius: '5px', width: '50%'}}
                                onClick={() => router('/login', {replace: true})}
                            >
                                Вернуться на страницу авторизации
                            </MyButton>             
                            </center>
                        </div>
                  </div>
              </div>
          </div> 
      </div>
    )
}

export default SuccessChanged