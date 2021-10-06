import logo from './logo.svg';
import './App.css';
import TodoInput from "./comp/TodoInput"
import TodoList from "./comp/TodoList"
import { useState } from 'react';

function App() {

  // Todo 한개의 데이터를 관리할 state 선언하기
  const [ todo, setTodo ] = useState({
    t_id: 0,
    t_date: "",
    t_text: "",
  })

  // Todo List 데이터를 관리할 배열 state 선언하기
  const [ todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>todo list</h1>
      </header>
      <TodoInput todoList={todoList}
        setTodoList={setTodoList} todo={todo} setTodo={setTodo} />
      <p>{todo.t_text}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;