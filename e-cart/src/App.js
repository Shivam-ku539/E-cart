import React from "react";
import Nav from "./components/Navbar";
import Product from "./components/product/Product"
import Cart from "./components/cart/Cart";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
    return (
        <Router>
        <div>
         <Nav/>
         <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
         </Routes>
        </div>
        </Router>
    )
}
export default App;