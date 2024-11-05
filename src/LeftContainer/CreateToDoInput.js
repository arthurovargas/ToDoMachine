function CreateToDoInput(){
    return(
        <>
            <h1>Create new task</h1>
            <h2>Task Name</h2>
            <input 
                placeholder="Type the name"
                className="CreateToDoInput"
                onChange={
                    (event)=>{
                        console.log('Escribiste en el CreateToDoInput');
                        console.log(event.target.value);
                    }
                }
            />
        </>
    )
}
export { CreateToDoInput }