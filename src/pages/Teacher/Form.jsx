import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyButton from '../../components/UI/Button/MyButton';

const Form = () => {
    const params = useParams()
    const [answers, setAnswers] = useState([])
    const router = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
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
      <legend>
          Используя четырёхбалльную систему, оцените в какой степени ученик обладает нижеописанными творческими характеристиками.
          Возможные оценочные баллы: 4 – постоянно, 3 – часто, 2 – иногда, 1 – редко.
      </legend>
      <br/>
      <form  onSubmit={handleSubmit}>
      1.	Чрезвычайно любознателен в самых разных областях: постоянно задаёт вопросы о чём-либо и обо всём.
          <input required type="text" name="1"   maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '1': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
      2.	Выдвигает большое количество различных идей или решений проблем; часто предлагает необычные, нестандартные, оригинальные ответы.
        <input required type="text" name="2"  maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '2': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        3.	Свободен и независим в выражении своего мнения, иногда горяч в споре; упорный и настойчивый.
        <input required type="text" name="3"  maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '3': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        4.	Способен рисковать; предприимчив и решителен.
        <input required type="text" name="4"   maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '4': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        5.	Предпочитает задания, связанные с «игрой ума»; фантазирует, обладает воображением («интересно, что произойдет, если...»);
            манипулирует идеями (изменяет, тщательно разрабатывает их);
            любит заниматься применением, улучшением и изменением правил и объектов.
        <input required type="text" name="5"  maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '5': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        6.	Обладает тонким чувством юмора и видит смешное в ситуациях, которые не кажутся смешными другим.
        <input required type="text" name="6"  maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '6': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        7.	Осознаёт свою импульсивность и принимает это в себе, более открыт восприятию необычного в себе (свободное проявление «типично женских» интересов для мальчиков;
            девочки более независимы и настойчивы, чем их сверстницы); проявляет эмоциональную чувствительность.
        <input required type="text" name="7"  maxLength="1" max='4' min='1'  style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '7': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        8.	Обладает чувством прекрасного; уделяет внимание эстетическим характеристикам вещей и явлений.
        <input required type="text" name="8"  maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '8': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        9.	Имеет собственное мнение и способен его отстаивать; не боится быть непохожим на других; индивидуалист, не интересуется деталями; спокойно относится к творческому беспорядку.
        <input required type="text" name="9"  maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '9': event.target.value
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><br/>
        10.	Критикует конструктивно; не склонен полагаться на авторитетные мнения без их критической оценки.
        <input required type="text" name="10"  maxLength="1" max='4' min='1' style={{margin: '10px', width: '5%'}} onChange={(event) => 
                        setAnswers((answer) => ({
                            ...answer,
                            '10': event.target.value
                            
                        }))}
                        onKeyPress={(event) => {
                            if (!/[1-4]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          />
                    <br/>
                <br/>
        <center>
            <MyButton style={{borderRadius: '5px', width: '20%'}} type="submit">Сохранить результаты</MyButton>
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
          theme="light"/>
       </div>
    );
};

export default Form;