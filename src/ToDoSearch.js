import React from 'react'

function ToDoSearch(){
    const [searchValue, setSearchValue] = React.useState('');
    console.log('Buscando tareas de:' + searchValue)
    
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