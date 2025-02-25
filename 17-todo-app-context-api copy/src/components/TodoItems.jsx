import { TodoItemsContex } from "../data/TodoItemsContext";
import TodoItem from "./TodoItem"
import {useContext} from "react";

const TodoItems = () =>{

   const {todoItems} = useContext(TodoItemsContex);

    return (
     <>
    {todoItems.map((item) => (
    <TodoItem key={item.id} id={item.id} todoText={item.todoText}  todoDate={todoDate}
    />
       ))}    
   </>
   );
};

export default TodoItems;