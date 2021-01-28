import React from 'react'

const FRInput = React.forwardRef((prof, ref) => {
    return (
       <div>
           <input type='text' ref={ref} />
       </div>
   )
}
); 

export default FRInput;