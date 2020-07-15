import React, { useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';

const Post = (props) => {
    const [, dispatch] = useContext(Context);

    const handleRemove = (id) => {
        dispatch({
            reducer: ReducerType.POST,
            type: 'REMOVE_POST',
            payload: id
        });
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <br />{props.author}
            <br />
            <button onClick={handleRemove.bind(null, props.id)}>Remove</button>
            <hr></hr>
        </div>
    )
}
export default Post;