import React from 'react';

const isObject = (x) => {
  return x !== null && typeof x === 'object';
};

export const Recursive = ({ data }) => {
  if (!isObject(data)) return <li>{data}</li>;

  const pairs = Object.entries(data);
  return <>{pairs.map(([key, value]) => (
    <li key={`li-${key}`}>
        {key}: 
        <ul key={`ul-${key}`}>
            <Recursive data={value} />
        </ul>
    </li>
  ))}</>;
};
