import React from 'react'
import MyInput from '../UI/Input/MyInput'
import { useState, useEffect } from 'react'
import MyButton from '../UI/Button/MyButton'

const ClassroomForm = ({create}) => {
    const [classroom, setClassroom] = useState(
        {
            name: '', 
        })

    const addnewSchool = (e) => {
        e.preventDefault()
     
        const newSchool = {
            ...classroom
        }
  
    create(newSchool)
    setClassroom({name: ''})
        
    }

    return (
        <form>
        <MyInput 
            value={classroom.name}
            onChange={e => setClassroom({name: e.target.value})}
            type='text' 
            placeholder='Название класса'/>
        <MyButton onClick={addnewSchool}>Добавить класс</MyButton>
    </form>
    )
}

export default ClassroomForm
