import React from "react";
import ImgAsset from '../../public'
import {Link} from "react-router-dom"



export default function Coffee(){
return(
<div className='bg-[rgba(25,14,3,1.00)] relative shadow-md overflow-hidden md:max-w-full md:px-10 md:py-[6em] mt-[12rem]'>
    <div className='lg:flex '>
    <div className=' p-12  md:text-left text-center'>

            <img className="rounded lg:float-right w-full  object-cover md:h-full md:w-[24rem] md:p-0 lg:mr-[5em] md:ml-[5em]" src = {ImgAsset.CoffeeApp_lukeporterzZfuH4lINlkunsplash1} alt="Coffee machine" />
     
            <h2 className='text-white mb-[2rem] md:text-3xl mt-11 lg:mt-0 md:ml-[3.3em]'>COFFEE</h2>
            
            <p className='text-white tracking-wide text-left font-normal md:text-xl lg:pr-[7rem] md:text-left leading-9 flex md:ml-[5em] '>
                Drinking coffee is an enjoyable habit for coffee lovers.
                You can enjoy ordering your coffee without needing to 
                leave your desk at work. Just click on order, choose your 
                favorite coffee and we will deliver the order to your desk!
            </p>

            <Link to = "CoffeeMenu">
            <button className=" bg-white text-black opacity-85 text-xl p-3 rounded mt-[100px] md:ml-[5em] ">Order Now</button>
            </Link>
        </div>
    </div>
</div>
);

}