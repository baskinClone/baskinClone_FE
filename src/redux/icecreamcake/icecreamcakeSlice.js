import {createSlice} from "@reduxjs/toolkit";
import {getIceCreamCake} from "./icecreamcake";


const initialState={
  data: [{}],
}

export const icecreamcakeSlice= createSlice({
  name: "beverage",
  initialState: initialState,
  reducers:{

  },
  extraReducers:{
    [getIceCreamCake.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export default icecreamcakeSlice.reducer;