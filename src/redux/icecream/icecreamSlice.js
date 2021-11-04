import {createSlice} from "@reduxjs/toolkit";
import {getBestIceCream} from "./icecream";


const initialState={
  bestIce:[],
  allIcecream:[],
}

export const icecreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers:{

  },
  extraReducers:{
    [getBestIceCream.fulfilled]: (state, action) => {
      state.bestIce = action.payload.bestIce;
      state.allIcecream = action.payload.allIcecream;
    },
  },
});

export default icecreamSlice.reducer;