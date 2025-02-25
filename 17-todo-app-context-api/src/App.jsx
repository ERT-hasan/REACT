
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import { TodoItemsProvider } from "./data/TodoItemsContext";


function App() {
  return (
    <TodoItemsProvider>
    <center>
      <AppName/>
      <AddTodo/>
      <TodoItems/>
   </center>
   </TodoItemsProvider>
  );
}
export default App;
