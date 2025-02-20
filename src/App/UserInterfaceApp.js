import React from 'react';
import { LeftContainer } from '../LeftContainer';
import { CreateToDoButton } from '../LeftContainer/CreateToDoButton';
import { CreateToDoInput } from '../LeftContainer/CreateToDoInput';
import { Image } from '../LeftContainer/Image';
import { RightContainer } from '../RightContainer';
import { EmptyToDos } from '../RightContainer/EmptyToDos';
import { ToDoCounter } from '../RightContainer/ToDoCounter';
import { ToDoItem } from '../RightContainer/ToDoItem';
import { ToDoList } from '../RightContainer/ToDoList';
import { ToDoSearch } from '../RightContainer/ToDoSearch';
import { ToDosError } from '../RightContainer/ToDosError';
import { ToDosLoading } from '../RightContainer/ToDosLoading';
import { TodoContext } from '../TodoContext';
import { Container } from './Container';
import { Modal } from '../Modal';

function UserInterfaceApp (){
    const {
        loading,
        error,
        searchedToDos,
        completeToDoFuntion,
        deleteToDoFuntion,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return(
        <>
            <Container>
            <LeftContainer>
                <CreateToDoInput/>
                <CreateToDoButton setOpenModal={setOpenModal}/>
                {openModal && (
                        <Modal>
                            Funcion para agregar ToDos
                        </Modal>
                    )
                }
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

export { UserInterfaceApp };

