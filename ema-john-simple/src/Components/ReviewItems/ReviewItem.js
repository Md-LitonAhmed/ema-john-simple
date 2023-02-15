import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import deleteFromDb from '../../utilities/fakedb';


export default function ReviewItem(props) {

    const {name, quantity,key,price}=props.product;
    const itemStyle={
        borderBottom:'1px solid gray',
        padding:'10px',
        marginLeft:'150px'
    }
  return (
    <div style={itemStyle}>
        <h1 className='product-name'>{name}</h1>
        <p>Quentity: {quantity}</p>
        <p>Price: <small>${price}</small></p>
        <button className='btn-add' 
        onClick={() => props.removeProduct(key)}
        >
            < FontAwesomeIcon icon={faTrash }/> Remove</button>
    </div>
  )
}
