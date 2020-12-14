import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Form from './Form';

const DEFAULT_TODO = [
{
  "id": "___AX1",
  "createdAt": 1605148012345,
  "memo": "Finish interview quiz"
},
{
  "id": "___AX2",
  "createdAt": 1605312012345,
  "memo": "Go k8s workshop at 10:00 trm",
  "address": "Taipei 101"
},
{
  "id": "___AX3",
  "createdAt": 1605657612345,
  "memo": "Follow up interview process"
}
]

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([...DEFAULT_TODO]);

  //讀取
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"))
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  },[]);
  //儲存
  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos]);


  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos} />
      
      <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
    </div>
  );
}


export default App;