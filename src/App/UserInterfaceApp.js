import { ToDoCounter } from '../RightContainer/ToDoCounter';
import { ToDoSearch } from '../RightContainer/ToDoSearch';
import { ToDoList } from '../RightContainer/ToDoList';
import { ToDoItem } from '../RightContainer/ToDoItem';
import { CreateToDoButton } from '../LeftContainer/CreateToDoButton';
import { CreateToDoInput } from '../LeftContainer/CreateToDoInput'; 
import { LeftContainer } from '../LeftContainer'; 
import { RightContainer } from '../RightContainer';
import { Container } from './Container';
import { ToDosLoading } from '../RightContainer/ToDosLoading';
import { ToDosError } from '../RightContainer/ToDosError';
import { EmptyToDos } from '../RightContainer/EmptyToDos';
import { Image } from '../LeftContainer/Image';
import { TodoContext } from '../TodoContext';
import React from 'react'

function UserInterfaceApp (){
    const {
        loading,
        error,
        searchedToDos,
        completeToDoFuntion,
        deleteToDoFuntion,
    } = React.useContext(TodoContext)
    return(
        <>
            <Container>
            <LeftContainer>
                <CreateToDoInput/>
                <CreateToDoButton/>
                <Image/>
            </LeftContainer>
        
            <RightContainer>
                <ToDoCounter/>
                <ToDoSearch/>
                <ToDoList>
                    {loading && (
                        <>
                        <ToDosLoading/>
                        <ToDosLoading/>
                        <ToDosLoading/>
                        </>
                    )}
                    {error && <ToDosError/>}
                    {(!loading && searchedToDos.length === 0) && <EmptyToDos/>}

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