import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
  const { todo, onChange, onKeyPress, onClick, alert } = useTodoContext();

  
  return (
    <div className="form">
      <input value={todo.t_text} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="btn_insert" onClick={onClick} onClick={alert}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
