import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(timer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [timer])

    return (
        <div>
            Hook Timer: {timer}
            <button onClick={() => {clearInterval(intervalRef.current)}}>Clear Timer</button>
        </div>
    )
}

export default HookTimer