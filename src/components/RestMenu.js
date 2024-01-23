import React, { useState } from 'react'
import { imgurl } from './config';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';
function RestMenu() {
    const {id}=useParams();
    const { restMenu, restCard } = useRestaurant(id);
  return (
    <div>
        <div className="bg-red-50 shadow-lg w-8/12 h-[250px] mx-auto mt-2 flex justify-between rounded-md">
            <div className="w-64 h-full">
                <img className="w-64 h-full rounded-l-md" src={imgurl+restMenu?.cloudinaryImageId} alt="" />
            </div>
            <div className="w-4/12 bg-red-50 rounded-r-md flex flex-col justify-around place-items-center">
                <h1 className='text-2xl font-bold mb-4 '>{restMenu?.name}</h1>
                <h4 className='text-1xl font-bold mb-4'>{restMenu?.cuisines}</h4>
                <h4 className='text-1xl mb-4'>Rating : {restMenu?.avgRating}</h4>
                <h4 className='text-1xl mb-4'>{restMenu?.costForTwoMessage}</h4>
            </div>
        </div>
        <hr className='bg-black h-0.5 w-8/12 my-4 mx-auto rounded-md'></hr>
        <div className="w-8/12 my-0 mx-auto">
            <h3>Menu</h3>
        </div>
        <hr className='bg-black h-0.5 w-8/12 my-4 mx-auto rounded-md'></hr>
        {/* <MenuCard {...restCard[0]?.card.info} />  */}
        {/* {
            Object.values(restCard).map((res)=>(
                <MenuCard  key={res?.card?.info?.id} {...res?.card?.info} />
            ))
        } */}
        <div className='flex flex-col gap-8'>
            {
                Object.values(restCard).map((res)=>(
                    <MenuCard  key={res?.card?.info?.id} {...res?.card?.card}/>
                ))
            }
        </div>
    </div>
    
  )
}
function MenuCard(rest){
    const {title,itemCards}=rest;
    const [isVisible,setIsVisible]=useState(false);
    return(
        <div className="bg-red-50 flex flex-col w-8/12 mx-auto rounded-md py-6">
            <div className="flex justify-between w-[900px] mx-auto m-3">
                <h3>{title}</h3>
                <button onClick={isVisible ? ()=>setIsVisible(false) : ()=>setIsVisible(true) }>&#x2BC6;</button>
            </div>
            { isVisible && 
                <div className='mx-auto w-[900px] flex flex-col gap-4 '>
                    {itemCards.map((res)=>(
                        <MBox key={res?.card?.info.id} {...res?.card?.info} />
                    ))}
                </div>
            }
        </div>
    )
}

function MBox(rest){
    const {name,description,price,imageId}=rest;
    return (
        <div className="bg-white flex px-10 justify-between shadow-lg rounded-md">
            <div className="py-10 w-2/3">
                <h4 className='mb-6'>{name} - &#8377; {price/100}</h4>
                <h6>{description}</h6>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
                <div className="w-8/12">
                    <img src={imgurl+imageId} alt="imggg" srcset="" /> 
                </div>
                {/* <div className='w-12 h-10  bg-red-500 p-5'> */}
                    <button className='w-12 p-0 border border-solid border-gray-400 text-xs'>Add +</button>
                {/* </div> */}
            </div>
        </div>
    )
}
export default RestMenu;