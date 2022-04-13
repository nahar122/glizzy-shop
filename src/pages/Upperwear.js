import React from "react";
import Navbar  from "../components/Navbar";
import { useState, useEffect } from "react";
import ShopLayout from "../components/ShopLayout";
import Footer from "../components/Footer";
import '../styles/app.css'
export default function Upperwear(){

    const [itemData, setItemData] = useState(null)

    useEffect( () =>{
        fetch("/upperwear")
        .then(response => response.json())
        .then(data => setItemData(data))
    }, []);

    // console.log(itemData)
    return (
        <div className="upperwear-container">
            <Navbar />
            <div className="content">
                <ShopLayout data={itemData}/>
            </div>
            <Footer />
        </div>
    )
}





