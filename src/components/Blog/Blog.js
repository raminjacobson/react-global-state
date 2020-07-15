import React, { useEffect, useContext } from 'react';

// import axios from "../../api/axios";
import { Context, ReducerType } from '../../store/Store'
import Post from '../Post/Post';
import AddPost from '../Post/AddPost';
import './Blog.css';
import PostsData from '../../db/PostsData';

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

        dispatch({
            reducer: ReducerType.POST,
            type: 'SET_POSTS',
            payload: PostsData
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
        <div style={{ background: '#f5bff2' }}>
            <AddPost />
            <h1>Posts ({posts ? posts.length : 0})</h1>
            {posts}
        </div>
    );
};

export default Blog;
