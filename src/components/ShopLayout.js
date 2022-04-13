import React from "react";
import Navbar  from "../components/Navbar";
import ShopFilter from "./ShopFilter";
import ShopItem from "./ShopItem"
import '../styles/shoplayout.css'

export default function ShopLayout(name){

    console.log(name)
    return (
        <div className="shop-layout">
            <ShopFilter />
            <div className="catalogue-container">
                <ShopItem />
            </div>
        </div>
    )
}





