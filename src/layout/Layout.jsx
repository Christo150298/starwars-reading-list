import React from "react";
import NavBar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = ()=> {

    return(
        <>
        <NavBar/>
        <Outlet/>

        </>
    )
}

export default Layout;