import React, { useEffect, useState } from "react"
// import item from "../images/bottle.png"
import '../styles/best-seller.css'

export default function BestSeller(data){

    let img = data['data']['img_path']
    let item_name = data['data']['name']
    let item_price = data['data']['price']
    // console.log(img)

    return(
        <div className="best-seller-container">
            <img className="best-seller-img" src={img}  alt=""></img>
            <div className="best-seller-description">
                <p className="item-name">{item_name}</p>
                <p className="price">${item_price}</p>
                <button className="add-cart">Add to Cart</button>
                {/* <p className="best-seller-add-cart">Add to cart</p> */}
            </div>
        </div>
    )

}