import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleClick = () => {
    setCount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count} </h2>
        <div className="card__btns">
          <button
            onClick={handleIncrement}
            className="btn card__btn"
            disabled={count === 10 ? true : false}>
            +
          </button>
          <button
            onClick={handleDecrement}
            className="btn card__btn"
            disabled={count === -10 ? true : false}>
            -
          </button>
          <button onClick={handleClick} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
