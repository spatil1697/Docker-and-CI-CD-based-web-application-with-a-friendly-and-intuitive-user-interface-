import React, {useState,useEffect} from 'react'
import {FaCcPaypal} from 'react-icons/fa'
import {SiSepa} from 'react-icons/si'
import {FaCcVisa} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa' 
import { useStateValue } from '../../context/StateProvider';
import {useHistory} from 'react-router-dom'; 
import {useSelector} from 'react-redux'
import {connect} from 'react-redux'
import  {SiKlarna} from 'react-icons/si'

const Subtotal = ({cart}) => {
    
  
    const history = useHistory();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

        useEffect (() =>{
        let items =0;
        let price =0;

        cart?.forEach((item) => {
          items += item.qty;
          price += item.qty * item.price
        })
        setTotalPrice(price)
        setTotalItems(items)
        },[cart,totalPrice, totalItems, setTotalPrice, setTotalItems])
  
        return (
    <div className=' flex flex-col lg:w-[20%] relative m-6 lg:ml-[70%] bg-gray-200 shadow-lg text-black p-12 rounded-xl text-center leading-10'>
            <p className=''>Payment Method:</p>
            <div className=' flex text-12 gap-4  '>
                 <FaCcPaypal size={35}/>
                 <FaCcVisa size={35}/>
                 <FaCcMastercard size={35}/>
                 <SiSepa size={35}/>
                 <SiKlarna size={35}/> 
            </div>
            <p>Delivery: 15 minutes</p>
            <p>Address: 256 code</p>
            <p>Other Method: Cash on Delivery  </p>
        <>
        
            <p className='text-center'> Total items
            ({totalItems}):  <strong>€{totalPrice}</strong>
            </p>
            <button onClick ={e=> history.push('/payment')} className='bg-[rgba(45,24,5,1.00)]  text-white p-2 rounded  '>Confirm & Pay</button>
        </>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Subtotal);


