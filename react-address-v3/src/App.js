import logo from "./logo.svg";
import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import { useState } from "react";
import UUID from "react-uuid";

function App() {
  // 주소 한개의 데이터를 저장할 state 선언하기
  const [account, setAccount] = useState({
    acc_id: UUID(),
    acc_name: "",
    acc_tel: "",
    acc_addr: "",
    acc_age: "",
  });
  const [accountBook, setAccountBook] = useState([]);
  const stateGroup = {
    account,
    setAccount,
    accountBook,
    setAccountBook,
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>나만의 가계부</h1>
      </header>
      <AddressInput stateGroup={stateGroup} />
      <AddressList accountBook={accountBook} />
    </div>
  );
}

export default App;
