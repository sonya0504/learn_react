import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement' :
            return state - 1;
        case 'reset' :
            return initialState
    }
}

function UseReducerCounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <>
        <div>
            <div>Count - {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')} >Dicrement</button>
                <button onClick={() => dispatch('reset')} >Reset</button>
            </div>
            <div>
                <div>Count 2 - {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')} >Dicrement</button>
                <button onClick={() => dispatchTwo('reset')} >Reset</button>
            </div>
        </>
    )
}

export default UseReducerCounterTwo;