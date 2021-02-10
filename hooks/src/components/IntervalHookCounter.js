import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);
    
    // first way:

    // const tick = () => {
    //     setCount(count + 1);
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000);
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count]);

    // second way:
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
