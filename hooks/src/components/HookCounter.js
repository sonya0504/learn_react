import React, { useState } from 'react'

function HookCounter() {
    
    const [count, setCount] = useState(0);

    return <button onClick={() => setCount(count+ 1)} >Click {count}</button>
}

export default HookCounter;