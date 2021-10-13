import logo from './logo.svg';
// import TodoMain from "./comps/TodoMain"
// import TodoInput from "./comps/TodoInput"
// import TodoList from "./comps/TodoList"
import './App.css';
import { TodoMain, TodoInput, TodoList } from "./comps"
import { MyButton, HomeButton } from "./comps"
import UserContextProvider, {useUserContext} from "./context/UserContextProvider"
import GoogleButton from './comps/GoogleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserContextProvider>
        <TodoMain form={<TodoInput />} header="오늘할일">
          <TodoList />
        </TodoMain>
         <GoogleButton />
      </UserContextProvider>
    </div>
  );
}

export default App;
