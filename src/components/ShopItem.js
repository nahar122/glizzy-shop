import React from "react";
import '../styles/shopitem.css'

export default function ShopItem(){

    return (
        <div className="z-container">
            <div className="shop-item">
                <div className="shop-item-image-container">
                    <img id="shop-item-image" src="/images/bottle.png" />
                </div>
                <div className="catalogue-item-description">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>  
            </div>
            <div className="shop-item">
                <img id="shop-item-image" src="/images/glizzy_hat.png" />
                <div className="catalogue-item-description">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>  
            </div>
            <div className="shop-item">
                <img id="shop-item-image" src="/images/dont_be_a_weiner_joggers.png" />
                <div className="catalogue-item-description">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>  
            </div>
            <div className="shop-item">
                <img id="shop-item-image" src="/images/taste_of_my_weiner_hoodie.png" />
                <div className="catalogue-item-description">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>  
            </div>
            <div className="shop-item">
                <img id="shop-item-image" src="/images/glizzy_dufflebag.png" />
                <div className="catalogue-item-description">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>  
            </div>
            <div className="shop-item">
                <img id="shop-item-image" src="/images/bottle.png" />
                <div className="catalogue-item-description">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>  
            </div>
        </div>
    )
}





