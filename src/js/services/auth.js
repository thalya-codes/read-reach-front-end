import { http } from "./http.js";

export async function authenticateUser(data) {
  try {
    const response_data = await http.post("/login", data);
    localStorage.setItem("access_token", response_data.token);
    return response_data;
  } catch (error) {
    console.log(error);
  }
}
