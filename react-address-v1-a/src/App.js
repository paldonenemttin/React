import "./App.css";
import { useState } from "react";
import AdddressInput from "./comps/AdddressInput";
import AddressView from "./comps/AddressView";

function App() {
  const [addr, setAddress] = useState({
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });

  const [addrList, setAddrList] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <AdddressInput addrList={addrList}
          setAddrList={setAddrList} addr={addr} setAddress={setAddress}/>
        <AddressView addrList={addrList} />
      </header>
    </div>

  );
}

export default App;
