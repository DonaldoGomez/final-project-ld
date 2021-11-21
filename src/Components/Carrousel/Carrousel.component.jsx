import React from 'react';
import './Carrousel.css';

function Carrousel(props){

  return (
    <div class="slider_container" data-change-time-seconds="3">
      <div class="slider slider--show">
         <img src="https://marketing4ecommerce.net/wp-content/uploads/2018/10/tipos-de-im%C3%A1genes-1280x720.jpg" alt=""/>
      </div>
      <div class="slider">
         <img src="" alt=""/>
      </div>
      <div class="slider">
         <img src="" alt=""/>
      </div>
      <div class="slider">
         <img src="" alt=""/>
      </div>
   </div>
  );
}

export default Carrousel;