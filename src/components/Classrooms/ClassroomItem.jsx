import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'
import 'react-confirm-alert/src/react-confirm-alert.css' 

const ClassroomItem = ({classroom}) => {
    const router = useNavigate()
    
    return (    
        <tbody>
            <tr>
                <td>{classroom.name}</td>
                <td>  
                    <MyButton style={{borderRadius: '5px'}}  onClick={() => router(`/classrooms/${classroom.id}`, {replace: true})}>
                        Посмотреть
                    </MyButton>
                </td>
            </tr>
        </tbody>
    )
}

export default ClassroomItem
