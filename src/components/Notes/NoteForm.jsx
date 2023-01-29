import React, {useState} from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/MyInput'


const NoteForm = ({create}) => {
    const [note, setNote] = useState({body: ''})

    
    const addNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            ...note
        }
        create(newNote)
        setNote({body: ''})
    }
      

    return (
        <form>
        <MyInput 
            value={note.body}
            onChange={e => setNote({...note, body: e.target.value})}
            type='text' 
            placeholder='Описание заметки'/>
        <MyButton onClick={addNewNote}>Создать пост</MyButton>
    </form>
    )
}

export default NoteForm
