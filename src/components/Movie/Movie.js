import React, { useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';

const Movie = (props) => {
    const [, dispatch] = useContext(Context);

    const handleRemove = (title) => {
        dispatch({
            reducer: ReducerType.MOVIE,
            type: 'REMOVE_MOVIE',
            payload: title
        });
    }

    return (
        <div>
            <button onClick={handleRemove.bind(null, props.title)}>Remove</button>
            {`  ${props.title} (${props.year})`}
            <hr></hr>
        </div>
    )
}
export default Movie;