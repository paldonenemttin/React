import React, { useState } from "React"
import { firestore } from "../config/FirebaseConfig"
import momnet from "moment";

/**
 * 
 * react-router-dom을 사용하여 Routing을 구현하면
 * 메뉴에서 글쓰기를 클릭했을때 호출(랜더링)된 컴포넌트이다
 * 
 * 이때 react-router-dom은 매개변수로 history 변수를 전달
 * history 변수는 routing과 관련된 변수
 * history.push(uRL)로 리다이렉트
 */
function BBsWrite({ history }) {
	const [bbs, setBBs] = useState({
		b_writer: "",
		b_subject: "",
		b_content:""
	})

	const onChange = (e) => {
		const { value, name } = e.target;
		setBBs({...bbs,[name]:value})
	}

	const onClickSave = () => {
		// JSON 데이터를 JSONString으로 바꾸기
		// const str = JSON.stringify(bbs)
		// alert(str)
		const saveBBS = {
			...bbs,
			b_date: momnet().format("YYYY[-]MM[-]DD"),
			b_time: momnet().format("HH:mm:ss")
		}

		firestore.collection("bbs").doc().add(saveBBS)
			.then(result => {
		console.log(result)
		history.push("/")
		})
	};
	
	return (
		<div>
			<div>
				<input type="text" name="b_writer" onChange={onChange} />
			</div>
			<div>
				<input type="text" name="b_subject" onChange={onChange}/>
			</div>
			<div>
				<input type="text" name="b_content" onChange={onChange}/>
			</div>
			<button onclick={onClickSave}>저장</button>
		</div>
	)
}

export default BBsWrite