import { authenticateUser, checkAuth } from "../../../js/services/auth.js";

const login_form = document.getElementById("login-form");

export async function handleLogin(event) {
  event.preventDefault();
  const [email, password] = event.target;

  const response = await authenticateUser({
    email: email.value,
    password: password.value,
  });

  if (response.token) {
    //TODO: Trocar URL
    window.location.replace(
      "http://localhost/read-reach-front-end/src/pages/ReadingsPage/index.php"
    );
  }
}

login_form.addEventListener("submit", handleLogin);

document.addEventListener("DOMContentLoaded", checkAuth);
