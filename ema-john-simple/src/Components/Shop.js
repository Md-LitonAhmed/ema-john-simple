import React, { useState } from 'react';
import Data from '../../src/fakeData/products.json'; 
import Product from './Product';
import '../Components/Shop.css'
import Cart from './Cart/Cart';
import { addToDb } from '../utilities/fakedb';


export const Shop = () => {
    const first10=Data.slice(6,20);
    const [products, setProducts]=useState(first10)
    const [cart, setCart]=useState([]);
const handleAddProduct=(product)=>{
  const newCart=[...cart, product];
  setCart(newCart);
  addToDb(product.key);
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
