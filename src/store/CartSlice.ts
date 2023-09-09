import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type CartItemState = {
    id: number
    title: string;
    price: number;
    quantity: number;
};
export type changeQuantitystate = {
    id: number , 
    quantity: number
}
const initialState: CartItemState[] = []

export const CartSlice = createSlice({
    name: "cart", 
    initialState: initialState,
    reducers: {
        addProduct: (state , action:PayloadAction<CartItemState>) => {
            state.push(action.payload);
            localStorage.setItem("items" , JSON.stringify(state))
        },
        changeQuantity: (state , action: PayloadAction<changeQuantitystate> ) => {
            state.map(e => {
                if(e.id == action.payload.id){
                    e.quantity = action.payload.quantity  
                }
            })
            localStorage.setItem("items" , JSON.stringify(state))
        },
        fetchCartData: () => {
            const data = localStorage.getItem('items');
            if (data) {
                const parsedData = JSON.parse(data);
                console.log("There is data")
                return parsedData;
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        clearCart: (_state) => {
            localStorage.clear();
            return []
        }
}
    

})


export default CartSlice.reducer;
export const { addProduct, changeQuantity , fetchCartData , clearCart} = CartSlice.actions;