import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import TestList from '../components/Tests/TestList';

const Tests = () => {

        const [tests, setTests] = useState([])
  
        useEffect(() => {
            getTests()
        }, [])
        
        const getTests = async () => {
            const response = await axios.get('/api/tests/')
            setTests(response.data)
        }




    return (
        <Container>
        <Row>
            <Col md={7} mt={3}>
                <TestList tests={tests} /></Col>
            {/* <Col>{tests.classroom}</Col> */}
        </Row>
    </Container>
    )
}

export default Tests

