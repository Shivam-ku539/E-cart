import { configureStore } from "@reduxjs/toolkit";
import product from "../components/product/reducer";
import cart from "../components/cart/reducer";

export default configureStore({
    reducer:{
        product:product,
        cart:cart
    }
})