import React from "react"
import logo from "../images/logo192.png"
import profile from "../images/avatar.png"
import "../styles/navbar-style.css"


export default function Navbar(){
    return (
        <div className="parent">
            <nav>
                <ul className="nav-items-left">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="http://localhost:5000/upperwear">Upperwear</a>
                    </li>
                    <li>
                        <a href="">Lowerwear</a>
                    </li>
                    <li>
                        <a href="">Hats</a>
                    </li>
                    <li>
                        <a href="">Shoewear</a>
                    </li>
                </ul>
                <img id="logo" className="header-images" src={logo} alt="Logo" />
                {/* <input id="search" type="text" placeholder="Search..." /> */}
                <ul className="nav-items-right">
                    {/* <li>
                        <img id="profile" className="header-images" src={profile} alt="Profile"/>
                    </li> */}
                    <li id="login">
                        <a href="">Login</a>
                    </li>
                    <li>
                        <a href="" id="create-account">Create Account</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}