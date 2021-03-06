import React from "react"
import BestSeller from "./BestSeller"
import { useState, useEffect } from "react"
import ItemsCarousel from 'react-items-carousel'

import '../styles/best-sellers.css'


export default function BestSellers(){

    const [itemData, setItemData] = useState(null)

    useEffect( () =>{
        fetch("/best-sellers")
        .then(response => response.json())
        .then(data => setItemData(data))
    }, []);

    return(
        <div className="best-seller-list-container">
            <article className="best-seller-list">
                    {itemData && itemData['response'].map( (obj, i) =>{
                        return <BestSeller key={i} data={obj}/>
                    })}
            </article>
        </div>
    )

}