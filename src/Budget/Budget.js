import React from 'react';

const budget = (props) => {
  return (
      <div>
        <p>summ is: {props.sum}</p>
        <p>{props.children}</p>
      </div>
  );
};

export default budget;