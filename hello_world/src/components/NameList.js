import React from 'react';

function NameList() {

    const nameList = ['Bruce', 'Clark', 'Diana'];

    return (
        <div>
            {nameList.map((name, index) => <h2 key={index}>{index} {name}</h2>)}
        </div>
    )

    // const names = ['Bruce', 'Clark', 'Diana'];
    // const nameList = names.map(name => <h2>{name}</h2>);

    // return <div>{nameList}</div>
}

export default NameList
