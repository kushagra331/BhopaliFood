import React, { useState } from 'react'
// import brand_log from './images/brand_logo.png'
import { Link } from 'react-router-dom';
// import logo from './img/logo.png';
// import bhopalifood from './src/assets/img/bhoaplifood1.png'
// import bhopalifood from '../assets/img/bhopalifood1.png';
// import Footer from './Footer';
import bhopalifood1 from '../assets/img/bhopalifood1.png'
const loggedInUser= (val) => {
	//Make an API call
	return val;
}
const Title= () => {
	return (
		<div className="logo" >
			<a href="/">
				{/* <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo" /> */}
				<img src={bhopalifood1} alt="" srcSet="" />
				{/* <img src={require("./img/logo.png")} alt="" /> */}
				{/* <img src="./img/bhoaplifood1.png" alt="bhopal1 logo" /> */}
				{/* <img src={require("./assets/img/bhopalifood1.png")} alt="" /> */}
				{/* <img src={process.env.PUBLIC_URL + '/img/bhopalifood1.png'} alt="bhophhhal logo" /> */}
				{/* <img src="./assets/img/bhopalifood1.png" alt="bhopal2 logo" /> */}
			</a>
		</div>
	);
}
export default function Header() {
	const [logUser,setLogUser]=useState(false);
  return (
    <div className='nav-it'>
				<Title/>
				<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
				<li><Link to="/">Cart</Link></li>
				</ul>
				{
					logUser ? 
					<button className="logout" onClick={
					() =>{
							setLogUser(false)
							loggedInUser(logUser)
					}}>Logout</button> 
					:
					<button  className="login" onClick={
					() =>{
						// setLogUser(true)
						// loggedInUser(logUser)
					}
					}><Link to="/login">Login</Link></button>
				}
		</div>
		
  )
}
