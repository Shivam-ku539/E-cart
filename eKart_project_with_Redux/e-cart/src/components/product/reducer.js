import {createSlice} from "@reduxjs/toolkit";

export const product=createSlice({
    name:'product',
    initialState:{
        product:[]
    },
    reducers:{
        loadProduct:(state,action)=>{
            state.product=[...action.payload]
        }
    }
})
export const {loadProduct}=product.actions;
export default product.reducer;