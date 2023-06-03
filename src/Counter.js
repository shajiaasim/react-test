import React from 'react';

export default function Counter({ counter, setCounter }) {
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Press
      </button>
    </div>
  );
}
