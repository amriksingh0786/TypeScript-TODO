import React from 'react';

interface Props {
    todo : toDo;
}

export const ToDoListItem : React.FC<Props> = ({todo}) =>{
    return (
        <li> 
            <input type="checkbox" checked={todo.complete} />
            <label style={{textDecoration: todo.complete ? "line-through" : undefined }}>{todo.text}</label>
        </li>
    );
}