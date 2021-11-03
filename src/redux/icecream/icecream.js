import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api"

export const getBestIceCream = createAsyncThunk(
  "iceCream/getBestIceCream",
  async () => {
    const response = await Api.get(
      `getIcecream`,
    );
    return response.data;
  }
);