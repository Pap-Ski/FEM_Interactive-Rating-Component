// console.log("Hello");
const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");
const selection = document.querySelector("span");
const rateSelectionContainer = document.querySelector(".rate-selection");
const rateRemarkContainer = document.querySelector(".rate-remark");

ratings.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    selection.textContent = e.currentTarget.innerText;
  });
});

submitBtn.addEventListener("click", () => {
  rateSelectionContainer.setAttribute("data-hidden", true);
  rateRemarkContainer.setAttribute("data-hidden", false);
});
