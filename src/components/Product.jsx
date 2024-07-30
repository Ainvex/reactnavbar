import React from "react";
import Counter from './Counter';



const Product = ({ name, image, description, price, quantity }) => (
    <div className="product">
        <img src={image} alt={name} />
        <div className="product-info">
            <h3>{name}</h3>
            <p>{description}</p>
            <p><span>Price: $</span>{price}</p>
            <p>Available Quantity: {quantity}</p>
        <Counter />
            <button className="buy-button"><a href="#">Buy Now</a></button>
        </div>
    </div>
);

export default Product