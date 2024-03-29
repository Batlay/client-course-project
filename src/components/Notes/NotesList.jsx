import React from 'react'
import NoteItem from './NoteItem'


const NotesList = ({notes}) => {

    if (!notes.length) {
        return (
        <h1 style={{textAlign: 'center'}}>
            Заметки не найдены
        </h1>
        )
      }
    
    return (
        <div>
            {notes.map((note, index) => (
                <NoteItem key={index} note={note} />
            ))}
        </div>
    )
}

export default NotesList
