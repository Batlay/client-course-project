import React, {useState, useEffect, useRef} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const params = useParams()
    const [answers, setAnswers] = useState([])
    const router = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        console.log(answers)
        axios.post(`/api/pupils/form/${params.id}`, answers)
            .then(() => {
                toast.success('Форма успешно заполнена')
                router(`/pupils/`, {replace: true})}
                )
            .catch(() => {
                toast.error('Возникла ошибка')
            })
    };

    return (
<div className='App'>
        <legend>Используя четырёхбалльную систему, оцените в какой степени ученик обладает нижеописанными творческими характеристиками.
            Возможные оценочные баллы: 4 – постоянно, 3 – часто, 2 – иногда, 1 – редко.</legend>
            <br/>
            <form  onSubmit={handleSubmit}>
        1.	Чрезвычайно любознателен в самых разных областях: постоянно задаёт вопросы о чём-либо и обо всём.
        <input required type="number" name="1"   maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '1': event.target.value
                        }))}/><br/>
        2.	Выдвигает большое количество различных идей или решений проблем; часто предлагает необычные, нестандартные, оригинальные ответы.
        <input required type="number" name="2"  maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '2': event.target.value
                        }))}/><br/>
        3.	Свободен и независим в выражении своего мнения, иногда горяч в споре; упорный и настойчивый.
        <input required type="number" name="3"  maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '3': event.target.value
                        }))}/><br/>
        4.	Способен рисковать; предприимчив и решителен.
        <input required type="number" name="4"   maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '4': event.target.value
                        }))}/><br/>
        5.	Предпочитает задания, связанные с «игрой ума»; фантазирует, обладает воображением («интересно, что произойдет, если...»);
            манипулирует идеями (изменяет, тщательно разрабатывает их);
            любит заниматься применением, улучшением и изменением правил и объектов.
        <input required type="number" name="5"  maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '5': event.target.value
                        }))}/><br/>
        6.	Обладает тонким чувством юмора и видит смешное в ситуациях, которые не кажутся смешными другим.
        <input required type="number" name="6"  maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '6': event.target.value
                        }))}/><br/>
        7.	Осознаёт свою импульсивность и принимает это в себе, более открыт восприятию необычного в себе (свободное проявление «типично женских» интересов для мальчиков;
            девочки более независимы и настойчивы, чем их сверстницы); проявляет эмоциональную чувствительность.
        <input required type="number" name="7"  maxlength="1" max='4' min='1'  style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '7': event.target.value
                        }))}/><br/>
        8.	Обладает чувством прекрасного; уделяет внимание эстетическим характеристикам вещей и явлений.
        <input required type="number" name="8"  maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '8': event.target.value
                        }))}/><br/>
        9.	Имеет собственное мнение и способен его отстаивать; не боится быть непохожим на других; индивидуалист, не интересуется деталями; спокойно относится к творческому беспорядку.
        <input required type="number" name="9"  maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '9': event.target.value
                        }))}/><br/>
        10.	Критикует конструктивно; не склонен полагаться на авторитетные мнения без их критической оценки.
        <input required type="number" name="10"  maxlength="1" max='4' min='1' style={{margin: '10px'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '10': event.target.value
                        }))}/><br/>
                <br/>
                <center>
         <button type="submit" className="btn btn-outline-dark">Сохранить результаты</button>
         </center>
        </form>
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
    theme="light"
/>
       </div>
    );
};

export default Form;