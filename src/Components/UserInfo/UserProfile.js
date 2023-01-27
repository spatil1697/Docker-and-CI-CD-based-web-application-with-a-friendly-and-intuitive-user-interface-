import React from 'react'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext"
import {CgProfile} from 'react-icons/cg'
import {AiFillStar} from 'react-icons/ai'
import {HiOutlineNewspaper} from 'react-icons/hi'
import {BsFillBellFill} from 'react-icons/bs'
import {FaClipboardCheck} from 'react-icons/fa'





const UserProfile = () => {

  const { user, logoutUser } = useContext(AuthContext);
  return (
    
      <div className='flex'>
      <div className='flex-col justify-start items-start w-[40%] pt-12 pl-12'>
      <CgProfile className='my-6 m-4' size={80}/>
      <button className='border-solid border-2 border-black w-[7rem] h-[2rem]  '>{user.username}</button>
      
      <div className='flex my-7 gap-3'> 
        <HiOutlineNewspaper size={25}/>
        <button>Orders</button>
      </div>
      <div className='flex my-7 gap-3'> 
        <AiFillStar size={25}/>
        <button>Favourites</button>
      </div>
      <div className='flex my-7 gap-3'> 
        <BsFillBellFill size={25}/>
        <button>Subscription</button>
      </div>

      <div className='flex my-7 gap-3'> 
        <FaClipboardCheck size={25}/>
        <button>Reservation</button>
      </div>
      </div>

      <div className = 'pt-12 font-semibold pl-[10rem]'>
        <h1>Orders</h1>
      </div>
      


      </div>
      

  )
}

export default UserProfile