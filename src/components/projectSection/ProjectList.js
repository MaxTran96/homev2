import React from 'react';
import Project from './Project.js';


const ProjectList = ({ Portfolio }) => {

  return (
    <div>
      {
        Portfolio.map((_, i) => {
          return (
            <Project
              key={i}
              source={Portfolio[i].source}
              title={Portfolio[i].title}
              url={Portfolio[i].url}
            />
          );
        })
      }
    </div>
  );
}

export default ProjectList;