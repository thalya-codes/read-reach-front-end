import { deleteReading } from "../services/deleteReadings.js";
import { handleNoReadingsMessage } from "./handleNoReadingsMessage.js";

export const handleDeleteReading = async (id) => {
  await deleteReading(id);

  const list = document.querySelector("ul");
  const deleted_item = list.querySelector(`[data-id="${id}"]`);
  list.removeChild(deleted_item);

  handleNoReadingsMessage(list.children);
};
