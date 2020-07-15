import React, { useState, useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';


const AddMovie = () => {
    const [, dispatch] = useContext(Context);
    const [movie, setMovie] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!movie) {
            return;
        }
        dispatch({
            reducer: ReducerType.MOVIE,
            type: 'ADD_MOVIE',
            payload: { title: movie, year: year }
        });

        setMovie("");
        setYear("");
    }
    return (
        <>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                Title: <input type="text" value={movie} onChange={e => setMovie(e.target.value)} />
                Year: <input type="text" value={year} onChange={e => setYear(e.target.value)} />
                <button>Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie;