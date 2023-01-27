import React from 'react'
import '../Signup/Login.css'
import ImgAsset from '../../public'
import { Link } from 'react-router-dom';
export default function SignupInfo() {
return (


    <div className="relative font ">
    <img className='w-full absolute h-[45rem] object-cover overflow-hidden  ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
    <div className='flex flex-col items-center'>
    <div className='Bluredrec' />
    </div>
    
    <div className='relative flex flex-col items-center justify-center pt-[10rem]  '>
            <p className='m-5 text-white font-bold text-3xl'>Info</p>
        
            <form className = 'flex flex-col text-white '>
                <div className = 'flex flex-row'>
                <input className='p-4 m-5 text-black h-9 w-[10rem] rounded-md h-[3rem]' type='Info' id='Info' name='Info' placeholder='First Name' required />
                <input className='p-4 m-5 text-black h-9 w-[10rem] rounded-md h-[3rem] ' type='Info' id='Info' name='Info' placeholder='Last Name' required />
                </div>
                <input className='p-4 m-5 text-black h-9 rounded-md h-[3rem] ' type='Info' name='Info' id='Info' placeholder='Delivery Address' required />
            
            </form>
            
            <div className='flex flex-col  items-center justify-center '>
            
                    <button className='m-5 bg-[rgba(255,149,0,1.00)] text-white w-[200px] opacity-95 h-[3rem] rounded-md'>Register</button>
                
                    <span className='text-white mt-3 text-center '> By Signing up, <br/>you agree to our terms and privacy policy.</span>
            </div>
        </div>
    </div>
    
)
    }
