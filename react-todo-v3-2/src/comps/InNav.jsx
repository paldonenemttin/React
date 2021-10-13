import React from "react";
import { Route } from "react-router-dom"
import LoginForm from "./LoginForm.jsx";
import MainNav from "./MainNav"
import Logout from "./Logout.jsx";
import { useUserContext } from "../context/UserContextProvider.jsx";

function InNav() {

	const { user } = useUserContext({
		userid: "",
		password: "",
	})

  const NavList = [
    { id: 0, title: "Home", link: "/" },
    user?.userid
      ? { id: 1, title: "로그아웃", link: "/logout", align: true }
      : { id: 1, title: "로그인", link: "/login", align: true }
  ];

	return (
    <MainNav NavList={NavList}>
      <Route path="/" exact>
	  </Route> 
			
      <Route path="/login" exact>
        <LoginForm />
      </Route>
     
      <Route path="/logout" exact>
        <Logout />
      </Route>
    </MainNav>
  )
}

export default InNav
