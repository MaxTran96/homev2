import React from 'react';
import Bar from './Bar';
import './BarList.css'
const BarList = ({category, Skills }) => {

  return (
    <div className="skillDiv">
      <h2>{category}</h2>
      {
        Skills.map((type, i) => {
          return (
            <Bar
              key={i}
              label={Skills[i].label}
              status={Skills[i].status}
              point={Skills[i].point}
            />
          );
        })
      }
    </div>
  );
}

export default BarList;