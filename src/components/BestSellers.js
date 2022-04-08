import React from "react"
import item from "../images/item1.avif"
import "../styles/best-sellers-style.css"

export default function BestSellers(){

    return(
        <div className="best-sellers-container">
            <p>Best-Sellers</p>
            <ul className='best-sellers-list'>
                <li>
                    <img className="best-sellers-list-element" src={item}/>
                    <div className="item-description"><p>Liquid Lash Extensions Mascara</p></div>
                </li>
                <li>
                    <img className="best-sellers-list-element" src={item}/>
                    <div className="item-description"><p>Liquid Lash Extensions Mascara</p></div>                </li>
                <li>
                    <img className="best-sellers-list-element" src={item}/>
                    <div className="item-description"><p>Liquid Lash Extensions Mascara</p></div>                </li>
                <li>
                    <img className="best-sellers-list-element" src={item}/>
                    <div className="item-description"><p>Liquid Lash Extensions Mascara</p></div>               </li>
                <li>
                    <img className="best-sellers-list-element" src={item}/>
                    <div className="item-description"><p>Liquid Lash Extensions Mascara</p></div>               </li>
            </ul>
        </div>
    )

}