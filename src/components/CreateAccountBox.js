import React, { useState } from "react"
import '../styles/create-account-box.css'

export default function CreateAccountBox(){

    const [formData, updateFormData] = useState({"email": '', "password": ''})
    const [formResponse, setFormResponse] = useState(null)
    const handleChange = (e) =>{
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(formData)
        fetch('/create-account', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => setFormResponse(data))
    }

    if (formResponse){
        console.log(formResponse)
    }
    return(
        <div className="login-container">
            <div className="login-box">
                <div className="login-title">
                    Create Account
                </div>
                <form>
                    <div className="login-field-container">
                        <div className="email-field-container">
                            <input name="email" id="email-field" placeholder="Email" className="login-field" type='email' onChange={handleChange}/>
                        </div>
                        <div className="password-field-container">
                            <input name="password" id="password-field" placeholder="Password" className="login-field" type='password' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="submit-login">
                        <button onClick={handleSubmit}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )

}