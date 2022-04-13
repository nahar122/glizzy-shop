import React from "react"
// import pic1 from "/unknown.png"
// import pic2 from "../images/xd2.avif"
// import pic3 from "../images/xd3.avif"
// import pic4 from "../images/xd4.avif"
import '../styles/featured.css'

export default function Featured(img){

    
    // const arr = [pic1, pic2, pic3, pic4]
    return(
        <div className="featured-container">
            <img src={img['img']} className="featured-image"/>
        </div>
    )

}