import React from 'react';
import './myStyle.css';

function Stylesheet({ primary }) {

    let className = primary && 'primary';

    return (
        <h1 className={`${className} font-xl`}>Stylesheet</h1>
    )
}

export default Stylesheet;
