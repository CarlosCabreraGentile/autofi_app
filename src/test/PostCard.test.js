import React from 'react';
import '@testing-library/jest-dom';     
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom'
import { PostCard } from '../posts/PostCard';

test('render the content', () => {
    const post = {
        id: 1,
        title: 'Test',
        body: 'Test post body'
    };

    const component = render(<PostCard post={post}/>);

    // option 1
    component.getByText('Test');
    // component.debug(); // show the rendered component

    // to search something specific
    const div = component.container.querySelector('div');
    console.log(prettyDOM(div))

    // option 2
    // expect(component.container).toHaveTextContent(post.title)
});