import React, { useEffect, useContext } from 'react';
import { Context, ReducerType } from '../../store/Store'

import Movie from './Movie';
import AddMovie from './AddMovie';
import { getAllMovies } from '../../db/MoviesData';

import LoadingOverlay from 'react-loading-overlay';


const MovieList = () => {
    const [state, dispatch] = useContext(Context);
    const loading = state.firstLoad[ReducerType.MOVIE];
    useEffect(() => {
        if (loading) {
            getAllMovies().then(movies => {
                dispatch({
                    reducer: ReducerType.MOVIE,
                    type: 'SET_MOVIES',
                    payload: movies,
                });
                state.firstLoad[ReducerType.MOVIE] = false;
            });
        };
    }, [state.movies]);

    const list = state.movies.map(movie =>
        <Movie key={movie.title} {...movie} />
    );

    return (

        <LoadingOverlay
            active={loading}
            spinner
            text=''
        >

            <div style={{ background: '#bff5d4' }}>
                <AddMovie />
                <hr />
                <h1>Movies ({list ? list.length : 0})</h1>
                {list}
            </div>
        </LoadingOverlay>
    );
}

export default MovieList;