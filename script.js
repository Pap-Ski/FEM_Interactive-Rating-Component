// console.log("Hello");
const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");
const selection = document.querySelector("span");
const rateSelectionContainer = document.querySelector(".rate-selection");
const rateRemarkContainer = document.querySelector(".rate-remark");

let selectedRate;
//   console.log("hello");

ratings.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    rate.classList.add("selected");
    selectedRate = e.currentTarget;
    ratings.forEach((rate) => {
      if (rate !== e.currentTarget) rate.classList.remove("selected");
    });
  });
});

submitBtn.addEventListener("click", () => {
  console.log(selectedRate);
  selection.textContent = selectedRate.textContent;
  rateSelectionContainer.setAttribute("data-hidden", true);
  rateRemarkContainer.setAttribute("data-hidden", false);
});
