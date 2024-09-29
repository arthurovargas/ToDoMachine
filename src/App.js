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
    completed: true
  }
]

function App() {
  return (
    <>
      
      <Container>
        <LeftContainer>
          <CreateToDoInput/>
          <CreateToDoButton/>
          <Image/>
        </LeftContainer>

        <RightContainer>
          <ToDoCounter completed={5} total={10}/>
          <ToDoSearch/>
          
          <ToDoList>
            {/* Renderización de nuevo array generado con map(),
            retornando un componente ToDoItem con el texto del ToDo como key */}
            {defaultToDo.map(toDo => (
              // ToDoItem recibe la prop.text y prop.completed
              <ToDoItem 
              key={toDo.text} 
              text={toDo.text} 
              completed={toDo.completed} />
            ))}
          </ToDoList>
        </RightContainer>
      </Container>
    </>
  );
}

export default App;