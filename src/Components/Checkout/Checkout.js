import React from 'react'
import CheckoutProducts from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css'
import ImgAsset from '../../public'
import {connect} from 'react-redux'

const Checkout = ({cart}) => {


  return (
  <div className="relative font">
    
    <div className="relative text-bg-[rgba(45,24,5,1.00)] text-[25px] font-semibold text-center p-[2rem] overflow-x-hidden">
      <p>Items</p>
    </div>
      <div >
      {cart?.map((item) => (
        <CheckoutProducts 
        key ={item.id}
        itemData = {item}

      /> 
      ))}
      
      <Subtotal></Subtotal>
     </div>

  </div>

    )
  }

  const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart
    }
  }

export default connect(mapStateToProps)(Checkout);