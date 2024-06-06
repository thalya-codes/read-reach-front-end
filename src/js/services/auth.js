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

//TODO: Trocar URL
export function checkAuth() {
  const current_route = window.location.pathname;
  const private_route = "/Readings";
  const isPrivateRoute = current_route.includes(private_route);
  const isAuthenticated = localStorage.getItem(ACCESS_TOKEN_KEY) !== null;

  if (!isAuthenticated && isPrivateRoute) {
    window.location.replace(
      "http://localhost/read-reach-front-end/src/pages/login/index.php"
    );
    return;
  }

  if (isAuthenticated && current_route.includes("/login")) {
    window.location.replace(
      "http://localhost/read-reach-front-end/src/pages/ReadingsPage/index.php"
    );
  }
}
