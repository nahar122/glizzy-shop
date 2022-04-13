import React from "react";
import '../styles/shopitem.css'

export default function ShopItem(data){

    const obj = data['data']

    return (
        <div className="z-container">
            <div className="shop-item">
                <div className="shop-item-image-container">
                    <img id="shop-item-image" src={obj['img_path']} />
                </div>
                <div className="catalogue-item-description">
                    <p className="item-name">{obj['name']}</p>
                    <p className="price">${obj['price']}</p>
                    <button className="add-cart">Add to Cart</button>
                </div>  
            </div>
            
        </div>
    )
}





