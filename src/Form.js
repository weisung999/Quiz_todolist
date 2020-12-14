import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    //上傳
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText === '') return
        setTodos([...todos, {memo:inputText, completed:false, id:uuidv4()}]);
        setInputText("");
    }; 

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" placeholder="type a new memo" className="inputarea" />
            <button className="inputbtn" onClick={submitTodoHandler}><i className="fas fa-arrow-circle-up"></i></button>
        </form>
    )
}

export default Form