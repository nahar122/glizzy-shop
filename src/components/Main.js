import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Upperwear from '../pages/Upperwear'
import Lowerwear from '../pages/Lowerwear'
import Hats from '../pages/Hats'
import Misc from '../pages/Misc'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import Cart from '../pages/Cart'


export default function Main(){
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/upperwear' element={<Upperwear />}></Route>
            <Route exact path='/lowerwear' element={<Lowerwear />}></Route>
            <Route exact path='/hats' element={<Hats />}></Route>
            <Route exact path='/misc' element={<Misc />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/create-account' element={<CreateAccount />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
        </Routes>
    )
}