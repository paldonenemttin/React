import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function JoinForm() {
	const [joinUser, setJoinUser] = useState({
		userid: "",
		password: "",
		re_password: "",
		email:""
	})

	const history = useHistory()

const onChangeAccount = (e) => {
	const { name, value } = e.target;
	setJoinUser({...joinUser, [name]:value})
	};
	const onSubmitAccount = async (e) => {
		// if (user.userid === "") {
		if (!joinUser?.userid) {
			alert("아이디 필수 입력")
			return
		}
		if (!joinUser?.password) {
			alert("비번 필수 입력")
			return
		}
		if (!joinUser?.re_password) {
			alert("비밀번호 확인을 입력")
			return
		}
		if (joinUser?.password !== joinUser?.re_password) {
			alert("비밀번호 일치 하지 않음")
			return
		}
		if (!joinUser?.email) {
			alert("이메일 필수 입력")
			return
		}

		const joinData = {
			userid: joinUser.userid,
			password: joinUser.password,
			email: joinUser.email
		}
		//fetchJoin(joinData)
		history.replace("/login")
		const response = await fetch("http://localhost:8080/users/join",
		{
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify(joinData) 
			})
		
		if (response.ok) {
			const json = await response.json()
			alert(JSON.stringify(json))
		}
	 }
		return (
			<div>
				<input
					name="userid"
					value={joinUser.userid}
					placeholder="아이디를 입력하세요"
					onChange={onChangeAccount} />
				<input
					name="password"
					value={joinUser.password}
					type="password"
					placeholder="비밀번호를 입력하세요"
					onChange={onChangeAccount} />
				<input
					name="re_password"
					value={joinUser.re_password}
					type="password" placeholder="비밀번호 한번 더"
					onChange={onChangeAccount} />
				<input
					name="email"
					value={joinUser.email}
					placeholder="이메일 입력"
					onChange={onChangeAccount} />
				<button onClick={onSubmitAccount}>회원가입</button>
			</div>
		)
	
	}


export default JoinForm