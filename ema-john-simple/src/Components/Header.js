import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './Head.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Header = () => {
  return (
    <div className="head">
        <img src={ logo }  alt=""/>
         <nav className='navi '>
            <NavLink activeclassname="active" to='/'> Shop</NavLink>
            <NavLink to='/review'>Review</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/login' className="log"> Login </NavLink>
            <Form >
            <Form.Control
              type="search"
              placeholder="Search"
              //className="me-2"
              className='search'
              aria-label="Search"
            />
            <Button    variant="outline-success">Search</Button>
          </Form>
          </nav>
          </div>


        
   

  )
}
