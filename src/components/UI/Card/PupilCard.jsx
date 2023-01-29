import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, CardImg } from 'react-bootstrap'
import MyButton from '../Button/MyButton'
import { Link } from 'react-router-dom'

const PupilCard = (props) => {
    let {imgSrc, title, id} = props.data
    return (
       <Card className='p-0 overflow-hidden w-100 shadow '>
            <div style={{ width: 200}}>
                <Card.Img variant='top' className='w-200' style={{height: 150, width: 150}} src={imgSrc} />
            </div>
            <Card.Body classname='text-center'>
                <Card.Title style={{fontSize: 16, height: 50}}>{title}</Card.Title>
            </Card.Body>
            {/* <Button className='w-100 rounded-0' variant='success'>Посмотреть</Button> */}
            <Link to={`/notes/person/${id}`}>Подробнее</Link>
       </Card>
    )
}

export default PupilCard
