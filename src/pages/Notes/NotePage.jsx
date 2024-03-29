import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const NotePage = () => {
    const params = useParams()
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'
    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [])

    const getNote = async () => {
      const response = await axios.get(`${rootUrl}/api/notes/${params.id}`)
      setNote(response.data)
    }

    return (
      <div className='note'>
        <div className="card">
          <div className="card__header">
              <img src={`${rootUrl}/static/images/note_header.jpg`} style={{backgroundSize: 'auto'}} alt="card__image" className="card__image" width="600" />
          </div>
          <div className="card__body">
              <span>{note?.pupil}</span>
              <h4>{note?.title}</h4>
              <p>{note?.content}</p>
          </div>
          <div className="card__footer">
              <div className="user">
                <div className="user__info">
                  <h5>{note?.author}</h5>
                  <small>{note?.created_on}</small>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default NotePage
