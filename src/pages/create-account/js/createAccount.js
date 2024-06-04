import { http } from "../../../js/services/http.js";

export async function createAccount(data) {
  try {
    const responseData = http.post("/register", data);
    return responseData;
  } catch (error) {
    console.log(error);
  }
}
