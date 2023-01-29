import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'

const PupilItem = ({pupil}) => {
    const router = useNavigate()
    return (
        <>
        <tbody>
            <tr>
                <td>{pupil.fio}</td>
                <td>{pupil.email}</td>
                <td>  <MyButton onClick={() => router(`/pupils/${pupil.id}`, {replace: true})}>
                  Посмотреть
              </MyButton></td>
                <td><i className="fas fa-trash"></i></td>
            </tr>
        </tbody>
            </>
    )
}

export default PupilItem