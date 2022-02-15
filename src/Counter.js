import React, { useState } from 'react';

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p>Current Count: {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
