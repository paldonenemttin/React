import React from "react";
import { useUserContext } from "../context/UserContextProvider";
import Button from "../mycuston/Button";

function Notice() {

	const {user} = useUserContext()
	return (
		<div>
			<h1>공지사항</h1>
		</div>
	)
}

export default Notice