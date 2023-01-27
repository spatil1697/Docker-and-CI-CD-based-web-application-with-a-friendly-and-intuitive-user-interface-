import React,{useRef } from "react";
import {Link} from "react-router-dom"
import ImgAsset from '../../public'
import Espresso from '../../public/CoffeeApp_Espresso.png'
import IceCoffee from '../../public/CoffeeApp_IceCoffee.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Light_Ice_Coffee from '../../public/Light_Ice_Coffee.jpg'
import Creamy_Coffee_Latte from '../../public/Creamy_Coffee_Latte.jpg'

const Offer = () => {
    const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

 return(
    <div className='py-[5em] mx-10 lg:ml-[12em] '>
    <p className='text-center text-2xl md:text-3xl mb-[2em]'>OFFER OF THE DAY</p>
    <Carousel className='text-center'  responsive={responsive}>
    <div className=''> <img className='w-[100%] height-auto rounded max-w-[20em] max-h-[25em]' src = {Espresso} />
        <p className='md:pr-12 lg:pr-[8em] pt-5'>Espresso</p>
    </div>
    <div><img className='w-[100%] height-auto rounded max-w-[20em] max-h-[25em]' src = {Light_Ice_Coffee} />
        <p className='md:pr-12 lg:pr-[8em] pt-5'>Light Ice Coffee</p>
    </div>
    <div><img className='w-[100%] height-auto rounded max-w-[20em] max-h-[25em] rounded' src = { Creamy_Coffee_Latte} />
        <p className='md:pr-12 lg:pr-[8em] pt-5'> Creamy Coffee Latte</p>
    </div>
    <div><img className='w-[100%] height-auto rounded max-w-[20em] max-h-[25em] rounded' src = {IceCoffee } />
        <p className='md:pr-12 lg:pr-[8em] pt-5'>Ice Coffe</p>
    </div>

    
    </Carousel>

            <div className='flex text-lg items-center justify-center pt-10 text-stone-500 font-semibold' >
                
                <p className>More</p>
                
            <Link to = "CoffeeMenu">
                <MdKeyboardArrowRight className="text-black"></MdKeyboardArrowRight>
            </Link>
        </div>
        </div>
        
 
 )
        
        }
        export default Offer
