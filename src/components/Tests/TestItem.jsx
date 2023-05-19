import React, { useState } from 'react'
import MyButton from '../UI/Button/MyButton'

const TestItem = ({test, results}) => {
    const [disabled, setDisabled] = useState(false);

    return (
    <>
    <tbody>
        <tr data-testid='test'>
            <td>{test.name}</td>
            <td>{test.time} минут</td>
            <td>  
                { results[test.id-1] == 0
                ? 
                <MyButton style={{borderRadius: '5px'}} disabled={disabled} onClick={() => {
                setDisabled(true); window.open(`/tests/${test.url}`, "_blank", "popup")}}>
                    Пройти
                </MyButton>
                :
                <p>
                    Тест пройден
                </p> }
            </td>
        </tr>
    </tbody>
    </>
    )
}

export default TestItem
