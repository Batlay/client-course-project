import axios from 'axios'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import MyButton from '../UI/Button/MyButton';

const Test1 = () => {

    // const arr = [
    //     {
    //         id: 1,
    //         value: 25,
    //         n: 'Здоровье'
    //     },
    //     {
    //         id: 2,
    //         value: 18,
    //         n: 'Сила'
    //     },
    // ];
    // const [array, setArray] = useState(arr)
    const {value, setValue} = useContext(UserContext)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [value4, setValue4] = useState(0)
    const [value5, setValue5] = useState(0)
    const [value6, setValue6] = useState(0)
    const [value7, setValue7] = useState(0)
    const [value11, setValue11] = useState(0)
    const [value22, setValue22] = useState(0)
    const [value33, setValue33] = useState(0)
    const [value44, setValue44] = useState(0)
    const [value55, setValue55] = useState(0)
    const [value66, setValue66] = useState(0)
    const [value77, setValue77] = useState(0)
    const userData = JSON.parse(localStorage.getItem('user'))

    let answers = [
        value2, value3, value4, value5, value6, value7,
        value22, value33, value44, value55, value66, value77
    ]
    
    const router = useNavigate()
  
        const handleSubmit = e => {
            e.preventDefault();
  
            console.log(answers)
            axios.post(`/api/tests/test1/answers/${userData.id}`, answers)
             .then((response) => {
                router(`/tests/`, {replace: true})
                console.log(response.data)}
             )
             .catch(error => {
                if (error.response) {
                  console.log(error.response.data);
                }
              });
        };
        

  return (
    <>
    <div> 
         <div style={{backgroundColor: '#419D78', color: '#EFD0CA', fontSize: '20px', textAlign: 'center'}}>
            Осталось времени: <span id="timer"></span>
        </div> 

    <div className="container">
        <h4 className="text mt-3">
           На каждой шкале отметьте, как вы оцениваете развитие у себя этого качества в настоящий момент.
        </h4>
    <hr/>
    <div>
    <form onSubmit={handleSubmit}>
   
    <div className="range">

        <div className="item">
        <input
            type='range'
            name='aa'
            onChange={changeEvent => setValue1(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value1} />
        <span className="caption">Здоровье</span>
        </div>

        <div className="item">
        <input
            type='range'
            name='bb'
            onChange={changeEvent => setValue2(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value2}
            className='custom-slidr' />
        <span className="caption">Ум</span>
        </div>

        <div className="item">
        <input
            type='range'
            name='aa'
            onChange={changeEvent => setValue3(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value3} />
        <span className="caption">Характер</span>
        </div>

        <div className="item">
        <input
            type='range'
            name='aa'
            onChange={changeEvent => setValue4(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value4} />
        <span className="caption">Авторитет</span>
        </div>

        <div className="item">
        <input
            type='range'
            name='aa'
            onChange={changeEvent => setValue5(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value5} />
        <span className="caption">Умения</span>
        </div>

        <div className="item">
        <input
            type='range'
            name='aa'
            onChange={changeEvent => setValue6(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value6} />
        <span className="caption">Внешность</span>
        </div>

        <div className="item">
        <input
            type='range'
            name='aa'
            onChange={changeEvent => setValue7(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value7} />
        <span className="caption">Уверенность</span>
        </div>

    </div>

    <br />
    <h4> Отметьте, при каком уровне развития этих качеств вы были бы удовлетворены собой или почувствовали гордость за себя </h4>

    <div className="range1">

<div className="item">
        <input
            type='range'
            name='aa'
            placeholder='Здоровье'
            onChange={changeEvent => setValue11(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value11} />
        <span className="caption">Здоровье</span>
        </div>

        <div className="item">
        <input
        placeholder='Ум'
            type='range'
            name='bb'
            onChange={changeEvent => setValue22(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value22}
            className='custom-slidr' />
        <span className="caption">Ум</span>
        </div>

        <div className="item">
        <input
        placeholder='Характер'
            type='range'
            name='aa'
            onChange={changeEvent => setValue33(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value33} />
        <span className="caption">Характер</span>
        </div>

        <div className="item">
        <input
            type='range'
            name='aa'
            placeholder='Авторитет'
            onChange={changeEvent => setValue44(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value44} />
        <span className="caption">Авторитет</span>
        </div>

        <div className="item">
        <input
            type='range'
            placeholder='Умения'
            name='aa'
            onChange={changeEvent => setValue55(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value55} />
        <span className="caption">Умения</span>
        </div>

        <div className="item">
        <input
            type='range'
            placeholder='Внешность'
            name='aa'
            onChange={changeEvent => setValue66(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value66} />
        <span className="caption">Внешность</span>
        </div>

        <div className="item">
        <input
            type='range'
            placeholder='Уверенность'
            name='aa'
            onChange={changeEvent => setValue77(changeEvent.target.value)}
            min={1}
            max={100}
            step={1}
            value={value77} />
        <span className="caption">Уверенность</span>
        </div>

    </div>
    <br />
    <br />

        {/* <input data-testid='save_button' type="submit" className="btn btn-success" value="Сохранить" /> */}
        <MyButton  data-testid='save_button' onClick={handleSubmit} >Сохранить</MyButton>
    </form>
</div>
</div>
</div>
    </>
  )
}

export default Test1