import React, { useEffect, useState } from 'react';
import Data from '../../src/fakeData/products.json'; 
import Product from './Product';
import '../Components/Shop.css'
import Cart from './Cart/Cart';
import { addToDb, getStoredCart } from '../utilities/fakedb';


export const Shop = () => {
    const first10=Data.slice(6,20);
    const [products, setProducts]=useState(first10)
    const [cart, setCart]=useState([]);

    useEffect( ()=>{
      const saveCart=getStoredCart();
      const productKey=Object.keys(saveCart);
      const previousCart=productKey.map(existingKey => {
        const product=Data.find(pd => pd.key===existingKey )
        product.quantity=saveCart[existingKey];
        return product;
       
      })
    setCart(previousCart)
    },[])

const handleAddProduct=(product)=>{
  const toBeAddedkey=product.key;
  const sameProduct=cart.find(pd => pd.key === toBeAddedkey.key);
  let count = 1;
  let newCart;
  if(sameProduct){
     count=sameProduct.quantity + 1;
    sameProduct.quantity=count;
    const others=cart.filter(pd => pd.key !== toBeAddedkey)
    newCart=[...others, sameProduct ]
  }
  else
  {
    product.quantity=1;
    newCart=[...cart, product];
  }
  
  setCart(newCart);
  addToDb(product.key, count);
}

  return (
    <div className= "shop-container">
        <div className= "product-container">
      { 
       products.map( pd => <Product handleAddProduct={handleAddProduct} AddToCart={true} key={pd.key} product={pd}></Product>)
       }
        </div>
       <div className="cart-container">
      <Cart cart={cart}/>
       </div>
    </div>
  )
}
