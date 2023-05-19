import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NotesList from '../../components/Notes/NotesList'


const PersonNotes = () => {
  const params = useParams()
  const [notes, setNotes] = useState([])
  const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

  useEffect(() => {
    getNotes()
  }, [])

const getNotes = async () => {
    const response = await axios.get(`${rootUrl}/api/notes/person/${params.id}`)
    setNotes(response.data)
}

return (
    <div style={{width: 800,   display: 'flex', flexDirection: 'column',
      alignItems: 'center' }}>
         <NotesList notes={notes} />
    </div>
  )
}

export default PersonNotes
