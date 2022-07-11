const numbersBtn = document.querySelectorAll(".rating-btn");
const submit = document.querySelector(".submit");
const ratingContent = document.querySelector(".rating-content");
const thankYouState = document.querySelector(".thank-you-state");
const ratingResult = document.querySelector(".rating-result");

let ratingSelected;

numbersBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    numbersBtn.forEach((btn) => btn.classList.remove("selected"));
    btn.classList.add("selected");
    ratingSelected = btn.innerText;
  });
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (ratingSelected) {
    console.log(ratingSelected, numbersBtn.length);
    ratingContent.classList.add("hidden");
    thankYouState.classList.remove("hidden");
    ratingResult.innerText = `You selected ${ratingSelected} out of ${numbersBtn.length}`;
  }
});
