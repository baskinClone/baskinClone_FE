import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api"

export const getBeverage = createAsyncThunk(
  "ice/getBeverage",
  async () => {
    const response = await Api.get(
      `getbeverage`,
    );
    return response.data;
  }
);

