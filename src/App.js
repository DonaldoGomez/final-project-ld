import './App.css';
import React, {useState, Fragment} from 'react';
import {
  MainContent,
  SearchBar,
} from './Components'
function App() {
  const [animeTitle,setAnimeTitle] = useState('');
  const [status,setStatus] = useState('idle');

  const [animeStatus,setAnimeStatus] = useState('');
  const [type,seType] = useState('');
  const [rated,setRated] = useState('');
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [score,setScore] = useState('');
  const [orderBy,setOrderBy] = useState('');
  const [sort,setSort] = useState('');
  const [limit,setLimit] = useState('');

  return (
    <Fragment>
      <SearchBar 
        setAnimeTitle={setAnimeTitle} 
        setStatus={setStatus}

        setAnimeStatus={setAnimeStatus}
        seType={seType}
        setRated={setRated}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setScore={setScore}
        setOrderBy={setOrderBy}
        setSort={setSort}
        setLimit={setLimit}
      />
      <MainContent 
        animeTitle={animeTitle} 
        setStatus={setStatus} 
        status={status}

        animeStatus={animeStatus}
        type={type}
        rated={rated}
        startDate={startDate}
        endDate={endDate}
        score={score}
        orderBy={orderBy}
        sort={sort}
        limit={limit}
      />
    </Fragment> 
  );
}

export default App;