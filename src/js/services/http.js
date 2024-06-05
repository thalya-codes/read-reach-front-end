import { BASE_URL } from "../constants.js";

export const http = {
  post: async (
    endpoint,
    data,
    headers = { "Content-Type": "application/json" }
  ) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return responseData;
  },

  get: async (endpoint, options = {}) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const response_data = await response.json();

    return response_data;
  },

  delete: async (endpoint, headers) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  },
};
