import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'

const PupilItem = ({pupil, spec = false}) => {
    const router = useNavigate()
    return (
        <>
        <tbody>
            <tr data-testid='pupil'>
                <td>{pupil.fio}</td>
                <td>{pupil.email}</td>
                { spec 
                ? 
                    <td>  
                        <MyButton data-testid='see_btn' onClick={() => router(`/specialist/${pupil.id}`, {replace: true})}>
                            Посмотреть
                        </MyButton>
                    </td>
                :   <td>  
                        <MyButton data-testid='see_btn' onClick={() => router(`/pupils/${pupil.id}`, {replace: true})}>
                            Посмотреть
                        </MyButton>
                    </td>  
                    }
                <td><i className="fas fa-trash"></i></td>
            </tr>
        </tbody>
            </>
    )
}

export default PupilItem
