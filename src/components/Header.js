import React, { useState } from 'react'
// import brand_log from './images/brand_logo.png'
const loggedInUser= (val) => {
	//Make an API call
	return val;
}


const Title= () => {
	return (
		<div className="logo" >
			<a href="/">
				<img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo" />
				{/* <img src={brand_log} alt="logo" /> */}
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
					<li><a href="#">Home</a></li>
					
					<li><a href="#">Menu</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Cart</a></li>
				</ul>
				{
					logUser ? <button onClick={
						() =>{
							setLogUser(false)
							loggedInUser(logUser)
					}
					}>
						Logout</button> : <button onClick={
						() =>{
							setLogUser(true)
							loggedInUser(logUser)
					}
				}>
					Login</button>
				}
		</div>
  )
}
