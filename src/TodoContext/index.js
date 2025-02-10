import { useLocalStorage } from './useLocalStorage';
import React from 'react'

const TodoContext = React.createContext();

function TodoProvider({children}){

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(true); // false default modal
    const {
      items: toDos, 
      updatedItems: updatedToDos,
      error,
      loading,
    } = useLocalStorage("TODOS_V1", [])
    const searchedToDos = toDos.filter(toDo => (toDo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))
  
    const completeToDoFuntion = (text) => {
      // Función para cambiar el atributo completed
      // Usa como key el texto dentro del objeto y lo compara devolviendo 
      // el indice y asignado true (completado)
      const newToDos = [...toDos] // Copy of defaultToDo
      const indexToDo = newToDos.findIndex(toDo => toDo.text === text)
      newToDos[indexToDo].completed = true 
      updatedToDos(newToDos)
    }
  
    const deleteToDoFuntion = (text) => {
      // 
      const newToDos = [...toDos] // Copy of defaultToDo
      const indexToDo = newToDos.findIndex(toDo => toDo.text === text)
      newToDos.splice(indexToDo, 1)
      updatedToDos(newToDos)
    }

    // Filter of task completed
    const completedToDos = toDos.filter(toDo => (toDo.completed)).length
    const totalToDos = toDos.length

    return (
      <TodoContext.Provider value={{
        loading,
        error,
        toDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        completeToDoFuntion,
        deleteToDoFuntion,
        completedToDos,
        totalToDos,
        openModal,
        setOpenModal,
      }}> 
        {children}
      </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };