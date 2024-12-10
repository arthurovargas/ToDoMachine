import React from 'react'
import { TodoContext } from '../TodoContext';

function ToDoCounter(){
    const {
        totalToDos,
        completedToDos
    } = React.useContext(TodoContext)
    return (
        <>
            <h1>
                Your task
            </h1>
            <h2>
                Completaste {completedToDos} de {totalToDos} tareas
            </h2>
        </>
    )
}

export { ToDoCounter }