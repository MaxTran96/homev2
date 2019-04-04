import React from 'react';
import Blog from './Blog.js';
import './BlogList.css';

const BlogList = ({ Blogfolio }) => {

  return (
    
    <div className="blogList">
      
      <p>Conclusion: Got the job offer at Amazon after solving 500~ Leetcode questions both in python and java and 11 months long cyle of applying for jobs, prepping for interview, building up side projects, and working at startup.</p>
      {
        Blogfolio.map((_, i) => {
          return (
            <Blog
              key={i}
              date={Blogfolio[i].date}
              content={Blogfolio[i].content}
            />
          );
        })
      }
    </div>
  );
}

export default BlogList;