import React from "react";
import Featured from "../components/Featured"
import BestSellers from "../components/BestSellers"
import Navbar  from "../components/Navbar";
import '../styles/home.css'


export default function Home(){

    return (
        <div id="home-container">
            <Navbar />
            <div id="grid-container">
                <section>
                    <Featured num={0}/>
                </section>
                <section>
                    <BestSellers/>
                </section>
                <section>
                    {/* <Featured num={1}/> */}
                </section>
                <section>
                    {/* <Featured num={2}/> */}
                </section>
                <section>
                    {/* <BestSellers/> */}
                </section>
                <section>
                    {/* <Featured num={3}/> */}
                </section>
            </div>
        </div>
    )
}





