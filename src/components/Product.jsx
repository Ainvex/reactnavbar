import React from "react";
import Counter from './Counter';



const Product = ({ name, image, description, price, quantity }) => (
    <div className="product">
        <img src={image} alt={name} />
        <div className="product-info">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Available Quantity: {quantity}</p>
        <Counter />
            <button className="buy-button">Buy Now</button>
        </div>
    </div>
);

export default Product