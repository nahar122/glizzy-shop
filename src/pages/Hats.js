import React from "react";
import Navbar  from "../components/Navbar";
import { useState, useEffect } from "react";
import ShopLayout from "../components/ShopLayout";
import Footer from "../components/Footer";
import '../styles/app.css'

export default function Hats(){

    const [itemData, setItemData] = useState(null)

    useEffect( () =>{
        fetch("/hats")
        .then(response => response.json())
        .then(data => setItemData(data))
    }, []);

    // console.log(itemData)
    return (
        <div className="hats-container">
            <Navbar />
            <div className="content">
                <ShopLayout data={itemData}/>
            </div>
            <Footer />
        </div>
    )
}





