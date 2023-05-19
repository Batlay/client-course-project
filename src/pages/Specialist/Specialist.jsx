import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetching } from '../../hooks/useFetching'
import axios from 'axios'
import Loader from '../../components/UI/Loader/Loader'
import MyButton from '../../components/UI/Button/MyButton'
import NoteForm from '../../components/Notes/NoteForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Specialist = () => {
    const params = useParams()
    const router = useNavigate()
    const [pupil, setPupil] = useState({})
    const [overall, setOverall] = useState({})
    const [result, setResult] = useState([])
    const [chart, setChart] = useState([])

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

    const getChart = async (id) => {
        const response = await axios.get(`/api/pupils/chart/${id}`)
        .then((response) => {
            setChart(response.data)
        })      
    }

    useEffect(() => {
        getPupil(params.id)
        getOverall(params.id)
        getResult(params.id)
        getChart(params.id)
    }, [])

    
    const addNote = (newNote) => {
        axios.post(`/api/notes/create/${params.id}`, newNote)
         .then(response =>  {
            toast.success('Заметка успешно отправлена')
         })
         .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                toast.error('Произошла ошибка')
              }
         })
    }

  return (
    <div>
        { isLoading
            ? <Loader />
            : 
        <div className='cont1'>

            <div className="item box1"> 
                <h3>
                    {pupil.fio}
                </h3>
                { pupil.profile_pic && <img src={`http://localhost:8000/static${pupil.profile_pic}`} alt=''/> }
                <img src={`data:image/jpeg;base64,${chart}`} alt=''/>
            </div>
        
            <div className="item box2"> 
                <br />
                <p>Критерии:</p>
                <p>Когнитивно-эмоциональный: Интроверсия - {result[0]}, Нейротизм - {result[1]}, Шкала лжи - {result[2]}</p>
                <p>Личностно-креативный: {result[3]}</p>
                <p>Мотивационно-ценностный: направленность на себя - {result[4]}, взаимодействие - {result[5]}, задачу - {result[6]}</p>
                <p>Деятельностно-процессуальный: {result[7]} </p>
                <p>Рефлексивный: Уровень самооценки - {result[8]} Уровень притязаний - {result[9]}, Разница - {result[10]}</p>
                <br/> <br/> <br/><br/> <br/> <br/>
                <NoteForm create={addNote}/>
            </div>

            <div className="item box3">
                <MyButton style={{width: '100%'}} data-testid='see_btn' onClick={() => router(`/classrooms/${params.id}`, {replace: true})}>
                    Вернуться назад
                </MyButton>
                <img src={`data:image/jpeg;base64,${overall}`} alt=''/>
                { !isLoading2 &&  <img src='https://psytests.org/img/profile-eye-sd.png' alt=''/> }
            </div>   
        </div>
        }
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
    </div>
  )
}

export default Specialist
