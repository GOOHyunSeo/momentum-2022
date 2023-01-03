const today = document.querySelector("#today");

const day = new Date();

const todayYear = day.getFullYear();
const todayMonth = String(day.getMonth() + 1).padStart(2, "0");
const todayDate = String(day.getDate()).padStart(2, "0");

today.innerText = `${todayYear}/${todayMonth}/${todayDate}`;
