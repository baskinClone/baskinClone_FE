import axios from "axios";

export default axios.create({
  baseURL: "https://baskin-robbins-clone.herokuapp.com/api/"
})