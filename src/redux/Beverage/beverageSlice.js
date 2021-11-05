import {getBeverage} from "./beverage";
import {createSlice} from "@reduxjs/toolkit";


const initialState={
  data: [],
}

export const BeverageSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers:{

  },
  extraReducers:{
    [getBeverage.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export default BeverageSlice.reducer;