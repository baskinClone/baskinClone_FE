import {createSlice} from "@reduxjs/toolkit";
import {getBestIceCream} from "./icecream";

const initialState={
  data: [{}],
}

export const icecreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers:{

  },
  extraReducers:{
    [getBestIceCream.fulfilled]: (state, action) => {
      state.data = action.payload.data;

    },
  },
});

export default icecreamSlice.reducer;