const homeBTN = document.querySelector("#homeBTN");
const aboutBTN = document.querySelector("#aboutBTN");
const contactBTN = document.querySelector("#contactBTN");
const homeMain = document.querySelector("#homeM");
const aboutMain = document.querySelector("#aboutM");
const contactMain = document.querySelector("#contactM");

homeBTN.addEventListener("click", function () {
  if (!homeBTN.classList.contains("active")) {
    homeBTN.classList.toggle("active");
    homeMain.classList.remove("hidden");
    aboutBTN.classList.remove("active");
    aboutMain.classList.add("hidden");
    contactBTN.classList.remove("active");
    contactMain.classList.add("hidden");
  }
});
aboutBTN.addEventListener("click", function () {
  if (!aboutBTN.classList.contains("active")) {
    aboutBTN.classList.toggle("active");
    aboutMain.classList.remove("hidden");
    homeBTN.classList.remove("active");
    homeMain.classList.add("hidden");
    contactBTN.classList.remove("active");
    contactMain.classList.add("hidden");
  }
});
contactBTN.addEventListener("click", function () {
  if (!contactBTN.classList.contains("active")) {
    contactBTN.classList.toggle("active");
    contactMain.classList.remove("hidden");
    aboutBTN.classList.remove("active");
    aboutMain.classList.add("hidden");
    homeBTN.classList.remove("active");
    homeMain.classList.add("hidden");
  }
});
