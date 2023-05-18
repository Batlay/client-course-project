import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'

const TestItem = ({test, results}) => {
    const router = useNavigate()
    const [disabled, setDisabled] = useState(false);

    return (
        <>
        <tbody>
            <tr data-testid='test'>
                <td>{test.name}</td>
                <td>{test.time} минут</td>
                <td>  
                    { results[test.id-1] == 0
                   ? <MyButton style={{borderRadius: '5px'}} disabled={disabled} onClick={() => {
                    // router(`/tests/${test.url}`, {replace: true})
                    setDisabled(true);
                    window.open(`/tests/${test.url}`, "_blank", "popup")
                }}>
                         Пройти
                    </MyButton>
                    :
                    <p>
                         Тест пройден
                         </p>
}
              </td>
            </tr>
        </tbody>
            </>
    )
}

export default TestItem
