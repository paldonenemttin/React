import React from "react";

function AddressView({ addrList }) {

  const addList = addrList.map((addr) => {
    return (
			<tr>
				<td>{addr.u_name}</td>
				<td>{addr.u_addr}</td>
        <td>{addr.u_tel}</td>
        <td>{addr.u_age}</td>
			</tr>
		)
  })

  return (
    <div>
      {/* <div>이름 : {address.u_name}</div>
      <div>주소 : {address.u_addr}</div>
      <div>전화번호 : {address.u_tel}</div>
      <div>나이 : {address.u_age}</div> */}
      <table>
        <thead>
        <tr>
          <th>이름</th>
          <th>주소</th>
          <th>전화번호</th>
          <th>나이</th>
        </tr>
        </thead>
        <tbody>{addList}</tbody>
      </table>
    </div>
  );
}

export default AddressView;
