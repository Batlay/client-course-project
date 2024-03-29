import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../UI/Button/MyButton';
import { useNavigate } from 'react-router-dom';

const NoteItem = ({note}) => {
  const router = useNavigate();
  const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'
    return (
     
    <div>
      <div className="card" data-testid='note'>
        <div className="card__header">
          <img src={`${rootUrl}/static/images/note_header.jpg`} alt="card__image" className="card__image" width="600" />
        </div>
        <div className="card__body">
          <span>{note.pupil}</span>
        <h4>{note.title}</h4>
        <p>{note.content.substring(0, 280)}...</p>
  
      </div>
      <div className="card__footer">
        <div className="user">
          <div className="user__info">
            <h5>{note.author}</h5>
            <small>{note.created_on}</small>
          </div>
          <MyButton data-testid='see_btn' style={{borderRadius: '5px'}} onClick={() => router(`/notes/${note.created_on}`, {replace: true})}>
                Посмотреть
            </MyButton>
        </div>
      </div>
    </div>
  <br></br>
  </div>
    )
}


export default NoteItem
