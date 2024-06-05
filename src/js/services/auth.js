import { ACCESS_TOKEN_KEY } from "../constants.js";
import { http } from "./http.js";

export async function authenticateUser(data) {
  try {
    const response_data = await http.post("/login", data);
    localStorage.setItem(ACCESS_TOKEN_KEY, response_data.token);
    return response_data;
  } catch (error) {
    console.log(error);
  }
}
