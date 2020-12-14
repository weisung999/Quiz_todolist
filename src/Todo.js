import React from 'react'

const Todo = ({ text, todo, todos, id, setTodos, address, createdAt}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return (
        <div className="todo">
            <div className="tododiv" id={id}>
                <p className="todotext">{text}</p>
                {todo.address ? <p className="todoaddress">Address: {address}</p> : ''}
                {todo.createdAt ? <p className="todocreat">memo created at: {createdAt}</p> : ''}
            </div>
            <button className="delbtn" onClick={deleteHandler}>
                <i className="fas fa-trash" />
            </button>
        </div>
    )
}

export default Todo