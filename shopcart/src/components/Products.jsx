import React, { useState } from 'react'

import Spinner from '../components/Spinner'

import {useSelector} from 'react-redux'

import { useDispatch } from 'react-redux'

import {add,remove} from '../redux/slices/CartSlice'

import { toast } from 'react-toastify';


const Products = (props) => {

    let loading=props.loading;

    const title= props.post.title.substring(0,17);
    const desc=props.post.description.substring(0,51);

    const{cart}=useSelector((state)=>state);
    const dispatch=useDispatch();


    function Addhandler(){

      dispatch(add(props.post));
      toast.success("Item Added to the Cart" ,{
        position: "top-center"
      })
    }

    function Removehandler(){

      dispatch(remove(props.post.id));
      toast.error("Item Removed From Cart" ,{
        position: "top-center"
      })
    }
    
  return (

    loading ? 
        (<Spinner/>):
        (
            <div className='product-card'>
              <h3>{title}...</h3>

              <p className='para-desc'>{desc}...</p>

              <img src={props.post.image} className='card-img'/>

              <div className='last-sec'>
                <h4 className='last-para'>Rs. {props.post.price}</h4>

                {cart.some((p)=>p.id===props.post.id) ?
                (
                  <button className='cart-but' onClick={Removehandler}>Remove Item</button>
                ):
                (
                  <button className='cart-but' onClick={Addhandler}>Add to Cart</button>
                )
              }
              </div>
            </div>
        )
      
  )
}

export default Products



{/* <button className='cart-but'>Remove</button>) */}
