import React, { useEffect, useState } from 'react';
import './SingleAnimePage.css';

function SingleAnimePage(props){
  
  useEffect(()=>{
    console.log(props);
      //SI viene de otro lado pedir petición a la api, si viene de la página principal usar props. TAMBIÉN PARA EL BOTÓN DE REGRESAR!!!!!!!!!!!!!!!!

  },[]);
  return <h1>Success!!!</h1>
}

export default SingleAnimePage;