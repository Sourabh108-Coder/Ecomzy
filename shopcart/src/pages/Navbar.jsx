import React from 'react'

import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart}= useSelector((state)=>state);

  return (
    <div className='nav-bar'>

        <div className='real-nav'>

            <div className='head'>
                <NavLink to="/"><img src="https://tse2.mm.bing.net/th?id=OIP.HEtj1U1y9BIRD11eRb2HvwHaHa&pid=Api&P=0&h=180" className='img-shop'/></NavLink>
                <NavLink to="/" className="eco-link"><h1 className='shop-name'>ECOMZY</h1></NavLink>
            </div>
          <div className='last-nav'>
              <NavLink to="/" className="NavLink-item"><h2><b>Home</b></h2></NavLink>

              <NavLink to="/cart" className="NavLink-item">
              <p><BsCart3  className='icon'/></p>
              <div className='cart-no'>{cart.length}</div>
              </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
