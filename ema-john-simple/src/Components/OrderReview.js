import React, { useEffect, useState } from 'react';
import {deleteFromDb, getStoredCart} from '../utilities/fakedb';
import Data from '../fakeData/products.json';
import ReviewItem from './ReviewItems/ReviewItem';
import Cart from './Cart/Cart';

export default function OrderReview() {
    const [cart,setCart]=useState([]);
    
    const removeProduct=(productKey) =>{
        const newCart=cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
     deleteFromDb(productKey);
    }

    useEffect(()=>{
        const saveCart=getStoredCart();
        const productKeys=Object.keys(saveCart);
        // const counts=Object.values(saveCart);
        const cartProducts=productKeys.map((key)=>{
            const product=Data.find(pd => pd.key === key);
            product.quantity=saveCart[key];
            return product;
        })
      setCart(cartProducts)
    },[])
    return (
        <div className='shop-container'>
           <div className='product-container'>
           {
            cart.map((pd) =>  <ReviewItem product={pd} 
            removeProduct={removeProduct}></ReviewItem>)
           }
           </div>
           <div className='cart-container'>
            <Cart cart={cart}></Cart>

           </div>
        </div>
    )
}
