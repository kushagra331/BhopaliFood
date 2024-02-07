import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const RStore = configureStore({
    reducer:{
        cart: cartSlice
    },
});

export default RStore;