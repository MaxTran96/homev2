import React from 'react';
import './Blog.css';

const Blog = ({date, content}) => {
    return(
        <div className="blogs">
            <h3>{date}</h3>
            <p>{content}</p>
        </div>
    );
}


export default Blog;