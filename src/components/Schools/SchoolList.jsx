import React from 'react'
import SchoolItem from './SchoolItem'

const SchoolList = ({schools, admin = false}) => {

    if (!schools.length) {
      return (
        <h1 style={{textAlign: 'center'}}>
              Список школ пуст.
            </h1>
      )
    }



    return (
      <div>
           <table className="table table-hover">
                <thead className="thead-dark">
                  { admin ?
                    <tr>
                        <th>Название школы</th>
                        <th>Посмотреть</th>
                        <th>Изменить</th>
                        <th>Удалить</th>
                    </tr>
                    :
                    <tr>
                        <th>Название школы</th>
                        <th>Посмотреть</th>
                    </tr>
                  }
                </thead>
          {schools.map((school, index) => (
                <SchoolItem school={school} admin={admin} />
            ))}
                </table>
      </div>
    )
  }

export default SchoolList
