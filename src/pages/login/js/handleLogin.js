import { authenticateUser } from "../../../js/services/auth.js";

const login_form = document.getElementById("login-form");

export async function handleLogin(event) {
  event.preventDefault();
  const [email, password] = event.target;

  await authenticateUser({
    email: email.value,
    password: password.value,
  });
}

login_form.addEventListener("submit", handleLogin);
