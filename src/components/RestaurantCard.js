import React from 'react'
import { imgurl } from './config'
export default function RestaurantCard({cloudinaryImageId,name,cuisines,avgRating}) {
    return (
    <div className="card">
        <img src={imgurl+`${cloudinaryImageId}`} alt="" />
        <h4>{name}</h4>
        <h6>{cuisines.join(', ')}</h6>
        <h6>{avgRating}</h6>
    </div>
    )
}
