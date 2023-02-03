import React from 'react'
import MyInput from '../UI/Input/MyInput'
import { useState, useEffect } from 'react'
import MyButton from '../UI/Button/MyButton'

const SchoolForm = ({create}) => {
    const [school, setSchool] = useState(
        {
            name: '', 
        })

    const addnewSchool = (e) => {
        e.preventDefault()
     
        const newSchool = {
            ...school
        }
  
    create(newSchool)
    setSchool({name: ''})
        
    }

    return (
        <form>
        <MyInput 
            value={school.name}
            onChange={e => setSchool({name: e.target.value})}
            type='text' 
            placeholder='Название школы'/>
        <MyButton onClick={addnewSchool}>Добавить школу</MyButton>
    </form>
    )
}

export default SchoolForm
