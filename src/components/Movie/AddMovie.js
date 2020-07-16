import React, { useState, useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';
import { addMovie } from '../../db/MoviesData';

const AddMovie = () => {
    const [, dispatch] = useContext(Context);
    const [title, setMovie] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            return;
        }

        const movie = { title: title, year: year };
        addMovie(movie)
            .then(result => {
                dispatch({
                    reducer: ReducerType.MOVIE,
                    type: 'ADD_MOVIE',
                    payload: Object.assign(movie, { id: result.id })
                });
                setMovie("");
                setYear("");
            })
    }
    return (
        <>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                Title: <input type="text" value={title} onChange={e => setMovie(e.target.value)} />
                Year: <input type="text" value={year} onChange={e => setYear(e.target.value)} />
                <button>Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie;