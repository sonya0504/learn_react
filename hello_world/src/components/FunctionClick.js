import React from 'react'

function FunctionClick() {

    const clickHandle = () => {
        console.log('clicked button');
    };

    return (
        <div>
            <button onClick={clickHandle}>Click</button>
        </div>
    )
}

export default FunctionClick
