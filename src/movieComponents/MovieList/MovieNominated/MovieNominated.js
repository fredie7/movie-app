import React from 'react';
import classes from './MovieNominated.module.css';

export const MovieNominated = (props) => {
    return (
        <>
            {
                props.nominatedMovie && props.nominatedMovie.map(movie=> {
                    return (
                        <div className={classes.Selected} key={movie.imdbID}>
                            <div className={classes.Selected}>
                                <div className={classes.Title}>{movie.Title}</div>
                                <button className={classes.Btn} 
                                    onClick={()=>props.handleDeleteClick(movie)}>
                                    delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MovieNominated
