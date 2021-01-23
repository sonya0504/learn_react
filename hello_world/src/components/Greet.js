import React from 'react';

// first way to destructuring props:

// const Greet = ({ name, heroName, children }) => {
    
//     return(
//         <div>
//             <h1>Hello {name} a.k.a. {heroName}</h1>
//             {children}
//         </div>
//     );
       
// }


// second way to destructuring props:

const Greet = ( props ) => {
    
    const { name, heroName, children} = props;

    return(
        <div>
            <h1>Hello {name} a.k.a. {heroName}</h1>
            {children}
        </div>
    );
}

export default Greet;