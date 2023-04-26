import axios from 'axios'
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getPadTime } from '../../helpers/getPadTime';

const Test4 = () => {
        const [questions, setQuestions] = useState([])
        const [answers, setAnswers] = useState([])
        const [isCounting, setIsCounting] = useState(false)
        const [timeLeft, setTimeLeft] = useState(20)

        const minutes = getPadTime(Math.floor(timeLeft / 60))
        const seconds = getPadTime(timeLeft - minutes * 60)

        
       
        const router = useNavigate()
    
        useEffect(() => {
            if (timeLeft >= 1) {
                const interval = setTimeout(() => {
                    setTimeLeft(timeLeft - 1) 
                }, 1000);
            } else {
                window.close()
            }
        });

        useEffect(() => {
            getQuestions()
        }, [])

            
        const getQuestions = async () => {
            const response = await axios.get('/api/tests/test4/')
            setQuestions(response.data)
        }

        const handleSubmit = e => {
            e.preventDefault();
            console.log(answers)
            axios.post('/api/tests/test4/answers/', answers)
             .then(router(`/tests/`, {replace: true}));
        };

        const handleSubmit2 = () => {
            console.log(answers)
            axios.post('/api/tests/test4/answers/', answers)
             .then(router(`/tests/`, {replace: true}));
        };

        function wait(){
            const timee= 1 * 60000;
                     setTimeout(function(){
                        handleSubmit2()
                     }, timee);
           }



  return (
    <>
    <div> 
         <div style={{backgroundColor: '#419D78', color: '#EFD0CA', fontSize: '20px', textAlign: 'center'}}>
            Осталось времени: {minutes}:{seconds}<span id="timer"></span>
        </div> 

        <div className="container">
            <h4 className="text mt-3">Вам предлагается ряд утверждений. 
            Если Вы согласны с высказыванием, то
        выберите "Да", если не согласны - "Нет".</h4>
            <hr />
            <div>
            <form onSubmit={handleSubmit}>
        { questions.map((q) => (

            <div>
                <table>
                    <tr>
                        <td className="text">{q.id} ) {q.question} </td>
                    </tr>
                    <tr>
                        <td><input 
                        type = "radio" 
                        className="rb" 
                        name = {q.question} 
                        value={q.option1} 
                        required 
                        onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: q.option1
                        }))}
                        />
                        {q.option1}
                        </td>
                    </tr>
                    <tr>
                        <td><input 
                        type = "radio" 
                        className="rb" 
                        name = {q.question} 
                        value={q.option2} 
                        onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: q.option2
                        }))}
                        />{q.option2}</td>
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

export default Test4