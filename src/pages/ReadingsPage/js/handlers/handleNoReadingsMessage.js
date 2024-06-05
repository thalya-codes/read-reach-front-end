export const handleNoReadingsMessage = (readings) => {
  const no_readings_title = document.getElementById("no-readings");

  if (readings.length === 0) {
    return no_readings_title.classList.remove("d-none");
  } else {
    no_readings_title.classList.add("d-none");
  }
};
