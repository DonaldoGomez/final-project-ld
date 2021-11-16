import React from 'react';
import axios from 'axios'

function MainContent(props){
   axios.get('https://api.jikan.moe/v3/search/anime?q=dragonball').then((response)=>{
        console.log(response);
   }).catch((error)=>{
        console.log(error); 
   });
    return (
        <p>This is the main content</p>
    );
}

export default MainContent;