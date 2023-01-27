import React from 'react'
import {Link} from 'react-router-dom'
import {loadCurrentItem} from '../../redux/Shopping/shopping.action'
import {connect} from 'react-redux'

const ProductCoffee = ({productData,loadCurrentItem}) => {
  return (
  <div>
      <img className='rounded shadow-lg w-[100%] height-auto rounded max-w-[20em] max-h-[14em] p-2' src={productData.image}/>
    <div className='flex justify-between text-lg px-4 py-1'>
      <p>{productData.name}</p>
      <p>{productData.price} €</p>
    </div>
      <Link to ={`/singleproductcoffee/${productData.id}`}>
      <button onClick={()=> loadCurrentItem(productData)} className='text-white bg-[rgba(45,24,5,1.00)]  text-[17px]  mt-2
      text-white h-[3rem] w-[9rem] p-1  rounded'>More Options</button>
      </Link>
  </div>
  )
}

  const mapDispatchToProps = (dispatch) => {

  return{

  loadCurrentItem:(item)=> dispatch(loadCurrentItem(item))
  };
  }

  export default connect (null, mapDispatchToProps)(ProductCoffee);