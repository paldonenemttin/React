import logo from './logo.svg';
import TodoMain from "./comps/TodoMain"
import TodoInput from "./comps/TodoInput"
import TodoList from "./comps/TodoList"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain form={<TodoInput />} header="오늘할일">
      <TodoList />
    </TodoMain>
    </div>
  );
}

export default App;
