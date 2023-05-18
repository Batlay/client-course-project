import React, {useState, useEffect}  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'
import axios from 'axios'

const PupilItem = ({pupil, spec = false, index}) => {
    const router = useNavigate()
    const [result, setResult] = useState(false)

    useEffect(() => {
        getResult()
    }, [])

    const getResult = async () => {
        const response = await axios.get(`/api/result/${pupil.id}` )
            .then((respons) => {
                console.log(respons.data)
                if (respons.data == 0) {
                    setResult(false)
                } else {
                    setResult(true)
                }
                console.log(result)
            })
    }

    return (
        <>
        <tbody>
            { spec ?
        <tr data-testid='pupil'>
                <td>{index + 1}</td>
                <td>{pupil.fio}</td>
                <td>{pupil.email}</td>
                <td style={{ textAlign: 'center'}}>  
                        <button style={{  background: 'url(https://static.vecteezy.com/system/resources/thumbnails/009/393/680/small/eye-icon-sign-symbol-design-free-png.png) no-repeat', 
                        backgroundSize: 'contain', height: '10px', width: '25px', border: 'none'}} data-testid='see_btn' onClick={() => router(`/specialist/${pupil.id}`, {replace: true})} />
                    </td>
            </tr>
            :
            <tr data-testid='pupil'>
            <td>{index + 1}</td>
            <td>{pupil.fio}</td>
            <td>{pupil.email}</td>
            {  result 
                ?  
                 <td style={{ textAlign: 'center'}}>  
                    <p>
                        Форма заполнена
                    </p>
                 </td>  
                : <td style={{ textAlign: 'center'}}>  
                    <MyButton style={{borderRadius: '5px', margin: '0'}} data-testid='see_btn' onClick={() => router(`/pupils/form/${pupil.id}`, {replace: true})}>
                        Заполнить форму
                    </MyButton>                    
                </td>  
                }
            <td style={{ textAlign: 'center'}}>  
                    <button style={{  background: 'url(https://static.vecteezy.com/system/resources/thumbnails/009/393/680/small/eye-icon-sign-symbol-design-free-png.png) no-repeat', 
                    backgroundSize: 'contain', height: '10px', width: '25px', border: 'none'}} data-testid='see_btn' onClick={() => router(`/pupils/${pupil.id}`, {replace: true})} />
                </td>      
        </tr>}
            {/* <tr data-testid='pupil'>
                <td>{index + 1}</td>
                <td>{pupil.fio}</td>
                <td>{pupil.email}</td>
                {  result 
                    ?  
                     <td style={{ textAlign: 'center'}}>  
                        <p>
                            Форма заполнена
                        </p>
                     </td>  
                    : <td style={{ textAlign: 'center'}}>  
                        <MyButton style={{borderRadius: '5px', margin: '0'}} data-testid='see_btn' onClick={() => router(`/pupils/form/${pupil.id}`, {replace: true})}>
                            Заполнить форму
                        </MyButton>                    
                    </td>  
                    }
                { spec 
                ? 
                    <td style={{ textAlign: 'center'}}>  
                        <button style={{  background: 'url(https://static.vecteezy.com/system/resources/thumbnails/009/393/680/small/eye-icon-sign-symbol-design-free-png.png) no-repeat', 
                        backgroundSize: 'contain', height: '10px', width: '25px', border: 'none'}} data-testid='see_btn' onClick={() => router(`/specialist/${pupil.id}`, {replace: true})} />
                    </td>
                :  
                <td style={{ textAlign: 'center'}}>  
                        <button style={{  background: 'url(https://static.vecteezy.com/system/resources/thumbnails/009/393/680/small/eye-icon-sign-symbol-design-free-png.png) no-repeat', 
                        backgroundSize: 'contain', height: '10px', width: '25px', border: 'none'}} data-testid='see_btn' onClick={() => router(`/pupils/${pupil.id}`, {replace: true})} />
                    </td> } 
                 
                <td><i className="fas fa-trash"></i></td>
            </tr> */}
        </tbody>
            </>
    )
}

export default PupilItem
