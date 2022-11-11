import React, { useState } from 'react';
import {Data} from '../../src/fakeData/Data'; 
import Product from './Product';
import '../Components/Shop.css'
import Cart from './Cart/Cart';

export const Shop = () => {
    const first10=Data.slice(0,10);
    const [products, setProducts]=useState(first10)
    const [cart, setCart]=useState([]);
const handleAddProduct=(product)=>{
  const newCart=[...cart, product];
  setCart(newCart);
}

  return (
    <div className= "shop-container">
        <div className= "product-container">
      { 
       products.map( pd => <Product handleAddProduct={handleAddProduct} key={pd.key} product={pd}></Product>)
       }
        </div>
       <div className="cart-container">
      <Cart cart={cart}/>
       </div>
    </div>
  )
}
