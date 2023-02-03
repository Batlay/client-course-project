import React, {useState} from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/MyInput'
import { TextField } from '@mui/material'
import { width } from '@mui/system'


const NoteForm = ({create}) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    
    const addNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            ...note
        }
        create(newNote)
        setNote({ title: '',content: ''})
    }
      

    return (
        <>
        <form style={{bottom: '5%', width: '100%'}}> 
        <h5>Написать заметку</h5>
        <MyInput 
            value={note.title}
            onChange={e => setNote({...note, title: e.target.value})}
            type='text' 
            placeholder='Заголовок'/>
        {/* <MyInput 
            value={note.content}
            onChange={e => setNote({...note, content: e.target.value})}
            type='text' 
            placeholder='Содержание'
            style={{height: '200px'}}/> */}
            <textarea 
            type='text'
            value={note.content}
            onChange={e => setNote({...note, content: e.target.value})}
            style={{height: '200px', width: '100%'}}
            placeholder='Содержание'
/>
        {/* <MyInput 
            value={note.slug}
            onChange={e => setNote({...note, slug: e.target.value})}
            type='text' 
            placeholder='Путь'/> */}
        <MyButton onClick={addNewNote}>Создать заметку</MyButton>
    </form>
    </>
    )
}

export default NoteForm
