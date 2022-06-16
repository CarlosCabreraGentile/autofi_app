import React, { useEffect, useContext, useState, useCallback } from 'react';
import { PostsContext } from '../context/Posts/PostsContext';
import { PostCard } from './PostCard';

export const PostsList = () => {
  const postsContext = useContext(PostsContext);
  const [block, setBlock] = useState(10);
  const [displayPosts, setDisplayPosts] = useState([]);

  const filterPosts = (posts = []) => {
    if (posts.length > 0) {
      // just the first 10
      const arrayPosts = posts.slice(0, block);
      if (arrayPosts.length > 0) {
        return arrayPosts;
      } else {
        return [];
      }
    }
  };

  const fetchData = useCallback(() => {
    postsContext.getPosts();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const postsToSet = filterPosts(postsContext.posts, block);
    setDisplayPosts(postsToSet);
  }, [block, postsContext.posts]);


  const increaseBlock = () => {
    setBlock(block + 10)
  };

  return (
    <>
      <div>Post Lists</div>
      {displayPosts && displayPosts.length > 0 ? (
        displayPosts.map((post) => {
          return <PostCard key={post?.id} post={post} />;
        })
      ) : (
        <div>No posts</div>
      )}
      <button onClick={increaseBlock}>More Posts</button>
    </>
  );
};
