import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, } from "connected-react-router";
import {history} from "./history";
import {icecreamSlice} from "./icecream/icecreamSlice";
import {icecreamcakeSlice} from "./icecreamcake/icecreamcakeSlice";
import {BeverageSlice} from "./Beverage/beverageSlice";
import {coffeeSlice} from "./Coffee/coffeeSlice";
import {dessertSlice} from "./Dessert/dessertSlice";


export const store = configureStore({
  reducer: {
    dessert: dessertSlice.reducer,
    coffee: coffeeSlice.reducer,
    beverage: BeverageSlice.reducer,
    iceCream: icecreamSlice.reducer,
    iceCreamCake : icecreamcakeSlice.reducer,
    router: connectRouter(history),

  },
});