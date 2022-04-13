import React from "react";
import Navbar  from "../components/Navbar";
import ShopFilter from "./ShopFilter";
import ShopItem from "./ShopItem"
import '../styles/shoplayout.css'

export default function ShopLayout(data){


    return (
        <div className="shop-layout">
            <ShopFilter />
            <div className="catalogue-container">
                {data['data'] && data['data']['response'].map( (obj, i) =>{
                        return <ShopItem key={i} data={obj}/>
                    })}
                {/* <ShopItem data={data}/> */}
            </div>
        </div>
    )
}





