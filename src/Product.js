import React from 'react'
import "./Product.css"
import {useStateValue} from './StateProvider';



function Product({id,title,image,price,rating}) {
    const [{},dispatch]=useStateValue();
    
    const addtToBasket = () =>{
    //add itrm
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {id,
        title: title,
        image:image,
        price:price,
        rating:rating,
        }

    })

    }
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>USD</small>
                <strong>{price}</strong>

            </p>
            <div className="pruduct__rating">
            {
                Array(rating)
                .fill()
                .map((_)=>(
                <p>⭐</p>
                ))

            }

            </div>
            </div>
           
            <img src={image}></img>
            <button onClick={addtToBasket}>Add to basket</button>

            
        </div>  
    )
}

export default Product
