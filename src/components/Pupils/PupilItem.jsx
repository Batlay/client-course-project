import React  from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'


const PupilItem = ({pupil, spec = false, index, results}) => {
    const router = useNavigate()
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

    return (
        <>
        <tbody>
            { spec 
            ?
            <tr data-testid='pupil'>
                <td>{index + 1}</td>
                <td>{pupil.fio}</td>
                <td>{pupil.email}</td>
                <td style={{ textAlign: 'center'}}>  
                    <button style={{  background: `url("${rootUrl}/static/images/eye.png") no-repeat`, 
                        backgroundSize: 'contain', height: '10px', width: '25px', border: 'none'}} data-testid='see_btn' onClick={() => router(`/specialist/${pupil.id}`, {replace: true})}
                     />
                </td>
            </tr>
            :
            <tr data-testid='pupil'>
                <td>{index + 1}</td>
                <td>{pupil.fio}</td>
                <td>{pupil.email}</td>
                {  results[index] === 0
                ?  
                <td style={{ textAlign: 'center'}}>  
                    <MyButton style={{borderRadius: '5px', margin: '0'}} data-testid='see_btn' onClick={() => router(`/pupils/form/${pupil.id}`, {replace: true})}>
                        Заполнить форму
                    </MyButton>                    
                </td>  
                :
                <td style={{ textAlign: 'center'}}>  
                    <p>
                        Форма заполнена
                    </p>
                </td>   
                }
                <td style={{ textAlign: 'center'}}>  
                    <button style={{  background: `url("${rootUrl}/static/images/eye.png") no-repeat`, 
                        backgroundSize: 'contain', height: '10px', width: '25px', border: 'none'}} data-testid='see_btn' onClick={() => router(`/pupils/${pupil.id}`, {replace: true})} /
                    >
                </td>      
            </tr>}  
        </tbody>
            </>
    )
}

export default PupilItem
