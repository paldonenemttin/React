import React,{useState} from "react";

function JoinForm() {
	const [account, setAccount] = useState({
    userid: "",
	password: "",
	repassword: "",
	email:"",
  });

	const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

	const onJoin = async (e) => {
		const res = await fetch("http://localhost:8080/users/join", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userid: account.userid,
				password: account.password,
				repassword: account.repassword,
				email: account.email,
			}),
		});
		if (res?.ok) {
      const join = await res.json();

      //const user = users.find((item) => {
      //  return item.userid === account.userid;
      //});

      console.log("join", join);

      if (join.userid === " ") {
        alert("아이디 필수 입력");
        return;
		}
	  if (join.email === " ") {
		alert("이메일 필수 입력")
		return
		}
      if (join.password !== join.repassword) {
        alert("비번 다름");
        return;
      }
      alert("가입 성공");
    }
	};
	
		return (
			<div>
				<input name="userid" placeholder="아이디를 입력하세요" onChange={onChange}/>
				<input name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={onChange}/>
				<input name="repassword" type="password" placeholder="비밀번호 한번 더" onChange={onChange}/>
				<input name="email" placeholder="이메일 입력" onChange={onChange}/>
				<button onClick={onJoin}>회원가입</button>
			</div>
		)
	
	}


export default JoinForm