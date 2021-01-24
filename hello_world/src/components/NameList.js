import React from 'react';
import Person from './Person';

function NameList() {

    const nameList = ['Bruce', 'Clark', 'Diana'];

    const personList = [
        {
            id: 1,
            name: 'Bruce',
            age: 35,
            skill: 'React',
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular',
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ];

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