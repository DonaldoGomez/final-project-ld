import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import "./MainContent.css";
import error from "../../Assets/error.png"

function MainContent(props) {
   const [response, setResponse] = useState();
   // let myStorage =  localStorage;

   useEffect(() => {
      let url = `https://api.jikan.moe/v3/search/anime?q=${props.animeTitle}${props.type}${props.animeStatus}${props.rated}&genre=12&genre_exclude=1${props.startDate}${props.endDate}${props.score}${props.orderBy}${props.sort}${props.limit}`;
      // axios.get(`https://api.jikan.moe/v3/search/anime?q=${props.animeTitle}`).
      axios.get(url).then((item) => {
         if (props.status === 'idle' || props.status === 'loading') {
          setResponse(item.data.results);
         //  myStorage.setItem('backUp',JSON.stringify(item.data.results));
          console.log(item);
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

   const saveURL = (mal_id,title,image_url,airing,end_date,rated,score,start_date,synopsis,type,episodes)=>{
      props.history.push({
         pathname:`/${mal_id}`,
         state:{
            title,
            image_url,
            airing,
            end_date,
            rated,
            score,
            start_date,
            synopsis,
            type,
            episodes  
         }
      });
   }

   if (props.status === 'idle') {
      return <p>Search for an anime</p>
   }
   if (props.status === 'loading') {
      return ( 
         <div className="loading">
            <span className="loading-icon">待つ</span>
            <h2 className="loading-text">Loading<span className="point"> .</span><span className="point"> .</span><span className="point"> .</span></h2>
         </div>
      );
   }
   if (props.status === 'error') {
      return (
            <div className="error">
               <img className="error-img" src={error} alt={"error"}/>
               <h2 className="error-text">There was an error try it again!</h2>
            </div>
         );
   }
   if (props.status === 'unavailable') {
      return <p>The server is unavailable :(</p>
   }
   if (props.status === 'not-found') {
      return <p>Content not found</p>
   }
   if (props.status === 'complete') {
      // let backUp = JSON.parse(myStorage.getItem('backUp'));
      // if(!response)
      //    setResponse(backUp);
      if(!response){
         <h2>No results :(</h2>
      }
      return (
         <Fragment>
          <main className="main-container block">
             { 
             response.map((item) => {
                return (
                    <div className="card" key={item.mal_id}>
                       <div className="card-header">
                          <h4 className="card-header-title"><b>{item.title}</b></h4>
                       </div>
                       <img className="card-img" src={item.image_url} alt={item.title} />
                       <div className="card-footer">
                          <button key={item.mal_id} id={item.title}className="card-footer-button" onClick={()=>{
                             console.log(item);
                             saveURL(item.mal_id,
                              item.title,
                              item.image_url,
                              item.airing,
                              item.end_date,
                              item.rated,
                              item.score,
                              item.start_date,
                              item.synopsis,
                              item.type,
                              item.episodes);
                          }}>Review</button>
                       </div>
                    </div>);
             })}
          </main>
         </Fragment>
      );
   }

   return <p>Find your favorite animes</p>
}

export default MainContent;