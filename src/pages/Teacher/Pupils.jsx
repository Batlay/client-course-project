import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from "../../components/UI/Button/MyButton";
import MyModal from "../../components/UI/Modal/MyModal";
import axios from 'axios'
import PupilList from '../../components/Pupils/PupilList';
import PupilForm from '../../components/Pupils/PupilForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
            console.log(response.data)
        } 

        const addPupil = (newPupil) => {
            var userInfo = {
                userdata: userData,
                newPupil: newPupil
              }
            axios.post('/api/pupils/create/', userInfo)
             .then(response =>  {
                setPupils([...pupils, response.data])
                setModal(false)
                toast.success('Ученик успешно добавлен')
             })
             .catch((error) => {
                if (error.response) {
                    console.log(error.response.data[0]);
                    toast.error(error.response.data[0])
                  }
                else {
                    toast.error('Возникла ошибка')
                }  
             })
      }

 

    return (
        <Container>
        <Row>
        <MyModal visible={modal} setVisible={setModal}>
            <PupilForm create={addPupil} />
        </MyModal>
            <Col md={8} mt={3}>
            <MyButton data-testid='1' name='add' style={{marginTop: '20px', width: '25%', borderRadius: '5px' }} onClick={() => setModal(true)}>
            Добавить нового ученика
        </MyButton>
                <PupilList  pupils={pupils}/></Col>
            <Col>{pupils.classroom}</Col>
        </Row>
        <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
    </Container>
    )
}

export default Pupils

