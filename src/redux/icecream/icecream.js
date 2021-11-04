import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api"

export const getBestIceCream = createAsyncThunk(
  "iceCream/getBestIceCream",
  async ({page}) => {

    const response = await Api.get(
      `getIcecream?page=${page}`,
    );
    return response.data;
  }
);

