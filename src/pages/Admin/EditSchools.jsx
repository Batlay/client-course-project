import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import SchoolList from '../../components/Schools/SchoolList';
import MyButton from '../../components/UI/Button/MyButton';
import MyModal from '../../components/UI/Modal/MyModal';
import PupilForm from '../../components/Pupils/PupilForm';
import SchoolForm from '../../components/Schools/SchoolForm';

const EditSchools = () => {

        const [schools, setSchools] = useState([])
        const [modal, setModal] = useState(false)
        const admin = true
        
        useEffect(() => {
            getSchools()
        }, [])
        
        const getSchools = async () => {
            const response = await axios.get('/api/schools/')
            setSchools(response.data)
            
        }

        
        const addSchool = (newSchool) => {
            axios.post('/api/schools/create/', newSchool)
             .then(response =>  {
                setSchools([...schools, response.data])
                setModal(false)
             })
             .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                  }
             })
      }

    return (
        <Container>
        <Row>
        <MyModal visible={modal} setVisible={setModal}>
            <SchoolForm create={addSchool} />
        </MyModal>
            <Col md={7} mt={3}>
            <MyButton style={{marginTop: '30px', width: '100%' }} onClick={() => setModal(true)}>
            Добавить школу
            </MyButton>
                <SchoolList schools={schools} admin={admin}/></Col>
            <Col>Список школ</Col>
        </Row>
    </Container>
    )
}

export default EditSchools
