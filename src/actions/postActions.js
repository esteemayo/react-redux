import { createPost, getPosts } from '../services/postService';
import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => async (dispatch) => {
    const { data: posts } = await getPosts();
    dispatch({
        type: FETCH_POSTS,
        payload: posts,
    });
};

export const newPost = (postData) => async (dispatch) => {
    const { data: post } = await createPost(postData);
    dispatch({
        type: NEW_POST,
        payload: post,
    });
};
