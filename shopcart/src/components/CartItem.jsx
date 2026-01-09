import React from 'react'

import { MdAutoDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';

import {add,remove} from '../redux/slices/CartSlice'

import { toast } from 'react-toastify';



const CartItem = (props) => {

  const desc=props.post.description.substring(0,100);
  
  const dispatch=useDispatch();

  function removeHandler(){

    dispatch(remove(props.post.id))

    toast.error("Item Removed From Cart" ,{
      position: "top-center"
    })
  }

  return (

    <div className='linediv'>
        <div className='last-card'>
      <div>
        <img src={props.post.image} className='card-img2'/>
      </div>

      <div>
        <h2>{props.post.title}</h2>
        <p>{desc}....</p>

        <div className='pri-ico'>
          <h3>{props.post.price}</h3>
          <div className='ico-div'><MdAutoDelete className='ico' onClick={removeHandler} /></div>
        </div>
      </div>
    </div>

    <div className='line'></div>
    </div>
  )
}

export default CartItem
