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
import ClassroomList from '../../components/Classrooms/ClassroomList';
import { useParams } from 'react-router-dom';
import ClassroomForm from '../../components/Classrooms/ClassroomForm';

const EditClassrooms = () => {
        const params = useParams()
        const [classrooms, setClassrooms] = useState([])
        const [modal, setModal] = useState(false)
        const admin = true
        
        useEffect(() => {
            getClassrooms()
        }, [])
        
        const getClassrooms = async () => {
            const response = await axios.get(`/api/schools/${params.id}`)
            setClassrooms(response.data)
            
        }

        
        const addClassroom = (newClassroom) => {
            axios.post(`/api/classrooms/create/${params.id}`, newClassroom)
             .then(response =>  {
                setClassrooms([...classrooms, response.data])
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
            <ClassroomForm create={addClassroom} />
        </MyModal>
            <Col md={7} mt={3}>
            <MyButton style={{marginTop: '30px', width: '100%' }} onClick={() => setModal(true)}>
                Добавить класс
            </MyButton>
                <ClassroomList classrooms={classrooms} admin={admin}/></Col>
            <Col>Список классов</Col>
        </Row>
    </Container>
    )
}

export default EditClassrooms
