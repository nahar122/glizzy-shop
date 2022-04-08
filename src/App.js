import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar"
import Featured from "./components/Featured"
import BestSellers from "./components/BestSellers"
import { useState } from "react";
import axios from "axios";

export default function App(){

    const [profileData, setProfileData] = useState(null)

    // function getData(){
    //     axios({
    //         method: "GET",
    //         url:"/upperwear"
    //     })
    //     .then( (response) =>{
    //         const res = response.data
    //         setProfileData(({
    //             profile_name: res.name,
    //             about_me: res.about
    //         }))
    //     }).catch( (error) =>{
    //         if(error.response){
    //             console.log(error.response)
    //             console.log(error.response.status)
    //             console.log(error.response.headers)
    //         }
    //     })
    // }

    return (
        <div className="container">
            <Navbar/>
            <Featured num={0}/>
            <BestSellers/>
            <Featured num={1}/>
            <Featured num={2}/>
            <BestSellers/>
            <Featured num={3}/>
        </div>
    )
}





