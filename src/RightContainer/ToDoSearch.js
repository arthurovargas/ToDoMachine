import React from 'react'
import { TodoContext } from '../TodoContext';

function ToDoSearch(){
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)
    return (
        <input 
            type="search" 
            placeholder="Search..."
            className="ToDoSearch"
            value={searchValue}
            onChange={
                (event)=>{
                    setSearchValue(event.target.value);
                    console.log("ToDoSearch looking for " + searchValue)
                }
            }
        /> 
    )
}

export { ToDoSearch }