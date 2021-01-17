import React, { useState, useEffect } from 'react';
import classes from './MovieList.module.css';
import MovieSelected from './MovieSelected/MovieSelected';
import MovieNominated from './MovieNominated/MovieNominated';
import SearchBar from '../SearchBar/SearchBar';
import MovieHeader from '../MovieHeader/MovieHeader'


const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    const [nominatedMovie, setNominatedMovie] = useState([]);
    // const [disable, setDisable] = useState(false)

    const getMovies = async(searchMovie)=> {
        const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=44274adc`;
        const response = await fetch(url)
        const responseData = await response.json()
        if (responseData.Search) {
            setMovies(responseData.Search)
        }
    }

    const saveMoviesToLocalstorage = movie => {
        localStorage.setItem('movies', JSON.stringify(movie))
    }

    const addMovie = (movie)=> {
        const nominationList = [...nominatedMovie, movie]
        if (nominationList.length <= 5) {
            setNominatedMovie(nominationList)
            saveMoviesToLocalstorage(nominationList)
        }
    }

    const showWarning = ()=> {
        if (nominatedMovie.length === 5) {
            const response = (
                <div className={classes.Warning}>
                    <h2>you cannot nominate any more movies</h2>
                </div>
            )
            return response
        }
    }    
    
    const deleteMovie = movie => {
        const deletedMovie = nominatedMovie.filter(film => film.imdbID !== movie.imdbID)
        setNominatedMovie(deletedMovie)
        saveMoviesToLocalstorage(deletedMovie)
    }

    useEffect(()=> {
        getMovies(searchMovie)
    }, [searchMovie]);

    useEffect(()=> {
        const movieList = JSON.parse(localStorage.getItem('movies'))
        setNominatedMovie(movieList)
    }, []);

    return (
        <>
            <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
            {showWarning()}
            <MovieHeader />
            <div className={classes.Container}>
                <div className={classes.Selected}>
                <MovieSelected 
                    movies={movies}
                    addMovieClick={addMovie} 
                    nominatedMovie={nominatedMovie} 
                    />
            </div>
            <div className={classes.Nominated}>
                <MovieNominated 
                    nominatedMovie={nominatedMovie} 
                    movies={movies}
                    handleDeleteClick = {deleteMovie}
                    />
            </div>
            </div>  
        </>
    )
}

export default MovieList;
