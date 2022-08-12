import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <article className='blog-container'>
                <h2>Context API</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </article>
            <article className='blog-container'>
                <h2>Semantic Tag</h2>
                <p>Semantic tag clearly defines its content. For example (form, table, article, header, footer) etc. Semantic tag  much easier to read. This is probably the first thing you will notice when looking at the first of code using semantic elements. As a programmer you can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes your job.</p>
            </article>
            <article className='blog-container'>
                <h2>Inline-Block Element</h2>
                <p>Inline-block it's formatted just like the inline element, where it doesn't start on a new line. But, you can set width and height values. Displays an element as an inline-level block container. You can set height and width values. </p>
            </article>
        </div>
    );
};

export default Blogs;