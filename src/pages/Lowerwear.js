import React from "react";
import Navbar  from "../components/Navbar";
import ShopLayout from "../components/ShopLayout";
import Footer from "../components/Footer";
import '../styles/app.css'

export default function Lowerwear(){

    return (
        <div className="lowerwear-container">
            <Navbar />
            <div className="content">
                <ShopLayout />
            </div>
            <Footer />
        </div>
    )
}





