import { ACCESS_TOKEN_KEY } from "../../../../js/constants.js";
import { http } from "../../../../js/services/http.js";
import { createListItemStructure } from "../structures/listItem.js";
import { handleNoReadingsMessage } from "./handleNoReadingsMessage.js";

export const handleShowReadings = async (data) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const reading_list = document.getElementById("reading-list");

  if (!token) return;

  const response = await http.get("/readings", {
    headers: {
      Authorization: token,
    },
  });

  handleNoReadingsMessage(response.readings);

  if (response.readings.length > 0) {
    const readings = response.readings;
    reading_list.classList.remove("d-none");

    if (data?.status === 201) {
      return (reading_list.innerHTML += createListItemStructure(
        readings[readings.length - 1]
      ));
    }

    readings.forEach((reading) => {
      reading_list.innerHTML += createListItemStructure(reading);
    });
  }
};

window.addEventListener("load", handleShowReadings);
