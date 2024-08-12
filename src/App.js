import logo from './platzi.webp';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import './App.css';

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
      
      <ToDoCounter completed={5} total={10}/>
      <ToDoSearch/>
      
      <ToDoList>
        {/* Renderización de nuevo array genrado con mpa(),
        retornando un componente ToDoItem con el texto del ToDo como key */}
        {defaultToDo.map(toDo => (
          // ToDoItem recibe la prop.text y prop.completed
          <ToDoItem 
          key={toDo.text} 
          text={toDo.text} 
          completed={toDo.completed} />
        ))}
      </ToDoList>
      
      <CreateToDoButton/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;