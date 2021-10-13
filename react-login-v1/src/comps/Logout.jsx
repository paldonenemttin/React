import React, { useEffect } from "react";
import UseContextProvider, { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router";

function Logout() {
	const history = useHistory()
	const { setUser } = useUserContext()
	useEffect(() => {
		const logout = async () => {
			setUser([])
			history.replace("/")
		}
		logout()
	})

	return (
		<div></div>
	)
}

export default Logout