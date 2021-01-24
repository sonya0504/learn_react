import React from 'react';

function Inline() {

const heading = {
    fontSize: '72px',
    color: 'blue',
}

    return (
        <div>
            <h2 style={heading}>Inline</h2>
            <h3 className='error'>Error from appStyle.css</h3>
        </div> 
    );
}

export default Inline;
