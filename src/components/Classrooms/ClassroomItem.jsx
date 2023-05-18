import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import axios from 'axios';
import { useState } from 'react';
import MyModal from '../UI/Modal/MyModal';
import SchoolForm from '../Schools/SchoolForm';
import ClassroomForm from './ClassroomForm';
import { useParams } from 'react-router-dom';

const ClassroomItem = ({classroom, admin = false}) => {
    const params = useParams()
    const [modal, setModal] = useState(false)
    const [id, setId] = useState(false)
    const router = useNavigate()
    const submit = (id, name) => {
        confirmAlert({
          title: 'Подтвердите действие',
          message: `Вы уверены, что хотите удалить класс ${name}?`,
          buttons: [
            {
              label: 'Да',
              onClick: async () => {
                await axios.delete(`/api/classrooms/delete/${params.id}&${id}`)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    }
                })}
            },
            {
              label: 'Нет',
              onClick:  () => {}
            }
          ]
        })
      };

      const editClassroom = (newClassroom) => {
        axios.put(`/api/classrooms/edit/${params.id}&${id}`, newClassroom)
         .then(response =>  {
            console.log(response.data)
            setModal(false)
         })
         .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
              }
         })
        }

    return (
        <>
        <MyModal visible={modal} setVisible={setModal}>
            <ClassroomForm create={editClassroom} />
        </MyModal>
        { admin ?
         <tbody>
         <tr>
             <td>{classroom.name}</td>
             <td>  
                 <MyButton onClick={() => router(`/administrator/classrooms/${classroom.id}`, {replace: true})}>
                     Посмотреть
                 </MyButton>
           </td>
           <td>  
                 <MyButton onClick={() => {setModal(true)
                 setId(classroom.id)
                 }}>
                     Изменить
                 </MyButton>
           </td>
           <td>  
                 <MyButton onClick={() => submit(classroom.id, classroom.name)}>
                     Удалить
                 </MyButton>
           </td>
         </tr>
     </tbody>
        :
        <tbody>
            <tr>
                <td>{classroom.name}</td>
                <td>  <MyButton style={{borderRadius: '5px'}}  onClick={() => router(`/classrooms/${classroom.id}`, {replace: true})}>
                  Посмотреть
              </MyButton></td>
            </tr>
        </tbody>}
            </>
    )
}

export default ClassroomItem
