import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import InNav from "./comps/InNav";
import MainNav from "./comps/MainNav";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TodoList
      </header>
      <UserContextProvider>
        <InNav />
      </UserContextProvider>
      {/*  TodoMain.jsx Layout을 사용하여 TODO 화면을 구현   */}
      <TodoMain header="할 일 입력" form={<TodoInput />}>
        <TodoList />
      </TodoMain>
    </div>
  );
}

export default App;
