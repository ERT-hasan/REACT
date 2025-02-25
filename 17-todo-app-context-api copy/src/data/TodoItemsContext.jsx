import { createContext,useState } from "react";
import initialTodoItem from "./initialTodoItem";


 export const TodoItemsContex = createContext();

export const TodoItemsProvider = ({children}) =>{

  const [todoItems,setTodoItems] = useState(initialTodoItem);
  
  const addTodoItem = (todoText,todoDate) =>{
   setTodoItems(currentItems =>{
     return [...currentItems,
        {id: todoText, todoText, todoDate}
    ]});
  };

  const deleteTodoItem = (todoId) =>{
   setTodoItems(currentItems =>{
     return currentItems.filter(item =>item.id !==todoId);
   })
  }

 return  <TodoItemsContex.Provider value={{todoItems,addTodoItem,deleteTodoItem}}>
    {children}
 </TodoItemsContex.Provider>
}