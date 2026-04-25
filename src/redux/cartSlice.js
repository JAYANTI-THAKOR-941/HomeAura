import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
            addToCart(state,action){
                const exitingItem = state.cart.find((i)=>i.id === action.payload.id)
                if(exitingItem){
                    exitingItem.qty += 1;
                }else{
                    state.cart.push({...action.payload,qty:1})
                }
            },
            increaseQty(state,action){
                const item = state.cart.find((i)=>i.id === action.payload);
                if(item){
                    item.qty +=1;
                }
            },
            decreaseQty(state,action){
                const item = state.cart.find((i)=>i.id === action.payload);
                if(item){
                    item.qty -=1;
                }
            },
            removeFromCart(state,action){
                state.cart = state.cart.filter((i)=>i.id !== action.payload)
            },
            clearCart(state,action){
                state.cart = []
            }
    }
})

export const {addToCart,increaseQty,decreaseQty,removeFromCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;