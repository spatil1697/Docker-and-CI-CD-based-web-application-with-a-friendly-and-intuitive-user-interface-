import React from "react";
import ImgAsset from '../../public'
import {Link} from "react-router-dom"

export default function Snacks(){
return(
    <div className='bg-[rgba(25,14,3,1.00)] relative shadow-md overflow-hidden md:max-w-full md:px-10 md:py-[6em] '>
    <div className='lg:flex md:justify-content:end '>
        <div className=' p-12  md:text-left text-center'>
        <img className="rounded lg:float-right w-full object-cover md:h-full w-[24em] md:w-[23em] h-[23em] md:h-[29em] md:p-0 lg:mr-[5em] md:ml-[5em] "  src = {ImgAsset.CoffeeApp_christofferengstromjXZ2GgDbefwunsplash1} alt="Snacks" />
            <h2 className='text-white mb-[2rem] md:text-3xl mt-11 lg:mt-0 md:ml-[3.2em]'>SNACKS</h2>
            <p className='text-white text-left font-normal md:text-xl lg:pr-[8rem] md:text-left leading-10 flex tracking-wide md:ml-[5em] '>
            Snacks can be both healthy and satisfying. Snacking can be as 
            simple as grabbing an apple, a handful of nuts or a bowl of popcorn. 
            Here are some snack in our menu to grab and go.
            </p>

            <Link to = "SnacksMenu">
            <button className=" bg-white text-black opacity-85 text-xl p-3 rounded mt-[100px] md:ml-[5em] ">Order Now</button>
            </Link>
        </div>
    </div>
</div>

    );
}