import React, { useContext } from 'react';
import { CounterContext } from '../../App';

function ComponentA() {

    const countContext = useContext(CounterContext);

    return (
        <>
            <div>Component A : count = {countContext.countState}</div>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')} >Dicrement</button>
            <button onClick={() => countContext.countDispatch('reset')} >Reset</button>
        </>
    )
}

export default ComponentA
