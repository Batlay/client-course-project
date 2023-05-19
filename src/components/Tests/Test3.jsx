import axios from 'axios'
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPadTime } from '../../helpers/getPadTime';
import RadioButton from '../UI/RB/RadioButton';
import MyButton from '../UI/Button/MyButton';

const Test3 = () => {
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [answers2, setAnswers2] = useState([])
    const [timeLeft, setTimeLeft] = useState(15*60)
    const userData = JSON.parse(localStorage.getItem('user'))
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes * 60)

    useEffect(() => {
        getQuestions()
    }, [])

    useEffect(() => {
        if (timeLeft >= 1) {
            const interval = setTimeout(() => {
                setTimeLeft(timeLeft - 1) 
            }, 1000);
        } else {
            handleSubmitOnTime()
        }
    });
    const getQuestions = async () => {
        const response = await axios.get(`${rootUrl}/api/tests/test3/`)
        setQuestions(response.data)
    }

    const handleSubmit = e => {
        e.preventDefault();
        var userInfo = {
            userdata: userData,
            answers: answers,
            answers2: answers2
            }
        axios.post(`${rootUrl}/api/tests/test3/answers/`, userInfo)
            .then(() => {
            window.close()
        });
    };

    const handleSubmitOnTime = () => {
        var userInfo = {
            userdata: userData,
            answers: answers,
            answers2: answers2
            }
        axios.post(`${rootUrl}/api/tests/test3/answers/`, userInfo)
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
                <h4 className="text mt-3">Для каждого вопроса выберите:
        ответ, который который лучше всего выражает вашу точку зрения (зелёный круг);
        и ответ, дальше всего отстоящий от вашей точки зрения (красный круг).</h4>
            <hr/>
            <div>

            <form onSubmit={handleSubmit}>
            { questions.map((q) => (
                <div>
                <table>
                    <tr>
                        <td className="text">{q.id} ) 
                            {q.question}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="float" style={{marginTop: '20px'}}> 
                                <RadioButton type = "radio" className="radio-input" 
                                name = {q.question+ "+" }
                                value={"+" +  q.id  + "А" }
                                onChange={() => 
                                    setAnswers((answer) => ({
                                        ...answer,
                                        [q.id]: q.id  + "А" 
                                    }))}
                                    required 
                                color='green'/>
                    
                                <RadioButton  type = "radio" className="radio-input" 
                                name = {q.question+ "-" }
                                value={"-" +  q.id  + "А" }
                                onChange={() => 
                                    setAnswers2((answer) => ({
                                        ...answer,
                                        [q.id]: q.id  + "А" 
                                    }))}
                                required 
                                color='red'/>
                            </div>

                            <div class="flow-root next-to-float" style={{marginTop: '20px'}}>
                                <p>A. {q.option1}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="float">
                                <RadioButton  type = "radio" className="radio-input" 
                                name = {q.question+ "+" }
                                value={"+" +  q.id  + "Б" }
                                onChange={() => 
                                    setAnswers((answer) => ({
                                        ...answer,
                                        [q.id]:  q.id  + "Б" 
                                    }))} 
                                color='green'/>

                                <RadioButton type = "radio" className="radio-input"  
                                name = {q.question+ "-" } 
                                value={"-" +  q.id  + "Б" }
                                onChange={() => 
                                    setAnswers2((answer) => ({
                                        ...answer,
                                        [q.id]: q.id  + "Б" 
                                    }))}
                                color='red'/>
                            </div>
                            <div class="flow-root next-to-float"> 
                                <p>Б. {q.option2}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="float" style={{marginBottom: '20px'}}>
                                <RadioButton type = "radio" className="radio-input" 
                                name = {q.question+ "+" }
                                value={"+" +  q.id  + "В" }
                                onChange={() => 
                                    setAnswers((answer) => ({
                                        ...answer,
                                        [q.id]: q.id  + "В"
                                    }))}
                                color='green' />
                                <RadioButton  type = "radio"   className="radio-input" 
                                name = {q.question+ "-" }
                                value={"-" +  q.id  + "Б" }
                                onChange={() => 
                                    setAnswers2((answer) => ({
                                        ...answer,
                                        [q.id]:  q.id  + "Б"
                                    }))}
                                color='red'/>
                            </div>
                            <div class="flow-root next-to-float" style={{marginBottom: '20px'}}>
                                <p>В. {q.option3}</p>
                            </div>
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

export default Test3