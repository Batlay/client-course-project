import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import TestList from '../../components/Tests/TestList';
import NavbarPanel from '../../components/UI/Navbar/NavbarPanel';

const Tests = () => {
        const [tests, setTests] = useState([])
        const [results, setResults] = useState([])
        const userData = JSON.parse(localStorage.getItem('user'))
        const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

        useEffect(() => {
            getTests()
            getResults()
        }, [])
        
        const getTests = async () => {
            const response = await axios.post(`${rootUrl}/api/tests/`, userData )
            setTests(response.data)
        }

        const getResults = async () => {
            const response = await axios.post(`${rootUrl}/api/tests/results/`, userData )
            setResults(response.data)
        }

    return (
        <>
        <NavbarPanel/>
        <Container>
            <Row>
                <Col md={7} mt={3}>
                    <TestList tests={tests} results={results} />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Tests

