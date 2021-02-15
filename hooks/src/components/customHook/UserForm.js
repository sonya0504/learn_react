import React from 'react';
import useInput from './useInput';

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First name: </label>
                <input type='text' {...bindFirstName} />
            </div>
            <div>
                <label>Last name: </label>
                <input type='text' {...bindLastName} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default UserForm
