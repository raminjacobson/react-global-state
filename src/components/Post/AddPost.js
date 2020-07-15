import React, { useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';
import { useForm } from 'react-hook-form';

const AddPost = () => {
    const { register, handleSubmit } = useForm();
    const [, dispatch] = useContext(Context);

    const onSubmit = ({ author, title }) => {
        const postsData = { author, title };
        dispatch({
            reducer: ReducerType.POST,
            type: 'ADD_POST',
            payload: postsData
        });
    }
    return (
        <>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                Title: <input ref={register} type="text" name="title" />
                Auther: <input ref={register} type="text" name="author" />
                <button>Add </button>
            </form>
            <hr />
        </>
    )
}

export default AddPost;