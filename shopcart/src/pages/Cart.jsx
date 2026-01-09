import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CartItem from '../components/CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const{cart}=useSelector((state)=>state);

  const[TotalAmount,SetTotalAmount]=useState(0);

  useEffect(()=>{
    const amt=cart.reduce((x,y)=>x+y.price,0);
    SetTotalAmount(amt);
  },[cart])

  return (

    cart.length >0 ? 
    (
      <div className='cart-div'>
        <div>
          {
             cart.map((post)=>{
              return(
                <CartItem post={post}/>
              )
            })
          }
        </div>

        <div className='sum-card'>
          <div>
            <h4 className='cart-head'>Your Cart</h4>
            <h1 className='sum'>SUMMARY</h1>
            <p className='para-item'><b>Total Items: {cart.length}</b></p>
          </div>
          <div>
            <p className='tot-amt'>Total Amount: <b>${TotalAmount}</b></p>
            <button className='check'>Checkout Now</button>
          </div>
        </div>
      </div>
    ):

    (
      <div className='last'>
        <h1 className='last-head'>Your Cart is empty !!!</h1>

        <NavLink to="/" className="shop">Shop Now</NavLink>
      </div>
    )
  )
}

export default Cart
