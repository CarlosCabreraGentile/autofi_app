import React, { useReducer } from 'react';
import axios from 'axios';

import { PostsContext } from './PostsContext';
import PostsReducer from './PostsReducer';

export const PostState = ({ children }) => {
  const initialState = {
    posts: [],
    post: null,
  };

  const [state, dispatch] = useReducer(PostsReducer, initialState);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      dispatch({
        type: 'GET_POSTS',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        getPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
