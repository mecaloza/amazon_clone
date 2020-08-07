import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal.js"



function Checkout() {
    const [{basket}]=useStateValue()
    return (
        <div className="checkout">
            <div>
           <img 
           src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/Spanish/Desktop/AmazonExports_FIAT_OnSite_Concepts_R5_Spanish_Generic_DesktopStripe_1500x120_v1.png" 
           alt="" className="checkout__ad"/> 
            
            {basket?.length === 0 ? (
                <div>
                <h2>Yur Shopping Basket is empty</h2>
                <p>
                    You Have no items in your basket, buy one in the market place
                </p>

             </div>

            ):(

                <div>
                <h2 className="checkout__title">Yor Shopping Basket </h2>
                {basket?.map(item => 
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}


                ></CheckoutProduct>
                    )}
                
             </div>

            )
            
            }
            

            </div>
            
            {basket.length > 0 &&( 
             <div className="checkout__right">
                 <Subtotal></Subtotal>
             </div>

            )}
            

        </div>

        

       
    )
}

export default Checkout
