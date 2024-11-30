import React from 'react'

// const defaultToDo = [
//   {
//     text: "Tarea 1",
//     completed: true
//   },
//   {
//     text: "Tarea 2",
//     completed: true
//   },
//   {
//     text: "Tarea 3",
//     completed: false
//   }
// ]

// const convertedToDos = JSON.stringify(defaultToDo);
// localStorage.setItem("TODOS_V1", convertedToDos);

function useLocalStorage (itemName, initialValue) {
    // useLocalStorage ABSTRAE todo código que se 
    // conecta con localStorage
    const [items, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(()=>{
      setTimeout(() => { 
        try {
          // Valores traidos del LocaStorage y convertidos de String a Array
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItems;
          // Condicional para validar que existen ToDos, en caso de
          // que no exitan en el localStorage se asigna un Array vacio
          if (!localStorageItem){
            localStorage.setItem(itemName, initialValue)
            parsedItems = [];
          } else{
            parsedItems = JSON.parse(localStorageItem)
            setItem(parsedItems)
          } 
          setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(error)
        } 
      }, 2000)
    }, [])
  
      // Actualizador de ToDos en el estado y localStorage
      const updatedItems = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems))
        setItem(newItems)
      }
    
    return {
      items, 
      updatedItems,
      loading,
      error
    }
  } 

export { useLocalStorage }