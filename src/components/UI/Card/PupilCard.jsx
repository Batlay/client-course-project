import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, CardImg } from 'react-bootstrap'
import MyButton from '../Button/MyButton'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PupilCard = (props) => {
    let {imgSrc, title, id} = props.data
    const router = useNavigate()
    return (
       <Card className='p-0 overflow-hidden w-100 shadow ' style={{border: '1px solid rgba(0, 0, 0, 0.5)'}}>
            <div style={{ width: 200}}>
                <Card.Img variant='top' className='w-200' style={{height: 125, width: 150}} src={imgSrc} />
            </div>
            <Card.Body className='text-center'>
                <Card.Title style={{fontSize: 16, height: 50}}>{title}</Card.Title>
            </Card.Body>
            {/* <Button className='w-100 rounded-0' variant='success'>Посмотреть</Button> */}
            {/* <Link to={`/notes/person/${id}`}>Подробнее</Link> */}
            <div className=" row justify-content-center  my-auto">
            <MyButton style={{width: '70%', borderRadius: '5px', borderColor: 'black', color: 'black'}} onClick={() => router(`/notes/person/${id}`, {replace: true})}>Подробнее</MyButton>
           </div>
       </Card>
    )
}

export default PupilCard
