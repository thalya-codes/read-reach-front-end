import { createReading } from "../services/createReading.js";
import { handleShowReadings } from "../handlers/handleShowReadings.js";

const register_new_reading_form = document.getElementById(
  "register-reading-form"
);

export const handleCreateReading = async (event) => {
  event.preventDefault();

  const [title, author, start_date, end_date, rating] = event.target;
  const new_reading = {
    title: title.value,
    author: author.value,
    start_date: start_date.value,
    end_date: end_date.value,
    rating: rating.value,
  };

  const data = await createReading(new_reading);
  await handleShowReadings(data);
};

register_new_reading_form.addEventListener("submit", handleCreateReading);
