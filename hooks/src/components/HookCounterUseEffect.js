import React, { useState, useEffect } from 'react'

function HookCounterUseEffect() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect updating document title');
        document.title = `You've clicked ${count} times`;
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Hook Clicked {count} times</button>
        </div>
    )
}

export default HookCounterUseEffect
