import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import axios from 'axios'
import Loader from '../components/UI/Loader/Loader'
import MyButton from '../components/UI/Button/MyButton'
import { Link } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import NoteForm from '../components/Notes/NoteForm'


const Specialist = () => {
    const params = useParams()
    const [pupil, setPupil] = useState({})
    const [overall, setOverall] = useState({})
    const [result, setResult] = useState([])
    const [pdf, setPdf] = useState('')

    const [getPupil, isLoading, error] = useFetching(async (id) => {
        const response = await axios.get(`/api/pupils/${id}`)
        setPupil(response.data)
    })

    const [getOverall, isLoading2, error2] = useFetching(async (id) => {
        const response = await axios.get(`/api/pupils/overall/${id}`)
        setOverall(response.data)
    })

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

    
    const addNote = (newNote) => {
        axios.post(`/api/notes/create/${params.id}`, newNote)
         .then(response =>  {
            console.log('Успешное сохранение')
         })
         .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
              }
         })
        }

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
            {
            pupil.profile_pic && <img src={`http://localhost:8000/static${pupil.profile_pic}`} alt=''/>}
        </div>
        <div className="item item_3">
        <Link to={`/pupils`}>Вернуться назад</Link>
            <img src={`data:image/jpeg;base64,${overall}`} alt=''/>
        </div>

        <div className="item item_2_1"> 
             <br />
            <p>Критерии:</p>
            <p>Когнитивно-эмоциональный: 
               
            Интроверсия - {result[0]}, Нейротизм - {result[1]}, Шкала лжи - {result[2]}</p>
            <p>Личностно-креативный: {result[3]}</p>
            <p>Мотивационно-ценностный: направленность на себя - {result[4]}, взаимодействие - {result[5]}, задачу - {result[6]}</p>
            <p>Деятельностно-процессуальный: {result[7]} </p>
            <p>Рефлексивный: Уровень самооценки - {result[8]} Уровень притязаний - {result[9]}, Разница - {result[10]}</p>

            <NoteForm create={addNote}/>
        </div>

        <div className="item item_3_1">
        {/* <Link to={`/pupils`}>Вернуться назад</Link> */}
        { !isLoading2 &&  <img src='https://psytests.org/img/profile-eye-sd.png' style={{ height: '50%'}} alt=''/>}
            {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjdUUzRhppKrASvCqg3b6tNPpgFF-TXDqlF_5tawYny9wllMu3V8aS-tdPuxsSlLAP6E&usqp=CAU' style={{ height: '50%'}} alt=''/> */}
        </div>

       
     </div>
        }
    </div>
  )
}

export default Specialist