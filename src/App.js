import './App.css';
import React, { Fragment, useState } from 'react';
import {
  MainContent, SearchBar, 
} from './Components'

function App() {
  const [animeTitle, setAnimeTitle] = useState('');
  const [status, setStatus] = useState('idle');
  return (
    <Fragment>
      <SearchBar setAnimeTitle={setAnimeTitle} setStatus={setStatus} />
      <MainContent animeTitle={animeTitle} setStatus={setStatus} status={status} />
    </Fragment>
  );
}

export default App;