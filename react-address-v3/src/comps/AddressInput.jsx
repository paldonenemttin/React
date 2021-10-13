import UUID from "react-uuid";
import "../css/jinput.css"

function AddressInput({ stateGroup }) {
  // const { stateGroup } = props;
  const { account, setAccount, accountBook, setAccountBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const accountBookInsert = () => {

    if (account.a_name === "") {
      alert("반드시 입력해야 하는 항목입니다")
      return
    }
    if (account.a_price === "") {
      alert("반드시 입력해야 하는 항목입니다")
      return
    }
    if (account.a_date === "") {
      alert("반드시 입력해야 하는 항목입니다")
      return
    }
   
    setAccount({ ...account, a_id: UUID() });
    setAccountBook([...accountBook, account]);
  };

  

  return (
    <div className="input_item">
      <input
        value={account.a_name}
        name="a_name"
        placeholder="구입한 상품(ex:라면, 파)"
        onChange={onChangeHandler}
      />
      <input
        value={account.a_price}
        name="a_price"
        placeholder="가격"
        onChange={onChangeHandler}
      />
      <input
        value={account.a_date}
        name="a_date"
        placeholder="구입일자(ex:2021/04/05)"
        onChange={onChangeHandler}
      />
      <button onClick={accountBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
