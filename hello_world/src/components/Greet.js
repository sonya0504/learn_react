import React from 'react';

// function Greet () {
//     return <h1>Hello Default Export!</h1>
// };

// arrow function and named export:

// export const Greet = () => <h1>Hello Named Export</h1>;

const Greet = (props) => {
    console.log('props', props);
    return(
        <div>
            <h1>Hello Named {props.name} a.k.a. {props.heroName}</h1>
            {props.children}
        </div>
    );
       
}

export default Greet;