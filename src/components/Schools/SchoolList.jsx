import React from 'react'
import SchoolItem from './SchoolItem'

const SchoolList = ({schools}) => {

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
              { 
                <tr>
                    <th>Название школы</th>
                    <th>Посмотреть</th>
                </tr>
              }
            </thead>
            {schools.map((school, index) => (
                  <SchoolItem school={school} key={index} />
              ))}
        </table>
      </div>
    )
  }

export default SchoolList
