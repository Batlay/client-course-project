import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPadTime } from '../../helpers/getPadTime';
import RadioButton from '../UI/RB/RadioButton';
import MyButton from '../UI/Button/MyButton';

const Test4 = () => {
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [timeLeft, setTimeLeft] = useState(15*60)
    const form = useRef()
    const userData = JSON.parse(localStorage.getItem('user'))
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

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
        const response = await axios.get(`${rootUrl}/api/tests/test4/`)
        setQuestions(response.data)
    }

    const handleSubmit = e => {
        e.preventDefault();
        var userInfo = {
            userdata: userData,
            answers: answers
            }
        console.log(answers)
        axios.post(`${rootUrl}/api/tests/test4/answers/`, userInfo)
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
        axios.post(`${rootUrl}/api/tests/test4/answers/`, userInfo)
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
            <h4 className="text mt-3">Вам предлагается ряд утверждений. Если Вы согласны с высказыванием, товыберите "Да", если не согласны - "Нет".</h4>
            <hr />
            <div>
                <form ref={form} onSubmit={handleSubmit} name="cartCheckout">
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

export default Test4