import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import { CreateToDoInput } from './CreateToDoInput'; 
import { LeftContainer } from './LeftContainer'; 
import { RightContainer } from './RightContainer';
import { Container } from './Container';
import { Image } from './Image';
import React from 'react'

const defaultToDo = [
  {
    text: "Tarea 1",
    completed: true
  },
  {
    text: "Tarea 2",
    completed: true
  },
  {
    text: "Tarea 3",
    completed: false
  }
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [toDos, setToDo] = React.useState(defaultToDo);
  const searchedToDos = toDos.filter(toDo => (toDo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))
  const completeToDoFuntion = (text) => {
    // Usa como key el texto dentro del objeto y lo compara devolviendo 
    // el indice y asignado true (completado)
    const newToDos = [...toDos] // Copy of defaultToDo
    const indexToDo = newToDos.findIndex(toDo => toDo.text === text)
    newToDos[indexToDo].completed = true 
    setToDo(newToDos)
  }
  const deleteToDoFuntion = (text) => {
    // 
    const newToDos = [...toDos] // Copy of defaultToDo
    const indexToDo = newToDos.findIndex(toDo => toDo.text === text)
    delete newToDos[indexToDo] 
    setToDo(newToDos)
  }

  return (
    <>
      
      <Container>
        <LeftContainer>
          <CreateToDoInput/>
          <CreateToDoButton/>
          <Image/>
        </LeftContainer>

        <RightContainer>
          <ToDoCounter 
          // Filter of task completed
            completed={toDos.filter(toDo => (toDo.completed)).length} 
            total={toDos.length}
          />
          <ToDoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          />
          
          <ToDoList>
            {/* Renderización de nuevo array generado con map(),
            retornando un componente ToDoItem con el texto del ToDo como key */}
            {searchedToDos.map(toDo => (
              // ToDoItem recibe la prop.text y prop.completed
              <ToDoItem 
              key = {toDo.text} 
              text = {toDo.text} 
              completed = {toDo.completed}
              onComplete = {() => completeToDoFuntion(toDo.text)}
              onDelete = {() => deleteToDoFuntion(toDo.text)}
              />
            ))}
          </ToDoList>
        </RightContainer>
      </Container>
    </>
  );
}

export default App;