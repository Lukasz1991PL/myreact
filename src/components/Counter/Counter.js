import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [favouirtes, setFavourites] = useState(null);

  useEffect(() => {
    console.log('component rerendered');
  }, [counter]);

  useEffect(() => {
    console.log('i am mounted');
  }, []);

  const handleIncrement = () => {
    setCounter((prevVal) => prevVal + 1);
  };
  const handleDecrement = () => {
    setCounter((prevVal) => prevVal - 1);
  };
  const handleSetValue = () => {
    setCounter(15);
  };

  return (
    <div>
      <div style={{ fontSize: '24px', textAlign: 'center' }}>{counter}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleSetValue}>Set counter to 15</button>
    </div>
  );
};
