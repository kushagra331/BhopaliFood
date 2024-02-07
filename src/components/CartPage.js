import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem,clearKart } from "../utils/cartSlice";
import { imgurl } from "./config";
const Cart = () =>{debugger;
    const cartItmes=useSelector((store)=>store.cart.items);
    console.log(cartItmes);
    // const itemData=useSelector((store)=> store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart = () => {
        dispatch(clearKart())
    }
    return(
        <div>
            <div key={1} className='mx-auto mt-20 w-[700px] flex justify-around'>
                <h1>Cart Items</h1>
                <button className='w-20 p-1 bg-green-100 text-xs' onClick={()=> handleClearCart()}>Clear Cart</button>
            </div>
            <div key={2} className='mx-auto mt-20 w-[700px] flex flex-col gap-4'>
                {
                    cartItmes.map((item)=> <CartBox key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}


function CartBox(itemData){debugger;
    const {name,description,price,imageId}=itemData;
    // const obj={name,description,price,imageId};
    const dispatch=useDispatch();
    const  handleAddItem= (itemData) => {
        dispatch(addItem(itemData));
    }
    const handleRemoveItem= (itemData) => {
        dispatch(removeItem(itemData));
    }
    debugger;
    // console.log(data);
    return (
        <div className="bg-white flex px-10 justify-between shadow-lg rounded-md">
            <div key={1} className="py-10 w-2/3">
                <h4 className='mb-6'>{name} - &#8377; {price/100}</h4>
                <h6>{description}</h6>
            </div>
            <div key={2} className="w-1/3 flex flex-col justify-center items-center gap-1">
                <div key={3} className="w-8/12">
                    <img src={imgurl+imageId} alt="API-IMG"/>
                </div>
                <div key={4} className='flex justify-between w-36 p-1'>
                    <button key={5} className='w-12 p-1 bg-green-100 text-xs' onClick={()=>{debugger; handleAddItem(itemData)}}>Add +{}</button>
                    <button key={6} className='w-18 p-1 bg-green-100 text-xs' onClick={()=>{debugger; handleRemoveItem(itemData)}}>Remove -</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;