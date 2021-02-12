import React, { useState, useMemo } from 'react'

function Counter() {
    
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementOne = () => {
        setCountOne(countOne + 1);
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++
        return countOne % 2 === 0 
    }, [countOne]); 

    return (
        <div>
            <div>
                <button onClick={incrementOne}>CountOne - {countOne}</button>
                <div>Counter one is
                     {isEven ? ' Even' : ' Odd'}
                </div>
            </div>
            <div>
                <button onClick={incrementTwo}>CountTwo - {countTwo}</button>
            </div>
        </div>
    )
}

export default Counter
