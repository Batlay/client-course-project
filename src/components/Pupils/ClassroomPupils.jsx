import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import PupilList from './PupilList';

const ClassroomPupils = () => {
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'
    const params = useParams()
    const [pupils, setPupils] = useState([])
    
    useEffect(() => {
        getPupils()
    }, [])
    
    const getPupils = async () => {
        const response = await axios.get(`${rootUrl}/api/classrooms/${params.id}`)
        setPupils(response.data)
    }

    return (
    <Container>
        <Row>
            <Col md={7} mt={3}>
                <PupilList pupils={pupils} spec={true} />
            </Col>
        </Row>
    </Container>
    )
}

export default ClassroomPupils

