
function ToDoCounter({total,  completed}){
    return (
        <>
            <h1>
                Your task
            </h1>
            <h2>
                Completaste {completed} de {total} tareas
            </h2>
        </>
    )
}

export { ToDoCounter }