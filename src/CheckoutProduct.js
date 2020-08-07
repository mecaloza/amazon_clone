import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from './StateProvider';

function CheckoutProduct({id, title, image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    console.log(id,title,image,price)
    const removeFrombasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
            
    
        })


    }
    return (
        <div className="checkoutProduct">
            <img  className="CheckoutProduct__image"src={image}  alt=""></img>
        <div className="CheckoutProduct__info">
           <p className="checkoutProduct__title">{title}</p> 

           <p className="checkoutProduct__price">
           <small>USD</small>
           <strong>{price}</strong>
           </p> 

           <div className="checkoutProduct__rating">
            {
                Array(rating)
                .fill()
                .map((_)=>(
                <p>⭐</p>
                ))

            }

            </div>
            <button onClick={removeFrombasket}>Remove form basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct
