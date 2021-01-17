import React from 'react';
import classes from './MovieHeader.module.css';

const MovieHeader = () => {
    return (
        <>
          <div className={classes.Container}>
                <div className={classes.Selected}>
                    selected movies
                </div>
                <div className={classes.Nominated}>
                    nominated movies
                </div>
          </div>  
        </>
    )
}

export default MovieHeader;