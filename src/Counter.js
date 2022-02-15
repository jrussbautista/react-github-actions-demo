import React, { useState } from 'react';

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const decrement = () => {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
