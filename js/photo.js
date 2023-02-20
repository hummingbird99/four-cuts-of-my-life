/* Declare HTML Tags */
const desc1 = document.querySelector("#desc1");
const desc2 = document.querySelector("#desc2");
const desc3 = document.querySelector("#desc3");
const desc4 = document.querySelector("#desc4");

/* Show Description */
function showText(string) {
  if (string === "첫") {
    desc1.classList.remove("hideText");
    desc1.classList.add("showText");
  } else if (string === "두") {
    desc2.classList.remove("hideText");
    desc2.classList.add("showText");
  } else if (string === "세") {
    desc3.classList.remove("hideText");
    desc3.classList.add("showText");
  } else {
    desc4.classList.remove("hideText");
    desc4.classList.add("showText");
  }
}

/* Hide Description */
function hideText(string) {
  if (string === "첫") {
    desc1.classList.remove("showText");
    desc1.classList.add("hideText");
  } else if (string === "두") {
    desc2.classList.remove("showText");
    desc2.classList.add("hideText");
  } else if (string === "세") {
    desc3.classList.remove("showText");
    desc3.classList.add("hideText");
  } else {
    desc4.classList.remove("showText");
    desc4.classList.add("hideText");
  }
}
