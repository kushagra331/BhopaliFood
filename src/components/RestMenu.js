import React, { useEffect, useState } from 'react'
import { imgurl } from './config';
import { useParams } from 'react-router-dom';

function hideshow(){
    return <></>
}
function RestMenu() {
    const [restMenu,setRestMenu]=useState({});
    const [restCard,setRestCard]=useState({});
    const resId=useParams();//74644 || 5934
    const {id}=resId
    console.log("resId==",resId);
    async function getrest(){debugger;
        // const data= await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D28.5270362%26lng%3D77.13593279999999%26restaurantId=65270");
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId="+id);
        const datajson= await data.json();
        console.log(datajson);
        setRestMenu(datajson?.data?.cards[0]?.card?.card?.info);
        
        const newdata=datajson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            // (res)=>(res.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            // (res)=>(res?.card?.card['@type'] !== "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge")
            (res)=>(res?.card?.card['@type'] !== "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge" && res?.card?.card['title']!==undefined)
        )
        //setRestCard(newdata[2]?.card?.card?.itemCards);
        setRestCard(newdata);
        //const value = newdata[2]?.card?.card?.itemCards;
        //console.log("value=====",value);
        console.log(restMenu);
        console.log(restCard);
    }
    useEffect(()=>{
        getrest();
    },[]);
    // datajson.data.cards[0].card.card.info
    console.log(restCard);
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