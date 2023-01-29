import axios from 'axios'
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Test3 = () => {
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const router = useNavigate()
  
        useEffect(() => {
            getQuestions()
        }, [])
        
        const getQuestions = async () => {
            const response = await axios.get('/api/tests/test3/')
            setQuestions(response.data)
        }

        const handleSubmit = e => {
            e.preventDefault();
            console.log(answers)
            axios.post('/api/tests/test3/answers/', answers)
             .then(router(`/tests/`, {replace: true}));
        };




  return (
    <>
    <div> 
         <div style={{backgroundColor: '#419D78', color: '#EFD0CA', fontSize: '20px', textAlign: 'center'}}>
            Осталось времени: <span id="timer"></span>
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
                <td className="text">{q.id} ) {q.question} </td>
            </tr>
            <tr>
                <td>
                    <input type = "radio" className="rb" 
                    name = {q.question+ "+" }
                    id="yes" 
                    value={"+" +  q.id  + "А" }
                    onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: "+" +  q.id  + "А" 
                        }))}
                    style={{float: 'left'}} required />
                        <label for="yes" style={{float: 'left', paddingRight: '10px'}}></label>
                    <input type = "radio" className="rb" 
                    name = {q.question+ "-" }
                    id="no" 
                    value={"-" +  q.id  + "А" }
                    onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: "-" +  q.id  + "А" 
                        }))}
                    style={{float: 'left'}} required />
                        <label for="no" style={{float: 'left', paddingRight: '10px'}}></label>
                        <p style={{float: 'left', clear: 'none', display: 'block',  paddingRight: '10px'}}>A. {q.option1}</p></td>
            </tr>
            <tr>
                <td>
                    <input type = "radio" className="rb" 
                     name = {q.question+ "+" }
                    id="yes" 
                    value={"+" +  q.id  + "Б" }
                    onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: "+" +  q.id  + "Б" 
                        }))}
                    style={{float: 'left'}} />
                        <label for="yes" style={{float: 'left', paddingRight: '10px'}}></label>
                    <input type = "radio" className="rb" 
                     name = {q.question+ "-" } 
                    id="no" 
                    value={"-" +  q.id  + "Б" }
                    onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: "-" +  q.id  + "Б" 
                        }))}
                    style={{float: 'left'}} />
                        <label for="no" style={{float: 'left', paddingRight: '10px'}}></label>
                        <p style={{float: 'left', clear: 'none', display: 'block',  paddingRight: '10px'}}>Б. {q.option2}</p></td>
            </tr>
            <tr>
                <td>
                    <input type = "radio" className="rb" 
                    name = {q.question+ "+" }
                    id="yes" 
                    value={"+" +  q.id  + "В" }
                    onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]:"+" +  q.id  + "В"
                        }))}
                    style={{float: 'left'}}  />
                        <label for="yes" style={{float: 'left', paddingRight: '10px'}}></label>
                    <input type = "radio" className="rb" 
                     name = {q.question+ "-" }
                    id="no" 
                    value={"-" +  q.id  + "Б" }
                    onChange={() => 
                        setAnswers((answer) => ({
                            ...answer,
                            [q.id]: "-" +  q.id  + "Б"
                        }))}
                    style={{float: 'left'}} />
                        <label for="no" style={{float: 'left', paddingRight: '10px'}}></label>
                        <p style={{float: 'left', clear: 'none', display: 'block',  paddingRight: '10px'}}>В. {q.option3}</p></td>
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

export default Test3