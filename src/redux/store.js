import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, } from "connected-react-router";
import {history} from "./history";
import {icecreamSlice} from "./icecream/icecreamSlice";


export const store = configureStore({
  reducer: {
    iceCream: icecreamSlice.reducer,
    router: connectRouter(history),

  },
});