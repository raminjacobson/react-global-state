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
            <button onClick={handleRemove.bind(null, props.id)}>Remove</button>
            &nbsp;
            <b>{props.title}</b> - by: {props.author}
            <hr />
        </div>
    )
}
export default Post;