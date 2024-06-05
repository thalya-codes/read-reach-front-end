import { ACCESS_TOKEN_KEY } from "../../../../js/constants.js";
import { http } from "../../../../js/services/http.js";

export async function deleteReading(readingId) {
  try {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!token) return;

    const response = await http.delete(`/reading/${readingId}`, {
      Authorization: token,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
