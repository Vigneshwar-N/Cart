import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.unitPrice;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          unitPrice: action.payload.price,
          totalPrice: action.payload.price,
        });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.unitPrice;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
    },
    clearCart: state => {
      state.items = [];
    },
    addItemsFromCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.unitPrice;
      }
    },
  },
});

export const {addToCart, removeItem, clearCart, addItemsFromCart} =
  cartSlice.actions;
export default cartSlice.reducer;
