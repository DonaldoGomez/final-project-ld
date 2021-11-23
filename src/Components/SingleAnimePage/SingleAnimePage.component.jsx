import React, { useEffect } from 'react';
import './SingleAnimePage.css';

function SingleAnimePage(props){
  
  useEffect(()=>{
    console.log(props);
      //SI viene de otro lado pedir petición a la api, si viene de la página principal usar props. TAMBIÉN PARA EL BOTÓN DE REGRESAR!!!!!!!!!!!!!!!!
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);     
  },[]);
  return (
    <main className="single-page-main">
      <div className="single-image-container"/>      
    </main>
  );
}

export default SingleAnimePage;