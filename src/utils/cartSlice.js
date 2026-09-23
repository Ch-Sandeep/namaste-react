import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //RTK - Either mutate the state or return a new state
    addItem: (state, action) => {
      // mutating the existing state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
      // or return { items: [] } (new state)
    },
  },
});

// cartSlice will be like below JS object
// {
//     actions:{
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer: [fn1, fn2, fn3...]
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
