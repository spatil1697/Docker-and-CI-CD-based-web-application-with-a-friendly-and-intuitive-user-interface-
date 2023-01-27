import React, {useState} from 'react'
import './Checkout.css'
import { useStateValue } from '../../context/StateProvider'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import {removeFromCart,adjustQty} from '../../redux/Shopping/shopping.action'


const CheckoutProducts = ({itemData, removeFromCart, adjustQty}) => {

  const dispatch = useDispatch()
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value) 
  };

  return (
  <div className='relative flex md:h-[22rem] h-[20em] md:p-10 pt-10 rounded-xl shadow-lg bg-gray-200 lg:float-left 
       lg:w-[50%] text-[rgba(45,24,5,1.00)] m-[1em] lg:ml-[13em] leading-10'>
      
      <img className='rounded md:h-[18em] md:w-[16em] h-[7em] w-[6em] m-3 md:m-0  ' src = {itemData.image} />
    <div className='md:ml-12 '>
        <p className='text-[20px] font-bold'>{itemData.name}</p>
        <p>Options:</p>
        <p>Size</p>
        <button onClick={() => removeFromCart(itemData.id)} className='bg-[rgba(45,24,5,1.00)] text-white mt-2 w-[80px] rounded opacity-95' >Remove</button>
    </div>
    <div className='felx mr-11'>
        <strong className='ml-12'>{itemData.price}</strong>
        <small className='pl-1'>€</small>
      <div className='wrapper ml-11'>
          <span className='num'>qty: {itemData.qty}</span>
      </div>
    </div>
 </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart:(id) => dispatch(removeFromCart(id)),
    adjustQty:(id,value) =>dispatch(adjustQty(id,value))

  }
}

export default connect (null, mapDispatchToProps)(CheckoutProducts);
