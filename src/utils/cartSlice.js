import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{debugger;
            // let existingItems = JSON.parse(JSON.stringify(state.items));
            // existingItems.filter((res)=>{
            //     return (res['name']===action.payload['name'])
            // })
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            // state.items=state.items.filter((res) => {
            //     return res !== action.payload
            // })
            // let data = action.payload;
            let existingItems = JSON.parse(JSON.stringify(state.items));
            // let newItems = [...existingItems, data];
            existingItems=existingItems.filter(
                (res) => {
                    return (res['name']!==action.payload['name'])
                    // (res === data)
                }
            )
            console.log(existingItems);
            state.items= existingItems;
        },
        clearKart:(state)=>{
            state.items=[];
        }
    }
});
export const {addItem,removeItem,clearKart}=cartSlice.actions;
export default cartSlice.reducer;
