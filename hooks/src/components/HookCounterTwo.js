import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount +1)
        }
    }

    return (
        <>
            <div>
                {count}
            </div>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>add</button>
                <button onClick={ () => setCount(prevCount => prevCount - 1)}>minus</button>
                <button onClick={() => setCount(initialCount)}>reset</button>
                <button onClick={incrementFive}>add 5</button>
        </>
    )
}

export default HookCounterTwo
