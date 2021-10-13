import React, { useCallback, useEffect , useHistory} from "react";
import { useUserContext } from "../context/UserContextProvider";
import { fetchUser } from "../moduels/fetchMoudle";
import { fetchMoudle } from "../modules/fetchMoudle"
function AuthRoute({ children }) {
	const { user, setUser } = useUserContext();
	const history = useHistory()

	const fetchCallback = useCallback(async () => {
		const resultUser = await fetchUser()
		
		if (resultUser?.userid) {
			
		}
		/*if (!user?.userid) {
			history.replace("/login")
		} else if (user?.userid) {
			history.replace("/")
		}
		*/
	})
	useEffect(fetchCallback,[fetchCallback])
	return <>{children}</>
}

export default AuthRoute