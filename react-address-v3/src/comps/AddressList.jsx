import React from "react";
import "../css/List.css"

// 비구조화
// const {addrBook} = props대신 직접 분해하면서 받기
function AccountList({ accountBook }) {
  const viewList = accountBook.map((acc, index) => {
    return (
      <tr key={acc.a_id}>
        <td>{index + 1}</td>
        <td>{acc.a_name}</td>
        <td>{acc.a_price}</td>
        <td>{acc.a_date}</td>
      </tr>
    );
  });


  return (
    <table className="item_list">
      <thead>
        <tr>
          <th>No.</th>
          <th>구입한 상품</th>
          <th>가격</th>
          <th>구입일자</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default AccountList;
