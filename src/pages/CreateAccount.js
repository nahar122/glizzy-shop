import React from "react";
import Navbar  from "../components/Navbar";
import CreateAccountBox from "../components/CreateAccountBox";
import '../styles/app.css'

export default function CreateAccount(){

    return (
        <div className="create-account-container">
            <Navbar />
            <CreateAccountBox />
        </div>
    )
}





