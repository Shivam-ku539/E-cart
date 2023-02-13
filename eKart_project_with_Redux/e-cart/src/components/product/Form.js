import React from "react";

const Form = (props) => {
  const handleAddToCart = (item) => {
    props.handleAddToCart(item);
  };

  return (
    <>
      {props.product.map((item) => (
        <>
          <img
            src={item.imageUrl}
            alt="product"
            style={{ height: "35vmin", width: "35vmin" }}
          />
          <br />
          {item.productName}
          <br />
          Price= {item.price}
          <br />
          <button
            type="button"
            onClick={() => handleAddToCart(item)}
            style={{ color: "blue" }}
          >
            Add to cart
          </button>
          <br />
        </>
      ))}
    </>
  );
};

export default Form;
