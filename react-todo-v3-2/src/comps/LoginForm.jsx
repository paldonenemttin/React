import "../css/LoginForm.css";
import { useRef, useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";
import { fetchLogin } from "../modules/fetchLogin";

function LoginForm() {
  
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChage = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const { userid, password } = account;
    const resultUser = await fetchLogin(userid, password);
    await setUser(resultUser);
    history.replace("/");

    if (account?.userid === "") {
      alert("반드시 입력합시다")
      return
    } else if (account?.password === "") {
      alert("반드시 입력합시다")
      return
    }
  };

  return (
    <div className="login_form">
      <div className="div_box">
        <input
        name="userid"
        placeholder="아이디를 입력하세요"
        onChange={onChage}
        className="inputId"
      />
      <input
        name="password"
        type="password"
        placeholder="비빌번호를 입력하세요"
        onChange={onChage}
        className="inputPass"
      />
      <button onClick={onLogin}>로그인</button>  
      </div>
      
    </div>
  );
}

export default LoginForm;