import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ClassroomList from '../../components/Classrooms/ClassroomList';
import { useParams } from 'react-router-dom';

const Classrooms = () => {
    const params = useParams()
    const [classrooms, setClassrooms] = useState([])
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

    useEffect(() => {
        getClassrooms()
    }, [])
    
    const getClassrooms = async () => {
        const response = await axios.get(`${rootUrl}/api/schools/${params.id}`)
        setClassrooms(response.data)
    }

    return (
    <Container>
        <Row>
            <Col md={7} mt={3}>
                <ClassroomList classrooms={classrooms} />
            </Col>
        </Row>
    </Container>
    )
}

export default Classrooms

