import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product( { id, title , price , rating, image} ){
    
    const [ {  } , dispatch] = useStateValue();

    const addToBasket = () => {
        console.log("Add to basket called in the product");
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price,
            }
        })
    };
    
    return (
        <div className="product">
            <div className = "product__info">
                {/* <p> {id} </p> */}
                <p> {title}  </p>
                <p className="product__price">
                <small>₹ </small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    { Array(rating).fill().map( (_) => (<p>🌟️</p>
                    ))}
                </div>
            </div>
           
           <img src={image} alt="" />
           <button onClick = {addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product; 
