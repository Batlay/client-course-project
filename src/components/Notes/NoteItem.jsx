import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../UI/Button/MyButton';
import { useNavigate } from 'react-router-dom';

const NoteItem = ({note}) => {
  const router = useNavigate();

    return (
     
    <div>
      <div className="card" data-testid='note'>
        <div className="card__header">
          <img src="https://newway.herokuapp.com/static/images/note_header.jpg" alt="card__image" className="card__image" width="600" />
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

{/* <div class="row">
    <!-- Blog Entries Column -->
    <div class="col-md-7 mt-3 left">
      {% for post in posts %}
      <div class="card mb-4">
        <div class="card-body">
          <h2 class="card-title">{{ post.title }}</h2>
          <p class="card-text text-muted h6">{{ post.author }} | {{ post.created_on}} </p>
          <p class="card-text">{{post.content|slice:":200"}}</p>
          <a href="{% url 'post_detail' post.slug  %}" class="btn btn-light">Подробнее &rarr;</a>
        </div>
      </div>
      {% endfor %}
    </div> */}

export default NoteItem
