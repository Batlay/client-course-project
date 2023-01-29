import React from 'react'
import TestItem from './TestItem'

const TestList = ({tests}) => {

    if (!tests.length) {
      return (
        <h1 style={{textAlign: 'center'}}>
              Список пуст. 
            </h1>
      )
    }


    return (
      <div>
           <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Название теста</th>
                        <th style={{whiteSpace: 'nowrap'}}>Время выполнения</th>
                        <th></th>
                    </tr>
                </thead>
          {tests.map((test, index) => (
                <TestItem test={test} />
            ))}
                </table>
      </div>
    )
  }

export default TestList
