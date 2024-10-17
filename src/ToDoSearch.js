function ToDoSearch({
    searchValue,
    setSearchValue,
}){
    return (
        <input 
            type="search" 
            placeholder="Search..."
            className="ToDoSearch"
            value={searchValue}
            onChange={
                (event)=>{
                    setSearchValue(event.target.value);
                }
            }
        /> 
    )
}

export { ToDoSearch }