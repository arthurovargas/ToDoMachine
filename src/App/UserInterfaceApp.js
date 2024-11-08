import { ToDoCounter } from '../RightContainer/ToDoCounter';
import { ToDoSearch } from '../RightContainer/ToDoSearch';
import { ToDoList } from '../RightContainer/ToDoList';
import { ToDoItem } from '../RightContainer/ToDoItem';
import { CreateToDoButton } from '../LeftContainer/CreateToDoButton';
import { CreateToDoInput } from '../LeftContainer/CreateToDoInput'; 
import { LeftContainer } from '../LeftContainer'; 
import { RightContainer } from '../RightContainer';
import { Container } from './Container';
import { Image } from '../LeftContainer/Image';

function UserInterfaceApp ({
    toDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDoFuntion,
    deleteToDoFuntion,
})
{
    return(
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
      )
}

export { UserInterfaceApp }