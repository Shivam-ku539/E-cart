import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotal, loadCart } from "./reducer";
import axios from "axios";
import Form from "./Form";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);
  console.log(totalAmount);
  //  console.log(cart)
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((response) => {
      dispatch(loadCart(response.data));
      dispatch(getTotal(response.data));
      // console.log(response)
    });
  }, []);

  return (
    <div>
      <Form cart={cart} totalAmount={totalAmount} />
    </div>
  );
};

export default Cart;
