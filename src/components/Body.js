import React, {useState,useEffect, useContext} from 'react';
import RestaurantCard from './RestaurantCard';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';
import { filterRestaurant } from '../utils/Helper';
import useOnline from '../utils/useOnline'
// import Offer from './Offer';
// import Login from '../utils/LoginContext';
import UserContext from '../utils/UserContext';
import { swiggy_api_URL } from './config';
export default function Body() {
    const [allRestaurants,setaAllRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
	const [searchTxt,setSearchTxt]=useState("");
    const online=useOnline();
    const normal=useContext(UserContext);
    useEffect(()=>{
        getRestaurant();
    },[]);
    async function getRestaurant(){
        try {
            // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const data = await fetch(swiggy_api_URL);
            const jsondata = await data.json();
            console.log("jsondata=", jsondata);
            console.log("before=", filteredRestaurant);            
            //Swiggy api data is not in consistent state. 
            const data1 = jsondata?.data?.cards?.filter(
                (rest) => (rest.card?.card?.id === "restaurant_grid_listing")
            );
            const data2 = data1[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setaAllRestaurants(data2);
            setFilteredRestaurant(data2);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    //Early Return : not rendering component [Avoid rendering] 
    if(!allRestaurants) return null; 
    //if(filteredRestaurant?.length==0) return <h1>No Restaurant Found</h1>
    
    if(!online){ 
        return <h1>Looks like you are offline</h1>;
    }

    return (
        <>
            <div>
                {/* {normal.setDamm({...normal.damm,defimg:"kuchvalue - "})}
                {normal.setDamm({...normal.damm,name:"new name - "})} */}
                {/* {normal.setDamm((normal)=> ({...normal,name:"new name - "}))}
                {normal.setDamm((normal)=> ({...normal,defimg:"kuchvalue -"}))}
                {normal.damm.name}
                {normal.damm.defimg} */}
            </div>
            <div className="p-5 my-5 w-full" key="1">
                <div className="m-0 mx-auto w-80 p-3" >
                    <input type="text" placeholder="   Search..."
                    className='h-10 rounded-md focus:bg-green-50 outline outline-1 '
                    value={searchTxt} 
                    onChange={(e)=>{ 
                        setSearchTxt(e.target.value);
                    }}/>
                    <button type="button" 
                    className='bg-purple-800 hover:bg-purple-700 text-white rounded-md m-2 p-2 w-20 h-10'
                    onClick={()=>{
                        const data = filterRestaurant(allRestaurants,searchTxt);
                        setFilteredRestaurant(data);
                    }}>Search</button>
                    {/* <button>{log.id}</button>
                    <input type="text" value={log.id} onChange={(e)=>{
                        setLog({
                            ...log,
                            id:e.target.value
                        })
                    }} /> */}
                </div>
            </div>
        
            <div className='flex flex-wrap w-10/12 m-auto justify-between gap-1' key="2">
                {/* Need to write : NO Restaurant found logic here */}
                {
                    (allRestaurants?.length===0) ? 
                    (<ShimmerUI/>):
                    (
                        (filteredRestaurant?.length===0) ? <h1>No Restaurant Found</h1> : 
                        filteredRestaurant.map((restaurant)=>(
                            <Link to={"/restmenu/"+restaurant?.info?.id} key={restaurant?.info?.id} className="ok">
                                <RestaurantCard {...restaurant?.info} />    
                            </Link>        
                        ))
                    )
                }
            </div>
        </>
    )
}


