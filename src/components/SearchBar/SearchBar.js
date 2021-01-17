import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
    return (
        <div>
            <input type="text" 
                placeholder='search for a movie'
                className={classes.Search} 
                value={props.searchMovie}
                onChange={e=>props.setSearchMovie(e.target.value)} 
            />
        </div>
    )
}

export default SearchBar;