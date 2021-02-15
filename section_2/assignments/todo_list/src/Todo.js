import React from 'react';

const Todo = ({todoItem,id, deleteTodo}) => {
    const handleDelete = () => {
        deleteTodo(id)
    }
    return(
        <div style={{width:"200px"}} className="todo-container">
            <li>{todoItem}</li>
            <button onClick={handleDelete}>Delete Todo</button>
        </div>
    )
}

export default Todo;

