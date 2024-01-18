export const filterRestaurant = (res,searchTxt) =>{
	const filteredData=res.filter((res)=>
		res?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
	);
	return filteredData;
}
