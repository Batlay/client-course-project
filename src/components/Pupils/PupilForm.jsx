import React from 'react'
import MyInput from '../UI/Input/MyInput'
import { useState, useEffect } from 'react'
import MyButton from '../UI/Button/MyButton'

const PupilForm = ({create}) => {
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
            console.log('Введите корректный телефон')
        } 
        else if (!isValidEmail(pupil.email)) {
            console.log('Введите корректный email')
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
        // return  /^[+]375 [(][0-9]{2}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$/.test(phone);
        return  /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(phone);
    }


    return (
        <form>
        <MyInput 
            value={pupil.fio}
            onChange={e => setPupil({...pupil, fio: e.target.value})}
            type='text' 
            placeholder='ФИО ученика'/>
        <MyInput 
            value={pupil.phone}
            onChange={e => setPupil({...pupil, phone: e.target.value})}
            type='text' 
            placeholder='Телефон: +375|80/29|25|44|33/XXXYYZZ'/>
        <MyInput 
            value={pupil.email}
            onChange={e => setPupil({...pupil, email: e.target.value})}
            type='text' 
            placeholder='Email: ivan.ivanov@gmail.com'/>
        <MyInput 
            // onChange={e => setPupil({...pupil, profile_pic: e.target.value})}
            onChange={e => onChange(e)}
            type="file"
            accept="image/png, image/jpeg"
            placeholder='Фото' 

            />
        <MyButton onClick={addNewPupil}>Добавить ученика</MyButton>
    </form>
    )
}

export default PupilForm
