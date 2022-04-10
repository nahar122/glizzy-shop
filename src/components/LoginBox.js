import React, { useState } from "react"

export default function LoginBox(){

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
        fetch('/login', {
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
        if (formResponse['response'].length === 0){

        }
    }
    return(
        <div className="login-container">
            <div className="login-box">
                <div className="login-title">
                    Login
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
                        <button onClick={handleSubmit}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )

}