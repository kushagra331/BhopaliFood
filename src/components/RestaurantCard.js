import React from 'react'
import { imgurl } from './config'
export default function RestaurantCard({cloudinaryImageId,name,cuisines,avgRating}) {
    return (
    <div className="w-72 h-96 w-max-content h-max-content rounded-md pb-3 m-2 shadow-lg bg-pink-50 flex flex-col justify-between">
        <img className="rounded-t-md w-full h-52" src={imgurl+`${cloudinaryImageId}`} alt="" />
        <h4 className='font-bold'>{name}</h4>
        <h6>{cuisines.join(', ')}</h6>
        <h6>{avgRating}</h6>
    </div>
    )
}
