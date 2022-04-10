import React from "react"
// import logo from "/logo192.png"
import { NavLink } from 'react-router-dom'


export default function Navbar(){
    return (
        <div id="header-container">
            <header>
                <nav>
                    <section id="left-nav">
                        <NavLink to='/'><img className="nav-element" id="logo" src="images/glizzy_logo.png" alt="Logo" /></NavLink>
                    </section>
                    <section id="middle-nav">
                        <NavLink className="nav-element middle-nav-element" to='/'>Home</NavLink>
                        <NavLink className="nav-element middle-nav-element" to='/upperwear'>Upperwear</NavLink>
                        <NavLink className="nav-element middle-nav-element" to='/lowerwear'>Lowerwear</NavLink>
                        <NavLink className="nav-element middle-nav-element" to='/hats'>Hats</NavLink>
                        <NavLink className="nav-element middle-nav-element" to='/footwear'>Footwear</NavLink>
                    </section>
                    <section id="right-nav">
                        <NavLink className="nav-element" to='/cart'>Cart</NavLink>
                        <NavLink className="nav-element" to='/login'>Login</NavLink>
                        <NavLink id='create-account' className="nav-element" to='/create-account'>Create Account</NavLink>
                    </section>
                </nav>
            </header>
        </div>
    )
}