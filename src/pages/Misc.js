import React from "react";
import Navbar  from "../components/Navbar";
import ShopLayout from "../components/ShopLayout";
import Footer from "../components/Footer";
import '../styles/app.css'

export default function Misc(){

    return (
        <div className="misc-container">
            <Navbar />
            <div className="content">
                <ShopLayout />
            </div>
            <Footer />
        </div>
    )
}





