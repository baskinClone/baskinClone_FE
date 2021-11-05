import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api"

export const getCoffee = createAsyncThunk(
  "ice/getCoffee",
  async () => {
    const response = await Api.get(
      `getCoffee`,
    );
    return response.data;
  }
);

