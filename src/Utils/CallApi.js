import axios from "axios";
import { BASE_LINK } from "./constants";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // You can add more headers if needed
  },
};
export const callApi = async (resource) => {
  const { data } = await axios.get(`${BASE_LINK}/${resource}`, config);
  return data;
};
