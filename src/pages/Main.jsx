import React from 'react';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const router = useNavigate()


    return (
  <div className='main_page'>
      <h1> Диагностика творческого потенциала</h1>
      <div className="image">
          <img src=''/>
      </div>
      <p>
      Диагностика творческого потенциала
      </p>
      <button onClick={() => router(`/about`, {replace: true})}>Узнать больше</button>
  </div>
    );
};

export default Main;