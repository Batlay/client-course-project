import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import MyButton from '../UI/Button/MyButton';

const NoteItem = ({note}) => {
  var randomImages = [
    'https://www.gotokyo.org/en/story/guide/the-japanese-cherry-blossom-trees/images/main.jpg',
    'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
    'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    'https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download',
    'https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg',
    'https://i.stack.imgur.com/QqRWG.jpg',
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.nasa.gov/sites/default/files/thumbnails/image/potw2122a.jpg',
    'https://wallpapers.com/images/hd/maldives-and-sea-holiday-hd-iyidzfb55r4ajji4.jpg',
    'https://images.unsplash.com/photo-1524388680868-377a2e6bbb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'
];

    return (
     
    // <Card mb={4}>
    //     <Card.Body>
    //         <h2><Card.Title>{note.title}</Card.Title></h2>
    //         <Card.Text>
    //                     {note.author}, {note.created_on}
    //        </Card.Text>
    //           <Card.Text>  
    //                     {note.content}
    //              </Card.Text>
    //              <Link to={`/notes/${note.slug}`}>Подробнее</Link>
    //     </Card.Body>
    // </Card>
    <div>
      <div className="card">
        <div className="card__header">
          <img src="https://i.stack.imgur.com/QqRWG.jpg" alt="card__image" className="card__image" width="600" />
        </div>
        <div className="card__body">
          <span>{note.pupil}</span>
        <h4>{note.title}</h4>
        <p>{note.content.substring(0, 280)}...</p>
      {/* { note.result == 'Плохой результат' &&
      <span className="tag tag-red">Плохой результат </span>
      }
      { note.result == 'Хорошие показатели' &&
      <span className="tag tag-green">Хорошие показатели </span>
      }
      { note.result == 'Стоит обратить внимание' &&
      <span className="tag tag-brown">Стоит обратить внимание </span>
      } */}
      </div>
      <div className="card__footer">
        <div className="user">
          <div className="user__info">
            <h5>{note.author}</h5>
            <small>{note.created_on}</small>
          </div>
          <Link to={`/notes/${note.slug}`}>Подробнее</Link>
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
