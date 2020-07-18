import React, { useEffect, useContext } from 'react';
import { Context, ReducerType } from '../../store/Store';

import Post from './Post';
import AddPost from './AddPost';
import PostsData from '../../db/PostsData';


const PostList = () => {
    const [state, dispatch] = useContext(Context);
    const loading = state.firstLoad[ReducerType.POST];

    useEffect(() => {
        if (loading) {
            dispatch({
                reducer: ReducerType.POST,
                type: 'SET_POSTS',
                payload: PostsData
            });
            state.firstLoad[ReducerType.POST] = false;
        }
    }, [state.posts]);

    const list = state.posts.map(post =>
        <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author} />
    );

    return (
        <div style={{ background: '#ff9cfa' }}>
            <AddPost />
            <hr />
            <h1>Posts ({list ? list.length : 0})</h1>
            {list}
        </div>
    );
}

export default PostList;