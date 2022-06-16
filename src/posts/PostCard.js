import React from 'react';

export const PostCard = ({ post }) => {

  return (
    <>
      <p>Post</p>
      <div>{post?.id}</div>
      <div>{post?.title}</div>
      <div>{post?.body}</div>
    </>
  );
};
