import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom'
import { PostsList } from '../posts/PostsList';
import { PostsContext } from '../context/Posts/PostsContext';

test('clicking the button calls the event handler', () => {
    const getPosts = jest.fn();
  const view = render(
    <PostsContext.Provider
      value={{getPosts}}
    >
      <PostsList />
    </PostsContext.Provider>
  );
  const button = view.container.querySelector('button');
  console.log(prettyDOM(button))
});
