import React, { useEffect, useState } from "react";
import { firestore } from "../config/FirebaseConfig";
import "../css/BBs";

function BBsMain() {
	const [bbsBody, setBBsData] = useState([]);
	const firebaseFetch = async () => {
		const result = await firestore.collection("bbs").get();
		
		/**
		 * firebase로부터 수신된 데이터 중에서
		 * 실제 bbs데이터 객체만 추출하어 리스트 배열로 만들기 
		 */
		const bbsList = result.docs.map(doc=>{
			return{...doc.data()}
		})
		setBBsData(bbsList)
			
		
	}
	useEffect(firebaseFetch, [])

	const bbsBody = bbsData.map(bbs => {
		return (
			<tr>
				<td>{bbs.b_date}</td>
				<td>{bbs.b_time}</td>
				<td>{bbs.b_writer}</td>
				<td>{bbs.b_content}</td>
			</tr>
		)
	})
}

function BBsMain() {
	return (
		<table class="bbs_list">
			<thead>
				<tr>
					<th>작성일자</th>
					<th>작성시간</th>
					<th>작성자</th>
					<th>제목</th>
				</tr>
			</thead>
			<tbody>{bbsBody}</tbody>
		</table>
	)
}

export default BBsMain