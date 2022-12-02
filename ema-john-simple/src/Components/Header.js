import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './Head.css'

export const Header = () => {
  return (
    <div className="head">
        <img src={ logo }  alt=""/>
         <nav>
            <NavLink activeclassname="active" to='/'> Shop</NavLink>
            <NavLink to='/review'>Review</NavLink>
            <NavLink to='/orders'>Orders</NavLink>

         </nav>
    </div>

  )
}
