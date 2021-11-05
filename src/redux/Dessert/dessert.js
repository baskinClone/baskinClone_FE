import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api"

export const getDessert = createAsyncThunk(
  "ice/getDessert",
  async ({page}) => {
    const response = await Api.get(
      `getDessert?page=${page}`,
    );
    return response.data;
  }
);

