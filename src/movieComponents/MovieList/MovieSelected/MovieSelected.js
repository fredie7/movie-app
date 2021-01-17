import React from 'react';
import classes from './MovieSelected.module.css';

export const MovieSelected = (props) => {
    const nominatedMovie = props.nominatedMovie
    
    return (
        <>      
            {
                props.movies && props.movies.map(movie=> {
                    return (
                        <div className={classes.Selected} key={movie.imdbID}>
                            <div className={classes.Title}>{movie.Title}</div>
                            <div className={classes.Year}>{movie.Year}</div>
                            <button className={classes.Btn} 
                                disabled={nominatedMovie.find(film=> film.imdbID === movie.imdbID) ? true : false}
                                onClick={()=>props.addMovieClick(movie)}>
                                nominate
                            </button>
                        </div>
                    )
                })
            }
            
        </>
    )
}

export default MovieSelected