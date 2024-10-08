function ToDoSearch(){
    return (
        <input 
            type="search" 
            placeholder="Search..."
            className="ToDoSearch"
            onChange={
                (event)=>{
                    console.log('ToDoSearch');
                    console.log(event.target.value);
                }
            }
        />
    )
}

export { ToDoSearch }