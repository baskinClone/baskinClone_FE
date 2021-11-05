import {getCoffee} from "./coffee";
import {createSlice} from "@reduxjs/toolkit";


const initialState={
  data: [],
}

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState: initialState,
  reducers:{

  },
  extraReducers:{
    [getCoffee.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export default coffeeSlice.reducer;