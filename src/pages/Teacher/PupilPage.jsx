import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetching } from '../../hooks/useFetching'
import axios from 'axios'
import Loader from '../../components/UI/Loader/Loader'
import MyButton from '../../components/UI/Button/MyButton'


const PupilPage = () => {
    const params = useParams()
    const router = useNavigate()
    const [pupil, setPupil] = useState({})
    const [overall, setOverall] = useState({})
    const [result, setResult] = useState([])
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

    const [getPupil, isLoading] = useFetching(async (id) => {
        const response = await axios.get(`${rootUrl}/api/pupils/${id}`)
        setPupil(response.data)
    })


    const [getOverall, isLoading2] = useFetching(async (id) => {
        const response = await axios.get(`${rootUrl}/api/pupils/overall/${id}`)
        setOverall(response.data)
    })


    const getResult = async (id) => {
        const response = await axios.get(`${rootUrl}/api/pupils/result/${id}`)
        setResult(response.data)     
    }

    useEffect(() => {
        getPupil(params.id)
        getOverall(params.id)
        getResult(params.id)
    }, [])


  return (
    <div>
        { isLoading
            ? <Loader />
            : 
        <div className='cont'>

            <div className="item item_1"> 
                <h3>
                    {pupil.fio}
                </h3>
                { pupil.profile_pic && <img src={`${rootUrl}/static${pupil.profile_pic}`} alt=''/> }
            </div> 

            <div className="item item_2"> 
                <br />
                <p>Критерии:</p>
                <p>Когнитивно-эмоциональный: Интроверсия - {result[0]}, Нейротизм - {result[1]}, Шкала лжи - {result[2]}</p>
                <p>Личностно-креативный: {result[3]}</p>
                <p>Мотивационно-ценностный: направленность на себя - {result[4]}, взаимодействие - {result[5]}, задачу - {result[6]}</p>
                <p>Деятельностно-процессуальный: {result[7]} </p>
                <p>Рефлексивный: Уровень самооценки - {result[8]} Уровень притязаний - {result[9]}, Разница - {result[10]}</p>
                <center>
                    <MyButton style={{width:'25%',borderRadius: '5px'}} data-testid='see_btn' onClick={() => router(`/pupils/report/${params.id}`, {replace: true})}>
                        Сформировать отчет
                    </MyButton>
                </center>
            </div>

            <div className="item item_3">
                <MyButton  style={{borderRadius: '5px'}} data-testid='see_btn' onClick={() => router(`/pupils`, {replace: true})}>
                    Вернуться назад
                </MyButton>
                { !isLoading2 && <img src={`data:image/jpeg;base64,${overall}`} alt=''/> }
            </div>

            <div className="item item_4" style={{ backgroundImage:`url("${rootUrl}/static/images/notes.jpg")` }}>
                <div className="row h-100 ">
                    <div className=" row justify-content-center  my-auto">
                        <MyButton style={{width:'50%', borderRadius: '5px'}} onClick={() => router(`/notes/person/${params.id}`, {replace: true})}>
                            Посмотреть заметки
                        </MyButton>
                    </div>
                </div>
            </div>

            <div className="item item_5">
                <h6>
                    Связь с учеником:
                </h6>
                <p>
                    Email: {pupil.email}
                </p>
                <p>
                    Телефон: {pupil.phone}
                </p>
            </div>
        </div>
        }
    </div>
  )
}

export default PupilPage
