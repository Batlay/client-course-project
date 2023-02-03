import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import TestList from '../components/Tests/TestList';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';


const Tests = () => {
        const {value, setValue} = useContext(UserContext)
        const [tests, setTests] = useState([])
        const userData = JSON.parse(localStorage.getItem('user'))
        
        useEffect(() => {
            getTests()
        }, [])
        
        const getTests = async () => {
            const response = await axios.post('/api/tests/', userData )
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

