import { useLocalStorage } from './useLocalStorage';
import { UserInterfaceApp } from './UserInterfaceApp';
import React from 'react'

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const {
    items: toDos, 
    updatedItems: updatedToDos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", [])
  const searchedToDos = toDos.filter(toDo => (toDo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))

  const completeToDoFuntion = (text) => {
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

  return (
    <UserInterfaceApp
      loading={loading}
      error={error}
      toDos={toDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDoFuntion={completeToDoFuntion}
      deleteToDoFuntion={deleteToDoFuntion}
    />
  )
}

export default App;