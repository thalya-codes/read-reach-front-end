import { ACCESS_TOKEN_KEY } from "../../../../js/constants.js";
import { http } from "../../../../js/services/http.js";

export const createReading = async (data) => {
  try {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token) return;

    const response_data = await http.post("/create-reading", data, {
      Authorization: token,
    });

    return response_data;
  } catch (error) {
    console.log(error);
  }
};
