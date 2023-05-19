import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'
import 'react-confirm-alert/src/react-confirm-alert.css'


const SchoolItem = ({school}) => {

    const router = useNavigate()
   
    return (  
        <tbody>
            <tr>
                <td>{school.name}</td>
                <td>  <MyButton style={{borderRadius: '5px'}}  onClick={() => router(`/schools/${school.id}`, {replace: true})}>
                  Посмотреть
              </MyButton></td>
            </tr>
        </tbody>
    )
}

export default SchoolItem
