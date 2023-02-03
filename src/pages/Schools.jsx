import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import SchoolList from '../components/Schools/SchoolList';

const Schools = () => {

        const [schools, setSchools] = useState([])
        
        useEffect(() => {
            getSchools()
        }, [schools])
        
        const getSchools = async () => {
            const response = await axios.get('/api/schools/')
            setSchools(response.data)
            
        }



    return (
        <Container>
        <Row>
            <Col md={7} mt={3}>
                <SchoolList schools={schools} /></Col>
            <Col>Список школ</Col>
        </Row>
    </Container>
    )
}

export default Schools

