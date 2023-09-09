import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";


export const Store = configureStore({
    reducer: {
        Product : ProductSlice,
        Cart: CartSlice
    }
})
export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof Store.getState>> = useSelector;
