import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './page/Home';
import Detail from './page/Detail';
import Fav from './page/Fav';


const MainNavigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/detail" index element={<Detail />} />
                <Route path="/favorites" index element={<Fav />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
export default MainNavigator;