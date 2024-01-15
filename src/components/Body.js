import React, {useState,useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
// import {RestStatic} from './config';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';

const filterRestaurant = (res,searchTxt) =>{
	const filteredData=res.filter((res)=>
		res?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
	);
	return filteredData;
}

export default function Body() {
    const [allRestaurants,setaAllRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
	const [searchTxt,setSearchTxt]=useState("");

    useEffect(()=>{
        getRestaurant();
    },[]);

    async function getRestaurant(){
        try {
            // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            
            const jsondata = await data.json();
            console.log("jsondata=", jsondata);
            console.log("before=", filteredRestaurant);            
            //jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            //Swiggy api data is not in consistent state. instead of  using index like cards[2], try to filter with id
            // resturantData.data.cards.filter(
            //     (rest) => rest.card?.card?.id === "restaurant_grid_listing"
            // );
            const data1 = jsondata?.data?.cards?.filter(
                (rest) => (rest.card?.card?.id === "restaurant_grid_listing")
            );
            // console.log("data2====", data2);
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
    // console.log("filtered_len=",filteredRestaurant?.length);
    // console.log("filtered=",filteredRestaurant);

    return (
        <>	
            <div className="search-bar" key="1">
                <div className="search" >
                    <input type="text" placeholder="   Search..."
                    value={searchTxt} 
                    onChange={(e)=>{ 
                        setSearchTxt(e.target.value);
                    }}/>
                    <button type="button" 
                    onClick={()=>{
                        const data = filterRestaurant(allRestaurants,searchTxt);
                        setFilteredRestaurant(data);
                    }}>
                        <img src={require("../assets/img/search.png")} alt="" />
                    </button>
                </div>
            </div>
            
            <div className='restaurant-list' key="2">
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


