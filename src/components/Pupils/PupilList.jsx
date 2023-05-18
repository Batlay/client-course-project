import React from 'react'
import PupilItem from './PupilItem'

const PupilList = ({pupils, spec=false}) => {

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
                  {spec 
                    ?<tr>
                    <th></th>
                        <th>ФИО</th>
                        <th>Email</th>
                        <th>Посмотреть</th>
                    </tr>
                    :
                    <tr>
                    <th></th>
                        <th>ФИО</th>
                        <th>Email</th>
                        <th style={{ textAlign: 'center'}}>Форма</th>
                        <th>Посмотреть</th>
                    </tr>
                    }
                </thead>
          {pupils.map((pupil, index) => (
                <PupilItem  pupil={pupil} index={index} spec={spec} />
            ))}
                </table>
      </div>
    )
  }

export default PupilList
