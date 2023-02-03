import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import axios from 'axios';
import { useState } from 'react';
import MyModal from '../UI/Modal/MyModal';
import SchoolForm from './SchoolForm';

const SchoolItem = ({school, admin = false}) => {
    const [modal, setModal] = useState(false)
    const [id, setId] = useState(false)
    const router = useNavigate()
    const submit = (id, name) => {
        confirmAlert({
          title: 'Подтвердите действие',
          message: `Вы уверены, что хотите удалить школу ${name}?`,
          buttons: [
            {
              label: 'Да',
              onClick: async () => {
                await axios.delete(`/api/schools/delete/${id}`)
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

      const editSchool = (newSchool) => {
        axios.put(`/api/schools/edit/${id}`, newSchool)
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
            <SchoolForm create={editSchool} />
        </MyModal>
        { admin ?
        <tbody>
            <tr>
                <td>{school.name}</td>
                <td>  
                    <MyButton onClick={() => router(`/administrator/schools/${school.id}`, {replace: true})}>
                        Посмотреть
                    </MyButton>
              </td>
              <td>  
                    <MyButton onClick={() => {setModal(true)
                    setId(school.id)
                    }}>
                        Изменить
                    </MyButton>
              </td>
              <td>  
                    <MyButton onClick={() => submit(school.id, school.name)}>
                        Удалить
                    </MyButton>
              </td>
            </tr>
        </tbody>
        :
        <tbody>
        <tr>
            <td>{school.name}</td>
            <td>  <MyButton onClick={() => router(`/schools/${school.id}`, {replace: true})}>
              Посмотреть
          </MyButton></td>
        </tr>
    </tbody>
}
            </>
    )
}

export default SchoolItem
