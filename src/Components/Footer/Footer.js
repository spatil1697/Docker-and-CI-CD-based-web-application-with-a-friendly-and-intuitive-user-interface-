import React from "react";
import ImgAsset from '../../public'
import './Footer.css'
import ellipse from '../../public/Ellipse7_1.png'
import ellipse2 from '../../public/Ellipse6_1.png'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {TfiPinterestAlt} from 'react-icons/tfi'
import {BsYoutube} from 'react-icons/bs'




export default function Footer() {
return (

<div className=" text-[rgba(25,14,3,1.00)]  bg-white">
		
	<div className=" grid grid-cols-1 gap-y-12  text-center md:text-left p-12  lg:grid-cols-4 md:grid-cols-2  md:py-[3rem] md:px-[9rem] md:my-[2rem] ">
		
		{ /* LATEELI Logo */ }
		<div className="flex flex-row">
			<p className='LATEEL'>LATEELI</p>
			<img className='Ellipse1 ' src = {ellipse} />
			<img className='Ellipse2' src = {ellipse2} />
		</div>

		{/* TERMS */}
		<div>
			<span className='text-lg font-semibold'>SITE TERMS </span>
			<p className=''><br />Gift Card Terms<br /><br />Privacy Policy<br /><br />Student Discount<br /></p>
		</div>
		
		<div>
			<h2 className='text-lg font-semibold'>CUSTOMER CARE</h2>
			<p className='ContactUsRetursShippingFAQs'><br />Contact Us<br /><br />Returs<br /><br />Shipping<br /><br />FAQs</p>
		</div>
		
		
		{/* JOIN OUR EMAIL LIST FORM  */}
		<div>
			<img className='Vector6' src={ImgAsset.CoffeeAppMain_Vector6} />
			<p className=''>JOIN OUR EMAIL LIST FOR 10% OFF <br />YOUR FIRST ORDER</p>
			
			<form className="flex flex-col" >
				<input className="rounded mt-3 p-2 h-10 w-[15rem] text-black reqiured border-4 border-[rgba(25,14,3,1.00)]" type={"email"}  ></input>
				<button className=" bg-[rgba(25,14,3,1.00)] text-white mt-4 p-1 font-semibold opacity-90 rounded w-[70px]" type={"Button"}>Submit</button>
			</form>

			{/* SOCIALMEDIA icons */}
			<div className="flex flex-row mt-6 gap-4  ">
				<ImFacebook size={20}/>
				<BsInstagram size={20}/>
				<BsTwitter size={20}/>
				<TfiPinterestAlt size={20}/>
				<BsYoutube size={25}/>
			</div>

			
		</div>
		
	</div>
	
</div>
)
}