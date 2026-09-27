const hamburgerBtn = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".main-nav ul");

hamburgerBtn.addEventListener("click", function () {
  navList.classList.toggle("open");
});
