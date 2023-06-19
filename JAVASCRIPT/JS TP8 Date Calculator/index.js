// Convert today date to input format

// const today = new Date().toLocaleDateString().split("/").join("-");
const today = new Date().toISOString().split("T")[0];
const startDate = document.getElementById("start_date");
startDate.value = today;
startDate.min = today;

//tomorrow date calc

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//convert to input format

let tomorrowFormat = tomorrow.toISOString().split("T")[0];
const endDate = document.getElementById("end_date");
endDate.value = tomorrowFormat;
endDate.min = tomorrowFormat;

startDate.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (endDate.value <= startDate.value) {
    day.setDate(day.getDate() + 1);
    endDate.value = day.toISOString().split("T")[0];
    endDate.min = day.toISOString().split("T")[0];
  } else {
    endDate.min = day.toISOString().split("T")[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(new Date(endDate.value) - new Date(startDate.value));
  let diffDay = Math.ceil(diffTime / 60 / 60 / 24 / 1000);

  totalPerNight.textContent = diffDay * nightPrice.textContent;
};

startDate.addEventListener("change", bookingCalc);
endDate.addEventListener("change", bookingCalc);

bookingCalc();
