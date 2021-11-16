import './App.css';
import React,{Fragment,useState} from 'react';
import axios from 'axios'
import {
  MainContent,
} from './Components'

function App() {
  const [status,setStatus] = useState('idle');
   const [response,setResponse] = useState();
   // 'https://api.jikan.moe/v3/search/anime?q=dragonball'
   
   axios.get('https://api.jikan.moe/v3/search/anime?q=dragonball').then((item)=>{
       if(status === 'idle'){
          setStatus('loading');
          setResponse(item.data.results);
          setStatus('complete');
       }
   }).catch((error)=>{
      console.log(error);
   });

   if(status === 'idle' || status === 'loading'){
       return <p>Loading</p>;
   }

   if(status === 'complete'){
      console.log(response);
      return(
         <Fragment>
            <h1>Results</h1>
            <section className="main-container">
            {response.map((item)=>{
               return (
                  <div key={item.mal_id}style={{
                     border: "2px solid #450",
                  }}>
                     <img className="card-img" src={item.image_url}/>
                     <h2 className="title">{item.title}</h2>
                     <div className="header-info">
                        <h6 className="header-info-item">{item.rated}</h6>
                        <h6 className="header-info-item">{item.episodes}</h6>
                        <h6 className="header-info-item">{item.type}</h6>
                     </div>
                     <div className="summary-container">
                        <div className="summary-header">
                           <h4 className="summary-title">Synopsis</h4>
                           <div className="airing-container">
                              <h5 className="airing-title">Airing </h5>
                              <div className="airing-spotlight">{item.airing}</div>
                           </div>
                        </div>
                        <div className="summary">
                           <p>{item.synopsis}</p>
                        </div>
                     </div>
                     <div className="date-container">
                        <div className="start-date-cont">
                           <span>Start date</span>
                           <h5 className="date start-date">{item.start_date ? item.start_date.substr(0,10): '--'}</h5>
                        </div>
                        <div className="end-date-cont">
                           <span>End date</span>
                           <h5 className="date end-date">{item.end_date ? item.end_date.substr(0,10):'--'}</h5>
                        </div>
                     </div>
                     <div className="extra-info">
                        <a href={item.url}>Check Review</a>
                        <h3 className="extra-score">{item.score}</h3>
                     </div>
                  </div>
               );
               // return (<li key={index}>{item}</li>);
            })}
            </section>
         </Fragment>
      );
      // console.log(response[1].mal_id);
   }

   return <p>Error 404 :(</p>
}

export default App;