import React, { useEffect, useState } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadProduct } from "./reducer";
import { loadCart } from "../cart/reducer";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    axios.get("http://localhost:3000/product").then((response) => {
      dispatch(loadProduct(response.data));
    });
  }, []);

  const handleAddToCart = async (item) => {
    console.log(item);
    let result1 = await axios.post("http://localhost:3000/cart", item);
    dispatch(loadCart(result1.data));
  };

  return (
    <div>
      <Form
        product={product}
        handleAddToCart={(item) => handleAddToCart(item)}
      />
    </div>
  );
};

export default Product;
