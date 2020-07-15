import React, { useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';
import { useForm } from 'react-hook-form';

const AddPost = () => {
    const { register, handleSubmit } = useForm();
    const [, dispatch] = useContext(Context);

    const onSubmit = (e, data) => {
        const postsData = { author: data.author, title: data.title };
        dispatch({
            reducer: ReducerType.POST,
            type: 'ADD_POST',
            payload: postsData
        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            Title: <input ref={register} type="text" name="title" />
            Auther: <input ref={register} type="text" name="author" />
            <button>Submit</button>
        </form>
    )
}

export default AddPost;