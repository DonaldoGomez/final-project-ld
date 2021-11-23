import React, { useEffect , useState} from 'react';
import logo from '../../Assets/logo.png';
import './SingleAnimePage.css';
import 'boxicons/css/boxicons.min.css';

function SingleAnimePage(props){
  const [pageStatus,setPageStatus] = useState(false);

  useEffect(()=>{
    if(props.location.state)
      setPageStatus(true);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
    //SI viene de otro lado pedir petición a la api, si viene de la página principal usar props. TAMBIÉN PARA EL BOTÓN DE REGRESAR!!!!!!!!!!!!!!!!  
  },[]);

  const goBackwards = ()=>{ 
    props.setStatus('loading');
    props.history.goBack();
  }

  if(pageStatus){
    return (
      <main className="single-page-main">
          <div className="single-img-container">
            <img className="single-img" src={props.location.state.image_url ? props.location.state.image_url : ""} alt={props.location.state.title}/>
          </div>
          <section className="single-info-container">
            <img className="single-logo" src={logo} alt="logo"/>
            <div className="title-container">
              <h1 className="single-title">{props.location.state.title ? props.location.state.title : "--"}</h1>
              <div className="single-airing" style={{
                backgroundColor: props.location.state.airing? "#0add08" : "#ed1f28",
                animationName: props.location.state.airing? "onAir" : "",
              }}></div>
            </div>
            <div className="single-statistics-container">
              <h3 className="single-statistics-item">{props.location.state.rated ? `Rate: ${props.location.state.rated} ` : "Rate: --"}</h3> 
              <h3 className="single-statistics-item">{props.location.state.type ? `Type: ${props.location.state.type}` : "Type: --"} </h3>
              <h3 className="single-statistics-item">{props.location.state.episodes ? `Episodes: ${props.location.state.episodes}`:"Episodes: -- "}</h3>
            </div>
            <div className="single-date-container">
              <h3 className="">{props.location.state.start_date ? `Start Date: ${props.location.state.start_date.slice(0,10)}`:"Start Date: --"}</h3>
              <h3 className="">{props.location.state.end_date ? `End Date: ${props.location.state.end_date.slice(0,10)}`:"End Date: --"}</h3>
            </div>
            <div className="single-text-container">
              <h2>Synopsys</h2>
              <p className="single-text">{props.location.state.synopsis ? `${props.location.state.synopsis}`: "--"}</p>
            </div>
            <div className="score-container">
              <h1 className="score-title">Score</h1>
              <h1 className="score-score" style={{
                color: props.location.state.score > 5 ? "#228B22" : "#B40803",
              }}>{props.location.state.score ? `${props.location.state.score}` : "--"}</h1>
            </div>
          </section>
          <button className="back-button" onClick={goBackwards}><i class='bx bx-left-arrow-alt'></i></button>
      </main>
    );
  }
  return <h1>Unauthorized access</h1>
}

export default SingleAnimePage;