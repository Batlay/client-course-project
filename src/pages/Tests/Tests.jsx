import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import TestList from '../../components/Tests/TestList';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import NavbarPanel from '../../components/UI/Navbar/NavbarPanel';

const Tests = () => {
        const {value, setValue} = useContext(UserContext)
        const [tests, setTests] = useState([])
        const [results, setResults] = useState([])
        const userData = JSON.parse(localStorage.getItem('user'))
        
        useEffect(() => {
            getTests()
            getResults()
        }, [])
        
        const getTests = async () => {
            const response = await axios.post('/api/tests/', userData )
            setTests(response.data)
            console.log(response.data)
        }

        const getResults = async () => {
            const response = await axios.post('/api/results/', userData )
            setResults(response.data)
            console.log(response.data)
        }


    return (
        <>
        <NavbarPanel/>
        <Container>
        <Row>
            <Col md={7} mt={3}>
                <TestList tests={tests} results={results} /></Col>
            {/* <Col>{tests.classroom}</Col> */}
        </Row>
    </Container>
    </>
    )
}

export default Tests

