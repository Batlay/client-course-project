import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioButton from '../UI/RB/RadioButton';
import { getPadTime } from '../../helpers/getPadTime';
import MyButton from '../UI/Button/MyButton';

const Test2 = () => {
        const [questions, setQuestions] = useState([])
        const [answers, setAnswers] = useState([])
        const [timeLeft, setTimeLeft] = useState(15*60)
        const form = useRef()
        const userData = JSON.parse(localStorage.getItem('user'))
        
        const minutes = getPadTime(Math.floor(timeLeft / 60))
        const seconds = getPadTime(timeLeft - minutes * 60)
   
        useEffect(() => {
            if (timeLeft >= 1) {
                const interval = setTimeout(() => {
                    setTimeLeft(timeLeft - 1) 
                }, 1000);
            } else {
                handleSubmitOnTime()
            }
        });

        useEffect(() => {
            getQuestions()
        }, [])
        
        const getQuestions = async () => {
            const response = await axios.get('/api/tests/test2/')
            setQuestions(response.data)
        }

        const handleSubmit = e => {
            e.preventDefault();
            var userInfo = {
                userdata: userData,
                answers: answers
              }
            console.log(answers)
            axios.post('/api/tests/test2/answers/', userInfo)
             .then(() => {
                window.close()
            });
        };

        const handleSubmitOnTime = () => {
            console.log(answers)
            var userInfo = {
                userdata: userData,
                answers: answers
              }
            axios.post('/api/tests/test2/answers/', userInfo)
              .then(() => {
                window.close()
            });
        };



  return (
    <>
    <div> 
    <div style={{backgroundColor: '#419D78', color: 'white', fontSize: '20px', textAlign: 'center'}}>
            Осталось времени: {minutes}:{seconds}<span id="timer"></span>
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

    <form ref={form} onSubmit={handleSubmit}>
    { questions.map((q) => (
        <div>
        <table>
            <tr>
                <td className="text">{q.id} ) {q.question} </td>
            </tr>
            <tr>
                <td>
                <RadioButton  type = "radio" 
                        className="radio-input" 
                        name = {q.question} 
                        value={q.option1} 
                        onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: q.option1
                        }))} />{q.option1}
                </td>
            </tr>
            <tr>
                <td>
                <RadioButton    type = "radio" 
                        className="radio-input" 
                        name = {q.question} 
                        value={q.option2} 
                        onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: q.option2
                        }))}/>{q.option2}
                </td>
            </tr>
        </table>
<hr />
</div>
    ))}
       <center>
            <MyButton style={{borderRadius: '5px'}} data-testid='save_button' type='submit' >Сохранить</MyButton>
        </center>
    </form>
    </div>
</div>
    </div>
    </>
  )
}

export default Test2