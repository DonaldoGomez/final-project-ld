import React, {useEffect} from 'react';
import video from '../../Assets/anime_header2.mp4';
import logo from '../../Assets/logo.png';
import './Header.css';

function Header(props){
   useEffect(()=>{
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh',`${vh}px`);
   });

   return (
      <header className="header">
         <nav className="nav">
            <img className="header-logo" src={logo} alt="logo"/>
            <div className="button-container">
               <button className="header-button">Anime</button>
               <button className="header-button">Manga</button>
               <button className="header-button">Movies</button>
               <button className="header-button">Contact us</button>
            </div>
         </nav>
         <div className="title-content">
            <h1 className="header-title">こんにちは！</h1>
            <h3 className="header-subtitle">ここに何を書くべきかわからなかったので、これを書きました</h3>
         </div>
         <video 
            title=""
            playsInline={true}
            muted="muted"
            autoPlay="autoplay"
            loop="loop"
            className="video-header" 
            src={video}/>
      </header>
   );
}

export default Header;