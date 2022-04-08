import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar"
import Featured from "./components/Featured"
import BestSellers from "./components/BestSellers"
import { useState } from "react";


export default function App(){

    return (
        <div className="container">
            <Navbar/>
            <Featured num={0}/>
            <BestSellers/>
            <Featured num={1}/>
            <Featured num={2}/>
            <BestSellers/>
            <Featured num={3}/>
        </div>
    )
}





