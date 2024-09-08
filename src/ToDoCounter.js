import './ToDoCounter.css'

function ToDoCounter({total,  completed}){
    return (
        <h1>
            Has completado {completed} de {total} tareas
        </h1>
    )
}

export { ToDoCounter }