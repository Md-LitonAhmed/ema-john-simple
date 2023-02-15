import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from 'react-router-dom';

export default function Product(props) {
const {img, name,seller,price, stock, key}=props.product;

const navigate = useNavigate();
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className='product-desc'>
        <h4 className='product-name'  onClick={() => {
          navigate("/product/" + key);
        }}>{name}</h4>
        <br/>
        <p>By {seller}</p>
        <p>${price}</p>
        <p>Only {stock} left in stock-Order soon</p> 
        {props.AddToCart && 
          <button className='btn-add' onClick={()=> props.handleAddProduct(props.product)}>
            < FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
        }
      </div>
    </div>
  )
}
