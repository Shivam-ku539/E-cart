import React from "react";

const Form = (props) => {
  return (
    <>
      {props.cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div>
          {props.cart.map((item) => (
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
              Quantity={item.quantity}
              <br />
              TotalPrice={item.price * item.quantity}
              <br />
            </>
          ))}
        </div>
      )}
      <hr />
      <div className="subtotal">
        <span>Subtotal: </span>
        <span className="amount">{props.totalAmount}</span>
      </div>
    </>
  );
};

export default Form;
