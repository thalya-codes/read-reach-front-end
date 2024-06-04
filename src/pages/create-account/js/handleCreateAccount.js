import { createAccount } from "./createAccount.js";

const create_account_form = document.getElementById("form-create-account");

export async function handleCreateAccount(event) {
  event.preventDefault();
  const [name, email, password] = event.target;

  await createAccount({
    name: name.value,
    email: email.value,
    password: password.value,
  });
}

create_account_form.addEventListener("submit", handleCreateAccount);
