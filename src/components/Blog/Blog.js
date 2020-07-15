import React, { useEffect, useContext } from 'react';

// import axios from "../../api/axios";
import { Context, ReducerType } from '../../store/Store'
import Post from '../Post/Post';
import AddPost from '../Post/AddPost';
import './Blog.css';

const Blog = () => {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        // axios.get('/posts.json')
        //     .then(response => {
        //         const postsData = response.data;
        //         dispatch({type: 'SET_POSTS', payload: postsData});
        //     })
        //     .catch(error => {
        //         dispatch({type: 'SET_ERROR', payload: error});
        //     });

        const postsData = [
            { id: 1, author: 'Author 1', title: 'Title 1' },
            { id: 2, author: 'Author 2', title: 'Title 2' },
            { id: 3, author: 'Author 3', title: 'Title 3' },
        ];
        dispatch({
            reducer: ReducerType.POST,
            type: 'SET_POSTS',
            payload: postsData
        });
    }, []);

    let posts = <p>Loading...</p>;
    if (state.error) {
        posts = <p>Something went wrong: <span>{state.error}</span></p>;
    } else if (state.posts) {
        posts = state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                />
            );
        });
    }

    return (
        <>
            <AddPost />
            {posts}
        </>
    );
};

export default Blog;
