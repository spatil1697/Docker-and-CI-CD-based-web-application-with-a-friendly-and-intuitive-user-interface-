import React from 'react'
import {Link} from 'react-router-dom'
import {addToCartSnacks} from '../../redux/Shopping/shopping.action'
import {connect} from 'react-redux'

const ProductSnacks = ({productDataSnacks}) => {
  return (
  <div>
    <img className='rounded  w-[100%] height-auto rounded max-w-[20em] max-h-[14em] p-2 shadow-lg  ' src={productDataSnacks.image}/>
    <div className='flex justify-between text-lg px-4 py-1'>
      <p>{productDataSnacks.name}</p>
      <p>{productDataSnacks.price} €</p>

    </div>
    <button  onClick={() => addToCartSnacks(productDataSnacks.id)} className='text-white bg-[rgba(45,24,5,1.00)]  text-[18px]  mt-2
    text-white  h-12 w-[9rem] rounded'>Add to cart</button>
   
  </div>
  )
}

const mapDispatchToProps =dispatch => {
  return { 
    addToCartSnacks: (id) => dispatch(addToCartSnacks(id)), 
  }
}


export default connect (mapDispatchToProps)(ProductSnacks);