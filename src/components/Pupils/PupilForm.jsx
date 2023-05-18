import React from 'react'
import { useState} from 'react'
import MyButton from '../UI/Button/MyButton'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const PupilForm = ({create, visible}) => {
    const [pupil, setPupil] = useState(
        {
            fio: '', 
            phone: '',
            email: '', 
            profile_pic: '',
        })

    const addNewPupil = (e) => {
        e.preventDefault()
        if (!isValidPhone(pupil.phone)) {
            toast.error('Введите корректный номер телефона')
        } 
        else if (!isValidEmail(pupil.email)) {
            toast.error('Введите корректный email')
        } 
        else {
            const newPupil = {
                ...pupil
            }
  
            create(newPupil)
            setPupil({fio: '', phone: '', email: '', profile_pic: ''})
        }
    }


    const onChange = e => {
        console.log("file uploaded: ", e.target.files[0]);
        let file = e.target.files[0];
    
        if (file) {
        console.log(file)
          const reader = new FileReader();
          reader.onload = _handleReaderLoaded.bind(file);
          reader.readAsBinaryString(file);
        }
      };

    const _handleReaderLoaded = e => {
        console.log("file uploaded 2: ", e);
        let binaryString = e.target.result;
        const a = btoa(binaryString)
        setPupil({...pupil, profile_pic: a})
        console.log(a)
        console.log(typeof a)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPhone(phone) {
        return  /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(phone);
    }


    return (
        <form onSubmit={addNewPupil} style={{ 
            height: '50vh',
            width: '50vw',
            backgroundImage: 'url("https://newway.herokuapp.com/static/images/flower.jpg")', backgroundSize:'cover' }}>
        <center>
        <br/>
            <input 
                required
                className="form-control" 
                value={pupil.fio}
                onChange={e => setPupil({...pupil, fio: e.target.value})}
                type='text' 
                placeholder='ФИО ученика'
                style={{width: '60%'}}  />
            <input 
                required
                className="form-control" 
                value={pupil.phone}
                onChange={e => setPupil({...pupil, phone: e.target.value})}
                type='text' 
                placeholder='Телефон: +375|80 29|25|44|33 XXXYYZZ (без пробелов)'
                style={{margin: '10px',width: '60%'}}  />
            <input 
                required
                type="text" 
                className="form-control" 
                placeholder='Email: ivan.ivanov@gmail.com' 
                style={{margin: '10px',width: '60%'}}  
                value={pupil.email}
                onChange={e => setPupil({...pupil, email: e.target.value})} />
            <label for="avatar">Выберите фото профиля ученика (необязательно)</label>
            <br/>
            <input
                // onChange={e => setPupil({...pupil, profile_pic: e.target.value})}
                onChange={e => onChange(e)}
                type="file"
                accept="image/png, image/jpeg"
                placeholder='Фото' 
                style={{width: '60%', margin: '10px'}}
                />
            <br/>
                <MyButton  data-testid='add_button' type='submit' style={{borderRadius: '5px'}}>Добавить ученика</MyButton>
            </center>
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
        </form>
    )
}

export default PupilForm
