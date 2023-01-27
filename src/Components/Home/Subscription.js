import React from "react";
import Img from '../../public/CoffeApp_madalyncoxOnvwNl5iRcY.png'
import {Link} from "react-router-dom"


export default function Subscripton(){
return (
    

    <div className='bg-[rgba(25,14,3,1.00)] relative shadow-md overflow-hidden md:max-w-full md:px-10 md:py-[6em]'>
    <div className='lg:flex md:justify-content:end'>
        <div className=' p-12 text-center md:text-left'>
             <img className="rounded md:ml-5 rounded lg:float-right  md:ml-[2em]" src = {Img} alt="Coffee Pack" />
            <h2 className='text-white mb-[2rem] md:text-3xl mt-11 lg:mt-0 md:ml-[3.2em]'>SUBSCRIPTION</h2>
            <p className=' text-white tracking-wide text-left font-normal md:text-xl md:pr-[4rem] md:text-left leading-9 flex md:ml-[5em]'>
            Never run out of your favorite coffees and Snacks.  
            With our auto-delivery subscription. Select how often
            your products arrive, pause and cancel anytime.
            </p>

            <Link to = "subscriptionPage">
            <button className="  bg-white text-black opacity-85 text-xl w-[8em] md:w-[10em] md:h-[3em] p-2 rounded mt-[100px]  md:ml-[5em] ">Coffee Subscription</button>
            </Link>
        </div>
    </div>
</div>
    
    ) 
}