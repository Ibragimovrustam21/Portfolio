import React from 'react';

const test = () => {
  const test = [
    {
      name: 'open',
      open: true
    },
    {
      name: 'sdfh',
      open: false
    },
    {
      name: 'open',
      open: true
    },
    {
      name: 'sdfh',
      open: false
    },
  ]
  return (
    <div>
      {test.map((r, key) => {
        if (r.open) {
          return(
            <ul>
              <li>{r.name}</li>
            </ul>
          )
        }
      })}
    </div>
  );
};

export default test;