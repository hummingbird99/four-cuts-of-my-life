/* Import modal content */
import sendYou from "./info.js";

/* Declare HTML Tags */
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-x");
let btn = document.querySelector(".modal-btn");

const modalOn = () => {
  modal.style.display = "flex";
  sendYou();
};

const modalOff = () => {
  modal.style.display = "none";
  hoverOff();
};

function hoverOff() {
  btn.style.filter = "none";
}

btn.addEventListener("click", () => {
  modalOn();
  const animation = document.querySelectorAll("[data-animation]");
  animation.forEach((animation) => {
    animation.style.animationPlayState = "paused";
  });
});

closeBtn.addEventListener("click", () => {
  modalOff();
});

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modalOff();
  }
});

window.addEventListener("keyup", (e) => {
  if (modal.style.display === "flex" && e.key === "Escape") {
    modalOff();
  }
});
