import React, { useRef } from 'react';
import './SearchBar.css'

function SearchBar(props) {
    const titleInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setStatus('loading');
        props.setAnimeTitle(titleInputRef.current.value.replace(/\s+/g, ''));
    }

    const cleanForm = (e) => {
        e.preventDefault();
        titleInputRef.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="anime-title">Search anime</label>
            <input
                type="text"
                id="anime-title"
                ref={titleInputRef}
            />
            <button onClick={cleanForm}>Clean</button>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;