import { useState } from "react";
import { useEffect } from "react";
import { CONFIG_MENU } from "../components/config";
const useRestaurant = (id) => {
    const [restMenu,setRestMenu]=useState({});
    const [restCard,setRestCard]=useState({});
    //74644 || 5934
    useEffect(()=>{
        getrest();
    },[]);
    async function getrest(){debugger;
        const data= await fetch(CONFIG_MENU+id);
        const datajson= await data.json();
        setRestMenu(datajson?.data?.cards[0]?.card?.card?.info);
        const newdata=datajson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            // (res)=>(res.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            // (res)=>(res?.card?.card['@type'] !== "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge")
            (res)=>(res?.card?.card['@type'] !== "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge" && res?.card?.card['title']!==undefined)
        )
        //setRestCard(newdata[2]?.card?.card?.itemCards);
        setRestCard(newdata);
    }
    return { restMenu, restCard };
};

export default useRestaurant;