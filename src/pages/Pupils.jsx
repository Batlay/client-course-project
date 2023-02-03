import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/Modal/MyModal";
import axios from 'axios'
import PupilList from '../components/Pupils/PupilList';
import PupilForm from '../components/Pupils/PupilForm';



const Pupils = () => {
        const [pupils, setPupils] = useState([])
        const [modal, setModal] = useState(false)
        const userData = JSON.parse(localStorage.getItem('user'))

        useEffect(() => {
            getPupils()
        }, [])
        
        const getPupils = async () => {
            const response = await axios.post('/api/pupils/', userData)
            setPupils(response.data)
        } 

        const addPupil = (newPupil) => {
            axios.post('/api/pupils/create/', newPupil)
             .then(response =>  {
                setPupils([...pupils, response.data])
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

