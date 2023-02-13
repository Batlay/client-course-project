import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'

const TestItem = ({test}) => {
    const router = useNavigate()
    return (
        <>
        <tbody>
            <tr data-testid='test'>
                <td>{test.name}</td>
                <td>{test.time} минут</td>
                <td>  
                    <MyButton onClick={() => router(`/tests/${test.url}`, {replace: true})}>
                         Пройти
                    </MyButton>
              </td>
            </tr>
        </tbody>
            </>
    )
}

export default TestItem
