import React from 'react';
import {ToDoListItem} from "./toDoListItem"
function App() {
  const todo : toDo[] =[
    {
        text : "TypeScript Chutiya Hai",
        complete : true
},
    {
        text : "REACT IS BEST",
        complete : true
    }
];
  return (
    <>
    <ul>
      <ToDoListItem todo ={todo[0]}/>\
      <ToDoListItem todo = {todo[1]}/>
    </ul>
    </>
  );
}

export default App;
