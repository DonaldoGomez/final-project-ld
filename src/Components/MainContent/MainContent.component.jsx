import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import "./MainContent.css";
// import { SingleAnimePage } from '../../Components';
// import {
//      BrowserRouter as Router,
//      Routes,
//      Route,
//      NavLink,
// } from 'react-router-dom';

function MainContent(props) {

     const [response, setResponse] = useState();
     useEffect(() => {
          let url = `https://api.jikan.moe/v3/search/anime?q=${props.animeTitle}${props.type}${props.animeStatus}${props.rated}&genre=12&genre_exclude=1${props.startDate}${props.endDate}${props.score}${props.orderBy}${props.sort}${props.limit}`;
          console.log(url);
          // axios.get(`https://api.jikan.moe/v3/search/anime?q=${props.animeTitle}`).
          axios.get(url).then((item) => {
               if (props.status === 'idle' || props.status === 'loading') {
                    setResponse(item.data.results);
                    props.setStatus('complete');
               }
          }).catch((error) => {
               if (error === '503')
                    props.setStatus('unavailable');
               else if (error === '404')
                    props.setStatus('not-found');
               else
                    props.setStatus('error');
          });
     }, [props.status]);

     if (props.status === 'idle') {
          return <p>Search for an anime</p>
     }
     if (props.status === 'loading') {
          return <p>Loading</p>;
     }
     if (props.status === 'error') {
          return <p>So sorry something went wrong</p>
     }
     if (props.status === 'unavailable') {
          return <p>The server is unavailable :(</p>
     }
     if (props.status === 'not-found') {
          return <p>Content not found</p>
     }
     if (props.status === 'complete') {
          return (
               <Fragment>
                    <h1>Results</h1>
                    <section className="main-container block">
                         {/* <Routes>
                              {response.map((item) => {
                                   return (
                                        <Route path="/mal_id" exact render={(routerProps) => {
                                             return <SingleAnimePage title={item.title} image={item.image_url} {...routerProps} />
                                        }} />
                                   );
                              })};
                         </Routes> */}
                         {response.map((item) => {
                              return (
                                   <Fragment>
                                        <div className="card" key={item.mal_id}>
                                             <div className="card-header">
                                                  <h4 className="card-header-title"><b>{item.title}</b></h4>
                                             </div>
                                             <img className="card-img" src={item.image_url} alt={item.title} />
                                             <div className="card-footer">
                                                  <a className="card-footer-button" href={item.url}>Review</a>
                                             </div>
                                        </div>
                                   </Fragment>);
                              // return (<li key={index}>{item}</li>);
                         })}
                    </section>
                    
               </Fragment>
          );
          // console.log(response[1].mal_id);
     }

     return <p>Find your favorite animes</p>
}

export default MainContent;