import React from 'react'
import supriseImage from '../../public/suprise.png'

const Suprise = () => {
  return (
  

  <div className='bg-white relative shadow-md overflow-hidden md:max-w-full md:px-10 md:py-[6em]'>
    <div className='lg:flex'>

            <img className="rounded  w-full p-10 object-cover md:h-full  md:w-[24em] md:p-0 md:ml-[8em]" src = {supriseImage} alt="Coffee" />

      <div className='text-[rgba(25,14,3,1.00)] p-12 text-center md:text-left justify-content: end'>
          <h2 className='mb-[2rem] md:text-3xl md:ml-[3.2em]'>SUPRISE A FRIEND</h2>
          <p className=' tracking-wide text-left  font-normal md:text-xl md:ml-[5em] md:text-left leading-9 flex '>
          Do you want to surprise your friend at work? 
          Then what is better than getting a coffee to their workplace! 
          </p>
          
          <button className=" bg-[rgba(25,14,3,1.00)] text-white opacity-85 text-xl p-3 rounded mt-[100px] md:ml-[5em] ">Let's Go</button>

      </div>
    </div>
  </div>
  )
}

export default Suprise