import React from 'react';
import useCounter from './useCounter';

function CounterTwo() {

    const [count, increment, decrement, reset] = useCounter(10, 2);

    return (
        <div>
            <h2> Count {count}</h2>
            <button onClick={increment}>Incremenr</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
