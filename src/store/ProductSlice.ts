
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProductState = {
    title: string;
    price: number;
    desc: string;
    img: string;
    hotSale: boolean;
};

const initialState: ProductState[] = [
    {
        title: "Product 1",
        price: 20,
        desc: "Test Test",
        img: "",
        hotSale: true,
    },
    {
        title: "Product 2",
        price: 25,
        desc: "Test Test",
        img: "",
        hotSale: false,
    },
    {
        title: "Product 3",
        price: 10,
        desc: "Test Test",
        img: "",
        hotSale: true,
    },
    {
        title: "Product 4",
        price: 15,
        desc: "Test Test",
        img: "",
        hotSale: false,
    },
    {
        title: "Product 5",
        price: 30,
        desc: "Test Test",
        img: "",
        hotSale: false,
    },
    {
        title: "Product 6",
        price: 34,
        desc: "Test Test",
        img: "",
        hotSale: true,
    },
    {
        title: "Product 7",
        price: 60,
        desc: "Test Test",
        img: "",
        hotSale: false,
    },
    {
        title: "Product 8",
        price: 20,
        desc: "Test Test",
        img: "",
        hotSale: false,
    },
    {
        title: "Product 9",
        price: 70,
        desc: "Test Test",
        img: "",
        hotSale: true,
    },
    {
        title: "Product 10",
        price: 80,
        desc: "Test Test",
        img: "",
        hotSale: true,
    },
];

export const ProductSlice = createSlice({
    name: "Product" , 
    initialState,
    reducers: {
        addProduct: (state , action: PayloadAction<ProductState>)=> {
            state.push(action.payload)
        }
    }
})
export default ProductSlice.reducer;
export const { addProduct }  = ProductSlice.actions
