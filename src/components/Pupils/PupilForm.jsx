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
        const newPupil = {
            ...pupil
        }
        console.log(newPupil.profile_pic)
        
        create(newPupil)
        setPupil({fio: '', phone: '', email: '', profile_pic: ''})
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
            placeholder='Телефон'/>
        <MyInput 
            value={pupil.email}
            onChange={e => setPupil({...pupil, email: e.target.value})}
            type='text' 
            placeholder='Email'/>
        <MyInput 
            // onChange={e => setPupil({...pupil, profile_pic: e.target.value})}
            onChange={e => onChange(e)}
            type="file"
            accept="image/png, image/jpeg"
            placeholder='Фото' 

            />
        <MyButton onClick={addNewPupil}>Создать пост</MyButton>
    </form>
    )
}

export default PupilForm
