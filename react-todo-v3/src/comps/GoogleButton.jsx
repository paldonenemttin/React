import React, { useEffect , useRef } from "react";

function GoogleButton() {
	const buttonRef = useRef()

	const googleSDK_init = (e) => {

		if (!window.gapi) {
			alert("Google API Not Found")
			return
		}

		window.gapi.load("auth2", async () => {
			const auth2 = await window.gapi.auth.init({
				client_id: "357631399787-j5e9ms1uk50uul6julp4hglhehsakdiv.apps.googleusercontent.com",
				scope : "profile email"
			})
			 auth2.attachClickHandler(buttonRef.current)
		})
	}
	useEffect(googleSDK_init, [])

	const logout = (e) => {
		const auth2 = window.gapi.auth2.getAuthInstance()
		auth2?.disconnect()
		alert("logout Ok")
	}
	
	
	return (
		<div>
			<div id="myGoogleleBtn" ref={buttonRef}>
				<span className="icon"></span>
				<span className="buttonText">Google 로그인</span>
			</div>
			<span onClick={logout}>로그아웃</span>
		</div>
	)
}

export default GoogleButton