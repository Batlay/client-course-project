import React, {useState, useEffect} from 'react'
import NotesList from '../components/Notes/NotesList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/Modal/MyModal";
import NoteForm from '../components/Notes/NoteForm';
import axios from 'axios'
import PupilList from '../components/Pupils/PupilList';
import PupilForm from '../components/Pupils/PupilForm';

const Pupils = () => {

        const [pupils, setPupils] = useState([])
        const [modal, setModal] = useState(false)
        
        useEffect(() => {
            getPupils()
        }, [])
        
        const getPupils = async () => {
            const response = await axios.get('/api/pupils/')
            setPupils(response.data)
        }

   

        const addPupil = (newPupil) => {
            axios.post('/api/pupils/create/', newPupil)
             .then(response =>  {
                setPupils([...pupils, response.data])
                setModal(false)
             });
      }


    return (
        <Container>
        <Row>
        <MyModal visible={modal} setVisible={setModal}>
        <PupilForm create={addPupil} />
        </MyModal>
            <Col md={7} mt={3}>
            <MyButton style={{marginTop: '30px', width: '100%' }} onClick={() => setModal(true)}>
            Добавить студента
        </MyButton>
                <PupilList pupils={pupils} /></Col>
            <Col>{pupils.classroom}</Col>
        </Row>
    </Container>
    )
}

export default Pupils

