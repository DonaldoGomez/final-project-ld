import React, { useEffect, useRef } from 'react';
import './SearchBar.css';
import 'boxicons/css/boxicons.min.css'

function SearchBar(props) {
  const titleInputRef = useRef();
  const status = useRef();
  const type = useRef();
  const rated = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const score = useRef();
  const orderBy = useRef();
  const sort = useRef();
  const limit = useRef();
  const filter = useRef();
  const trashIcon = useRef();
  const arrowButton = useRef();
  const x = useRef();
  const filterSection = useRef();
  useEffect(()=>{
    x.current.style.display='none';
    filter.current.style.height='0';
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    cleanStates();
    props.setStatus('loading');
    if (status.current.value)
      props.setAnimeStatus(`&status=${status.current.value}`);

    if (type.current.value)
      props.seType(`&type=${type.current.value}`);

    if (rated.current.value)
      props.setRated(`&rated=${rated.current.value}`);

    if (startDate.current.value)
      props.setStartDate(`&start_date=${startDate.current.value}`);

    if (endDate.current.value)
      props.setEndDate(`&end_date=${endDate.current.value}`);

    if (score.current.value)
      props.setScore(`score=${score.current.value}`);

    if (orderBy.current.value) {
      props.setOrderBy(`&order_by=${orderBy.current.value}`);
      props.setSort(`&sort=${sort.current.value}`);
    }

    if (limit.current.value)
      props.setLimit(`&limit=${limit.current.value}`);

    props.setAnimeTitle(titleInputRef.current.value.replace(/\s+/g, ''));
  }

  const cleanInput = (e) => {
    e.preventDefault();
    titleInputRef.current.value = '';
    x.current.style.display='none';
  }

  const cleanFilter = (e) => {
    e.preventDefault();
    status.current.value = '';
    type.current.value = '';
    rated.current.value = '';
    startDate.current.value = '';
    endDate.current.value = '';
    score.current.value = '';
    orderBy.current.value = '';
    sort.current.value = 'asc';
    limit.current.value = '';
    cleanStates();
  }

  const cleanStates = () => {
    props.setAnimeStatus('');
    props.seType('');
    props.setRated('');
    props.setStartDate('');
    props.setEndDate('');
    props.setScore('');
    props.setOrderBy('');
    props.setSort('');
    props.setLimit('');
  }

  const onInputTitle = ()=>{
    if(titleInputRef.current.value)
      x.current.style.display='block';
    else
      x.current.style.display='none';
  }

  const showFilters = ()=>{
    let height = 0;
    if(filter.current.style.height === '0px'){
      arrowButton.current.classList.add('show-form-button--spine');
      filter.current.style.padding = '1rem';
      height = filter.current.scrollHeight;
      filter.current.style.height = `${height+16}px`;
      filterSection.current.style.visibility = 'visible';
      trashIcon.current.style.visibility= 'visible';
    }
    else{
      arrowButton.current.classList.remove('show-form-button--spine');
      filterSection.current.style.visibility = 'hidden';
      trashIcon.current.style.visibility= 'hidden';
      filter.current.style.height = '0px';
      filter.current.style.padding = '0px';
    }
  }

  return (
    <section className="form-block block">
      <form onSubmit={handleSubmit}>
        <fieldset className="searchbar-fieldset form-fieldset">
          <section className="search-bar-section">
            <input className="search-bar"
              type="text"
              id="anime-title"
              placeholder="Search for an anime"
              autoComplete="off"
              ref={titleInputRef}
              onInput={onInputTitle}
            />
            <button onClick={cleanInput} className="clean-button-cont"><i className='bx bx-x clean-button' ref={x}></i></button>
          </section>
          <button type="submit" className="searchBar-search-button"><i className='bx bx-search-alt-2 search-button'></i></button>
        </fieldset>

        <fieldset className="filter-fieldset form-fieldset" ref={filter}>
          <section className="filter-fieldset-section" ref={filterSection}>
            <div className="form-fieldset-input">
              <label htmlFor="type">Type</label>
              <select id="type" name="type" ref={type}>
                <option defaultValue value="">Select</option>
                <option value="tv">Tv</option>
                <option value="ova">Ova</option>
                <option value="movie">Movie</option>
                <option value="ona">Ona</option>
                <option value="music">Music</option>
              </select>
            </div>

            <div className="form-fieldset-input">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" ref={status}>
                <option defaultValue value="">Select</option>
                <option value="airing">Airing</option>
                <option value="finished">Finished</option>
                <option value="complete">Complete</option>
                <option value="toBeAired">To Be Aired</option>
                <option value="notYetAired">Not Yet Aired</option>
              </select>
            </div>
            
            <div className="form-fieldset-input">
              <label htmlFor="rated">Rated</label>
              <select id="rated" name="rated" ref={rated}>
                <option value="">Rated</option>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg13">PG13</option>
                <option value="r17">R17</option>
              </select>
            </div>

            <div className="form-fieldset-input">
              <label htmlFor="start-date">Start Date</label>
              <input id="start-date" type="date" ref={startDate} />
            </div>

            <div className="form-fieldset-input">
              <label htmlFor="end-date">End Date</label>
              <input id="end-date" type="date" ref={endDate} />
            </div>

            <div className="form-fieldset-input">
              <label htmlFor="score">Score</label>
              <input id="score" type="number" step="any" min="0" max="10" ref={score} />
            </div>

            <div className="form-fieldset-input">
              <label htmlFor="order-by">Order By</label>
              <select id="order-by" name="order-by" ref={orderBy}>
                <option defaultValue value="">Select</option>
                <option value="start_date">Start Date</option>
                <option value="end_date">End Date</option>
                <option value="score">Score</option>
                <option value="type">Type</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="form-fieldset-input">
              <label htmlFor="sort">Sort</label>
              <select id="sort" name="sort" ref={sort}>
                <option defaultValue value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className="form-fieldset-input">
              <label htmlFor="limit">Limit</label>
              <select id="limit" name="limit" ref={limit}>
                <option defaultValue value="">All</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </div>
          </section>
          <div className="trash-icon-cont">
            <button onClick={cleanFilter} className="trash-button" ref={trashIcon} >
              <i className='bx bx-trash trash-icon'></i>
            </button>
          </div>
        </fieldset>
      </form>
      <button className="show-form-button" onClick={showFilters} ref={arrowButton}><i className='bx bxs-chevron-down chevron'></i></button>
    </section>
  );
}

export default SearchBar;