import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../fakeData/products.json';
import Product from '../Product';

export default function ProductDetails() {
      const {productKey}=useParams();
      const[product,setProduct]=useState('');
      useEffect(()=>{
        const productData=Data.filter((data)=> data.key===productKey);
        setProduct(productData[0]);
      },[])
        //const desc=Data.filter((data)=> data.key===productKey);
  return (
    <div>
        <h1>Product Details Page</h1>
        <Product product={product} AddToCart={false} key={product.key}></Product>
    </div>
  )
}
