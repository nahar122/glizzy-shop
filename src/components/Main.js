import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Upperwear from '../pages/Upperwear'
import Lowerwear from '../pages/Lowerwear'
import Hats from '../pages/Hats'
import Footwear from '../pages/Footwear'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'


export default function Main(){
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/upperwear' element={<Upperwear />}></Route>
            <Route exact path='/lowerwear' element={<Lowerwear />}></Route>
            <Route exact path='/hats' element={<Hats />}></Route>
            <Route exact path='/footwear' element={<Footwear />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/create-account' element={<CreateAccount />}></Route>
        </Routes>
    )
}