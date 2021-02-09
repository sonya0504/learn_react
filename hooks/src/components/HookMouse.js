import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('log mouse position');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);
    }, [])

    return (
        <h2>Hey, there are mouse position: x: {x} and y: {y}</h2>
    )
}

export default HookMouse
