import React, { useContext, useEffect, useState } from 'react'
import { imgurl } from './config';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';
import UserContext from '../utils/UserContext';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';


function RestMenu() {debugger;
    const {id}=useParams();
    const { restMenu, restCard } = useRestaurant(id);
    const [visibleSection,setVisibleSection]=useState(null);
    const toggleVisibility  = (section) => {debugger;
        setVisibleSection(section === visibleSection ? null : section);
    };
    // isVisible={visibleSection==="instamart"}
    // toggleVisibility={() => toggleVisibility ("instamart")}
  return (
    <div>
        <div key={1} className="bg-red-50 shadow-lg w-8/12 h-[250px] mx-auto mt-2 flex justify-between rounded-md">
            <div key={2} className="w-64 h-full">
                <img className="w-64 h-full rounded-l-md" src={imgurl+restMenu?.cloudinaryImageId} alt="" />
            </div>
            <div key={3} className="w-4/12 bg-red-50 rounded-r-md flex flex-col justify-around place-items-center">
                <h1 className='text-2xl font-bold mb-4 '>{restMenu?.name}</h1>
                <h2 className='text-1xl font-bold mb-4'>{restMenu?.cuisines}</h2>
                <h3 className='text-1xl mb-4'>Rating : {restMenu?.avgRating}</h3>
                <h4 className='text-1xl mb-4'>{restMenu?.costForTwoMessage}</h4>
            </div>
        </div>
        <hr className='bg-black h-0.5 w-8/12 my-4 mx-auto rounded-md'></hr>
        <div key={4} className="w-8/12 my-0 mx-auto">
            <h3>Menu</h3>
            {/* <h1>hiii - {user.name}</h1> */}
        </div>
        <hr className='bg-black h-0.5 w-8/12 my-4 mx-auto rounded-md'></hr>
        <div key={5} className='flex flex-col gap-8'>
            {
                Object.values(restCard).map((res)=>(
                    <MenuCard  key={res?.card?.card?.title} {...res?.card?.card}
                    isVisible1={visibleSection===res?.card?.card?.title}
                    toggleVisibility={() => toggleVisibility(res?.card?.card?.title)}
                    />
                ))
            }
        </div>
    </div>
    
  )
}
function MenuCard({isVisible1,toggleVisibility,...rest}){debugger;
    const {title,itemCards}=rest;
    // const [isVisible,setIsVisible]=useState(false);
    return(
        <div className="bg-red-50 flex flex-col w-8/12 mx-auto rounded-md py-6">
            <div key={6} className="flex justify-between w-[900px] mx-auto m-3">
                <h3>{title}</h3>
                {/* <button onClick={isVisible ? ()=>setIsVisible(false) : ()=>setIsVisible(true) }>&#x2BC6;</button> */}
                <button onClick={isVisible1 ? toggleVisibility : toggleVisibility }>&#x2BC6;</button>
            </div>
            {/* isVisible */}
            { isVisible1 && 
                <div key={7} className='mx-auto w-[900px] flex flex-col gap-4 '>
                    {itemCards.map((res)=>(
                        <MenuBox key={res?.card?.info.id} {...res?.card?.info} />
                    ))}
                </div>
            }
        </div>
    )
}

function MenuBox(itemData){
    const {name,description,price,imageId}=itemData;
    // const {details}=useContext(UserContext);
    const {damm}=useContext(UserContext);
    debugger;
    console.log("damm=",damm);
    const dispatch=useDispatch()
    const  handleAddItem= (itemData) => {
        dispatch(addItem(itemData));
    }
    return (
        <div className="bg-white flex px-10 justify-between shadow-lg rounded-md">
            <div key={8} className="py-10 w-2/3">
                <h4 className='mb-6'>{name} - &#8377; {price/100}</h4>
                <h6>{description}</h6>
            </div>
            <div key={9} className="w-1/3 flex flex-col justify-center items-center gap-1">
                <div className="w-8/12">
                    {/* 201224 : Asha tiffins : Extras */}
                    {/* {<img src={imgurl+details?.defimg} alt="" />} */}
                    {/* {console.log("details===",details)} */}
                    {/* {console.log(damm.defimg)} */}
                    { imageId ? 
                    <img  src={imgurl+imageId} alt="API-IMG"/> :
                    <img  src={imgurl+damm?.defimg} alt="DEFAULT-IMG"/>} 
                    {/* { <img src={imgurl+imageId} alt={imgurl+details?.defimg} srcset="" /> } */}
                </div>
                {/* <div className='w-12 h-10  bg-red-500 p-5'> */}
                <button className='w-12 p-1 bg-green-100 text-xs' onClick={()=> handleAddItem(itemData)}>Add +</button>
                {/* </div> */}
            </div>
        </div>
    )
}

export default RestMenu;