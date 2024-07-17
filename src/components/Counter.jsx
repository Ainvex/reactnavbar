import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Current count is: ${count}`);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter">
            <button onClick={decrement} className="counter-button">-</button>
            <span className="count">{count}</span>
            <button onClick={increment} className="counter-button">+</button>
        </div>
    );
};

export default Counter;
