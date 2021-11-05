import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api";

export const getIceCreamCake = createAsyncThunk(
  "iceCream/getIceCreamCake",
  async ({page}) => {
    const response = await Api.get(
      `getCake?page=${page}`,
    );
    return response.data;
  }
);