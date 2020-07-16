import React, { useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';
import { deleteMovie } from '../../db/MoviesData';

const Movie = (props) => {
    const [, dispatch] = useContext(Context);

    async function handleRemove(id) {
        deleteMovie(id)
            .then(() => {
                dispatch({
                    reducer: ReducerType.MOVIE,
                    type: 'REMOVE_MOVIE',
                    payload: id
                });
            })
    }

    return (
        <div>
            <button onClick={handleRemove.bind(null, props._id)}>Remove</button>
            {`  ${props.title} (${props.year})`} - {props._id}
            <hr></hr>
        </div>
    )
}
export default Movie;