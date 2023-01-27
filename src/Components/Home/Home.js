import React,{useContext} from "react";
import {Link} from "react-router-dom"
import ImgAsset from '../../public'
import Coffee from "./Coffee";
import Snacks from "./Snacks";
import Subscripton from "./Subscription";
import Types from "./Offer";
import Footer from "../Footer/Footer";
import Suprise from "./Suprise";
import "../../global.css"
import AuthContext from "../../context/AuthContext";
import UserInfo from "../UserInfo/UserInfo";
import frame from "../../public/Frame 1.png"


export default function Header() {
	const { user } = useContext(AuthContext);
	
	return (

	<div className="relative .fontForText font-medium">
		 	{user && <UserInfo user={user} />}
			
		<div className='absolute w-full h-[45rem] sm:h-35 flex'>
			<img className='w-full object-cover ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
			<img  className="flex absolute w-full h-[45rem] "src={frame}></img>
		</div>
		
		<div className='relative  text-white flex flex-col items-center justify-center h-[33rem]'>
				<p className='font-bold text-3xl md:text-4xl m-3'>Want Group Order ?</p>
				<p className='m-3 text-2xl font-normal md:text-2xl'>We are here for you</p>
				<Link to = "CoffeeMenu">
				<button className='bg-white opacity-90 text-xl  m-3 ]
				text-[rgba(45,24,5,1.00)] md:text-2xl font-bold py-3 px-4 rounded' type="button">Order Online</button>
				</Link>
		</div>

		{/* Components of homepage */}
			<Coffee></Coffee>
			<Types></Types>
			<Snacks></Snacks>
			<Suprise></Suprise>
			<Subscripton></Subscripton>
			<Footer />
	</div>

	)
}