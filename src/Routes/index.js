import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Carrinho } from "../Pages/Carrinho";
import { NotFound } from "../Pages/NotFound";

export const Root = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/login" element={ <Login/>}/>              
                <Route path="/carrinho" element={ <Carrinho/>}/>
                <Route path="*" element={ <NotFound/>}/>
            </Routes>
        </BrowserRouter>

    )
}