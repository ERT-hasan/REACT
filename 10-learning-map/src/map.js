const todoItems =[
    {id: 1, todoText:'Buy Milk', todoDate: '01/11/2025'},
    {id: 2, todoText: 'Go To College', todoDate:'WeekDay'},
    {id: 3, todoText: 'Exercise', todoDate:'EveryDay'}
];

console.log("-------------starting using map--------- ");
const todoItemsText = todoItems.map(TodoItem =>TodoItem.todoText);
console.log(todoItemsText);
console.log("-------------ENding--------- ");


//  function convertObjectToTodoText(todoItem){
//   console.log(`convert function  was called  with item ${JSON.stringify(todoItem)}, converting this  to ${todoItem.todoText}`);
//   return todoItem.todoText;

//  }

//  const todoItemsText =[]
//  todoItems.forEach(item =>{
//   const str = convertObjectToTodoText(item);
//    todoItemsText.push(str);
//  });
//  console.log(todoItemsText);

 
// // todoItems.map();
