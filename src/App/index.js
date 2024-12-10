import { UserInterfaceApp } from './UserInterfaceApp';
import { TodoProvider } from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <UserInterfaceApp/>
    </TodoProvider>
  )
}

export default App;