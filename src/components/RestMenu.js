import React, { useEffect, useState } from 'react'
import { imgurl } from './config';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';
function hideshow(){
    return <></>
}
function RestMenu() {debugger;
    const {id}=useParams();
    const { restMenu, restCard } = useRestaurant(id);
  return (
    <div>
        <div className="menu-card">
            <div className="menutp">
                <img src={imgurl+restMenu?.cloudinaryImageId} alt="" />
            </div>
            <div className="menubtm">
                <h3>{restMenu?.name}</h3>
                <h4>{restMenu?.cuisines}</h4>
                <h4>{restMenu?.avgRating}</h4>
                <h4>{restMenu?.costForTwoMessage}</h4>
            </div>
            
        </div>
        <hr className='dashline'></hr>
        <div className="menutxt">
            <h3>Menu</h3>
        </div>
        <hr className='dashline'></hr>
        {/* <MenuCard {...restCard[0]?.card.info} />  */}
        {/* {
            Object.values(restCard).map((res)=>(
                <MenuCard  key={res?.card?.info?.id} {...res?.card?.info} />
            ))
        } */}
        <div className='menu'>
            {
                Object.values(restCard).map((res)=>(
                    <MenuCard  key={res?.card?.info?.id} {...res?.card?.card}/>
                ))
            }
        </div>
    </div>
    
  )
}

// function MenuCard(rest){
//     // const {name,price,imageId}=rest;
//     const {title}=rest;
//     return(
//         <div className="menucard">
//             <div className="menuleft">
//                 <h5>{title}</h5>
//                 {/* <h4>{name}</h4> */}
//                 {/* <h6>Only In : {price}</h6> */}
//             </div>
//             <div className="menuright">
//                 <div className="menurgtimg">
//                     {/* <img src={imgurl+imageId} alt="imggg" srcset="" />  */}
//                 </div>
//                 <div className="additem">
//                     <div className="num">num</div>
//                     <div className="plus">&#43;</div>
//                 </div>
//             </div>
//         </div>
//     )
// }
function MenuCard(rest){
    // const {name,price,imageId}=rest;
    const {title,itemCards}=rest;
    return(
        <div className="menulist">
            <div className="up">
                <h3>{title}</h3>
                <p>&#x2BC6;</p>
            </div>
            <div className='subcategory'>
                {itemCards.map((res)=>(
                    <MBox key={res?.card?.info.id} {...res?.card?.info} />
                ))}
            </div>
        </div>
    )
}

function MBox(rest){
    const {name,description,price,imageId}=rest;
    return (
        <div className="menubox">
            <div className="menuleft">
                <h4>{name} - &#8377; {price/100}</h4>
                <h6>{description}</h6>
            </div>
            <div className="menuright">
                <div className="menurgtimg">
                    <img src={imgurl+imageId} alt="imggg" srcset="" /> 
                </div>
                <div className='btnadd'>
                    <button>Add +</button>
                </div>
            </div>
        </div>
    )
}

export default RestMenu;