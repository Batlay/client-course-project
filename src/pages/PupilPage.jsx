import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import axios from 'axios'
import Loader from '../components/UI/Loader/Loader'
import MyButton from '../components/UI/Button/MyButton'
import { Link } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFFile from '../components/Report/PDFFile'



const PupilPage = () => {
    const params = useParams()
    const [pupil, setPupil] = useState({})
    const [overall, setOverall] = useState({})
    const [result, setResult] = useState([])
    const [pdf, setPdf] = useState('')

    const [getPupil, isLoading, error] = useFetching(async (id) => {
        const response = await axios.get(`/api/pupils/${id}`)
        setPupil(response.data)
    })

    const getOverall = async (id) => {
        const response = await axios.get(`/api/pupils/overall/${id}`)
        setOverall(response.data)
    }

    const getResult = async (id) => {
        const response = await axios.get(`/api/pupils/result/${id}`)
        .then((response) => {
            setResult(response.data)
        })      
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
            <h1>
                {pupil.fio}
            </h1>
            <img src={`http://localhost:8000/static${pupil.profile_pic}`} alt=''/>
        </div>

        <div className="item item_2"> 
             <br />
            <p>Критерии:</p>
            <p>Когнитивно-эмоциональный: 
               
            Интроверсия - {result[0]}, Нейротизм - {result[1]}, Шкала лжи - {result[2]}</p>
            <p>Личностно-креативный: {result[3]}</p>
            <p>Мотивационно-ценностный: направленность на себя - {result[4]}, взаимодействие - {result[5]}, задачу - {result[6]}</p>
            <p>Деятельностно-процессуальный: {result[7]} </p>
            <p>Рефлексивный: Уровень самооценки - {result[8]} Уровень притязаний - {result[9]}, Разница - {result[10]}</p>
            {/* <button className="btn btn-link-dark"> */}
            {/* <PDFViewer document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFViewer> */}
             {/* </button> */}
             <Link to={`/pupils/report/${params.id}`}>Сформировать отчет</Link>
             {/* <MyButton onClick={getPdf}>Cформировать отчет</MyButton>
             { pdf && <redirect to={{
            pathname: '/report',
            state: { file: pdf }
        }}
/>} */}
        </div>

        <div className="item item_3">
        <Link to={`/pupils`}>Вернуться назад</Link>
            <img src={`data:image/jpeg;base64,${overall}`} alt=''/>
        </div>

        <div className="item item_4"></div>
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
