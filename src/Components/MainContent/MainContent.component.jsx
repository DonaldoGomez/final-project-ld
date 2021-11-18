import React, {useState, Fragment} from 'react';
import axios from 'axios';
import "./MainContent.css";
function MainContent(props) {
   const [status, setStatus] = useState('idle');
   const [response, setResponse] = useState();
   // 'https://api.jikan.moe/v3/search/anime?q=dragonball'

   axios.get('https://api.jikan.moe/v3/search/anime?q=naruto').then((item) => {
      if (status === 'idle') {
         setStatus('loading');
         setResponse(item.data.results);
         setStatus('complete');
      }
   }).catch((error) => {
      console.log(error);
   });

   if (status === 'idle' || status === 'loading') {
      return <p>Loading</p>;
   }

   if (status === 'complete') {
      return (
         <Fragment>
          <h1>Results</h1>
          <section className="main-container block">
             {response.map((item) => {
                return (
                    <div className="card" key={item.mal_id}>
                         <div className="card-header">
                              <h4 className="card-header-title"><b>{item.title}</b></h4>
                         </div>
                         <img className="card-img" src={item.image_url} alt={item.title}/>
                         <div className="card-footer">
                              <a href={item.url}>Review</a>
                         </div>
                         {/* <h2 className="title">{item.title}</h2>
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
                                        <h5 className="date start-date">{item.start_date ? item.start_date.substr(0, 10) : '--'}</h5>
                                   </div>
                                   <div className="end-date-cont">
                                        <span>End date</span>
                                        <h5 className="date end-date">{item.end_date ? item.end_date.substr(0, 10) : '--'}</h5>
                                   </div>
                                   </div>
                                   <div className="extra-info">
                                   <a href={item.url}>Check Review</a>
                                   <h3 className="extra-score">{item.score}</h3>
                              </div> */}
                         {/* <div className="card-footer">
                         </div> */}
                   </div>);
                // return (<li key={index}>{item}</li>);
             })}
          </section>
         </Fragment>
      );
      // console.log(response[1].mal_id);
   }

   return <p>Error 404 :(</p>
}

export default MainContent;