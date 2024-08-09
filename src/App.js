import logo from './platzi.webp';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import './App.css';
import { ToDoItem } from './ToDoItem';

function App() {
  return (
    <div className="App">
      
      <ToDoCounter/>
      <ToDoSearch/>
      
      <ToDoList>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </ToDoList>
      
      {/* <CreateToDoButton/> */}
      
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
    </div>
  );
}

export default App;