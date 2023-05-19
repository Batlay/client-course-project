import React from 'react'
import ClassroomItem from './ClassroomItem'

const ClassroomList = ({classrooms}) => {

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
                    <tr>
                        <th>Название класса</th>
                        <th>Посмотреть</th>
                    </tr>           
                </thead>
              {classrooms.map((classroom, index) => (
                  <ClassroomItem classroom={classroom} key={index} />
              ))}
          </table>
      </div>
    )
  }

export default ClassroomList
