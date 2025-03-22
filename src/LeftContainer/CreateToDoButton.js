import React from 'react';
import './CreateToDoButton.css';
import { TodoContext } from '../TodoContext';

function CreateToDoButton() {
    const { addToDo } = React.useContext(TodoContext);

    return (
        <button 
            className="CreateToDoButton"
            onClick={() => addToDo()}
            aria-label="Create Task"
        >
            Create Task
        </button>
    );
}

export { CreateToDoButton };