import React from "react";
import Navbar  from "../components/Navbar";
import ShopFilter from "./ShopFilter";
import ShopItem from "./ShopItem"


export default function ShopLayout(){

    return (
        <div className="shop-layout">
            <ShopFilter />
            <div className="catalogue-container">
                <ShopItem />
            </div>
        </div>
    )
}





