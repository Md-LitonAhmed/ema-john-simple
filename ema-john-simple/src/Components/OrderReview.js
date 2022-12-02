import React, { useEffect, useState } from 'react';
import {getStoredCart} from '../utilities/fakedb';
import Data from '../fakeData/products.json';
import ReviewItem from './ReviewItems/ReviewItem';

export default function OrderReview() {
    const [cart,setCart]=useState([]);
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
        <div>
            <h1>{cart.length} Cart Items Added</h1>
           {
            cart.map((pd) =>  <ReviewItem product={pd}></ReviewItem>)
           }
        </div>
    )
}
