import React from "react"
import pic1 from "../images/xd1.avif"
import pic2 from "../images/xd2.avif"
import pic3 from "../images/xd3.avif"
import pic4 from "../images/xd4.avif"

export default function Featured(num){

    const arr = [pic1, pic2, pic3, pic4]
    return(
        <div className="featured-container">
            <img src={arr[num['num']]} className="featured-image"/>
        </div>
    )

}