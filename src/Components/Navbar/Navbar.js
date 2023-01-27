import React from 'react'
import './Navbar.css'
import ImgAsset from '../../public'
import { Link } from 'react-router-dom';
import {CgMenu } from 'react-icons/cg';
import {CgClose } from 'react-icons/cg';
import {MdShoppingCart } from 'react-icons/md';
import {RiUser3Fill } from 'react-icons/ri';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext"
import "../../global.css"
import { useStateValue } from '../../context/StateProvider';
import {connect} from 'react-redux'
import {useState, useEffect} from "react";


const Navbar = ({cart}) => {


  const { user, logoutUser } = useContext(AuthContext);
  const [cartCount, setCartCount] =useState(0)

  useEffect(() =>{
    let count= 0;
    cart?.forEach((item) =>{
      count += item.qty;
    });

    setCartCount(count);
  },[cart, cartCount])

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

return (



<nav>
<div className=" bg-[rgba(45,24,5,1.00)] text-sm sm:px-6 py-4 lg:py-2">
    <div className='container flex flex-wrap items-center justify-between mx-auto .fontForText'>
      
      {/* left side of Navbar */}
      <div className='flex items-center h-6 mr-3 sm:h-9'>
        <span className='LATEELI pl-6'>LATEELI</span>
        <img className='Ellipse7 ' src = {ImgAsset.CoffeeApp_Ellipse7} />
        <img className='Ellipse6 ' src = {ImgAsset.CoffeeApp_Ellipse6} />
      </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
            <CgMenu size={28} className='mr-3' clip-rule="evenodd" aria-hidden="true" fill="currentColor"/>
        </button>

      {/* Right side of Navbar */}
   
      <div className='hidden w-full lg:block lg:w-auto z-50' id="navbar-default" >
        {/* <div className={showNavbar? 'nav-menu active' : 'nav-menu'}> */}
        <ul className ='text-white p-3 mt-4 flex flex-col lg:flex-row lg:space-x-8 md:mt-0 md:text-sm md:font-medium '>
            <li  className='block py-2 pl-3 pr-2 list-none '>
                <Link to ='/'>HOME</Link>
            </li>
            <li  className='block py-2 pl-3 pr-4 list-none '>
                <Link to ='/SnacksMenu'>SNACKS</Link>
            </li>
            <li className='block py-2 pl-3 pr-4 list-none'>
              <Link to ='/CoffeeMenu'>COFFEE</Link>
            </li>
            <li className=' block py-2 pl-3 pr-4  list-none'>
                <Link to ='/subscriptionPage'>SUBSCRIPTON</Link>   
            </li>

          {user? (
            <>
              <Link to ='/UserProfile'>
                <li className='list-none p-2   '>
                    <button>HELLO, {user.username.toUpperCase()}</button>
                </li>
              </Link>
              
                <li name='logout' className='list-none p-2  '>
                    <button onClick={logoutUser}>LOGOUT</button>
                </li>
            </>
            ):(
              <div className="flex gap-2">
                <Link to ='/Login'>
                    <RiUser3Fill className=' w-10 h-7 mt-1   text-white '/> 
                </Link>
              </div>
          )}
        <div>
            <Link to='Checkout'>
              <MdShoppingCart className=' w-9 h-7 mt-1 text-white relative  '/>
              <div className='rounded-full bg-amber-400 flex flex-col items-center justify-center absolute mt-[-22px] ml-[17px] p-2.5' style={{ 
                color: "black", 
                width: "1rem", 
                height: "1rem", 
                transform: "translate(25%, 25%)",
                }}>
                {/* Interface showing how many quantities of 
                items have been added to the cart. */}
                {cartCount}
              </div>
            </Link>
          </div>
        </ul>
       </div>
      </div>
    </div>
</nav>

  

);
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Navbar);




<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>