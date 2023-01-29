import axios from 'axios'
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Test2 = () => {
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const router = useNavigate()
  
        useEffect(() => {
            getQuestions()
        }, [])
        
        const getQuestions = async () => {
            const response = await axios.get('/api/tests/test2/')
            setQuestions(response.data)
        }

        const handleSubmit = e => {
            e.preventDefault();
            console.log(answers)
            axios.post('/api/tests/test2/answers/', answers)
             .then(router(`/tests/`, {replace: true}));
        };




  return (
    <>
    <div> 
         <div style={{backgroundColor: '#419D78', color: '#EFD0CA', fontSize: '20px', textAlign: 'center'}}>
            Осталось времени: <span id="timer"></span>
        </div> 

    <div className="container">
        <h4 className="text mt-3">
            Вам предлагается ответить на вопросы, касающиеся вашего обычного способа поведения.
            Постарайтесь представить типичные ситуации и дайте первый «естественный» ответ, 
            который придет вам в голову.
            Не задерживайтесь подолгу над вопросами, пытаясь вникнуть в каждое слово; лучше отвечать сразу, быстро.
            Помните, что нет «хороших» или «плохих» ответов.
        </h4>
    <hr/>
    <div>

    <form onSubmit={handleSubmit}>
    { questions.map((q) => (
        <div>
        <table>
            <tr>
                <td className="text">{q.id} ) {q.question} </td>
            </tr>
            <tr>
                <td>
                    <input 
                    type = "radio" 
                    className="rb" 
                    name = {q.question} 
                    value={q.option1} 
                    onChange={() => 
                    setAnswers((answer) => ({
                        ...answer,
                        [q.id]: q.option1
                    }))}
                    required />
                    {q.option1}
                </td>
            </tr>
            <tr>
                <td>
                    <input 
                    type = "radio" 
                    className="rb" 
                    name = {q.question} 
                    value={q.option2} 
                    onChange={() => 
                    setAnswers((answer) => ({
                        ...answer,
                        [q.id]: q.option2
                    }))} />
                    {q.option2}
                </td>
            </tr>
        </table>
<hr />
</div>
    ))}
        <input type="submit" className="btn btn-success" value="Сохранить" />
    </form>
    </div>
</div>
    </div>
    </>
  )
}

export default Test2