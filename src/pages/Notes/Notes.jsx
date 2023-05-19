import React, {useState, useEffect} from 'react'
import NotesList from '../../components/Notes/NotesList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from "../../components/UI/Modal/MyModal";
import NoteForm from '../../components/Notes/NoteForm';
import axios from 'axios'
import PupilNotes from '../../components/Pupils/PupilNotes';


const Notes = () => {
        const [notes, setNotes] = useState([])
        const [pupils, setPupils] = useState([])
        const [modal, setModal] = useState(false)
        const userData = JSON.parse(localStorage.getItem('user'))
        const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'

        useEffect(() => {
            getNotes()
            getPupils()
        }, [])
        
        const getNotes = async () => {
            const response = await axios.post(`${rootUrl}/api/notes/`, userData )
            setNotes(response.data)
        }

        const getPupils = async () => {
            const response = await axios.post(`${rootUrl}/api/pupils/`, userData )
            setPupils(response.data)
        }

        const createNote = (newNote) => {
            axios.post(`${rootUrl}/api/notes/create/`, newNote)
             .then(response =>  {
                setNotes([...notes, response.data])
                setModal(false)
             });
        }


        return (
        <Container>
            <Row>
                <MyModal visible={modal} setVisible={setModal}>
                    <NoteForm create={createNote} />
                </MyModal>
                <Col md={7}>
                    <NotesList notes={notes} />
                </Col>
                <Col md={5}>
                    <h3>Поиск заметок по ученику</h3>
                    <PupilNotes pupils={pupils}  />
                </Col>
            </Row>
        </Container>
        )
}


export default Notes
