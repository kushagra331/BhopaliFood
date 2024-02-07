import { useState } from "react";
import { useEffect } from "react";
import { CONFIG_MENU } from "../components/config";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";
const useRestaurant = (id) => {
    const [restMenu,setRestMenu]=useState({});
    const [restCard,setRestCard]=useState({});
    // const {details,setDetails}=useContext(UserContext);
    // console.log("hii=",details);
    //74644 || 5934
    const {damm,setDamm}=useContext(UserContext);
    useEffect(()=>{debugger;
        getrest();
        console.log("before==",damm)
        // setDetails({
        //     ...details,
        //     defimg:restMenu?.cloudinaryImageId
        // });
        setDamm((user)=>({
            ...user,
            defimg:restMenu?.cloudinaryImageId
        }));
        console.log("after==",damm)
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
        console.log("restMenu==",restMenu)
        setRestCard(newdata);
    }
    return { restMenu, restCard };
};

export default useRestaurant;
