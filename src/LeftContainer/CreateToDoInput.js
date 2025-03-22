import React, { useState } from 'react';

function CreateToDoInput() {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <h1>Create new task</h1>
            <h2>Task Name</h2>
            <input 
                placeholder="Type the name"
                className="CreateToDoInput"
                value={inputValue}
            />
        </>
    );
}

export { CreateToDoInput };