import React from "react";
import Navbar  from "../components/Navbar";
import ShopFilter from "../components/ShopFilter";
import ShopLayout from "../components/ShopLayout";
import Footer from "../components/Footer";
import '../styles/app.css'

export default function Upperwear(){

    return (
        <div className="upperwear-container">
            <Navbar />
            <div className="content">
                <ShopLayout name='Upperwear'/>
            </div>
            <Footer />
        </div>
    )
}





