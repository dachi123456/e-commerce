import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
      addItemToCart: (state, action) => {
        state.push(action.payload);
      },
      deleteItemFromCart: (state, action) => {
        const indexToDelete = action.payload;
        state.splice(indexToDelete, 1);
      }
    },
  });

  export const { addItemToCart,deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;