import React from "react";
import Featured from "../components/Featured"
import BestSellers from "../components/BestSellers"
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/home.css'


export default function Home(){

    return (
        <div>
            <Navbar />
            <div class="content">
                <div id="grid-container">
                    <section>
                        <Featured num={0}/>
                    </section>
                    <section>
                        <BestSellers/>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    )
}





