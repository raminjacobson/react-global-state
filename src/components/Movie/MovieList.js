import React, { useEffect, useContext } from 'react';
import { Context, ReducerType } from '../../store/Store'

import Movie from './Movie';
import AddMovie from './AddMovie';
import MoviesData from '../../db/MoviesData';


const MovieList = () => {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        dispatch({
            reducer: ReducerType.MOVIE,
            type: 'SET_MOVIES',
            payload: MoviesData
        });
    }, []);

    const list = state.movies.map(movie =>
        <Movie key={movie.title} title={movie.title} year={movie.year} />
    );

    return (
        <div style={{ background: '#bff5d4' }}>
            <AddMovie />
            <hr />
            <h1>Movies ({list ? list.length : 0})</h1>
            {list}
        </div>
    );
}

export default MovieList;