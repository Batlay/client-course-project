import React from 'react'
import ClassroomItem from './ClassroomItem'

const ClassroomList = ({classrooms, admin=false}) => {

    if (!classrooms.length) {
      return (
        <h1 style={{textAlign: 'center'}}>
              Список классов пуст. 
            </h1>
      )
    }


    return (
      <div>
           <table className="table table-hover">
                <thead className="thead-dark">
                { admin ?
                    <tr>
                        <th>Название класса</th>
                        <th>Посмотреть</th>
                        <th>Изменить</th>
                        <th>Удалить</th>
                    </tr>
                    :
                    <tr>
                        <th>Название класса</th>
                        <th>Посмотреть</th>
                    </tr>
                  }
                </thead>
          {classrooms.map((classroom, index) => (
                <ClassroomItem classroom={classroom} admin={admin}/>
            ))}
                </table>
      </div>
    )
  }

export default ClassroomList
