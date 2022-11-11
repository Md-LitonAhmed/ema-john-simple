import React from 'react';
import logo from '../images/logo.png';
import './Head.css'

export const Header = () => {
  return (
    <div className="head">
        <img src={ logo }  alt=""/>
         <nav>
            <a href='/shop'>Shop</a>
            <a href='/review'>Review</a>
            <a href='/manage'>Manage</a>
        
         </nav>
    </div>

  )
}
