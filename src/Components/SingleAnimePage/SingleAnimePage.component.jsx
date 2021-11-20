import React from 'react';
import './SingleAnimePage.css'

function SingleAnimePage(props){
  return <h1>{props.match.params.title}</h1>
}

export default SingleAnimePage;