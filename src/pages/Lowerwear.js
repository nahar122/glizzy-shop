import React from "react";
import Navbar  from "../components/Navbar";
import { useState, useEffect } from "react";
import ShopLayout from "../components/ShopLayout";
import Footer from "../components/Footer";
import '../styles/app.css'

export default function Lowerwear(){

    const [itemData, setItemData] = useState(null)

    useEffect( () =>{
        fetch("/lowerwear")
        .then(response => response.json())
        .then(data => setItemData(data))
    }, []);

    // console.log(itemData)
    return (
        <div className="lowerwear-container">
            <Navbar />
            <div className="content">
                <ShopLayout data={itemData}/>
            </div>
            <Footer />
        </div>
    )
}





