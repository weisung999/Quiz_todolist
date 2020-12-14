import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <Todo
                     setTodos={setTodos}
                     todos={todos}
                     key={todo.id}
                     todo={todo} 
                     text={todo.memo}
                     createdAt={todo.createdAt}
                     address={todo.address}
                     id={todo.id} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList