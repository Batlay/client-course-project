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
        <form onSubmit={addNewNote} style={{bottom: '5%', width: '100%'}}> 
        <center>
        <h5>Написать заметку</h5>
        <br/>
             <input 
                required
                className="form-control" 
                value={note.title}
                onChange={e => setNote({...note, title: e.target.value})}
                type='text' 
                placeholder='Заголовок'
                style={{width: '90%'}}  />
            <textarea 
            required
            type='text'
            className="form-control" 
            value={note.content}
            onChange={e => setNote({...note, content: e.target.value})}
            style={{height: '200px', width: '90%', marginTop: '10px'}}
            placeholder='Содержание'/>


            <MyButton style={{borderRadius: '5px', width: '30%'}} type='submit'>Отправить классному руководителю</MyButton>
        </center>
    </form>
    </>
    )
}

export default NoteForm
