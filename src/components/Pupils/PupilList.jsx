import React from 'react'
import PupilItem from './PupilItem'

const PupilList = ({pupils, spec}) => {

    if (!pupils.length) {
      return (
        <h1 style={{textAlign: 'center'}}>
              Список пуст. Добавьте ученика для отображения его в списке класса
            </h1>
      )
    }


    return (
      <div>
           <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>ФИО</th>
                        <th>Email</th>
                        <th>Посмотреть</th>
                        <th>Форма</th>
                    </tr>
                </thead>
          {pupils.map((pupil, index) => (
                <PupilItem pupil={pupil} spec={spec} />
            ))}
                </table>
      </div>
    )
  }

export default PupilList
