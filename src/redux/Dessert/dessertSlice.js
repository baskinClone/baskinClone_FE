import {getDessert} from "./dessert";
import {createSlice} from "@reduxjs/toolkit";


const initialState={
  data: [],
}

export const dessertSlice = createSlice({
  name: "dessert",
  initialState: initialState,
  reducers:{

  },
  extraReducers:{
    [getDessert.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export default dessertSlice.reducer;